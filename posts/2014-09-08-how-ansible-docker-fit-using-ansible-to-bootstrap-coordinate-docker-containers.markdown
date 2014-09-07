---
title: How Ansible &amp; Docker fit: Using Ansible to bootstrap &amp; coordinate Docker containers
tags: docker, ansible, infrastructure, automation
description: A brief exploration of how Ansible and Docker could potentially fit together
---
There are a lot of exciting tools in the infrastructure &amp; virtualisation space that have emerged in the last couple of years. [Ansible](http://www.ansible.com/home) &amp; [Docker](https://www.docker.com/) are probably two of the most exciting ones in my opinion. While I've already used Ansible extensively, I've only started to use Docker, so that's the big caveat emptor with regards to the contents of this post.

### What's Docker &amp; why should I care?
Docker describes itself as a _"container platform"_, which at a first glance can be easily confused with a VM. [Wikipedia](http://en.wikipedia.org/wiki/Docker_%28software%29) describes Docker containers in the following way:

    Docker uses resource isolation features of the Linux kernel such as cgroups and kernel namespaces to allow independent "containers" to run within a single Linux instance, avoiding the overhead of starting virtual machines.

My take on where Docker is useful and not useful:

#### 1. As a "process"/application container
Docker is useful as a container for distinct processes or groups of processes that make up an application. A typical example of this would be using a container that runs an nginx server that has https configured, serves up static content and javascript, as well as running a webapp behind the nginx server that serves up dynamic pages or RESTful services.\
This may be especially useful where you are running applications or processes that should be isolated for security purposes, but can share powerful hardware without the overhead of a full VM and where the potential CPU or memory contention of a container is not an issue (on underutilised hardware, this is potentially even desirable to not have a bunch of tin standing around mostly idling).

Though the real power in Dockers "container" and "image" concept is that it makes it trivial to share an application container with all its moving parts pre-configured easily as code (see _[Dockerfiles](https://docs.docker.com/reference/builder/)_. Dealing with infrastructure as code and sharing it effectively between teams could be really disruptive when it comes to breaking down barriers to cross-team collaboration in larger organisations.

![Docker as an app container](/img/blog/docker-process.png)

#### 2. As a disposable sandboxed environment to run user inititiated, potentially dangerous processes or data
This is actually where Docker comes in for my day-to-day use on our [Code Qualified](https://codequalified.com) service for automated programmer testing, which we can use as an example - when users submit their solutions to programming problems, the code has to be run, analysed and checked for correctness. However, a malicious user could potentially submit malicious code to _Code Qualifieds_ servers to try to execute just about any nasty, destructive operation. This is where _Docker_ comes in: we run submitted code on temporary Docker containers, which means at worst they will destroy a temporary container that is only intended to live for a few minutes and score a big zero on the test they have "solved". 

#### 3. Do NOT try to use Docker as a VM replacement or to run a "entire systems"
Finally, we get to what not to do with Docker: don't try to run it as a full OS/system of sorts. It is not what it is meant for. As [Phusion](http://phusion.github.io/baseimage-docker/) have pointed out, the base Docker images available lack a number of important system settings &amp; services, so trying to run Docker containers as a substitute for a "real" system/VM can be fraught with potential issues.

### I can run commands in my Dockerfile, why use Ansible?
You can run arbitrary commands in a _Dockerfile_ that builds a Docker image, among them _apt-get_ if you are building an image based on Ubuntu. So why is Ansible relevant?

#### 1. Bootstraping Docker containers
I knocked together a very simple example [on GitHub](https://github.com/wfaler/vagrant-ansible-docker) that uses Ansible to set up a Vagrant VM that then runs Docker containers where the images are build in part by.. Ansible (the Vagrant part isn't relevant if you're on Linux. I used it to set up a VM to run Docker on as OS X doesn't support Docker natively).\
While it's entirely possible to script everything in the _Dockerfile_ with the _RUN_ directive, I find Ansible scripts useful for a couple of reasons:

* Ansible scripts are portable. I can test them on a Vagrant VM, on an _AWS EC2_ instance, on a "real" Linux machine or on Docker.
* Ansible scripts are idempotent: if you run them again later against a container/VM/machine, they can act as a test that the box is in fact properly set up (and fix anything that isn't).
* Ansible scripts can provision multiple hosts concurrently: this is what your Ansible [inventory-file](http://docs.ansible.com/intro_inventory.html) is for.

To run Ansible while building a Docker image, you can create the following stub inventory file:

    [local]
    localhost

Then make your Dockerfile look something like this (where you have an Ansible script called _"provision.yml"_ in the same directory, in this case likely installing nginx and setting it up correctly):

    FROM ubuntu:14.04.1
    MAINTAINER Wille Faler "wfaler@recursivity.com"
    RUN apt-get update
    RUN apt-get install -y software-properties-common
    RUN apt-add-repository ppa:ansible/ansible
    RUN apt-get update
    RUN apt-get install -y ansible
    ADD inventory-file /etc/ansible/hosts
    ADD provision.yml provision.yml
    RUN ansible-playbook provision.yml -c local
    RUN echo "daemon off;" >> /etc/nginx/nginx.conf
    EXPOSE 80
    CMD ["nginx"]

#### 2. Setting up and coordinating Docker hosts
Ansible has a [Docker module](http://docs.ansible.com/docker_module.html), which you can use to build, run, start, stop, link and coordinate your Docker containers &amp; images with in various ways. This is where Ansible really shines, and it will almost always be preferable to handcrafted, fragile shell-scripts.

In fairness, I haven't really used the Docker module that much in anger yet, though I suspect I will use it extensively eventually. These are the sort of tasks where Ansible is really brilliant even without Docker in the picture, so I wouldn't expect that to change one bit with Docker. In fact I suspect Ansible will become even more integral to running infrastructure when you have multiple hosts running multiple Docker containers.

### What else is there?
I have only really scratched the surface here, but it is a brief summary of my understanding so far of how tools like Ansible and Docker fit into the infrastructure eco-system - I expect my understanding and views to evolve over time as I get deeper into it.

I haven't even started looking at things like [Core OS](https://coreos.com/), that together with etcd &amp; fleet could prove to be interesting and potentially valuable building blocks, but I'll leave that for another day, when I have had the time to explore it more deeply.

---
title: We need Functional Programming BECAUSE a large subset of us are average or below
tags: fp
---
There has been a meme going around for several years in the programming community that "average programmers" don't get functional programming (often from functional programmers) or that _"functional programming is too complex for the average programmer"_ (often from those unwilling to learn functional programming).

I would contend that functional programming is an absolutely crucial evolution **precisely because a large subset of us are average or below average**. If you understand the definition of _"average"_ you shouldn't be offended by me calling a large number of programmers average or below.

#### The breakdown of imperative programming under growing complexity
Jessitron has written [a great post on two models of computation](http://blog.jessitron.com/2013/05/two-models-of-computation-or-why-im.html) which largely dovetails with my argument, which I will elaborate below. \
Imperative programming breaks down under increasing complexity and richness, consider the following imperative example in Java:

````java
public void addBar(Foo foo){
    Bar bar = new Bar("baz");
    foo.setBar(bar);
    dao.update(foo);
    dao.save(bar);
}
````
* Will this code work?
* Does foo need to be updated before bar is saved, or the other way around?
* Can we trust that _any_ of the methods called only do what the names imply?

The answer to all three questions is: you couldn't possibly know without holding a complete model of the entire application in your head together with knowledge of the libraries it uses! \
Can you imagine the cognitive load this puts on your brain when you have to create a mental model of a piece of codes entire universe to be able to reason about it in a meaningful way?

Some would argue that you should _"just know"_ how your libraries work, what _dao_ does etc. But this is precisely my point: this is unecessary cognitive strain on your brain, brain cycles going into trying to remember intricacies of other code, brain cycles that could more productively put to use to reason about the problem at hand.

Some would argue that you should _"be disciplined"_ and follow a precise set of codified practices to ease the strain. Fair enough, assuming you follow these rules, and _everyone else_ does so as well (which is quite a bold assumption in my experience), you now only have to keep **X** hundred rules in your head to reason about the code. Still: a very high cognitive load to put on your brain when good tools and languages could offload this.

#### Functional programming to the rescue!
I am not going to define functional programming in its entirety here (others have done it better), but if we assume the following properties hold true for FP:

* _Immutable data_: an assigned value or the values of which it is composed do not change over its lifetime.
* _Referential transparency_: The same inputs to a function always return the same result and do nothing else.
* _Higher-order functions_: Functions can take functions as arguments, and return functions. Functions are first class values.

Now lets look at the simplest possible piece of code, calculating _y_ by applying the function _f_ to _x_:

````haskell
let y = f x
````
If the 3 properties hold true, we know that for _f(x)_, we will always get the same _y_ and the computation of _y_ is the only thing that occurs - [no nuclear missiles are launched](https://speakerdeck.com/missingfaktor/tdd-is-dead-long-live-tydd?slide=30). \
We also know that we couldn't say _x = f x_, because this simply wouldn't make any sense - x already exists and can't be re-assigned.

Ok, that's all pretty obvious, but what's the point? Well, all of a sudden you achieve the following:

* You do not have to build a mental model of the whole system and its libraries to reason about it.
* Corollary, you can reason about any subset of the system, however small, without having to even understand what the whole system does.

The benefits of this hardly have to be enumerated, but I'm going to enumerate a few practical ones anyway:

* You don't have to rely on your memory of something you did possibly years ago to deal with new requirements, changes or to track down bugs.
* For the managers out there: key-person dependencies (_"the guy who knows everything about the system"_) become less of an issue.
* New people can become productive much faster, no longer having to spend the time building a mental model of everything.

Dare I say it? For the bean-counters and risk-managers out there, functional programming makes people working on a system more interchangeable as long as they have the requisite knowledge to understand and reason with the general concepts used in a system.

#### Towards Functional Programming: mostly a question of humility, education &amp; self-education
After slowly immersing myself in functional programming over the last 6-7 years or so, coming across various organisations and a multitude of people in many stages of FP adoption or resistance, I've learned that sometimes slow up-take and resistance to functional programming has nothing to do with the usual arguments bandied about. They broadly fall into two categories:

**Pride &amp; prestige**: people who may have spent decades in their field becoming recognised as _"experts"_ may be reluctant to let go of their expert label, or admit to themselves or others that they may yet again be beginners and have plenty to learn. Vested interest in the status quo is always strong in any field, and the humility it takes to say _"I'm a beginner again in this subset of my chosen field"_ is especially hard to find for those who have put in the greatest investment in the way things are.

**Conflating unfamiliarity with complexity**: Another common mental trap is to think that which is unfamiliar is not actually unfamiliar at all, but complex or complicated. I think this one is closely related to pride - unwillingness to learn something new and admit to even yourself that you may not be an expert in everything programming related makes it far easier to just declare something unfamiliar as _"complex"_.

Functional programming is in fact not any harder than imperative programming. As I have explained in this post, functional programming in fact makes things far easier, far less complex, and gives us the tools to better deal with complexity in the large. \
In 2014, there is absolutely no reason for you to put the strain on your brain to have to build a mental model of an entire system in your head to do your job as a programmer productively. This is a loosing cause, as eventually the size of human working memory will simply make it impossible for anyone to deal with it all. \
Nor is there any reason for us to persist in using an inappropriate level of abstraction loosely based on the physical workings of manipulating silicon memory. Let us move into the 21st century once and for all.


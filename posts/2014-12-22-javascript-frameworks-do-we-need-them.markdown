---
title: Random thoughts: Javascript frameworks, do we need them?
tags: javascript, web
---
Javascript frameworks have been all the rage over the last few years if you have the misfortune of developing for web browsers (I say misfortune because Javascript is an awful language). \
As far as I can tell, it started with [Backbone](http://backbonejs.org/), moved onto things like [Knockout](http://knockoutjs.com/),[Ember](http://emberjs.com/) and of course, [Angular](https://angularjs.org/).

I can understand the original reasons for the emergence of Javascript frameworks: only a few years ago Javascript support across browsers was fragmented, lots of hacks had to be applied to do simple things in a cross-browser compatible way. Javascript was in addition to being an awful language, also fairly low-level in that native APIs made simple things difficult and laborious.

These days though? I'm not so sure. \
Over the last year, I've built a couple of _one page_ applications that made fairly extensive use of _Angular.js_, and after a steep learning curve, I'm now fairly comfortable with all of its ins and outs. With the benefit of hindsight I wonder what benefits it actually brought to the table beyond library lock-in. \
Off the top of my head, I could argue that Angular provides:

* Routing
* Templating
* Two-way data-binding

However, I can think of smaller, simpler libraries that do much the same without imposing the same level of ceremony or library dependence: [Sammy.js](http://sammyjs.org/) for routing, [JQuery](http://jquery.com/) and [Handlebars](http://handlebarsjs.com/) for templating and general functionality. Hardly fashionable, not at all flavours of the day. Probably outright boring choices in the minds of most people having to deal with Javascript. Nonetheless, using these smaller, more focused libraries, I'm not exactly missing anything fundamental from Angular other than possibly data-binding, but this is a gap easily filled with a small amount of code.

I can full well see why the heavier Javascript libraries have served a purpose in furthering browser-based development: they used to paper over fragmented, inconsistent browser behaviour. They've one their bit to establish/thrash out good and bad patterns of browser-based development and hide some of the horrors of Javascript and browsers. \
But, my gut feeling is that **we are reaching peak Javascript-frameworks** - the need for them is quickly diminishing, and smaller more focused libraries can do the same thing just as well if not better, even if those smaller libraries are sometimes older and less fashionable.

#### JVM and Javascript eco-systems, parallel stories
In a way, the Javascript eco-systems development and maturing over the last 5 years or so has to some degree mirrored the development of the JVM eco-system: we've gone through the peaks and troughs of heavy-weight frameworks to start moving back to simpler ways with smaller, focused libraries.

The evolution that followed on the JVM was that Java the language became less important with the emergence of Scala and Clojure. The most exciting development in browser-based development for a very long time mirrors that exactly: no longer being dependent on writing Javascript, but having the option of compiling to Javascript from more sane languages that are popping up all over the place. \
The most exciting and sane of these languages that I am aware of is no doubt [Purescript](http://www.purescript.org/), a Haskell inspired type-safe language with very easy to use Foreign Function Interface to Javascript.

What's my point? Well, as a blog post goes, this is more of a brain-dump of random thoughts that I've had over the last few months around the eco-system rather than a logically stringent argument. But the conclusion that is starting to form in my head is that the big all-singing, all-dancing frameworks will give way for smaller, more focused libraries, in some cases the same old libraries we used before the big frameworks came round. Just like for so many other languages and eco-systems, it is slowly dawning that small is beautiful and big monolithic frameworks are more pain than they are worth - be clear about your requirements and pick small libraries that fit them.

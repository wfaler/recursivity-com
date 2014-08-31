---
title: Relaunch of the Recursivity website
tags: haskell, hakyll
description: Foo bar
---

This site & blog hasn't received a lot of love recently. As a consequence, I'm rebooting it altogether. The design is the change (though might change over time), but how it is made has changed entirely.
Previously, I had my own hand-crafted site-generator based on Scala generating the pages. It did its job well enough, but it was pretty limited and not something I felt like maintaining over time when better alternatives exist out there. So few weeks ago, I started playing around with [Hakyll](http://jaspervdj.be/hakyll/), and I found myself able to replicate most of what my own site-generator did in a manner of hours, so now, the entire site is generated with Hakyll.

I've put the entire site, including the Haskell code associated on a [GitHub repo](https://github.com/wfaler/recursivity-com). The content itself will obviously be copyrighted, but feel free to take the code and do with it as you please!

Also, a big thanks to [Abizern](http://abizern.org/), whose Hakyll code I followed and partially ripped off.

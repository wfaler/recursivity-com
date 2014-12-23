---
title: Technical debt as "venture investment" - software should be disposable
tags: agile, lean, delivery
---
I have already written at length about [the great uncertainty in knowing whether writing software is worthwhile in the first place](http://recursivity.com/blog/2014/09/16/why-incremental-delivery-is-a-business-concern-first-technical-distant-second/).  \
To re-cap my previous point, I claim that it is impossible to know, even with relatively rich information, whether software is solving a worthwhile problem in the first place, and whether that problem has enough demand for a solution until that software is being widely adopted and used (or as the case often is: not used at all). Software is effectively _new product development_, every time, unless it is merely replacing existing software.

In effect, for every new piece of software, _market risk_ is the main risk, not delivery risk, and we should address this risk in similar ways to how successful new businesses address this: by validating on the market.

#### There is good technical debt &amp; bad technical debt
Technical debt in our industry has a bad reputation, most people are aggressively against it, yet technical debt is as pervasive as anything, almost all code has it. But I would claim that just like there is good debt (useful capital investments) and bad debt in the economy (loans for private luxury consumption), the same types exist for technical debt.  \
Furthermore, I would challenge anyone to solve a problem they are entirely unfamiliar with without producing any technical debt whatsoever at any point. Technical debt is a natural thing in product development - you just have to make sure you pay it down before it becomes a real burden.

What are some examples of good technical debt?

* Debt that helps you acquire knowledge about the market/problem you are addressing.
* Debt that helps you better understand how to solve the underlying problem.
* Debt that helps you get to market faster to get feedback.

Examples of bad debt that need to be repaid immediately:

* Debt that slows your progress down.
* Debt that jeopardises the reliability of the software.
* Debt that is taken on for political reasons to satisfy non-customer/user stakeholders.

My point is, that just like with navigating scope, if there is a choice between getting _working software_ into the hands of users sooner, or taking significantly longer "perfecting" something, getting a working product into the hands of customers is almost always preferable. I am not suggesting to take technical debt lightly, simply that a more nuanced view on it is preferable.

#### Code has little value, knowledge on how to solve the problem is priceless
Corollary to the points made above and [in my previous post](http://recursivity.com/blog/2014/09/16/why-incremental-delivery-is-a-business-concern-first-technical-distant-second/) is my very firm belief that most software should be written to eventually be disposed of. The easier it is to dispose of a piece of software, the better.

Your version 1.0 of an attempt at a solution to a problem will almost always be largely wrong, littered with technical debt, usability problems and other misalignments. So better plan for being partly wrong and eventually having to replace large parts of it. \
The value of _version 1.0_ is rarely in the code produced, but in the shared knowledge acquired through the process among those involved in producing it (including business stakeholders and users).

_"Let's rewrite it!"_ is thrown around far too often in software, yet sometimes appropriate, but actually rarely done under _the right circumstances, in the right way_.   \ Firstly, rewrites, when they occur are mostly done wrong, in a "big bang"-manner, rather than carefully and incrementally. There are many, perfectly [good ways of replacing a system](http://usersource.net/facade-and-fade/) where you can have a full and complete system in place from day 1 which is carefully migrated feature-by-feature. Incidentally, a careful and incremental migration is often indistinguishable from a careful "system level refactoring" - where does replacement/rewrite begin and refactoring end? You tell me.  \
Secondly, when rewrites are suggested by people who are new to a problem, who where not involved in the creation of the initial solution, beware! If you are intending to replace something without making use of the knowledge acquired during the process of creating the initial solution, what are you hoping to achieve?

So in summary: market risk (whether software has value in the hands of users) is the primary risk of software delivery. To address this, technical debt is often unavoidable, and in some cases even desirable. To address the risk of technical debt, write software so that it is easy to dispose of instead of being too hung up on the [sunk cost](http://en.wikipedia.org/wiki/Sunk_costs). In terms of organisational value on the capital investment of product development, the value often lies in the knowledge acquired by those involved rather than in the code itself. \
To make a (possibly bad &amp; inappropriate) analogy to manufacturing: the plants and factories of digital products is not the pre-existing code, but the brains of those who truly understand how the problem and the market fit together and how the problem is solved. The price/investment required to get to that point is the uncertain process of creating a product and getting it into the hands of customers and users &amp; repeating until they start realising the value of your efforts.

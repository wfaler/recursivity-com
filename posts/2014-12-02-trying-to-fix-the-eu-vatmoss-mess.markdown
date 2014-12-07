---
title: Trying to fix the EU VAT MOSS mess
tags: business, tax, vat, vatmoss
---

If you run a business that sells digital products or services, you are probably aware that the EU is instituting some rather radical changes to how Value Added Tax works for products and services wholly delivered online. To sum it up: previously, VAT was to be paid in the country where a business was located. If you where a UK business selling to consumers, you would charge UK VAT to consumers in the EU regardless of where in the EU they where located.

This is all about to change. \
From January 1st 2015, if your product is an _"e-service"_, in other words sold and delivered online in an automated way, you need to start charging VAT at the prevailing rate in the country you are delivering to. You also need to store two, preferably three pieces of non-contradictory evidence proving that the service was indeed delivered to the country you claim. If that isn't enough, your VAT report now has to reflect how much VAT chargeable sales you have delivered to each and every EU country. A final kicker is that businesses that previously had a low turnover below a certain threshold didn't have to charge or report VAT, now have to do so, from the first pound or Euro of digital sales.

I probably don't even have to begin explaining just how business/entrepreneur unfriendly these new rules are. Others have [written at length about this aspect of the new legislation](http://www.clarejosa.com/articles/from-passion-to-purpose/what-you-need-to-know-if-youre-relying-on-your-payment-processor-to-dig-you-out-of-the-vat-moss-mess/).

#### Ibuprofen for your VAT headache
_Recursivity_ is a small software company, we have software products of our own for which this becomes a headache. Luckily we knew about this, understand how tax works and have been somewhat prepared. We wrote a solution for this problem for internal use sometime ago, and as the noise around [VAT MOSS](https://www.gov.uk/register-and-use-the-vat-mini-one-stop-shop) (as this initiative is called) became louder, we realised that there might be some mileage to sharing what we've built internally to help others.

So that's exactly what we've done, by launching [VAT Boss](http://vatboss.com) (see the pun in there?) - a platform where you'll be able to:

* Calculate the correct VAT rate to apply given location evidence.
* Validate location evidence, such as ensuring VAT numbers are legitimate when supplying businesses, geo-locating IP addresses, validating phone number locations.
* Store VAT evidence for reporting.
* Generate VAT reports for regulatory compliance.

If you want to have access to this, [Sign up now](http://vatboss.com), we'll be opening the doors over the next week or two.

This of course is no panacea, especially not if your company lacks tech savvy people - while we're looking to make this as easy as possible to integrate into your existing online sales, it will inevitably require exactly that: some integration. Our initial efforts are aimed at having a simple API and simple reporting, which should be available very soon.

#### Laughing at the EU? Not so fast
If you are outside the EU, you might find this all amusing that the EU does this to its businesses. Not so fast: if you are a business outside the EU (say the US or anywhere else), but you sell to EU consumers, the rules apply to your business too. It might be rational to think _"If I don't comply, what are they going to do about it?"_, but at the same time, it might not be a line worth taking if you end up in their crosshairs.

We have no great love of the new VAT MOSS rules. But we'd rather come up with solutions than just complain or ignore the impending problem. _VAT Boss_ is not a solution we expect to make a lot of money off, especially if the EU eventually regains its sanity, but at the same time it is a solution we will use internally, and that we might as well share with the outside world for a fee.

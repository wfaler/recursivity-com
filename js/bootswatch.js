var menu = '<ul class="nav"> \
			  <li><a href="/blog/">Blog</a></li> \
              <li><a href="/about/">About</a></li> \
              <li><a href="/contact/">Contact</a></li> \
			  ';



menu = menu + '			</ul>';

			$('.navbar .nav-collapse').first().append(menu);

			$('a[rel=tooltip]').tooltip({
				'placement': 'bottom'
			});

var taglines = [];
//taglines.push('Free themes for <a target="_blank" href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>');
//taglines.push('Add color to your <a target="_blank" href="http://twitter.github.com/bootstrap/">Bootstrap</a> site without touching a color picker');
//taglines.push('Saving the web from default <a target="_blank" href="http://twitter.github.com/bootstrap/">Bootstrap</a>');

var line = Math.floor((taglines.length) * Math.random());
$('#tagline').html(taglines[line]);


/*
<li class="dropdown"> \
 <a class="dropdown-toggle" data-toggle="dropdown" href="#">Products & Services<b class="caret"></b></a> \
 <ul class="dropdown-menu"> \
   <li><a href="/consultancy">Consultancy</a></li> \
   <li class="divider"></li> \
   <li><a href="/bigdata">Big Data Analytics &amp; Decision Support</a></li> \
 </ul> \
</li> \
<li class="divider-vertical"></li>  \


*/

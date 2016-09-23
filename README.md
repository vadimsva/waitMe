waitMe
======

jquery plugin for easy creating loading css3 animations<br>
Simple to use. Contains 14 animation effects and can use images.

<i>For work required only jQuery, other libraries are not required.</i>
<i>Plugin works on all browsers and IE10+ (for css3 animation effects).</i>
<br>

<a href="http://vadimsva.github.io/waitMe/" target="_blank"><b>DEMO</b></a>


<h4>Direct links to libs</h4>
<a href="http://vadimsva.github.io/waitMe/waitMe.js" target="_blank"><b>waitMe.js</b></a> [8.5Kb]<br>
<a href="http://vadimsva.github.io/waitMe/waitMe.min.js" target="_blank"><b>waitMe.min.js</b></a> [3.6Kb]<br>
<a href="http://vadimsva.github.io/waitMe/waitMe.css" target="_blank"><b>waitMe.css</b></a> [15.3Kb]<br>
<a href="http://vadimsva.github.io/waitMe/waitMe.min.css" target="_blank"><b>waitMe.min.css</b></a> [14Kb]

<br><br>

<p><i>$(container).waitMe({param1 : value1, param2 : value2, ...});</i></p>

<h5>Parameters</h5>
<code>effect</code> - animation effect (string).<br>
Use: <code>'bounce'</code> - default, <code>none</code>, <code>rotateplane</code>, <code>stretch</code>, <code>orbit</code>, <code>roundBounce</code>, <code>win8</code>, <code>win8_linear</code>, <code>ios</code>, <code>facebook</code>, <code>rotation</code>, <code>timer</code>, <code>pulse</code>, <code>progressBar</code>, <code>bouncePulse</code>, <code>img</code>.<br>
<br>
<code>text</code> - place text under the effect (string).<br>
Use: <code>'text'</code>.<br>
<br>
<code>bg</code> - background for container (string).<br>
Use: <code>'rgba(255,255,255,0.7)'</code>. You can use color and image.<br>
<br>
<code>color</code> - color for background animation and text (string, array).<br>
Use: <code>'#000'</code>, <code>['','',...]</code> - you can use multicolor for effect<br>
<br>
<code>maxSize</code> - set max size for elem animation (string).<br>
Use: <code>40</code>. By default, use empty string.<br>
<br>
<code>textPos</code> - change text position (string).<br>
Use: <code>'vertical'</code> - default, <code>'horizontal'</code>.<br>
<br>
<code>fontSize</code> - change font size (string).<br>
Use: <code>'18px'</code>. By default, use empty string.<br>
<br>
<code>source</code> - url to image (string).<br>
Use: <code>'url'</code>. By default, use empty string. Use with <code>effect: 'img'</code>.<br>
<br>
<code>onClose</code> - code execution after popup closed (function).<br>
Use: <code>function(){}</code><br>
<br>

<h5>Methods</h5>
<code>hide</code> - for close waitMe.<br>
Use: <code>$(container).waitMe("hide");</code><br>
<br>


<b>Don't use as element container non block elements such as table, input, textarea and etc. Use div, span or body (you may use html and it would be work as body).</b><br>

<br><br>

<h5>Animation during the initial page load</h5>
<pre>
&lt;body class="waitMe_body"&gt;
  &lt;div class="waitMe_container progress" style="background:#fff"&gt;
    &lt;div style="background:#000"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
</pre>

<pre>
&lt;body class="waitMe_body"&gt;
  &lt;div class="waitMe_container working" style="background:#fff"&gt;
    &lt;div style="background:#000"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
</pre>

<pre>
&lt;body class="waitMe_body"&gt;
  &lt;div class="waitMe_container img" style="background:#fff"&gt;
    &lt;div style="background:url('img.png')"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
</pre>

<pre>
&lt;body class="waitMe_body"&gt;
  &lt;div class="waitMe_container text" style="background:#fff"&gt;
    &lt;div style="color:#000"&gt;Loading&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
</pre>

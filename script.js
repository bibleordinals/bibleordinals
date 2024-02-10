<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// script.js</p>
<p class="p1">document.addEventListener('DOMContentLoaded', function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const inscriptions = [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Matthew 1", id: "123456", link: "https://example.com/inscription/123456" },</p>
<p class="p1"><span class="Apple-converted-space">        </span>// Add more inscriptions here</p>
<p class="p1"><span class="Apple-converted-space">    </span>];</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const inscriptionsList = document.getElementById('inscriptions-list');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>inscriptions.forEach(inscription =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const div = document.createElement('div');</p>
<p class="p1"><span class="Apple-converted-space">        </span>div.innerHTML = `&lt;h3&gt;${inscription.title}&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">                         </span>&lt;p&gt;ID: ${inscription.id}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                         </span>&lt;a href="${inscription.link}" target="_blank"&gt;View Inscription&lt;/a&gt;`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>inscriptionsList.appendChild(div);</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
</body>
</html>

mintabs
=======

A lightweight jQuery plugin to create simple tabs with minimal markup.


Directions
=======

Include jQuery, and the plugin:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.js"></script>
<script src="jquery.mintabs.js"></script>
```

HTML format:

```html
<div id="tabs">

  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
    <li>Link 3</li>
  </ul>
  
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>

</div>
```

Call the plugin:
```html
<script> $('#tabs').mintabs(); </script>
```

Options
=======

hide: true/false

example: $('#tabs').mintabs({hide: false});

If set to false, it won't hide the content with javascript, allowing you to hide this using CSS instead.

Have fun!

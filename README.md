# ailoslider

Here's a tiny library for JS slideshows I made, just because I was tired of all those huge libraries...
Yet very light (1,5 kB minified), it totally runs standalone (with the CSS) and has legends and page annotations. Swipe gestures are also supported if you include HammerJS.

Feel free to use that in your projects!

## How to use

Somewhere in your HTML code:

```html
<div class="ailoslider" id="sl1"></div>
```

and then:

```html
<script src="./hammer.min.js"></script> <!-- only if you want swipe -->
<script src="./ailoslider.js"></script>
<script>
var sl1 = ailoslider_create('sl1', [
{img:'1.jpg', title:'first legend'},
{img:'2.jpg', title:'second legend'},
{img:'3.jpg', title:'third legend'},
], true);
</script>
```
The "true" parameter is the enabling of swipe gesture, you may enable it if you included HammerJS.

By default, the slider takes up all the space it can, and has a 16/9 aspect ratio (this can be toggled in the CSS)

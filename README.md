# Livestamp.js for Meteor

Forked from [copleykj](https://github.com/copleykj/meteor-livestamp/) to add additional functionality

[Livestamp.js](http://mattbradley.github.io/livestampjs/), a simple, unobtrusive
jQuery plugin that provides auto-updating timeago text to your timestamped HTML
elements using [Moment.js](http://momentjs.com/), packaged for Meteor.

Installation
-------------

`meteor add jercle:livestamp`


Usage
-------------
A template helper is included to compensate for the initial delay when using livestamp alone.

```html
<p>{{livestamp date}}</p>
```

You can also use plain HTML with the `data-livestamp` attribute as per the livestamp documentation.

```html
<span data-livestamp="2013-12-24T08:14:42.345Z"></span>
```

It's a good idea to have the exact time in a tooltip:

```html
<span data-livestamp="{{yourDate}}" title="{{yourDate}}"></span>
```

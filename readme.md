# Rating.js
With this package, you will be able to add a star-based (or anything icon you wish) rating system to your site. It's easy to understand, and fully customizable.

## Examples
To see some examples, head over to [the Rating.js github pages](https://timyboy12345.github.io/Rating.js/)

## Using this package
The rating.js file is very easy to use, and can run with just a few lines of code. For examples, you can look in the `examples`  folder.

To add star reviews to any element, just use the following code:
```
<!-- The element to add the review to -->
<div id="review"></div>

<!-- The script to add reviewing to the div, with a click event handler -->
$("#review").rating({
    "click": function(e) {
        console.log(e);
        $("#starsInput").val(e.stars);
    }
})
```

You can add stars to any element with the following JQuery extension: `$('#div').rating({})` 

## Options
To customize the package, you can add options to your `.rating()` call in JSON format, like so:
```
$("#div").rating({
    option: value
});
```

The following options are available:

| Option        | Type          | Default      | Explanation           |
|-------------- |---------------|--------------|-----------------------|
| stars         | integer       | 5 | The amount of stars to add to the rating |
| emptyStar     | string        | far fa-star | The classes an empty star should have |
| halfStar      | string        | fas fa-star-half-alt | The classes a half-filled star should have |
| filledStar    | string        | fas fa-star | The classes a filled star should have |
| color         | hex color     | #fcd703 | The color the stars should have |
| half          | boolean       | false | If you want to allow for half-starred reviews to be accepted. |
| click         | callback function | `function(e) {};` | The function that is called when a review is submitted/clicked. |

## Requirements
This package uses JQuery to select items, and to easily add ratings to any field.

## Half stars
This package also allows for half stars, if you set the `half` option to `true` in your options, users will be able to submit half stars. You can also change which icon you want to use for the half stars, just like with the other icons, by adding it to the options with key `halfStar`. This option defaults to the fontawesome icon `fas fa-star-half-alt`

To make sure half stars are the same with as their fullsize option, the width of the element is changed when a user hovers over the element for the first time. This means that when user resizes their screen, icons may overlap. To disable this functionality

## Developing
This package uses webpack to package the rating.js file. To customize this package, run the following commands:

1. Clone/Fork this repository.
2. Run `npm i` to install all node packages.
3. Run `npm run watch` to start watching changes to the `src/ratings.js` file.
4. Change the `rating.js` file in `/src` to have webpack automatically rebuild the file in `/dist`. Never change the `dist/rating.js` file yourself, since these changes will be overwritten by webpack.
5. When you're done, use `npm run prod` to build the production-ready version of rating.js

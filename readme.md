# ⭐ Rating.js ⭐
With this package, you will be able to add a star-based (or anything icon you wish) rating system to your site. It's easy to understand, and fully customizable.

## Examples
To see some examples, head over to [the Rating.js github pages](https://timyboy12345.github.io/Rating.js/)

## Recommendations
To make the most out of the rating-experience, please follow these tips:
1. Use large, simple icons - This way, the icons also show nicely on mobile devices.
2. Test the review page on all screen sizes - To make sure the page displays the same on mobile as it does on your desktop, make sure to check the page with different page sizes.
3. Use a color that users will be able to see - Use a color that stands out from the background, so users can clearly see the review box.
4. Explain the stars! Tell your users what 1 star means, and what 5 stars mean. This way, they don't accidentally submit a score they don't mean to submit.
5. Show the score they clicked - Show an input box/something visable to show users what amount of stars they are submitting. This way, they don't accidentally submit something to low or too high.
6. Always check the score in your backend! Make sure to validate the score is a number, before doing anything with it, like saving the score to a database. Also make sure the score is between the minimum and maximum score. Since this is just a frontend package, users will be able to submit something elses like SQL queries or HTML script tags with malicious code.

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

## Data attributes
It's also possible to use data-attributes to show the amount of stars, without writing any extra javascript. These data-attributes always use the syntax `data-rating-[option]` and an element always has to have the attribute `data-rating-stars` to indicate that element is a rating block. To indicate an input element is connected with the review section, use the `data-rating-input` attribute with a css selector to indicate which element has to have the value changed. To see this in an example, go to the [example page](https://timyboy12345.github.io/Rating.js/#dataReview). 

## Options
To customize the rating field, you can add options to the `.rating()` call in JSON format, like so:
```
$("#div").rating({
    option: value
});
```

The following options are available:

| Option        | Type          | Default      | Explanation           |
|-------------- |---------------|--------------|-----------------------|
| value         | integer       | 0 | The amount of stars to begin with |
| stars         | integer       | 5 | The amount of stars to add to the rating |
| emptyStar     | string        | far fa-star | The classes an empty star should have |
| halfStar      | string        | fas fa-star-half-alt | The classes a half-filled star should have |
| filledStar    | string        | fas fa-star | The classes a filled star should have |
| color         | hex color     | #fcd703 | The color the stars should have |
| half          | boolean       | false | If you want to allow for half-starred reviews to be accepted. |
| click         | callback function | `function(e) {};` | The function that is called when a review is submitted/clicked. |
| readonly      | boolean       | false | Indicates if these stars can be interacted with or not. |

### Some more explanations
#### value
The value option is the amount of stars the module begins with, so if this value is set to 3, the first 3 stars are already colored. If half stars are enabled, it's also possible to fill in decimals here, like `1.5` and `3.5`.

#### half
If `half` is set to true, it's possible to enter numbers like `2.5` and `4.5`, instead of only `2` and `4`. This way, the reviews can be more precise. The icon to use for half stars is set under the `halfStar` option.

#### click
The `click` option is the callback function that is called when a user clicks on the review. If this value is not set, an error will be thrown to the console to indicate no valid callback function has been added.

#### readonly
The `readonly` option is used to indicate whether a review section can be interacted with or not. If set to false, the stars can not be clicked, but if a valid `value` option has been set, this will be used to fill in the correct amount of stars.

## Requirements
This package uses JQuery to select items, and to easily add ratings to any field.

If you wish to develop with this package, you also need to download all packages with `npm i`, which requires the NPM package manager.

## Half stars
This package also allows for half stars, if you set the `half` option to `true` in your options, users will be able to submit half stars. You can also change which icon you want to use for the half stars, just like with the other icons, by adding it to the options with key `halfStar`. This option defaults to the fontawesome icon `fas fa-star-half-alt`

To make sure half stars are the same with as their fullsize option, the width of the element is changed when a user hovers over the element for the first time. This means that when user resizes their screen, icons may overlap. To disable this functionality

## Altering the rating element
When creating a rating element, this package will set a `rating` attribute to true on the selected element. This way, you can easily detect all rating elements in your webpage. If you want to update a rating element, you can re-call the `.rating()` function. This will remove all existing stars, and re-draw the rating element. You will need to add all options to the `.rating()` method, otherwise, the default options will be used.

## Developing
This package uses webpack to package the rating.js file. To customize this package, run the following commands:

1. Clone/Fork this repository.
2. Run `npm i` to install all node packages.
3. Run `npm run watch` to start watching changes to the `src/ratings.js` file.
4. Change the `rating.js` file in `/src` to have webpack automatically rebuild the file in `/dist`. Never change the `dist/rating.js` file yourself, since these changes will be overwritten by webpack.
5. When you're done, use `npm run prod` to build the production-ready version of rating.js

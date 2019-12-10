const defaults = {
    "stars": 5,
    "emptyStar": "far fa-star",
    "filledStar": "fas fa-star",
    "color": "#fcd703",
    "click": function (e) {
        console.error("No click callback provided!");
    }
};

jQuery.fn.extend({
    rating: function (options = {}) {
        return this.each(function () {
            this.stars = 0;

            this.getStars = function () {
                return $(this).find($("i"));
            };

            $(this).css({
                "color": options.color ? options.color : defaults.color
            });

            $(this).on('mousemove', function (e) {
                // if ($(e.relatedTarget).hasClass(options.emptyStar ? options.emptyStar : defaults.emptyStar)) {
                //     $(e.relatedTarget).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                // } else if ($(e.relatedTarget).hasClass(options.filledStar ? options.filledStar : defaults.filledStar)) {
                //     $(e.relatedTarget).attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar)
                // }

                if (this.getStars().index(e.target) >= 0) {
                    $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                    let index = this.getStars().index(e.target) + 1;

                    for (let i = 0; i < this.getStars().length; i++) {
                        if (i < index)
                            $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                    }
                }
            });

            $(this).on('mouseout', function (e) {
                $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                for (let i = 0; i < this.stars; i++) {
                    $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                }
            });

            $(this).on('click', function (e) {
                let s = 1;

                this.stars = this.getStars().index(e.target) + 1;

                const callback = options.click ? options.click : defaults.click;
                callback({
                    "stars": this.stars,
                    "event": e
                });
            });

            const stars = options.stars ? options.stars : defaults.stars;
            for (let i = 0; i < stars; i++) {
                $("<i></i>")
                    .addClass(options.emptyStar ? options.emptyStar : defaults.emptyStar)
                    .appendTo($(this));

                if (i > 1000)
                    return;
            }
        });
    }
});

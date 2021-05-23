import jQuery from "jquery/dist/jquery";

(function ($) {
    $.fn.toggleContent = function (options) {
        options = $.extend({
            shownPropDataAttribute: 'shown',
            buttonSelector: '.toggle-button',
            contentSelector: '.toggle-content',
            buttonClassOn: 'on',
            buttonClassOff: 'off'
        }, options);

        function update($element, state) {
            const $content = $element.find(options.contentSelector);
            const $button = $element.find(options.buttonSelector);
            if (state.shown === 'on') {
                $content.show();
                $button.addClass(options.buttonClassOn).removeClass(options.buttonClassOff);
            } else {
                $content.hide();
                $button.addClass(options.buttonClassOff).removeClass(options.buttonClassOn);
            }
        }

        this.each(function () {
            const $element = $(this);
            const state = {
                shown: $element.data(options.shownPropDataAttribute)
            };
            update($element, state);

            const $button = $element.find(options.buttonSelector);
            $button.on('click', function () {
                if (state.shown === 'on') {
                    state.shown = 'off';
                } else {
                    state.shown = 'on';
                }
                update($element, state);
            });
        });
    };
})(jQuery);

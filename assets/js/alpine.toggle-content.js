window.alpineToggleContent = function (options) {
    return {
        shown: options.shown || false,

        toggle() {
            this.shown = !this.shown;
        }
    }
};

<?php
$manifest = json_decode(file_get_contents(__DIR__ . '/assets/dist/manifest.json'), JSON_OBJECT_AS_ARRAY);
?>
<!DOCTYPE html>
<html lang="en"
      xmlns:x-bind="http://www.w3.org/1999/xhtml"
      xmlns:x-on="http://www.w3.org/1999/xhtml"
>
<!-- x-bind/x-on for Alpine.js -->
<head>
    <meta charset="UTF-8">
    <title>JavaScript Framework Comparison</title>
    <script src="<?= $manifest['bundle.js'] ?>"></script>
</head>
<body style="padding-bottom: 100px;">
    <h1>JavaScript Framework Comparison</h1>

    <h2>jQuery plugin</h2>
    <div id="toggle-demo-jquery" data-shown="off">
        <button class="toggle-button">Toggle</button>
        <div class="toggle-content" style="display: none;">
            <p>Hello</p>
            <p>World</p>
        </div>
    </div>
    <script>
        jQuery(function () {
            jQuery('#toggle-demo-jquery').toggleContent();
        });
    </script>

    <h2>Vue render inside</h2>
    <div id="toggle-demo-vue-component-parent"></div>
    <script>
        (new Vue({
            render: function (h) {
                return h('toggle-content', {props: {
                    initiallyShown: false
                }});
            },
        })).$mount('#toggle-demo-vue-component-parent');
    </script>

    <h2>Vue replace itself</h2>
    <toggle-content id="toggle-demo-vue-component" initially-shown=""></toggle-content>
    <script>
        new Vue({el: '#toggle-demo-vue-component'});
    </script>

    <h2>Alpine.js ad-hoc use</h2>
    <div id="toggle-demo-alpine" x-data="{shown: false}">
        <button class="toggle-button" x-bind:class="{'on': shown, 'off':!shown}" x-on:click="shown = !shown">Toggle</button>
        <div x-show="shown" style="display: none;">
            <p>Hello</p>
            <p>World</p>
        </div>
    </div>

    <h2>Alpine.js with external model</h2>
    <div id="toggle-demo-alpine" x-data="alpineToggleContent({shown: false})">
        <button class="toggle-button" x-bind:class="{'on': shown, 'off':!shown}" x-on:click="toggle()">Toggle</button>
        <div x-show="shown" style="display: none;">
            <p>Hello</p>
            <p>World</p>
        </div>
    </div>

    <h2>Stimulus</h2>
    <div id="toggle-demo-stimulus" data-controller="toggleContent">
        <button class="toggle-button"
                data-toggleContent-target="button"
                data-action="toggleContent#toggle"
        >Toggle</button>
        <div style="display: none;" data-toggleContent-target="content">
            <p>Hello</p>
            <p>World</p>
        </div>
    </div>

    <h2>React render inside</h2>
    <div id="toggle-demo-react"></div>
    <script>
        bindReactToggleContent('#toggle-demo-react', {})
    </script>

</body>
</html>

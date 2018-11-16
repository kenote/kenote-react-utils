(function () {
    var app = window;
    var render = setTimeout(function () {
        app.start();
        clearTimeout(render);
        render = null;
    }, 500);
})();
document.getElementById('root').innerHTML = "\n  <div class=\"initial-pending\">\n    <div class=\"progress-span-initial\">Loading...</div>\n    <div class=\"layout-progress-bar\">\n      <div class=\"progress-bar-container\">\n        <div class=\"progress-bar-pending-initial\" />\n      </div>\n    </div>\n  </div>\n";

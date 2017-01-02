///<reference path="src/Product.ts"/>
var App;
(function (App) {
    var p = new App.Product("Book 1", "Code Book", 100);
    document.getElementById("app").innerHTML = "\n        <div>\n            <ul>\n                <li>" + p.name + " - " + p.description + " - " + p.value + " </li>\n            </ul>\n        </div>        \n    ";
    console.log(p);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
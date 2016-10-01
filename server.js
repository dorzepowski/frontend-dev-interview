var express = require('express');
var app = express();

app.use(express.static('web'));

app.get('/api/menu', function (req, res) {
    var menu = [];
    menu.push(createMenuItem("home"));
    menu.push(createMenuItem("about"));
    menu.push(createMenuItem("projects"));
    menu.push(createMenuItem("contact"));
    res.send(menu);

    function createMenuItem(name) {
        var item = {};
        item.name = name;
        item.label = capitalize(name);
        item.href = "#" + capitalize(name);
        return item;
    }
});


app.listen(8123, function () {
    console.log('Starts server on port ', 8123);
});


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
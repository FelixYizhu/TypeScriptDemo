document.title = 'ts title';
var list = document.querySelectorAll('.a');
console.log(list);
list.forEach(function (item, index) {
    var p = item;
    p.innerText = '[' + index + ']' + p.innerText;
    console.log(p, index);
});

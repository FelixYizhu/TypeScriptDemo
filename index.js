document.title = 'ts title';
var btn = document.querySelector('#btn');
btn.addEventListener('click', function (event) {
    var target = event.target;
    target.style.fontSize = '30px';
});
btn.addEventListener('mouseenter', function () {
    console.log('I am mouseentered');
});

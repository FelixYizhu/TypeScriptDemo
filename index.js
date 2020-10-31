document.title = 'ts title';
function handleClick() {
    console.log('click me to try again');
}
var btn = document.querySelector('#btn');
btn.addEventListener('click', handleClick);
var remove = document.querySelector('#remove');
remove.addEventListener("click", function () {
    btn.removeEventListener('click', handleClick);
    console.log('remove successfully');
});

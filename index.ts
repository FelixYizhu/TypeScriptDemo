document.title='ts title'

let btn=document.querySelector('#btn') as HTMLButtonElement;
btn.addEventListener('click',function(event){
    let target=event.target as HTMLButtonElement;
    target.style.fontSize='30px'
})

btn.addEventListener('mouseenter',function(){
    console.log('I am mouseentered');
})

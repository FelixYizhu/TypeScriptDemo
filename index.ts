document.title='ts title'


function handleClick(){
    console.log('click me to try again');
}
let btn=document.querySelector('#btn') as HTMLButtonElement;
btn.addEventListener('click',handleClick,{once:true})

let remove=document.querySelector('#remove') as HTMLButtonElement;
remove.addEventListener("click",function(){
    btn.removeEventListener('click',handleClick,)
    console.log('remove successfully');
})


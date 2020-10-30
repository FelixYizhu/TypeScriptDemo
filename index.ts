document.title='ts title'

let list=document.querySelectorAll('.a');
console.log(list)
list.forEach(function(item,index){
    let p=item as HTMLParagraphElement;
    p.innerText='['+index+']'+p.innerText;
    console.log(p,index)
})

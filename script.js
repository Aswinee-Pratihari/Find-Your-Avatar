let btns=document.getElementsByClassName('btn');
let welcome=document.getElementById('welcome');
let submit=document.getElementById('submit');
let output=document.getElementById('output');

let str="";
for (const btn of btns) {
  btn.addEventListener('click',(e)=>{
      console.log(e.target.value);
      let input=document.getElementById('input');
    str=`<img src="https://joeschmoe.io/api/v1/${e.target.value}/${input.value}" alt="">
    <span id="welcome"> Hey ${input.value} This is Your Avatar</span>`
    console.log(str)

    output.innerHTML=str;
    input.value="";
  })
}
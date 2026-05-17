function dis(val){
   const display=document.getElementById('result') 
   display.value += val
}
function solve(){
     const display=document.getElementById('result')
     let x=display.value
     let y=eval(x)
     display.value=y
}
function del(){
     const display=document.getElementById('result')
     display.value=''
}
function x2(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,2)
}
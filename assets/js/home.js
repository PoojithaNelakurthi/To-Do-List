function getH(x){
    return ((1000*60)*60)*x
}
function getM(x){
    return (1000*60)*x;
}
console.log('my script is loaded');
// var ts = document.querySelectorAll('.hours');
// var mns = document.querySelectorAll('.mins');
var dos = document.querySelectorAll('.do');
// for(let i =0 ; i<ts.length;i++){
//     // console.log(`${ts[i].innerHTML} : ${mns[i].innerHTML}`);
//     console.log(getH(ts[i].innerHTML))
// }

var ts = document.querySelectorAll('.time');
console.log(ts)


// for(let i=0;i<ts.length;i++){
//     let bn = ts[i].innerHTML;
//     let hr = bn.substring(0,2);
//     let mn = bn.substring(3,5)
//     console.log(`${hr} : ${mn}`)
//     setTimeout(()=>{
//         alert(`the remainder of ${dos[i]}`)
//     },(hr+mn));
//     // console.log(bn.substring(3,5))
//     // console.log(ts[i].innerHTML)
// }
let time = new Date();
console.log(time.getHours())
console.log(time.getMinutes())
let bool = [];
setInterval(()=>{
    time = new Date();
    console.log(`${time.getHours()}:${time.getMinutes()}`)
    for(let i=0;i<ts.length;i++){
        let mm = `${time.getHours()}:${time.getMinutes()}`;
        if(ts[i].innerHTML == mm && bool[i] != 0){
        console.log(`time match   ${mm}`)
            alert(`The remainder for the ${dos[i].innerHTML}`);
            bool[i] = 0;
        }
    }
},1000);

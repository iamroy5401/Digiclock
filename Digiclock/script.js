function Time() {
const t=new Date()
let h=t.getHours()
let m=t.getMinutes()
let s=t.getSeconds()
let ses="AM";


if(h>=12){
    ses="PM";
}
let time = h + ":" + m + ":" + s+" "+ses;
{document.getElementById("t").innerHTML=time}

let ti = setTimeout(function(){ Time() },1000);

}
Time();
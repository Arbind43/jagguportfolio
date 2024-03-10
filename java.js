function cal(){
    let phy=document.getElementById("phy").value;
    chem=document.getElementById("chem").value;
    math=document.getElementById("math").value;
    bio=document.getElementById("bio").value;


let sum=parseFloat(phy)+parseFloat(chem)+parseFloat(math)+parseFloat(bio);
document.getElementById("demo").innerHTML=sum;
let percentage=(sum / 400)*100;
document.getAnimations("demo1").innerHTML= percentage;
if(percentage>=100)
{
  document.getElementById("demo2").innerHTML='Excellent';
}
else if(percentage>=80)
{
    document.getElementById("demo2").innerHTML='very good work';
}
else if(percentage>=60)
{
    document.getElementById("demo2").innerHTML='pass';

}
else if(percentage>=40)
{
    document.getElementById("demo2").innerHTML='need hard work';
}
else{
    document.getElementById("demo2").innerHTML='fail';
}
}



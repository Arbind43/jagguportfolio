function cal(){
    let billamount=parseInt(document.getElementById('billamount').value);
    let tipPer=parseInt(document.getElementById('tipPer').value);
    let tipamount =(billamount*tipPer)/100;
    document.getElementById('tipamount').innerHTML="Tip Amount:"+tipamount+".";
    document.getElementById('totalamount').innerHTML="Total Amount:"+billamount+".";

}
function reset(){
    document.getElementById('billamount').value='';
    document.getElementById('tipPer').value='';
    document.getElementById('tipamount').value='tipamount';
    document.getElementById('totalamount').value='totalamount';
}
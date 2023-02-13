
let textbox=document.getElementById('text-box');
textbox.addEventListener('input', function(){
    var text=this.value;
    let char=text.length;
    document.getElementById('char').innerHTML=char;
    text=text.trim();
    let word=text.split(" ");
    
    let cleanList=word.filter(function(elm){
        return elm!="";
    });
    document.getElementById('word').innerHTML=cleanList.length;
});
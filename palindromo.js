function Controlla(content){
    let ItIs=false;
    if(content==null){
        alert('inserisci parola');
        return;
    }else if(isNaN(content)){
        var word=document.getElementById('Palindrom').value;
        const Control = Array.from(word);
        console.log(Control);
            for (let index = 0; index <Control.length; index++) {
                let char1=Control[index];
                let char2=Control[Control.length-(1+index)]
                console.log(char1,'',char2);
                    if(char1==char2)
                    {
                        ItIs=true;
                    }else{
                        ItIs=false;
                }
            }
            let convert=Control.toString(); 
            if(ItIs){ 
                document.getElementById('caracters-Ex1').innerHTML+=`<div><span>${convert}</span> è palindromo</div>`;
                }else{
                document.getElementById('caracters-Ex1').innerHTML+=`<div><span>${convert}</span> non è palindromo</div>`;
            }  
        }else{
            alert('inserisci parola');
        }
}
document.getElementById('getPalindrom').addEventListener('click',function(){
    let Parola=document.getElementById('Palindrom').value;
    Controlla(Parola);
});











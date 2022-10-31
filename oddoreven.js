let scelta=0;
document.getElementById('Even').addEventListener('click',function(){
    scelta=2;
    document.querySelector('.chose').classList.add('hide');
    document.getElementById('title').style.display='none';
    document.querySelector('.number').classList.remove('hide');
})
document.getElementById('Odd').addEventListener('click',function(){
    scelta=1;
    document.querySelector('.chose').classList.add('hide');
    document.getElementById('title').style.display='none';
    document.querySelector('.number').classList.remove('hide');
})


document.getElementById('NumberChoice').addEventListener('click',function(){
    let somma=0;
    let cpu=0;
    let number=parseInt(document.getElementById('number').value);
    if(isNaN(number)){
        alert('inserisci un numero')
    }else if(1<=number && number<=5){
        cpu=parseInt(Math.random()*(6-1)+1);
        console.log(cpu);
        somma=cpu+number;
        console.log(somma);
        if(somma%2==0){
            if(scelta==2){
                console.log('hai vinto');
            }else{
                console.log('hai perso')
            }
        }else if(somma%2==1){
            if(scelta==2){
                console.log('hai perso');
            }else {
                console.log('hai vinto');
            }
        }
    }else{
        alert('inserisci un numero tra 1 e 5')
    }
})
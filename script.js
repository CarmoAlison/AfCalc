

function calcular(){
var Bimestre1 = Number(document.getElementById('Bim1').value);    
var Bimestre2 = Number(document.getElementById('Bim2').value);    
var Bimestre3 = Number(document.getElementById('Bim3').value);    
var Bimestre4 = Number(document.getElementById('Bim4').value);

var calculoBimestre1 = Number(Bimestre1) * 2;
var calculoBimestre2 = Number(Bimestre2) * 2;
var calculoBimestre3 = Number(Bimestre3) * 3;
var calculoBimestre4 = Number(Bimestre4) * 3;

var calcFinal = (Number(calculoBimestre1) + Number(calculoBimestre2) + Number(calculoBimestre3) + Number(calculoBimestre4))/ 10;

var rec = 60 - Number(calcFinal)  ;

if(calcFinal >= 60){
    document.getElementById("resultadoTexto").innerHTML = 'Você passou, parabéns😁!';
}else{
    document.getElementById("resultadoTexto").innerHTML = 'Infelizmente você não passou, faltou ' + Number(rec) + ' pontos 😔';
}




document.getElementById("resultadoMedia").innerHTML = calcFinal.toFixed(1);
console.log(calcFinal);

}


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start')
        }else{
            entry.target.classList.remove('start')
        }
    })
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('startpri')
        }else{
            entry.target.classList.remove('startpri')
        }
    })
});

const elements2 = document.querySelectorAll('.hiddenpri');
elements2.forEach((element) => myObserver2.observe(element));

const myObserver3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('startseg')
        }else{
            entry.target.classList.remove('startseg')
        }
    })
});

const elements3 = document.querySelectorAll('.hiddenseg');
elements2.forEach((element) => myObserver3.observe(element));


const myObserver4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('starttec')
        }else{
            entry.target.classList.remove('starttec')
        }
    })
});

const elements4 = document.querySelectorAll('.hidde');
elements2.forEach((element) => myObserver4.observe(element));
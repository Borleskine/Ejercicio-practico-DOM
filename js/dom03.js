

/*


 FUNCIONES 


*/

window.onload= function(){
    repeat = document.getElementById('repeat');
    word = document.getElementById('word');
    btn = document.getElementById('btn').addEventListener('click', btnClick);
    container = document.getElementById('container');

};

var repeat;
var n;
var word;
var btn;
var i;
var container;
var numero1;
var numero2;
var container2;

 
function btnClick()
    {
    n = repeat.value;
        for(i = 0; i < n; i++){
            let p = document.createElement('p');
            p.setAttribute('id', 'parrafo'+i);
            p.setAttribute('class', 'parrafo');
            p.innerText = word.value;
            container.appendChild(p);
        }
    }
    

function cambiarColor()
    {
        var elems = document.getElementsByClassName("Destacar");
        for(var i = 0; i < elems.length; i++)
        {
            elems[i].style.backgroundColor = color.value;
        }
    }


    const btnMate = document.getElementById('btnMate');
    const respuestaMate = document.getElementById('respuestaMate');
    const respuestaMateFinal = document.getElementById('respuestaMateFinal');
    btnMate.addEventListener('click', calcular);

function calcular(e) {
    e.preventDefault()
    let inputN1 = parseInt(document.getElementById('inputN1').value);
    let inputN2 = parseInt(document.getElementById('inputN2').value);

    let respuesta =
    `<p>${inputN1} + ${inputN2}</p>
    <p>${inputN1} - ${inputN2}</p>
    <p>${inputN1} / ${inputN2}</p>
    <p>${inputN1} * ${inputN2}</p>`

    let respuestaFinal = (inputN1+inputN2)+(inputN1-inputN2)+(inputN1/inputN2)+(inputN1*inputN2)
    respuestaMate.innerHTML = respuesta
    respuestaMateFinal.textContent = respuestaFinal
}


/*    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("reverse").addEventListener
        ("keyup", e => {
        var c = reverse(e.target.value);
        function b(){
        document.getElementById("result").innerHTML = arguments[0];
        };
        b(c);
        });
       });
       function reverse(s){
        return s.split("").reverse().join("");
       }

*/

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("reverso").addEventListener
    ("keyup", e => {
    var c = reverse(e.target.value);
    function b(){
    document.getElementById("result").innerHTML = arguments[0];
    };
    b(c);
    });
   });
   function reverse(s){
    return s.split("").reverse().join("");
   }
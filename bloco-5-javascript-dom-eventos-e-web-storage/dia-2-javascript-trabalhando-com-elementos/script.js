// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

document.getElementById("elementoOndeVoceEsta").parentNode.style.backgroundColor ="blue";

document.getElementById("primeiroFilhoDoFilho").innerText = "Texto do primeiro filho do filho";

console.log(document.getElementById("pai").firstElementChild);

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById("pai").nextElementSibling);

// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .

// parentNode : retorna o nó pai.
// parentElement : retorna o elemento pai.
// childNodes : retorna um NodeList com todos os nós filhos.
// children : retorna um HTMLCollection com todos os elementos filhos.
// firstChild : retorna o primeiro nó filho.
// firstElementChild : retorna o primeiro elemento filho.
// lastChild : retorna o último nó filho.
// lastElementChild : retorna o último elemento filho.
// nextSibling : retorna o próximo nó.
// nextElementSibling : retorna o próximo elemento.
// previousSibling : retorna o nó anterior.
// previousElementSibling : retorna o elemento anterior.
window.load = carregaUsuario()

function Mudarestado(el) {
	  var display = document.getElementById(el).style.display;
	  if (display == "none"){
		document.getElementById(el).style.display = 'block';
	  }
	  else{
		document.getElementById(el).style.display = 'none';
	  }
	}


function copiarTexto2(valor){
			var cont = valor

			copyTextToClipboard(cont)
			var cop = document.getElementById('cop');
			Mudarestado('cop');
			setTimeout(function(){Mudarestado('cop')}, 2000);
			

			};
function copyTextToClipboard(text) {
	  var textArea = document.createElement("textarea");

	  textArea.value = text;

	  document.body.appendChild(textArea);
	  textArea.select();

	  try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	  } catch (err) {
		console.log('Oops, unable to copy');
		window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
	  }

	  document.body.removeChild(textArea);
	}	




function copiarTexto(valor){
				//captura o elemento input
				var id = "#"+valor;
				const inputTest = document.querySelector(id);
				//seleciona todo o texto do elemento
				inputTest.select();
				//executa o comando copy
				//aqui é feito o ato de copiar para a area de trabalho com base na seleção
				document.execCommand('copy');
			};



function carregaUsuario(){
	//Mudarestado('cop');
	}
/*
elemento_teste = document.getElementById('button');
elemento_teste.addEventListener('click', function() {
	alert(typeof(elemento_teste))
	document.write('Olá mundo')
	
	

}, false);

*/

function listandoAtendimento(listaAtendimento) {


document.getElementById('Lista de atendimentos').innerHTML = ` `

  //const object = { a: 1, b: 2, c: 3 };

var Geral = localStorage.getItem(listaAtendimento);


var Separado = Geral.split('Novo_Atendimento');


var itens=[]

var atendimento={}


for(let v = 0; v < Separado.length; v++){

var Separado_valor = Separado[v].split('#')

document.getElementById('Lista de atendimentos').innerHTML += `<br>`

document.getElementById('table1').innerHTML += `<tr>`

for (let v = 0; v < Separado_valor.length; v++) {
item = []

item.push(`${Separado_valor[v].split(':')}`);




if (Separado_valor[v].includes("nro")){
	
	//atendimento.idos = Separado_valor[v]
	//alert(Separado_valor[v])
	document.getElementById('table1').innerHTML += `<td>${Separado_valor[v]}</td>`	
	
}

if (Separado_valor[v].includes("idos")){
	
	//atendimento.idos = Separado_valor[v]
	//alert(Separado_valor[v])
	document.getElementById('table1').innerHTML += `<td>${Separado_valor[v]}</td>`	
	
}





itens.push(item);
//alert(`${Separado_valor[v].split(':')}`);

document.getElementById('Lista de atendimentos').innerHTML += `_${Separado_valor[v]}_`


}

document.getElementById('table1').innerHTML += `</tr>`


//document.getElementById('Lista de atendimentos').innerHTML += `${itens}`


document.getElementById('Lista de atendimentos').innerHTML += `<br>`

//document.getElementById('Lista de atendimentos').innerHTML += `<br>${Separado[v]}<br>`

}




for (let v = 0; v < Separado.length; v++) {
//document.getElementById('Lista de atendimentos').innerHTML += `<br>${Separado[v]}<br>`
//Separado_valor += Separado[v]
}



}







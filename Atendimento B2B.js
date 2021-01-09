

window.load = carregaUsuario()


atendimento = {
	"idos":document.getElementById('idos'),
	"nomecliente":document.getElementById('nomecliente'),
	"nometec":document.getElementById('nometec'),
	"ctttec": document.getElementById('ctttec'),
	"protgps": document.getElementById('protgps'),
	"piloto": document.getElementById('piloto'),
	"pabxid": document.getElementById('pabxid'),
	"ippabx": document.getElementById('ippabx'),
	"commu": document.getElementById('commu'),
	"mande": document.getElementById('mande'),
	"secde": document.getElementById('secde'),
	"slid": document.getElementById('slid'),
	"vlans": document.getElementById('vlans'),
	"manpa": document.getElementById('manpa'),
	"secpa": document.getElementById('secpa'),
	"chamado": document.getElementById('chamado'),
	"idfibra": document.getElementById('idfibra'),
	"cnl": document.getElementById('cnl'),
	"es": document.getElementById('es'),
	"at": document.getElementById('at'),
	"codrua": document.getElementById('codrua'),
	"nro": document.getElementById('nro'),
	"bloq": document.getElementById('bloq'),
	"vrf": document.getElementById('vrf'),
	"rav": document.getElementById('rav'),
	"ipwan": document.getElementById('ipwan'),
	"iplan": document.getElementById('iplan'),
	"iplop": document.getElementById('iplop'),
	"rvt": document.getElementById('rvt'),
	"resp": document.getElementById('resp'),
	"cttresp": document.getElementById('cttresp'),
	"docresp": document.getElementById('docresp'),
	"senha": document.getElementById('senha'),
	"obs": document.getElementById('obs'),	
	"nomeUsuario": getCookie("nomeB2B"),
	"matriculaUsuario": getCookie("matB2B"),

		
}

//Menu e Comandos

ARQFI.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-ARQ-FI-SBC1')});

BRUAC.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-BRU-AC-SBC2')});

CASBO.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-CAS-BON-SBC2')});

CASCT.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-CAS-CT-SBC3')});

SJCRH.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SJC-RH-SBC1')});

STSWL.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-STS-WL-SBC2')});

SNESA.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SNE-SA-SBC2')});

SPOVU.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-VU-SBC1')});

SPOBE.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-BE-SBC1')});

SPOMB.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-MB-SBC2')});

SPOPD.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-PD-SBC1')});

SPOJG.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-JG-SBC2')});

SPOSI.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-SI-SBC3')});

SPOPA.addEventListener('click', function(){copiarTexto2('ssh NGN-BR-SPO-PA-SBC4')});


// Botões Geais

NomeMatricula.addEventListener('click',function(){nomeMatricula()}); 

ficticia.addEventListener('click',function(){copiarTexto2('4133548211')}); 

vdnVivo1.addEventListener('click',function(){copiarTexto2('205035111')}); 

novoAtd.addEventListener('click', function(){
	window.location.reload(true);
})

btn_idos.addEventListener('click', function(){copiarTexto('idos')});

btn_nometec.addEventListener('click', function(){copiarTexto('nometec')});

btn_nomecliente.addEventListener('click', function(){copiarTexto('nomecliente')});

btn_ctttec.addEventListener('click', function(){copiarTexto('ctttec')});

btn_protgps.addEventListener('click', function(){copiarTexto('protgps')});

btn_obs.addEventListener('click', function(){copiarTexto('obs')});

btn_salvar.addEventListener('click', function(){salvandoAtendimento(atendimento)})

btn_listarAtendimento.addEventListener('click', function(){listandoAtendimento()})


//Botões VOIP

btn_minhaDivvoip.addEventListener('click', function(){Mudarestado('minhaDivvoip')});

btn_piloto.addEventListener('click', function(){copiarTexto('piloto')});

btn_pabxid.addEventListener('click', function(){copiarTexto('pabxid')});

btn_ippabx.addEventListener('click', function(){copiarTexto('ippabx')});

btn_commu.addEventListener('click', function(){copiarTexto('commu')});

// Botões Manobra

btn_minhaDivmano.addEventListener('click', function(){Mudarestado('minhaDivmano')});

btn_mande.addEventListener('click', function(){copiarTexto('mande')});

btn_secde.addEventListener('click', function(){copiarTexto('secde')});

btn_slid.addEventListener('click', function(){copiarTexto('slid')});

btn_vlans.addEventListener('click', function(){copiarTexto('vlans')});

btn_manpa.addEventListener('click', function(){copiarTexto('manpa')});

btn_secpa.addEventListener('click', function(){copiarTexto('secpa')});

btn_chamado.addEventListener('click', function(){copiarTexto('chamado')});

btn_idfibra.addEventListener('click', function(){copiarTexto('idfibra')});

btn_cnl.addEventListener('click', function(){copiarTexto('cnl')});

btn_es.addEventListener('click', function(){copiarTexto('es')});

btn_at.addEventListener('click', function(){copiarTexto('at')});

btn_codrua.addEventListener('click', function(){copiarTexto('codrua')});

btn_nro.addEventListener('click', function(){copiarTexto('nro')});

btn_minhaDivbloq.addEventListener('click', function(){Mudarestado('minhaDivbloq')});

btn_bloq.addEventListener('click', function(){copiarTexto('bloq')});

//Botões LP Router

btn_minhaDivlprout.addEventListener('click', function(){Mudarestado('minhaDivlprout')});

btn_vrf.addEventListener('click', function(){copiarTexto('vrf')});

btn_rav.addEventListener('click', function(){copiarTexto('rav')});

btn_ipwan.addEventListener('click', function(){copiarTexto('ipwan')});

btn_iplan.addEventListener('click', function(){copiarTexto('iplan')});

btn_iplop.addEventListener('click', function(){copiarTexto('iplop')});

btn_rvt.addEventListener('click', function(){copiarTexto('rvt')});

btn_resp.addEventListener('click', function(){copiarTexto('resp')});

btn_cttresp.addEventListener('click', function(){copiarTexto('cttresp')});

btn_docresp.addEventListener('click', function(){copiarTexto('docresp')});

btn_senha.addEventListener('click', function(){copiarTexto('senha')});


//linhas de comandos

//Comandos de Linha

listpbxgenli.addEventListener('click', function(){copiarTexto2(`cli iedge lkup PBX_${document.getElementById('pabxid').value} | grep -E "RasIpAddr|  Destination Trunk Group|PAIDUserName"\n`)});

listpabxgenip.addEventListener('click', function(){copiarTexto2(`cli iedge lkup ${document.getElementById('ippabx').value} | more\n`)});

delpabxgen.addEventListener('click', function(){copiarTexto2(`cli iedge delete PBX_${document.getElementById('pabxid').value} 0\n`)});

listpbxsonli.addEventListener('click', function(){copiarTexto2(`show configuration profiles digitParameterHandling dmPmRule | display set | match ${document.getElementById('pabxid').value.substring(5, pabxid.length)} | match replacement | match value | more\n`)});

listpbxsonip.addEventListener('click', function(){copiarTexto2(`show configuration addressContext default zone privaccess-voxip | display set | match ipAddress\\|ingressIpPrefix | match ${document.getElementById('pabxid').value}\n`)});

listpbxsonippbx.addEventListener('click', function(){copiarTexto2(`show configuration addressContext default zone privaccess-voxip | display set | match ipAddress\\|ingressIpPrefix | match ${document.getElementById('ippabx').value}\n`)});

delpbxson.addEventListener('click', function(){copiarTexto2(`configure\nset addressContext default zone privaccess-voxip sipTrunkGroup ${document.getElementById('pabxid').value} state disabled\nset addressContext default zone privaccess-voxip sipTrunkGroup ${document.getElementById('pabxid').value} mode outOfService\ncommit\ndelete addressContext default zone privaccess-voxip sipTrunkGroup ${document.getElementById('pabxid').value} \ndelete addressContext default zone privaccess-voxip ipPeer ${document.getElementById('pabxid').value} \ndelete profiles ipSignalingPeerGroup ${document.getElementById('pabxid').value}_IPSIGP\ndelete profiles digitParameterHandling dmPmRule ${document.getElementById('pabxid').value.substring(5, pabxid.length)}_${document.getElementById('piloto').value}\ncommit\n`)});

convson.addEventListener('click', function(){alert(`config dialplan rule tdm_group1_default outgoing_callerid ${atendimento.piloto.value}`)});

listpbxu2000.addEventListener('click', function(){copiarTexto2(`LST SIPTG:TGN=\"${document.getElementById('pabxid').value}\";`)});

listtgu2000.addEventListener('click', function(){copiarTexto2(`LST SIPTG:TGID=${document.getElementById('pabxid').value.substring(10, pabxid.length)};`)});

listSPG.addEventListener('click', function(){copiarTexto2(`USE ME:MENAME=HSS;\nLST_HDYNDATA: IMPI="${"+55"+document.getElementById('piloto').value}";\nLST_HSDAINF: IMPI="${"+55"+document.getElementById('piloto').value}";\nLST_HSUB: IMPI="${"+55"+document.getElementById('piloto').value}";\nLST_HVNTPLID: IMPU="sip:${"+55"+document.getElementById('piloto').value}@ims4.vivo.net.br";\nLST_HVNTPLID: IMPU="tel:${"+55"+document.getElementById('piloto').value}";\nLST_HREGAUTH: IMPU="sip:${"+55"+document.getElementById('piloto').value}@ims4.vivo.net.br";\nLST_HREGAUTH: IMPU="tel:${"+55"+document.getElementById('piloto').value}";\nLST_HSPSHARE: IMPU="sip:${"+55"+document.getElementById('piloto').value}@ims4.vivo.net.br";\nLST_HSIFC: IMPU="sip:${"+55"+document.getElementById('piloto').value}@ims4.vivo.net.br";\nLST_HNNRLI: IMPU="sip:${"+55"+document.getElementById('piloto').value}@ims4.vivo.net.br";\nLST_HNNRLI: IMPU="tel:${"+55"+document.getElementById('piloto').value}";`)});

// Comandos de Router

ciscon.addEventListener('click', function(){copiarTexto2(`ping 10.255.240.111 source ${ipgt()}`)});

cispbx.addEventListener('click', function(){copiarTexto2(`ping ${document.getElementById('ippabx').value} source ${ipgt()}`)});

hpcon.addEventListener('click', function(){copiarTexto2(`ping -a ${ipgt()}  10.255.240.111`)});

hppbx.addEventListener('click', function(){copiarTexto2(`ping -a ${ipgt()}  ${document.getElementById('ippabx').value}`)});

rota.addEventListener('click', function(){alert(`Route add 10.255.0.0 mask 255.255.0.0 ${ipgt()}`)});


//Checklist


btn_checkManobra.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento Manobra
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Técnico: ${atendimento.nometec.value}
Contato: ${atendimento.ctttec.value}
Manobra de: ${atendimento.mande.value} Secundário: ${atendimento.secde.value}
Manobra para: ${atendimento.manpa.value} Secundário: ${atendimento.secpa.value}
Novo SLID: ${atendimento.slid.value}
ID Fibra: ${atendimento.idfibra.value}
Vlans Rede / Usuário: ${atendimento.vlans.value}
Chamado: ${atendimento.chamado.value}
Fibras Bloqueadas: ${atendimento.bloq.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkVOIP.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento VOIP
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Técnico: ${atendimento.nometec.value}
Contato: ${atendimento.ctttec.value}
Piloto: ${atendimento.piloto.value}
Pabx ID: ${atendimento.pabxid.value}
IP do Pabx: ${atendimento.ippabx.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkDmais.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento D+1
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Piloto: ${atendimento.piloto.value}
Pabx ID: ${atendimento.pabxid.value}
IP do Pabx: ${atendimento.ippabx.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkMant.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento Mantenedor
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Mantenedor: ${atendimento.nometec.value}
Contato: ${atendimento.ctttec.value}
Piloto: ${atendimento.piloto.value}
Pabx ID: ${atendimento.pabxid.value}
IP do Pabx: ${atendimento.ippabx.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkRout.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento Router
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Técnico: ${atendimento.nometec.value}
IP WAN: ${atendimento.ipwan.value}
IP LAN: ${atendimento.iplan.value}
IP LOOPBACK: ${atendimento.iplop.value}
RVT: ${atendimento.rvt.value}
Responsável: ${atendimento.resp.value}
Contato Responsável: ${atendimento.cttresp.value}
Documento Responsável: ${atendimento.docresp.value}
Senha: ${atendimento.senha.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkLP.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Atendimento LP
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
ID / OS: ${atendimento.idos.value}
Técnico: ${atendimento.nometec.value}
RVT: ${atendimento.rvt.value}
Responsável: ${atendimento.resp.value}
Contato Responsável: ${atendimento.cttresp.value}
Documento Responsável: ${atendimento.docresp.value}
Senha: ${atendimento.senha.value}
Protocolo GPS:  ${atendimento.protgps.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

btn_checkAgenda.addEventListener('click', function(){copiarTexto2(`-------------------------------------------------\n
	      Agendamento
Nome(RE): ${atendimento.nomeUsuario} (${atendimento.matriculaUsuario})
OS: ${atendimento.idos.value}
Cliente: ${atendimento.nomecliente.value}
Solicitante: ${atendimento.nometec.value}
Piloto: ${atendimento.piloto.value}
Chamado: ${atendimento.chamado.value}
Observações: ${atendimento.obs.value}\n
-------------------------------------------------`
)});

// Funções

function Mudarestado(el) {
	  var display = document.getElementById(el).style.display;
	  if (display == "none")
		document.getElementById(el).style.display = 'block';
	  else
		document.getElementById(el).style.display = 'none';
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
	/*var todos_os_cookies = document.cookie;
	var nomeUsuario = getCookie("nomeB2B");
	var matriculaUsuario = getCookie("matB2B");*/
	document.getElementById("nomeUsuario").innerHTML = nomeUsuario;
	document.getElementById("matriculaUsuario").innerHTML = matriculaUsuario;
	Mudarestado('minhaDivvoip');
	Mudarestado('minhaDivmano');
	Mudarestado('minhaDivlprout');
	Mudarestado('minhaDivbloq');
	Mudarestado('cop');
	//if (nomeUsuario==''){
	//nomeMatricula();}
	
	};


function ipgt(){
var ipgt = document.getElementById('ippabx').value.split('.')
var ipgtout = ''
ipgt[3] = parseInt(ipgt[3]) - 1

for (let i = 0, n = ipgt.length; i < n; ++i) {
	if (i>0){
		ipgtout += `.${ipgt[i]}`
	}
	else{
		ipgtout += ipgt[i]
	}
}

return ipgtout
};

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}


function createCookie (name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		else {
			expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";

	}


function nomeMatricula(){

// Confirmação
pergunta = prompt('Nome:', '');
pergunta2 = prompt('Matricula', '');

// Verifica se o usuário postou algum valor
if(pergunta){
	nomeUsuario = pergunta;
 } 
 if(pergunta2){
	matriculaUsuario = pergunta2;
 } 
// Aqui vem a mensagem para o botão cancelar
else {
	alert('Valor nulo retornado!');
	nomeUsuario = 'Nome'
	matriculaUsuario = 'A0000000'
}


createCookie ("nomeB2B", nomeUsuario, 999);
createCookie ("matB2B", matriculaUsuario, 999);
	
window.location.reload(true);
		
}

//Salvando o atendimento	
			
function salvandoAtendimento(object) {
  //localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);

  //const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  if(object[property].value == ''){}

  else{
	alert(`${property}: ${object[property].value}`);
	localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
	//localStorage.setItem(`${property}`, `${object[property].value}`);

  }
  
}

}


function listandoAtendimento(object) {
  //localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);

  //const object = { a: 1, b: 2, c: 3 };

alert(Storage.length)

}










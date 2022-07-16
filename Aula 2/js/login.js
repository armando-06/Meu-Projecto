var tentativas = 3;

function autenticacao() {
	var email = window.document.getElementById('Email').value;
	var password = window.document.getElementById('Password').value;

	if (email=="armando@gmail.com" && password=="khallomanuel") {
		alert("feito");
	}else{
		tentativas = tentativas - 1;
		alert("login invalido,voce so tens"+tentativas+"tentativas avaliadas");
		if (tentativas==0){
			window.document.getElementById('Email').disabled=true;
			window.document.getElementById('Password').disabled=true;
			window.document.getElementById('frmLogin').disabled=true;
		}
	}
}
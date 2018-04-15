function print (txt){
	var output = $('x'); // busca por id
	output.innerHTML += txt;
}

function println (txt){
	print(txt + '\n');
}

function clearConsole() {
	var output = $('x'); // busca por id
	output.innerHTML = '';
}

function getConsoleData() {
	var input = $('x'); // busca por id
	return input.innerHTML;
}

function desenhar3(tamanho) {
	println("  "+1);
	println(" "+2+" "+2);
	println(3+"   "+3);
	println(" "+2+" "+2);
	println("  "+1);
}

function desenhar2(tamanho) {
	println(" "+1);
	println(2+" "+2);
	println(" "+1);
}

function printarEspaco(quantidade){
	for (var i = 0; i < quantidade; i++){
		print(" ");
	}
}

function imprimirDiamante1Linha (tamanho, i) {
	printarEspaco(tamanho - i - 1); 
	print(i + 1);
	if (i > 0){
		printarEspaco(i*2-1);
		print(i + 1);
	}
	println("");
}

function desenhar (tamanho){
	for(var i = 0; i < tamanho; i++){
		imprimirDiamante1Linha(tamanho, i);
	}

	for(var i = tamanho-2; i >= 0; i--){
		imprimirDiamante1Linha(tamanho, i);
	}
}

(function() {

	var x;

	function initGlobals() {
		x = $('x'); // busca por id
	}

	function initLinks() {
	}

	function initButtons() {
		//var n = document.forms[0].numero;
		var form = document.forms[0];
		form.addEventListener('submit', function() { formOnSubmit(event, this); });
	}
	function formOnSubmit(event, sender) {
		//console.log(event, sender);
		var n = new Number(sender.numero.value);
		if(n){
			if(n > 0 && n <10 ){
				clearConsole();
				desenhar(sender.numero.value);
			}else{
				window.alert("Insira um numero entre 1 e 9");
			}
		}else{
				window.alert("Insira um numero entre 1 e 9");
		}
		
		event.preventDefault();
	}

	function init() {
		initGlobals();
		initLinks();
		initButtons();
		desenhar(9);
	}

	window.addEventListener('load', function() { init(); });

})();

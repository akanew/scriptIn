var componentsArr = document.querySelectorAll( 'script[type="text/components"]' );
var componentText = "";
var script = "";

for(var i=0; i<componentsArr.length; i++){
	//Получаем текст из <script type="text/components">
	componentText = componentsArr[i].innerHTML;
	
	//Извлекаем запускаемый код
	script = getScript(componentText)
	
	//-- Выполняем операции по удалению --//
	
	//Заменяем '{{','}}' на <script>
	componentText = replaceScriptWord(componentText);
	
	//Заменяем скрипт
	componentText = replaceClassWord(componentText);

	//Заменить исходный текст
	componentsArr[i].parentNode.innerHTML+=componentText;
	//componentsArr[i].parentNode.removeChild(componentsArr[i]);
	
	//-- ------------------------------ --//
	
	//Запускаем скрипт
	eval(script);
}

function getScript(componentTextWithoutScript){
	var halfScript = componentTextWithoutScript.split(/{{(.*)}}/);	
	var onlyScript = halfScript[1];
	
	return  onlyScript;
}

function replaceScriptWord(componentText){
	componentText = componentText.replace('{{','<script>');
	componentText = componentText.replace('}}',"<-/script>");
	componentText = componentText.replace('<-/',"</");

	return componentText;
}

function replaceClassWord(componentText){
	componentText = componentText.replace('className','class');

	return componentText;
}
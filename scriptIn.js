var componentsArr = document.querySelectorAll( 'script[type="text/components"]' );
var componentText = "";
var script = "";

for(var i=0; i<componentsArr.length; i++){
	//�������� ����� �� <script type="text/components">
	componentText = componentsArr[i].innerHTML;
	
	//��������� ����������� ���
	script = getScript(componentText)
	
	//-- ��������� �������� �� �������� --//
	
	//�������� '{{','}}' �� <script>
	componentText = replaceScriptWord(componentText);
	
	//�������� ������
	componentText = replaceClassWord(componentText);

	//�������� �������� �����
	componentsArr[i].parentNode.innerHTML+=componentText;
	//componentsArr[i].parentNode.removeChild(componentsArr[i]);
	
	//-- ------------------------------ --//
	
	//��������� ������
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
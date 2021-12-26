const list =['Amarelo','Amiga','Amor','Aviao','Balao','Bebe','Bolo','Branco','Cama','Caneca','Celular','Clube','Copo','Doce','Elefante','Escola','Estojo','Faca','Foto','Garfo','Geleia','Girafa','Janela','Limonada','Meia','Noite','Oculos','onibus','Parque','Passarinho','Peixe','Pijama','Rato','Umbigo','Afobado','Amendoim','Banheiro','Caatinga','Cachorro','Campeonato','Capricornio','Catapora','Crepusculo','Empregado','Esparadrapo','Forca','Galaxia','Historia','Magenta','Manjericao','Menta','Moeda','Palavra','Pedreiro','Pneumonia','Pulmao','Rotatoria','Serenata','Transeunte','Trilogia','Xicara','loucura','skate','edificio','Acender','Afilhado','Ardiloso','Aspero','Asterisco','Basquete','Caminho','Champanhe','Chiclete','Chuveiro','Coelho','Contexto','Convivencia','Desalmado','Eloquente','Esfirra','Esquerdo','Fugaz','Gororoba','Heterossexual','Horrorizado','Impacto','Independencia','Modernidade','Oftalmologista','Otorrinolaringologista','Paralelepipedo','Pororoca','Prognosticio','Quarentena','Quimera','Reportagem','Sino','Taciturno','Tenue','Visceral'];
let life = 6;
let miss =[];
let tries = [];
let hitCounter = 0;
	
let secret = list[Math.floor(Math.random()*list.length)].toUpperCase();
console.log(secret);
let word = [];

for(let i = 0; i < secret.length; i++ ){
    word.push("-");
}
let wordStr = word.join("");


const showWord = document.getElementById("word");
showWord.innerHTML = `Palavra: ${wordStr}`;
const showMiss = document.getElementById("miss");
const showLife = document.getElementById("life");
const guess = document.getElementById("guess");
const guessLabel = document.getElementById("guess-label");
const btnShot = document.getElementById("btnShot");
const btnRestart = document.getElementById("btnRestart");
const head = document.getElementById("head");
const body = document.getElementById("body");
const rightArm = document.getElementById("right-arm");
const leftArm = document.getElementById("left-arm");
const rightLeg = document.getElementById("right-leg");
const leftLeg = document.getElementById("left-leg");
const rightEye = document.getElementById("right-eye");
const leftEye = document.getElementById("left-eye");
const headWin = document.getElementById("head-win");
const mouth = document.getElementById("mouth");
const leftEyeWin = document.getElementById("left-eye-win");
const rightEyeWin = document.getElementById("right-eye-win");
const my = document.getElementById("my");
const hero = document.getElementById("hero");



function shot() {
    const letter = guess.value.toUpperCase();
    if(/^[a-zA-Z()]$/.test(letter)){
		if(tries.includes(letter)){
			guess.value = "";
			return alert("Letra repetida!\nTente novamente");

			
		}else{
			tries.push(letter);
			if(secret.includes(letter)){
				hitCounter++;
				for (let i=0;i<secret.length;i++) {
					if(secret[i]===letter){
						word[i] = letter;
						wordStr = word.join("");
					}
				}
				showWord.innerHTML = `Palavra: ${wordStr}`;
				hitCheck();
			}else{
				miss.push(letter);
				showMiss.innerHTML = "Erros: "+ miss.join("-");
				showMiss.setAttribute("style","display:block");
				missCheck();
				hang();
			}			
		}
	}else{
		alert("Digite apenas letras, uma por vez");
	}	
	guess.value=null;
  guess.focus();
}

const missCheck = () => {
	life--;
	if(life >0) {
		
        showLife.innerHTML = `Vidas ${life}/6`;
	}else{
		showLife.innerHTML = "Faleceu! <span class='shablauwn'> ☠️</span>";
		showLife.style.fontSize="3rem";
		showWord.innerHTML += `<br>Palavra Secreta: ${secret}`;
        btnShot.style.display = "none";
		guessLabel.style.display = "none"; 
        btnRestart.style.display = "block"   
	}
}

const hitCheck = () => {
	if((wordStr.match(/-/g)||[]).length === 0){
		showLife.innerHTML = `Parabéns!!<span class='shablauwn'> 🏆</span>`;
		showLife.style.fontSize = "3rem"
		guess.disabled = true;
		btnShot.disabled = true;
		btnRestart.style.display = "block";
		headWin.style.display = "block";
		mouth.style.display = "block";
		leftEyeWin.style.display = "block";
		rightEyeWin.style.display = "block";
		my.style.display = "block";
		hero.style.display = "block";
		
	}
}

const hang = () => {
	const x = miss.length;
	switch(x){
		case 1:
			head.style.display="block";
			break;    
		case 2:
			body.style.display="block";
			break;
		case 3:
			rightArm.style.display="block";
			break;
		case 4:
			leftArm.style.display="block";
			break;
		case 5:
			rightLeg.style.display="block";
			break;
		case 6:
			leftLeg.style.display="block";
			rightEye.style.display="block";
			leftEye.style.display="block";
			break;
	}
}

const restart = () => {
	life = 6; 
	showLife.innerHTML = `Vidas: ${life}/6`;
	showLife.style.fontSize = "1rem"; 
	word =[];
	miss = [];
	tries = [];
	hitCounter = 0;
	secret = list[Math.floor(Math.random()*list.length)].toUpperCase();
	for(let i=0; i < secret.length;i++){
		word.push("-");
	}
	wordStr = word.join("");
	showWord.innerHTML = `Palavra: ${wordStr}`;
	guess.value = "";
	guess.style.display = "inline-block";
	guess.disabled = false;
	btnShot.disabled = false;
	guessLabel.style.display = "inline-block";
	btnShot.style.display = "inline-block";
	btnRestart.style.display = "none";
	showMiss.style.display = "none";
	head.style.display = "none";
	body.style.display = "none";
	rightArm.style.display = "none";
	leftArm.style.display = "none";
	rightLeg.style.display = "none";
	leftLeg.style.display = "none";
	rightEye.style.display = "none";
	leftEye.style.display = "none";
	headWin.style.display = "none";
	mouth.style.display = "none";
	leftEyeWin.style.display = "none";
	rightEyeWin.style.display = "none";
	my.style.display = "none";
	hero.style.display = "none";
}


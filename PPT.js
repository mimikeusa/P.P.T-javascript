function resultado(opcion) {
  let resultado;
  let bot = Math.floor(Math.random() * 3);
  let emoji
  //console.log(opcion)
  //console.log(bot)
  if (opcion == bot) {
    if (opcion == 0) {
      resultado = "Tu - Bot"
      emoji = "<spam class='mr-3'>✊</spam> <spam class='ml-3'>✊</spam>"
    };
    if (opcion == 1) {
      resultado = "Tu - Bot"
      emoji = "<spam class='mr-3'>✋</spam> <spam class='ml-3'>✋</spam>"
    };
    if (opcion == 2) {
      resultado = "Tu - Bot"
      emoji = "<spam class='mr-3'>✌</spam> <spam class='ml-3'>✌</spam>"
    };
    //piedra = 0
    //papel = 1
    //tijeras= 2
  }
  else if (opcion == 0 && bot == 1) {
    resultado = 'Tu - Bot ';//Bot gana
    emoji = '<spam class="text-sky-400/50 mr-3">✊</spam> <spam class="text-6xl ml-4">✋</spam>';
  }
  else if (opcion == 0 && bot == 2) {
    resultado = 'Tu - Bot';//Tu gana
    emoji = '<spam class="text-6xl mr-4 mt-8">✊</spam> <spam class="text-sky-400/50" ml-3 mt-8>✌</spam>';
  }
  else if (opcion == 1 && bot == 0) {
    resultado = 'Tu - Bot';//Tu gana
    emoji = '<spam class="text-6xl mr-4 mt-8">✋</spam> <spam class="text-sky-400/50 ml-3 mt-8">✊</spam>';
  }
  else if (opcion == 1 && bot == 2) {
    resultado = 'Tu - Bot';//Bot gana
    emoji = '<spam class="text-sky-400/50 mr-3 mt-8">✋</spam> <spam class="text-6xl ml-4 mt-8">✌</spam>';
  }
  else if (opcion == 2 && bot == 0) {
    resultado = 'Tu - Bot';//Bot gana
    emoji = '<spam class="text-sky-400/50 mr-3 mt-8">✌</spam> <spam class="text-6xl ml-4 mt-8">✊</spam>';
  }
  else if (opcion == 2 && bot == 1) {
    resultado = 'Tu - Bot';//Tu gana
    emoji = '<spam class="text-6xl mr-4 mt-8">✌</spam> <spam class="text-sky-400/50 ml-3 mt-8">✋</spam>';
  }
  document.getElementById("resultado").innerHTML = "<div class'flex'>" + resultado + "</div>";
  document.getElementById("emoji").innerHTML = emoji;
}
var i = 1
var j = 1
function conteotu() {
  if (opcion == 0 && bot == 2) {
    i++
    //console.log(i)
  };
  if (opcion == 1 && bot == 0) {
    i++
    //console.log(i)
  };
  if (opcion == 2 && bot == 1) {
    i++
    //console.log(i)
  };
};
function contadorbot() {
  if (opcion == 0 && bot == 1) {
    j++
    //console.log(j)
  };
  if (opcion == 1 && bot == 2) {
    j++
    //console.log(j)
  };
  if (opcion == 2 && bot == 0) {
    j++
    //console.log(j)
  };
};
document.getElementById("i").innerHTML = i;
document.getElementById("j").innerHTML = j;




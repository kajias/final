var btn = document.getElementById('btn');
var content = document.getElementById('content');

var speech = new webkitSpeechRecognition();

speech.lang = "ja";

btn.addEventListener('click', function () {
  speech.start();
});

speech.addEventListener('result', function (e) {
  console.log(e);
  var text = e.results[0][0].transcript;

  switch (text) {
    case "まる":
      getcircle();
      break;
    case "資格":
      getsquare();
      break;
    case "星":
      getstar();
      break;
    case "ニコちゃん":
      getniko();
      break;
    default:
      getTextContents(text);
  }
});

function getTextContents(text) {
  alert("あなたは「" + text + "」と言いました");
}

function getcircle() {

  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) {
    return false;
  }
  var ctx = canvas.getContext('2d');
  // ctx.clearRect();
  ctx.beginPath();
  ctx.arc(70, 70, 60, 0, Math.PI * 2, false);
  ctx.stroke();
}

function getsquare() {
  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) {
    return false;
  }
  var ctx = canvas.getContext('2d');
  // ctx.clearRect();
  ctx.beginPath();
  ctx.strokeRect(20, 20, 80, 40);
}

function getstar() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // ctx.clearRect();

  var x = 100;
  var y = 100;
  var r = 80;

  ctx.lineWidth = 3.0;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';

  ctx.beginPath();
  ctx.moveTo(x + Math.sin(0 * 2 * Math.PI / 5) * r, y - Math.cos(0 * 2 * Math.PI / 5) * r);
  ctx.lineTo(x + Math.sin(2 * 2 * Math.PI / 5) * r, y - Math.cos(2 * 2 * Math.PI / 5) * r);
  ctx.lineTo(x + Math.sin(4 * 2 * Math.PI / 5) * r, y - Math.cos(4 * 2 * Math.PI / 5) * r);
  ctx.lineTo(x + Math.sin(1 * 2 * Math.PI / 5) * r, y - Math.cos(1 * 2 * Math.PI / 5) * r);
  ctx.lineTo(x + Math.sin(3 * 2 * Math.PI / 5) * r, y - Math.cos(3 * 2 * Math.PI / 5) * r);
  ctx.lineTo(x + Math.sin(0 * 2 * Math.PI / 5) * r, y - Math.cos(0 * 2 * Math.PI / 5) * r);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function getniko() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // ctx.clearRect();

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}

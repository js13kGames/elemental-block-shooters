var Game = (function() {

  var canvas = document.getElementById('c1'),
      ctx = canvas.getContext('2d');

  return {
    width: 32 * 12,
    height: 32 * 12,
    tileSize: 32,
    now: 0,
    last: 0,
    delta: 0,
    solidTiles: [],
    c1: canvas,
    c1ctx: ctx
  }

}());

//air
for (i = 0; i < 34; i++) {
  Game.solidTiles.push(i);
};
//water
for (i = 37; i < 94; i++) {
  Game.solidTiles.push(i);
};
//earth
for (i = 97; i < 154; i++) {
  Game.solidTiles.push(i);
};
//fire
for (i = 157; i < 214; i++) {
  Game.solidTiles.push(i);
};

for (i = 217; i < 250; i++) {
  Game.solidTiles.push(i);
};

function angleCalc(sx, sy, tx, ty) {
  return Math.atan2(ty - sy, tx - sx);
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
var Game = {
  width: 32 * 20,
  height: 32 * 12,
  tileSize: 32,
  now: 0,
  last: 0,
  delta: 0,
  solidTiles: [],
  c1: document.getElementById('c1'),
  c1ctx: this.c1.getContext('2d')
};

//air
for (var i = 0; i < 34; i++) {
  Game.solidTiles.push(i);
};
//water
for (i = 35; i < 94; i++) {
  Game.solidTiles.push(i);
};
//earth
for (i = 95; i < 154; i++) {
  Game.solidTiles.push(i);
};
//fire
for (i = 155; i < 214; i++) {
  Game.solidTiles.push(i);
};

function angleCalc(sx, sy, tx, ty) {
  return Math.atan2(ty - sy, tx - sx);
};

Game.solidTiles.push(40);

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}
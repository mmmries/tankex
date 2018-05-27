import * as PIXI from "pixi.js"

let app = new PIXI.Application({width: 600, height: 600});

function setup_scene() {
  let tank = new PIXI.Sprite(
    PIXI.loader.resources["images/tank.png"].texture
  );
  window.tank = tank
  app.stage.addChild(tank);
}

export default function(){
  document.body.appendChild(app.view);
  app.renderer.backgroundColor = 0x4a5559;
  app.renderer.autoResize = true;

  PIXI.loader
    .add("images/tank.png")
    .load(setup_scene)
}
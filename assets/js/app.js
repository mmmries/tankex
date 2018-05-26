// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import * as PIXI from "pixi.js"

if(document.getElementById("game_board")) {
  let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
  document.body.appendChild(app.view);
  app.renderer.backgroundColor = 0x4a5559;
  app.renderer.autoResize = true;

  PIXI.loader
    .add("images/tank.png")
    .load(load_sprites);

  function load_sprites(){
    let tank = new PIXI.Sprite(
      PIXI.loader.resources["images/tank.png"].texture
    );
    window.tank = tank
    app.stage.addChild(tank);
  }
}


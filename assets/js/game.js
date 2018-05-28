let p = planck

export default function(){
  p.testbed("tanks", function(testbed) {
    let world = new p.World()
    let tankBody = world.createBody({
      type : 'dynamic',
      angularDamping : 0.0,
      linearDamping : 0.0,
      position : p.Vec2(0,0),
      angle : (-0.5 * Math.PI),
    })
    tankBody.createFixture(p.Circle(5.0))
    window.tankBody = tankBody

    let edges = world.createBody()
    edges.createFixture(p.Edge(p.Vec2(-50,50), p.Vec2(50,50)), {density: 0.0})
    edges.createFixture(p.Edge(p.Vec2(-50,-50), p.Vec2(50,-50)), {density: 0.0})
    edges.createFixture(p.Edge(p.Vec2(-50,-50), p.Vec2(-50,50)), {density: 0.0})
    edges.createFixture(p.Edge(p.Vec2(50,-50), p.Vec2(50,50)), {density: 0.0})

    window.testbed = testbed
    testbed.width = 100.0
    testbed.height = 100.0
    testbed.x = 0
    testbed.y = 0
    testbed.ratio = 8
    let globalTime = 0
    testbed.step = function(dt){
      globalTime += dt
      let point = tankBody.getWorldCenter()
      let force = p.Vec2(Math.cos(globalTime/2000.0)*0.05, Math.sin(globalTime/2000.0)*0.05)
      console.log(force)
      tankBody.applyLinearImpulse(force, point, true)
      tankBody.applyAngularImpulse(100.0, true)
    }

    return world
  })
}
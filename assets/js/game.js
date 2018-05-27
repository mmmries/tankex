let p = planck

export default function(){
  p.testbed("tanks", function(testbed) {
    let world = new p.World()
    let tankBody = world.createBody({
      type : 'dynamic',
      angularDamping : 2.0,
      linearDamping : 0.5,
      position : p.Vec2()
    })
    tankBody.createFixture(p.Circle(10.0))
    window.tankBody = tankBody
    return world
  })
}
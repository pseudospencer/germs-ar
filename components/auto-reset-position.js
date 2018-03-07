AFRAME.registerComponent('auto-reset-position', {
  init: function () {
  },
  schema: {
    maxDistance: {type: 'float', default: 50},
  },
  tick: function() {
    let camera = document.querySelector('#camera').object3D;
    let body = this.el.body;
    let cameraPosition = camera.getWorldPosition();

    //calulate distance
    let a = cameraPosition.x - body.position.x;
    let b = cameraPosition.z - body.position.z;
    let d = Math.sqrt( a*a + b*b );

    if( d > this.data.maxDistance ) {
      let p = cameraPosition.add(camera.getWorldDirection().multiplyScalar(-10));
      p.y = 20;
      p.x += (Math.random() * 20) - 10;
      p.z += (Math.random() * 20) - 10;
      body.position.copy(p);
      body.velocity.set(0,0,0);
      body.angularVelocity.set(0,0,0);
    }

  }

});

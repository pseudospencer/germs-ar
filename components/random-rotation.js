AFRAME.registerComponent('random-rotation', {
    /*
        This component rotates the entity that it's attached to randomly in 3d space.
    */
    schema: {
        maxRotate: { type: "float", default: 15.0 },
    },

    init: function() {
    },

    tick: function() {
        let xPlus = Math.round(getRandomBetween(-this.data.maxRotate, this.data.maxRotate));
        let yPlus = Math.round(getRandomBetween(-this.data.maxRotate, this.data.maxRotate));
        let zPlus = Math.round(getRandomBetween(-this.data.maxRotate, this.data.maxRotate));

        // NOTE: Docs reccomend directly setting with three.js property rather than using setAttribute: https://github.com/aframevr/aframe/blob/master/docs/components/rotation.md
        this.el.object3D.rotateX(THREE.Math.degToRad(xPlus));
        this.el.object3D.rotateY(THREE.Math.degToRad(yPlus));
        this.el.object3D.rotateZ(THREE.Math.degToRad(zPlus));
    }
});

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

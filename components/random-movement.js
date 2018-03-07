/*
    Info on writing components:
    https://aframe.io/docs/0.7.0/introduction/writing-a-component.html
*/


AFRAME.registerComponent('random-movement', {
    /*
        I want this component to make the entity it's attatched to do a random walk.
        Need: x-variance, y-variance, z-variance, magnitude?
        Maybe a rotation that corresponds to how it's moving? that might be better to separate out
    */
    schema: {
        scalar: { type: "float", default: 0.01 },
    },

    init: function() {
        this.directionVec3 = new THREE.Vector3();
    },

    tick: function() {
        // Create a randomized Vector3, convert to unit Vector3
        let xPlus = getRandomBetween(-1, 1);
        let yPlus = getRandomBetween(-1, 1);
        let zPlus = getRandomBetween(-1, 1);
        this.directionVec3.set(xPlus, yPlus, zPlus);
        let d1 = this.directionVec3;

        this.directionVec3.normalize();
        let d2 = this.directionVec3;

        // Scale based on scalar
        this.directionVec3.multiplyScalar(this.data.scalar);
        let d3 = this.directionVec3;

        // Update position of entity
        let currentPosition = this.el.object3D.position;
        this.el.setAttribute('position', {
            x: currentPosition.x + this.directionVec3.x,
            y: currentPosition.y + this.directionVec3.y,
            z: currentPosition.z + this.directionVec3.z
        });
        // console.log(d1, d2, d3, this.el.object3D.position);
    }
});

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(200, 200);
    const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x007700 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Create a player (cube)
    const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
    const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.position.y = 0.5;
    scene.add(player);

    // Controls
    const keys = { w: false, a: false, s: false, d: false };
    document.addEventListener('keydown', (e) => { keys[e.key] = true; });
    document.addEventListener('keyup', (e) => { keys[e.key] = false; });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Player movement
        if (keys.w) player.position.z -= 0.1;
        if (keys.s) player.position.z += 0.1;
        if (keys.a) player.position.x -= 0.1;
        if (keys.d) player.position.x += 0.1;

        // Update camera position
        camera.position.set(player.position.x, player.position.y + 5, player.position.z + 10);
        camera.lookAt(player.position);

        renderer.render(scene, camera);
    }

    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.impressionist-container');
    const numObjects = 10;

    for (let i = 0; i < numObjects; i++) {
        const object = document.createElement('div');
        object.classList.add('impressionist-object');
        
        const size = Math.random() * 100 + 50;
        object.style.width = `${size}px`;
        object.style.height = `${size}px`;
        
        object.style.left = `${Math.random() * 100}vw`;
        object.style.top = `${Math.random() * 100}vh`;
        
        container.appendChild(object);

        animateObject(object);
    }
});

function animateObject(object) {
    const duration = Math.random() * 10000 + 5000;
    const xMovement = Math.random() * 200 - 100;
    const yMovement = Math.random() * 200 - 100;

    object.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xMovement}px, ${yMovement}px)` }
    ], {
        duration: duration,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}
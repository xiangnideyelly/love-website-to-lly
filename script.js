
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 10 + 5 + 's';
    petal.style.opacity = Math.random();
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    const petals = document.getElementById('petals');
    petals.appendChild(petal);

    setTimeout(() => {
        petals.removeChild(petal);
    }, (parseFloat(petal.style.animationDuration) * 1000));
}

setInterval(createPetal, 200);


const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

if (yesBtn) {
    yesBtn.addEventListener('click', function () {
        alert('哇！太开心了！我们去哪玩？都听你的');
    });
}

if (noBtn) {
    noBtn.addEventListener('click', function () {
        alert('没关系的，我可以等你慢慢了解我哦~');
    });
}
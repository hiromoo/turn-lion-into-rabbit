const toraImg = document.getElementById('img-tora');
const usagiImg = document.getElementById('img-usagi');
const container = document.getElementById('container');

for (let i = 0; i < 100; i++) {
    const cloneToraImg = toraImg.cloneNode();
    cloneToraImg.hidden = false;
    cloneToraImg.addEventListener('click', () => {
        cloneToraImg.src = usagiImg.src;
    });
    container.appendChild(cloneToraImg);
}
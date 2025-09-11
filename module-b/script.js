document.addEventListener('DOMContentLoaded',() => {
    const TopEl = document.querySelectorAll('.init');
    console.log(TopEl);
    TopEl.forEach((TopEl, index, arr) => {
        setTimeout(() => {
            TopEl.classList.add('visible');
        }, index >= arr.length -2 ? (arr.length - 2) * 100 + 500 : index * 100);
    });
})
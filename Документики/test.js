
test('анимация при наведении', () => {
    document.getElementById("opn");
    opn.addEventListener('mouseenter', () => {
        opn.style.backgroundColor = '#A89543';
    });
    opn.addEventListener('mouseleave', () => {
        opn.style.backgroundColor = '#DEC55A';
    });
    expect(('mouseleave', () => {
        opn.style.backgroundColor = '#DEC55A';
    }));
    expect('mouseenter', () => {
        opn.style.backgroundColor = '#A89543';
    });
})

test('Открытие 1ого окна регистрации', () => {
let reg = document.getElementById("reg");

document.getElementById("opn").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
})
document.getElementById('close').addEventListener("click", function () {
    document.getElementById("modal").classList.remove("open")
})
    expect(document.getElementById("modal").classList.add("open"))
    expect(document.getElementById("modal").classList.remove("open"))
})

test('Открытие 2ого окна регистрации', () => {
let reg = document.getElementById("reg");

document.getElementById("open").addEventListener("click", function () {
    document.getElementById("modall").classList.add("open")
})
document.getElementById('alclose').addEventListener("click", function () {
    document.getElementById("modall").classList.remove("open")
});
    expect(document.getElementById("modall").classList.add("open"))
    expect(document.getElementById("modall").classList.remove("open"))
})
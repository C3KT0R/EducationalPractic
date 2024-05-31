let mail = document.getElementById("regmail").value;
let pass = document.getElementById("regpas");
let phone = document.getElementById("regphone");
let reg = document.getElementById("reg");


document.getElementById("opn").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
})
document.getElementById('close').addEventListener("click", function () {
    document.getElementById("modal").classList.remove("open")
})
document.getElementById('alclose').addEventListener("click", function () {
    document.getElementById("modal").classList.remove("open")
})

document.getElementById("open").addEventListener("click", function () {
    document.getElementById("modall").classList.add("open")
})
document.getElementById('alclose').addEventListener("click", function () {
    document.getElementById("modall").classList.remove("open")
})


reg.addEventListener('click', function () {
localStorage.setItem('mail',input.value(), 'pass', input.value(), 'phone', input.value());
// alert('Ура');
location.reload();
})
let dropdown = document.querySelector(".dropDown");
console.log(dropdown);

dropdown.onclick = function () {
    dropdown.classList.toggle('active');
};
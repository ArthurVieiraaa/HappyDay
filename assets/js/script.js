function toggleMenu(){
    const menuMobile = document.getElementById('menu-mobile');

    if(menuMobile.className === "menu-mobile-active"){
        menuMobile.className = "menu-mobile";
    }else{
        menuMobile.className = "menu-mobile-active";
    }
}

const products = document.querySelectorAll(".card, .card-clientes");

function quantidade() {
    let total = products.length || 0;

    const totalElement = document.querySelector(".mostrador");

    if (totalElement) {
        totalElement.textContent = total;
    }

    return total;
}

quantidade();


const openModalButtons = document.querySelectorAll("#open-modal, #open-modal-classic");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => toggleModal());
});


[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
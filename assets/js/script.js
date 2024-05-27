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

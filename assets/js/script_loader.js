let elem_preloading = document.getElementById("preloading");
let elem_loading = document.getElementById("loading");
console.log(" Ok");

setTimeout(function() {
    elem_preloading.classList.remove("preloading");
    elem_loading.classList.remove("loading");
    }, 1280);
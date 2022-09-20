var titles = document.querySelectorAll(".black");

titles.forEach((tit, index) => {
    tit.addEventListener("click", () => {
        window.open(`../src/image${tit.id}.html`, "_parent");
    });
});

let counter=0;
function onBtnClick() {
    counter+=1;
    const div = document.querySelector("div");
    div.innerText = "Вы кликнули " + counter + " раз";
}
document.addEventListener("DOMContentLoaded", function () {
 const btn = document.querySelector("button");
 btn.addEventListener("click", onBtnClick);
 btn.addEventListener("click", () => {console.log("clicked")});
});
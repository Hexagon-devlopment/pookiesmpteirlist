// PookieSMP Rankings Script 🌸

console.log("PookieSMP Rankings Loaded");


// Sakura petals effect

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    document.body.appendChild(petal);


    setTimeout(()=>{
        petal.remove();
    },10000);

}


setInterval(createPetal,800);



// Button animation

document.querySelectorAll("button")
.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },100);

    });

});
window.addEventListener("storage", ()=>{
    loadLeaderboard();
});
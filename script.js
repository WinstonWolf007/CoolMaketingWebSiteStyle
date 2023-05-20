let items = document.querySelectorAll(".item");
let switched = true;
let endTime = true;

for (let i of items) {
    i.addEventListener("click", () => {
        if (switched && endTime) {
            switched = false;
            i.style.height = "132px";
            i.style.animation = "resizeBoxF 0.3s forwards";
            setTimeout(() => {
                i.style.height = "170px";
                endTime = true;
            }, 300);
        }
        else if (!switched && endTime) {
            switched = true;
            i.style.height = "170px";
            i.style.animation = "resizeBoxB 0.3s forwards";
            setTimeout(() => {
                i.style.height = "132px";
                endTime = true;
            }, 300);
        }
    
        endTime = false;
    });
}

// alert(window.innerHeight)

setInterval(() => {
    let r = document.querySelector("#items");
    r.style.setProperty('height', (window.innerHeight-100).toString()+"px");
}, 100)


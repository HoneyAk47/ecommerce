let mode = document.querySelector("#darkmode");
let body1 = document.querySelector("nav");
let body2 = document.querySelector("footer");
let currentmode = "lite";

mode.addEventListener("click", () => {
    if (currentmode == "lite") {
        body1.classList.add("dark");
        body1.classList.remove("white");
        body2.classList.add("dark");
        body2.classList.remove("white");
        currentmode = "dark";
        mode.innerHTML = "Light";
        mode.style.backgroundColor = "orange";
        
    } else {
        body1.classList.add("white");
        body1.classList.remove("dark");
        body2.classList.add("footer");
        body2.classList.remove("dark");
        currentmode = "lite";
        mode.innerHTML = "Dark";
        mode.style.backgroundColor = "rgb(166, 202, 190)";
        
    }
});

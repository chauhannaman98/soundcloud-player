function toggleSideBar() {
    var x = document.querySelector(".col-left");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animationName = "sideBarOpen";
        x.style.animationDuration = "1s";
    } else {
        x.style.display = "none";
        x.style.animationName = "sideBarClose";
        x.style.animationDuration = "1s";
    }
}

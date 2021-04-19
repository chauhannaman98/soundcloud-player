var resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', function()    {
    localStorage.clear();
    sideBar.innerHTML = localStorage.getItem("key");
});

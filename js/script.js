const toggleBtn = document.getElementById("toggleBtn");
const menuItems = document.getElementById("menuItems");

toggleBtn.addEventListener("click", function ()
{
    if (menuItems.style.display === "none")
    {
        menuItems.style.display = "block";
    }
    else
    {
        menuItems.style.display ="none";
    }
})
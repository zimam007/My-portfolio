document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".skillinks");
    const contents = document.querySelectorAll(".contents");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => {
                c.classList.remove("active");
                c.style.display = "none"; // Hide all contents
            });

            // Add 'active' class to the clicked tab and show corresponding content
            tab.classList.add("active");
            contents[index].classList.add("active");
            contents[index].style.display = "grid"; // Use grid to keep formatting
        });
    });

    // Set the first tab (Skills) as active on page load
    if (tabs.length > 0) {
        tabs[0].classList.add("active");
        contents[0].classList.add("active");
        contents[0].style.display = "grid";
    }
});
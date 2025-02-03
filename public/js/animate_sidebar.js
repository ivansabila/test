const toggleSidebar = document.querySelector("#toggleSidebar");
const sidebar = document.querySelector(".sidebar");
const mainContain = document.querySelector(".mainContain"); ///

const titleSidebar = document.querySelector(".titleSidebar");
const heading = document.querySelector(".sidebar .flex .heading");
const itemSidebar = document.querySelectorAll(".itemSidebar");
const titleItemSidebar = document.querySelectorAll(".itemSidebar .flex .titleItemSidebar");
const iconItemSidebar = document.querySelectorAll(".itemSidebar .iconItemSidebar");
const profileSidebar = document.querySelector(".footer .profile .profileSidebar");
const iconProfileSidebar = document.querySelector(".footer .iconProfileSidebar");

// in appointment view
const cards = document.querySelector(".cards");

// get width and height (relative by window)
const width = window.innerWidth;
const height = window.innerHeight;

// get height (relative by content)
const contentHeight = document.body.scrollHeight;

let isToggle = false;

toggleSidebar.addEventListener("click", () => {
    isToggle = !isToggle;

    if (isToggle) {
        sidebar.style.width = "76px";
        titleSidebar.style.display = "none";
        mainContain.style.marginLeft = "76px";

        profileSidebar.style.display = "none";
        iconProfileSidebar.style.display = "none";

        heading.style.marginRight = "-12px";
        for (i = 0; i < titleItemSidebar.length; i++) {
            itemSidebar[i].style.justifyContent = "center";
            titleItemSidebar[i].style.display = "none";
            iconItemSidebar[i].style.display = "none";
        }

        // in appointment view
        if (contentHeight > height) {
            // change cards width
            cards.style.width = width - 116 - 10 + "px";
            console.log("true | scroll");
        } else {
            // change cards width
            cards.style.width = width - 116 + "px";
            console.log("true | no-scroll");
        }
    } else {
        sidebar.style.width = "320px";
        titleSidebar.style.display = "block";
        mainContain.style.marginLeft = "320px";

        profileSidebar.style.display = "block";
        iconProfileSidebar.style.display = "block";

        heading.style.marginRight = "20px";
        for (i = 0; i < titleItemSidebar.length; i++) {
            itemSidebar[i].style.justifyContent = "space-between";
            titleItemSidebar[i].style.display = "block";
            iconItemSidebar[i].style.display = "block";
        }

        // in appointment view
        if (contentHeight > height) {
            // change cards width
            cards.style.width = width - 360 - 10 + "px";
            console.log("false | scroll");
        } else {
            // change cards width
            cards.style.width = width - 360 + "px";
            console.log("false | no-scroll");
        }
    }
});

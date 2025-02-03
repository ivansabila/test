


// function for handle resize
function handleResize() {
    // get cards element (parent of card)
    let cards = document.querySelector(".cards");
    
    // get width and height (relative by window)
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // get height (relative by content)
    const contentHeight = document.body.scrollHeight;
    
    console.log(isToggle);
    if (isToggle) {
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
}

// add event for resize
window.addEventListener("resize", handleResize);

// call function when first load
handleResize();

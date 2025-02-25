// 1. Selecting Elements By ID

document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

// 2. Selecting Elements By Tag Name
let images = document.getElementsByTagName("img");

for (let image of images) {
    image.width = 250;
}

// 3. Selecting Elements By Class Name
let lightBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");
    // must turn collections into arrays to use forEach() method
let lightBlueSpansArray = Array.from(lightBlueSpans);
let dkBlueSpansArray = Array.from(dkBlueSpans);

lightBlueSpansArray.forEach(span => {
    span.style.color = "#7C9EA6"
})

dkBlueSpansArray.forEach(span => {
    span.style.color = "#3C5E73"
})


// 4. Selecting Elements By CSS Selector (as a group)
let svgs = document.querySelectorAll("#svgs svg");

let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

for (let i = 0; i < svgs.length; i++) {
    svgs[i].style.stroke = colors[i];
}

// 5. Selecting Elements By CSS Selector (as the first element that matches on the page)
document.querySelector("#query .bold").style.color = "#7C9EA6";

// 6. Changing DOM Node Content

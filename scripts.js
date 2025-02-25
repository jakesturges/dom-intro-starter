// Selecting Elements By ID

document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

// Selecting Elements By Tag Name
let images = document.getElementsByTagName("img");

for (let image of images) {
    image.width = 250;
}

// Selecting Elements By Class Name
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


// Selecting Elements By CSS Selector (as a group)

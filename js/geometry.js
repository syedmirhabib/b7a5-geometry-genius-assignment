// initial serial number
let serialNumber = 0;


// triangle calculation
const triangleBtn = document.getElementById("triangleBtn");
triangleBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    const triangleBase = getInputValue("triangleBase");
    const triangleHeight = getInputValue("triangleHeight");
    // checking this value
    if (triangleBase <= 0 || triangleBase === "" ||
        triangleHeight <= 0 || triangleHeight === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const triangleArea = parseFloat((0.5 * triangleBase * triangleHeight).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, triangleArea);
});


// rectangle calculation
const rectangleBtn = document.getElementById("rectangleBtn");
rectangleBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    const rectangleWidth = getInputValue("rectangleWidth");
    const rectangleLength = getInputValue("rectangleLength");
    // checking this value
    if (rectangleWidth <= 0 || rectangleWidth === "" ||
        rectangleLength <= 0 || rectangleLength === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const rectangleArea = parseFloat((rectangleWidth * rectangleLength).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, rectangleArea);
});


// parallelogram calculation
const parallelogramBtn = document.getElementById("parallelogramBtn");
parallelogramBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    const parallelogramBase = getInputValue("parallelogramBase");
    const parallelogramHeight = getInputValue("parallelogramHeight");
    // checking this value
    if (parallelogramBase <= 0 || parallelogramBase === "" ||
        parallelogramHeight <= 0 || parallelogramHeight === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const parallelogramArea = parseFloat((parallelogramBase * parallelogramHeight).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, parallelogramArea);
});


// rhombus calculation
const rhombusBtn = document.getElementById("rhombusBtn");
rhombusBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    const rhombusDiagonalOne = getInputValue("rhombusDiagonalOne");
    const rhombusDiagonalTwo = getInputValue("rhombusDiagonalTwo");
    // checking this value
    if (rhombusDiagonalOne <= 0 || rhombusDiagonalOne === "" ||
        rhombusDiagonalTwo <= 0 || rhombusDiagonalTwo === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const rhombusArea = parseFloat((0.5 * rhombusDiagonalOne * rhombusDiagonalTwo).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, rhombusArea);
});


// pentagon calculation
const pentagonBtn = document.getElementById("pentagonBtn");
pentagonBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    const pentagonPerameter = getInputValue("pentagonPerameter");
    const pentagonBase = getInputValue("pentagonBase");
    // checking this value
    if (pentagonPerameter <= 0 || pentagonPerameter === "" ||
        pentagonBase <= 0 || pentagonBase === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const pentagonArea = parseFloat((0.5 * pentagonPerameter * pentagonBase).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, pentagonArea);
});


// ellipse calculation
const ellipseBtn = document.getElementById("ellipseBtn");
ellipseBtn.addEventListener("click", function(e) {
    // get name 
    const name = e.target.parentNode.children[1].innerText;
    // get input value
    let ellipseAxisOfA = getInputValue("ellipseAxisOfA");
    const ellipseAxisOfB = getInputValue("ellipseAxisOfB");
    // checking this value
    if (ellipseAxisOfA <= 0 || ellipseAxisOfA === "" ||
        ellipseAxisOfB <= 0 || ellipseAxisOfB === "") {
            alert("Please Fill up input with a valid number!");
            return;
    }
    // calculate triangle area
    const ellipse = parseFloat((3.14 * ellipseAxisOfA * ellipseAxisOfB).toFixed(2));
    // update serial number
    serialNumber += 1;
    // show calculate data
    showCalculation(serialNumber, name, ellipse);
});


// random background color for hover cards
const geometryCards = document.getElementsByClassName("geometry-card");
for (const card of geometryCards) {

    card.addEventListener("mouseover", function() {
        // rgb color from 'function.js'
        const rgb = generateRandomColor();
        card.style.backgroundColor = rgb;
    });
}


//Functions below

// function for getting input value by "id"
function getInputValue(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;
}

// function for showing data of the area calculation
function showCalculation(serial, name, area) {
    const tableBody = document.getElementById("tableBody");
    const tr = document.createElement("tr");

    tr.classList.add("customStyle");
    tr.innerHTML = `
    <td class="py-2 "> 
        ${serial}.
    </td>
    <td class="py-2 pr-4">
        ${name}
    </td>
    <td class="py-2 pr-4">
        ${area}cm<sup>2</sup>
    </td>
    <td class="py-2 px-4 bg-sky-500 rounded-lg text-white text-center cursor-pointer">
        Covert to m<sup>2</sup>
    </td>
    `
    tableBody.appendChild(tr);
}

// function for generating random color
function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const rgb = `rgb(${red},${green},${blue})`
    return rgb;
}
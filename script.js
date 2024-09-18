const svg_img = document.querySelector(".svg img")
const container = document.querySelector(".container")
const contents = document.createElement("div")
contents.setAttribute("class", "contents")
container.appendChild(contents)
let clicked = false

svg_img.addEventListener("click", onClick = () => {
    clicked = !clicked
    if (clicked) {

        contents.innerHTML = `
        <ol type="1">
            <li><a href="https://atrajit-sarkar.github.io/Real-Analysis/">Real Analysis</a></li>
            <li><a href="">Ordinary Differential Equations</a></li>
            <li><a href="">Group Theory</a></li>
            <li><a href="">Linear Algebra</a></li>
            <li><a href="">Computer Programming (C/C++)</a></li>
        </ol>`
    }
    else{
        contents.innerHTML=``
    }
})

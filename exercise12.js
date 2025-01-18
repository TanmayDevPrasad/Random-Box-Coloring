let boxes = document.getElementsByClassName("box")
let but = document.getElementById("btn")


function getRandomNumber(){
    let rand = Math.floor(Math.random()*255)
    return rand
}


function getRandomColor() {

    let color = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    // console.log(color)
    return color
}

    but.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            boxes[i].style.backgroundColor = getRandomColor()
            boxes[i].style.color = getRandomColor()
        }
    })
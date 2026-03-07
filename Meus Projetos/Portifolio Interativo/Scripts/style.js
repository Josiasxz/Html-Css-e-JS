const interativeText = document.getElementById("textoInterativo")

const texts = ["Desenvolvedor Web", "Front-end developer", "Entusiasta de Java Script"]

let textPosition = 0
let currentText = 0

function write() {

    if (textPosition < texts[currentText].length) {

        interativeText.textContent += texts[currentText][textPosition]
        textPosition++

    } else {

        clearInterval(loop)

        setTimeout(() => {
            interativeText.textContent = "> "
            
            textPosition = 0
            currentText++

            if (currentText >= texts.length) {
                currentText = 0
            }

            loop = setInterval(write, 100)

        }, 2000)

    }

}

let loop = setInterval(write, 100)
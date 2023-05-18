// Quiz questions

const questions = [{title: "¿Qué álbum consiguió 8 grammys en una noche?", options: ["Thriller", "Plastic Hearts", "Future Nostalgia", "1989"], valid: "Thriller"}, {title: "¿Qué álbum fue lanzado en 2022?", options: ["Voicenotes", "Chromatica", "Born in USA", "Harry's House"], valid: "Harry's House"}, {title: "¿Qué cantante interpreta Burning Love?", options: ["Michael Jackson", "Elvis Presley", "Tina Turner", "Madonna"], valid: "Elvis Presley"}, {title: "¿En qué año publicó Dua Lipa su primer álbum?", options: ["2017", "2020", "2012", "2015"], valid: "2017"}, {title: "¿En qué grupo estuvo Harry Styles?", options: ["The Chainsmokers", "1975", "One Direction", "The Beatles"], valid: "One Direction"}, {title: "¿Qué canción está siendo más exitosa este año? (2023)", options: ["As It Was", "Die For You", "Kill Bill", "Flowers"], valid: "Flowers"}, {title: "¿Qué cantante interpreta Careless Whisper?", options: ["Chris Brown", "Lionel Richie", "George Michael", "David Bowie"], valid: "George Michael"}, {title: "¿Quién tiene más números 1 en Billboard?", options: ["Michael Jackson", "Drake", "Mariah Carey", "Ariana Grande"], valid: "Mariah Carey"}, {title: "¿Cuál fue la canción en debutar en el número 1 por primera vez en la historia?", options: ["Under Pressure", "We Belong Together", "You Are Not Alone", "Purple Rain"], valid: "You Are Not Alone"}, {title: "¿Qué álbum es el único en tener 5 números 1?", options: ["25", "Bad", "FutureSex / LoveSounds", "24K Magic"], valid: "Bad"}]

// Create && add form elements

let questionSections = document.createElement("section");
let questionForm = document.createElement("form");

questionSections.className = "questions-container";

for(let i = 0; i < questions.length; i++) {
let question = questions[i];

let {title, options} = question

let questionDiv = document.createElement("div")
questionDiv.className = "question-container"

let questionArticle = document.createElement("article");

let answersDiv = document.createElement("div")
answersDiv.className = "answers-container"

let titleQuestion = document.createElement("h2");
titleQuestion.className = "questions"
let titleText = document.createTextNode(`${i+1}. ${title}`)

titleQuestion.appendChild(titleText)
questionArticle.appendChild(titleQuestion)

let incorrectParagraph = document.createElement("p")
incorrectParagraph.className = "answer-result"
let incorrectParagraphText = document.createTextNode("")
incorrectParagraph.appendChild(incorrectParagraphText)

for(let a = 0; a < options.length; a++) {
    let newOption = document.createElement("input");
    let optionLabel = document.createElement("label");
    optionLabel.className = "unselected-option"
    let optionParagraph = document.createElement("p");
    optionParagraph.className = "answer-result"
    let optionParagraphText = document.createTextNode(options[a])

    newOption.setAttribute("type", "radio")
    newOption.setAttribute("name", `${i}`)
    newOption.setAttribute("value", `${options[a]}`)

    optionParagraph.appendChild(optionParagraphText)

    optionLabel.appendChild(optionParagraph)
    optionLabel.appendChild(newOption)

    answersDiv.appendChild(optionLabel)
}

questionDiv.appendChild(questionArticle)
questionDiv.appendChild(answersDiv)
questionDiv.appendChild(incorrectParagraph)

questionForm.appendChild(questionDiv)

questionSections.appendChild(questionForm)

document.querySelector("main").appendChild(questionSections)
}

let submitForm = document.createElement("input")
submitForm.setAttribute("type", "submit");
submitForm.setAttribute("id", "submitform");

questionForm.appendChild(submitForm)

// Create options functionalities

document.querySelectorAll("form .answers-container").forEach((val, key) => {
    document.querySelectorAll(`label:has(> input[name="${key}"])`).forEach(v => {
        v.addEventListener("click", function(event) {
            document.querySelectorAll(`label:has(> input[name="${key}"])`).forEach(val => {
                val.className = "unselected-option"
            })
            v.className = "selected-option"
    })
    })
    })
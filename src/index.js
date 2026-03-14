
function displayPoem(response) {

    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions");

    let apiKey = "30d72278aa59oa6afdf4349bbat686b9";
    let prompt = `User instrucrions: Generate Ukrainian poem about ${instructionInput.value}`;
    let context= "You are a romantic poem expert and love to write short poem with rythm. Your mission is to generate a 4 lines poem and separete each line with a <br />. Make sure to follow the user instructins. Sign the poem 'SheCodes AI' in bold inside a <strong> element at the end of the poem";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden")
    poem.innerHTML = `<div class = "generating"> ⏳Genereting Ukrainian poem about ${instructionInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
    
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
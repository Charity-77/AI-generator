function displayPoem(response){
    
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}
function generatePoem(event){
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "04aofb30d291adc1aete1a1f7ab3a4a4";
  let context =
  "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate french poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionInput.value}</div>`;


  
  axios.get(apiUrl).then(displayPoem);



}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit",generatePoem);

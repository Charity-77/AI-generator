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
  let context ="You are a romantic poem expert and love to write short poem .Your  mission is to generate a 4 line poem  and seperate eachline with a <br/> .Make sure to follow user instructions .Do not include tittle to the poem sign the poem with 'shecoodes AI' inside a <strong> element ";
  let prompt = `User instructions: Generate french poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement=document.querySelector("#poem");
    poemElement.classList.remove("hidden");
  
  axios.get(apiUrl).then(displayPoem);



}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit",generatePoem);

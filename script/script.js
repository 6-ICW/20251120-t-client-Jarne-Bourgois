/**
 *
 */

const kinderen = document.querySelector("#kinderen");
const geschenkenlijst = document.querySelector("#geschenkenlijst");

// een options object voor een GET is niet nodig.
// GET is de default 
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
};

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.innerHTML = element.voornaam + element.achternaam;
      newOption.value = element.id;
      kinderen.appendChild(newOption);
    });
  });

kinderen.addEventListener("change", (e) => {
  fetch("https://o-apiandclient-render.onrender.com/kinderen/" + e.target.value)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      // vanaf hier loopt het fout. 
      // geschenkId is een Array -- dus je geeft in je link een 
      // Array mee, wat niet zal lukken.
      fetch(
        "https://o-apiandclient-render.onrender.com/geschenken/" +
          data.geschenkId
      )
        .then((result) => result.json())
        .then((geschenk) => {
          console.log(geschenk);
          geschenk.forEach((item) => {
            const newLi = document.createElement("li");
            newLi.innerHTML = item.naam;

            geschenkenlijst.appendChild(newLi);
          });
        });
    });
});

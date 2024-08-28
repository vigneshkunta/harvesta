
let contentTitle;

console.log(document.cookie);
function dynamicCategorySection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");

  boxLink.href = "/harvesta/contentDetails.html?" + ob.id;


  let imgTag = document.createElement("img");

  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}



let mainContainer = document.getElementById("mainContainer");
let containerFruits = document.getElementById("containerFruits");
let containerVegetables = document.getElementById("containerVegetables");
let containerEggs = document.getElementById("containerEggs");
let containerMeat = document.getElementById("containerMeat");
let containerFish = document.getElementById("containerFish");
let containerNuts = document.getElementById("containerNuts");
let containerSpices = document.getElementById("containerSpices");
let containerOil = document.getElementById("containerOil");
let containerCereals = document.getElementById("containerCereals");


let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status == 200) {
      contentTitle = JSON.parse(this.responseText);
      if (document.cookie.indexOf(",counter=") >= 0) {
        var counter = document.cookie.split(",")[1].split("=")[1];
        document.getElementById("badge").innerHTML = counter;
      }
      for (let i = 0; i < contentTitle.length; i++) {
        let item = contentTitle[i];
        let category = item.category.toLowerCase();
        if (category == "fruits") {
          console.log(contentTitle[i]);
          containerFruits.appendChild(
            dynamicCategorySection(item)
          );
        } else if (category === "vegetables") {
          console.log(item);
          containerVegetables.appendChild(dynamicCategorySection(item));
      } else if (category === "eggs") {
          console.log(item);
          containerEggs.appendChild(dynamicCategorySection(item));
      } else if (category === "meat") {
          console.log(item);
          containerMeat.appendChild(dynamicCategorySection(item));
      } else if (category === "fishes") {
          console.log(item);
          containerFish.appendChild(dynamicCategorySection(item));
      } else if (category === "nuts") {
          console.log(item);
          containerNuts.appendChild(dynamicCategorySection(item));
      } else if (category === "spices") {
          console.log(item);
          containerSpices.appendChild(dynamicCategorySection(item));
      } else if (category === "oilseeds") {
          console.log(item);
          containerOil.appendChild(dynamicCategorySection(item));
      } else if (category === "cereals") {
          console.log(item);
          containerCereals.appendChild(dynamicCategorySection(item));
      } else {
          console.log(`Unrecognized category: ${category}`);
      }
      }
    } else {
      console.log("call failed!");
    }
  }
};
httpRequest.open(
  "GET",
  "https://vignesh-yadav.github.io/harvesta/API/products.json",
  true
);
httpRequest.send();

// import data from '../data.json';
// @ts-ignore
// import data from '../data.json' assert { type: "json" };
// const data = require('../data.json');
// // fetch('../data.json')
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));
// console.log("data: " ,data);
// import datatemp from "./data.json";

// console.log({datatemp});
// import colors = require('./d')

// import config from '../data.json';
// const config = require("../data.json");
// import data from "../data.json";


interface CardInterface {
  id: string;
  imgSrc: string;
  title: string;
  text: string;
  link: string;
}


// console.log({sdfsdfsdfsdfd: config});
document.addEventListener("DOMContentLoaded", function (): void {
  const cardContainer = document.getElementById("cardContainer");

  fetch("../data.json")
    .then((response: any) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any) => {
      console.log(data);
      if(data?.data?.length){
        // debugger
        data.data.forEach((card: CardInterface) => {
          const cardDiv = document.createElement("div");
          cardDiv.id = `${card.id}`;
          cardDiv.className =
            "d-flex justify-content-center col-lg-3 col-md-4 col-sm-6 mb-2";
          cardDiv.innerHTML = `
                    <div class="card" style="width: 18rem">
                        <img src=${card.imgSrc} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <a href="#" class="btn btn-primary">${card.link}</a>
                        </div>
                    </div>
                `;
          cardDiv.onclick = function () {
            console.log('card clicked');
            // let removeDiv = document.getElementById(card.id);
            // removeDiv?.remove();
            // let removeAllDivs = document.getElementsByClassName(
            //   "d-flex justify-content-center"
            // );
            // while (removeAllDivs.length) {
              // removeAllDivs[0].remove(); // }
           
            // console.log(card)
            const newSingleDiv = document.createElement("div");
            newSingleDiv.className = "container text-center";
            newSingleDiv.innerHTML = `
              <button onclick="window.location.href='/'" class="d-flex align-items-start">Go Back</button>
              <div>
                <h5>${card.title}</h5>
                <p>${card.text}</p>
              </div>
            `;
  
            cardContainer?.appendChild(newSingleDiv);
          };
          cardContainer?.appendChild(cardDiv);
        });
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});
// import data from '../data.json';
// @ts-ignore
// import data from '../data.json' assert { type: "json" };
// const data = require('../data.json');
// // fetch('../data.json')
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));
// console.log("data: " ,data);
// import datatemp from "./data.json";
// console.log({sdfsdfsdfsdfd: config});
document.addEventListener("DOMContentLoaded", function () {
    var cardContainer = document.getElementById("cardContainer");
    fetch("../data.json")
        .then(function (response) {
        console.log(response);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var _a;
        console.log(data);
        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.length) {
            // debugger
            data.data.forEach(function (card) {
                var cardDiv = document.createElement("div");
                cardDiv.id = "".concat(card.id);
                cardDiv.className =
                    "d-flex justify-content-center col-lg-3 col-md-4 col-sm-6 mb-2";
                cardDiv.innerHTML = "\n                    <div class=\"card\" style=\"width: 18rem\">\n                        <img src=".concat(card.imgSrc, " class=\"card-img-top\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(card.title, "</h5>\n                            <a href=\"#\" class=\"btn btn-primary\">").concat(card.link, "</a>\n                        </div>\n                    </div>\n                ");
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
                    var newSingleDiv = document.createElement("div");
                    newSingleDiv.className = "container text-center";
                    newSingleDiv.innerHTML = "\n              <button onclick=\"window.location.href='/'\" class=\"d-flex align-items-start\">Go Back</button>\n              <div>\n                <h5>".concat(card.title, "</h5>\n                <p>").concat(card.text, "</p>\n              </div>\n            ");
                    cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(newSingleDiv);
                };
                cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(cardDiv);
            });
        }
    })
        .catch(function (error) { return console.error("Error fetching data:", error); });
});

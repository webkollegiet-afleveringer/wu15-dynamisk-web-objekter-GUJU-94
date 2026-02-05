let elitesports = [
    { name: "Josephine", age: 19, course: "Elitesvømmer" },
    { name: "Clara", age: 18, course: "Elitegymnast" },
    { name: "Sebastian", age: 20, course: "Elitetennisspiller" },
];

let eliteListDiv = document.querySelector(".elite-sport"); //vælger element

const eliteUl = document.createElement("ul"); //skaber

eliteListDiv.insertAdjacentElement("afterbegin", eliteUl); //indsætter

elitesports.forEach(function(elitesport) {
    //console.log(elitesport);
    /*html*/
   let li = 
   `
    <li>
        <h2 class="course__header">Course${elitesport.course} </h2>
        <p>Deltagers navn ${elitesport.name} og alder: ${elitesport.age} </p>
    </li>
    `

    eliteUl.insertAdjacentHTML("afterbegin", li); //indsætter også
});



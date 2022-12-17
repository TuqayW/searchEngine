const cards = [
  {
    id: 1,
    name: "Iphone 11",
    price: 1100,
    img:'iphone1.jpg'
  },
  {
    id: 2,
    name: "macbook 12",
    price: 2200,
    img:'iphone2.jpg'
  },
  {
    id: 3,
    name: "Ipad 13",
    price: 3300,
    img:'iphone3.jpg'
  },
  {
    id: 4,
    name: "Airpods 14",
    price: 4400,
    img:'iphone4.jpg'
  },
];

const section = document.querySelector("section");
let inpt = document.querySelector("input");
const btn = document.querySelector("#btn")

cards.map((card) => {


  let div = document.createElement("div");
  div.innerHTML = `<div class="card">
                        <div class="img-c">
                            <img src="${card.img}" alt="">
                        </div>
                        <h2>${card.name}</h2>  
                        <p>${card.price}</p>
                        <button>Indi al</button>
                    </div>`;

  section.appendChild(div)
});

inpt.addEventListener('input',()=>{
  let x = document.querySelectorAll('.card')
  x.forEach(item=>{
   return item.remove()
  })

  cards
  .filter(card=>card.name.toLowerCase().includes(inpt.value.toLowerCase()))
  .map((card) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card">
                          <div class="img-c">
                              <img src="${card.img}" alt="">
                          </div>
                          <h2>${card.name}</h2>  
                          <p>${card.price}</p>
                          <button>Indi al</button>
                      </div>`;
  
    section.appendChild(div)
  });
})







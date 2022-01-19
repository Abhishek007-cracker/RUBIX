sendApiRequest();

async function sendApiRequest() {
  let APIKEY = "3788B15A0F4248FABF97CFD7F0AC109A";
  //Priyansh fill items array from your database.
  let items = ["rice", "butter", "bread"];
  for (let i = 0; i < items.length; i++)
  {
    let item = items[i];
  fetch(`https://api.bluecartapi.com/request?api_key=EC9865A3E39C45E8B579BA94FA46CFB6&type=search&search_term=${items[i]}&sort_by=best_seller
    `)
    .then((results) => results.json())
    .then((data) => useApiData(data));
  }
  
}

function useApiData(data) {
  console.log(data);
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");
  
  let title = data.search_results[0].product.title;
  let img = data.search_results[0].product.images;
  let url = data.
  search_results[0].product.link;
  let price=data.search_results[0].offers.primary.price
  let symbol=data.search_results[0].offers.primary.currency_symbol
 

  console.log(title);

  let cardTemplate = template.content.querySelector(".card");

    let cardTitle = cardTemplate.querySelector(".card-title");
    let cardprice = cardTemplate.querySelector(".card-price");
    let cardsymbol = cardTemplate.querySelector(".card-symbol");
    let cardImg = cardTemplate.querySelector(".card-img-top");
    let viewBtn = cardTemplate.querySelector(".btn-success");

    cardTitle.innerHTML = title;
    cardsymbol.innerHTML=symbol;
    cardprice.innerHTML=price;
    cardImg.setAttribute("src", img);
    viewBtn.setAttribute("href", url);

    let card = document.importNode(cardTemplate, true);
    container.appendChild(card);
}
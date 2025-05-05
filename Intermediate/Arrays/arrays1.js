//Printing Product list

let total = 0;
const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
for (let prod of products) {
    let prodarr = prod.split(":");
    let prodname = prodarr[0];
    let prodprice = Number(prodarr[1]);//or parseFloat(prodarr[1])
    total += prodprice;
    let itemText = `${prodname} - $${prodprice}`;
    console.log(itemText);
}


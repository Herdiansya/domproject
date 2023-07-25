let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "lorem oankn fiofv doiodnffffffffffffffffffffffffffffdo ffgsbdbis d fosd f i s",
    person: "lore ee",
  },
  {
    quote: "lorem oankn fiofv doiodnffffffffffffffffffffffffffffdo ffgsbdbis d fosd f i s",
    person: "lore eee",
  },
  {
    quote: "lorem oankn fiofv doiodnffffffffffffffffffffffffffffdo ffgsbdbis d fosd f i s",
    person: "lore e",
  },
  {
    quote: "lorem oankn fiofv doiodnffffffffffffffffffffffffffffdo ffgsbdbis d fosd f i s",
    person: "lore ee",
  },
  {
    quote: "lorem oankn fiofv doiodnffffffffffffffffffffffffffffdo ffgsbdbis d fosd f i s",
    person: "lore ",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

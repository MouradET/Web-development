/**Opdracht 1:
Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw
console. */

let getallen = [4, 1, 2, 8, 5, 7, 3, 6, 9, 10];
console.log(getallen);

/**Opdracht 2:
Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console. */

let fruitsoorten = ["banaan","appel","sinasappel","avocado","aardbei"];
console.log(fruitsoorten);

/**Opdracht 3:
Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te
printen.
Appel staat op de 2e index */

console.log(fruitsoorten[1]);

/**Opdracht 4:
Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te
printen.
Aardbei staat op de 4e index */

console.log(fruitsoorten[4]);

/**Opdracht 5:
We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. De eerste array
bepaalt welke fruitsoort er geprint moet worden. Gebruik de Math.random() methode om te
bepalen welke waarde uit de eerste array wordt gehaald. Vervolgens kun je de waarde
gebruiken als index en de fruitsoort printen in jouw console. Helaas, de getallen 5 t/m 10 uit
de eerste array zullen een undefined teruggeven als je dat als index bij de fruit array zal
gebruiken. Hiervoor kun je de modulo (%) gebruiken. Zoek uit hoe modulo werkt en pas dat
toe aan de waarde van de eerste array. Als resultaat zal er altijd een fruitsoort uitgeprint
worden. */

let cijfers = getallen[Math.floor(Math.random() * getallen.length)]; 
console.log(cijfers);
console.log(fruitsoorten[cijfers]);


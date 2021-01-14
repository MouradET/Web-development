/**Opdracht 1:
Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw
console. */

let getallen = [4, 1, 2, 8, 5, 7, 3, 6, 9, 10];
console.log(getallen);

/**Opdracht 2:
Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console. */

let fruitsoorten = ["banaan", "appel", "sinasappel", "avocado", "aardbei"];
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

let index = getallen[Math.floor(Math.random() * getallen.length)];
if (index >= 5) {
    index %= 2;
}
console.log(index);
console.log(fruitsoorten[index]);

/**Opdracht 6:
Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen. Arrays
hebben ook functies die je kunt gebruiken. Zoek uit wat push(), pop(), shift(), slice(), splice(),
sort(). Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in
commentaar wat het doet. */

//push voegt een index aan de array
let push = fruitsoorten.push("framboos");
console.log(push);

//pop verwijdert de laatste waarde van een array
let pop = fruitsoorten.pop();
console.log(pop);

//shift verwijdert de eerste waarde van een array
let shift = fruitsoorten.shift();
console.log(shift);

//slice laat de array beginnen vanaf een bepaalde index
let slice = fruitsoorten.slice(2);
console.log(slice);

//splice voegt een waarde toe aan de array vanaf een bepaalde index
let splice = fruitsoorten.splice(1,0,"framboos");
console.log(splice);

//sort zorgt ervoor dat alles in de array op alfabetische volgoder wordt gezet
let sort = ["d","k","l","y","o","a","e","p"];
console.log(sort.sort())

/**Opdracht 7:
Naast de functies die je van de array kunt gebruiken heb je ook nog de “length” property die
je kunt gebruiken. Hiermee kan je de grootte van de array opvragen. Gebruik de length
property en print in de console uit hoe groot de fruits array is. */

let lengte = fruitsoorten.length;
console.log(lengte);

/**Opdracht 8:
De bestaande values van de array kan je ook aanpassen. Zoek uit hoe je op een specifieke
index de waarde kan aanpassen. Pas de value “Peer” naar “Sinaasappel”. */

fruitsoorten[2] = "Peer";
console.log(fruitsoorten);

/**Opdracht 9:
Kijkend naar de fruits array. Hoe draai je de values “Aardbei” en “Mandarijn” om in de array
door gebruik te maken van indices (index). */
//ik draai aardbei en avocado om

[fruitsoorten[3], fruitsoorten[4]] = [fruitsoorten[4], fruitsoorten[3]];

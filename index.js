// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    return [...cats, "Broom"];
}

function prependCat(){
    return ["Arnold", ...cats]
}

function removeLastCat(){
    return cats.slice(0,cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}

// const destructivelyAppendCat = ["Milo", "Otis", "Garfield"];
//     destructivelyAppendCat.push("Ralph");


// const destructivelyPrependCat = ["Milo", "Otis", "Garfield"];
//     destructivelyPrependCat.unshift("Bob");

// const destructivelyRemoveLastCat = ["Milo", "Otis", "Garfield"];
//     destructivelyRemoveLastCat.pop();


// const destructivelyRemoveFirstCat = ["Milo", "Otis", "Garfield"];
//     destructivelyRemoveLastCat.shift();


// const appendCat= ["Milo", "Otis", "Garfield"];
//     [...appendCat, "Broom"];


// const prependCat = ["Milo", "Otis", "Garfield"];
//     ["Arnold", ...cats];


// const removeLastCat = ["Milo", "Otis", "Garfield"];
//     removeLastCat.slice(0,cats.length -1);


// const removeFirstCat = ["Milo", "Otis", "Garfield"];
//     removeFirstCat.slice(1);


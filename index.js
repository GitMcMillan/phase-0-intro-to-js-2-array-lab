

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(`Ralph`)
};


function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(Broom) {
    const newCats = [...cats, "Broom"];
    return newCats
};

function prependCat(Arnold) {
    const moreNewCats = ["Arnold", ...cats]
    return moreNewCats
};


function removeLastCat() {
    return cats.slice(0, cats.length - 1)
};

function removeFirstCat() {
    return cats.slice(1)
};















// let cats = ["Milo", "Otis", "Garfield"]

// function destructivelyAppendCat(name) {
//     return cats.push(name)

// }

// function destructivelyPrependCat(name) {
//     return cats.unshift(name)
// }


// function destructivelyRemoveLastCat() {
//     return cats.pop()
// }

// function destructivelyRemoveFirstCat() {
//     return cats.shift()
// }

// function appendCat() {
//     return [...cats, "Broom"]
// }


// function prependCat(name) {
//     return ["Arnold", ...cats]
// }


// function removeLastCat() {
//     return cats.slice(0, cats.length - 1)
// }


// function removeFirstCat() {

// }

// function removeFirstCat() {
//     return cats.slice(1)
// }

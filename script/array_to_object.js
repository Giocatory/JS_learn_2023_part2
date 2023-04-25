"use strict";

const colors = [
    {
        id: "xekare",
        title: "rad red",
        rating: 3,
    },
    {
        id: "cool blue",
        title: "light blue",
        rating: 2,
    }
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => { hash[id] = {title, rating}; return hash;}, {}
);

console.log(JSON.stringify(hashColors));
/*
{
    "xekare" : {
        "title" : "rad red",
        "rating" : 3
    },
    
    "cool blue" : {
        "title" : "light blue",
        "rating" : 2
    }
}
*/
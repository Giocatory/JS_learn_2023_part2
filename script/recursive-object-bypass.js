"use strict";

const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            fullname: {
                first: "Dan",
                last: "Deacon",
            }
        }
    }
}

const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split('.');
    return remaining.length ? deepPick(remaining.join('.'), object[first]) : object[first];
};

console.log(
    deepPick("type", dan)
); // person

console.log(
    deepPick("data.info.fullname.first", dan)
); // Dan
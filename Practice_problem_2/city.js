let students = {
    2222:{
        name:'Jack',
        section:'C',
        class:'IX',
        address:{
            "building no":12,
            "street":'st. johnson',
            "city":'Peterburg',
            "country":'UK'
        }
    },
    3333:{
        name:'John',
        section:'B',
        class:'IX',
        address:{
            "building no":12,
            "street":'st. Florida',
            "city":'Wasington DC',
            "country":'UK'
        }
    }
}

console.log(students["2222"].address["city"]);
console.log(students["3333"].address["city"]);
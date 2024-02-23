let data2={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'Habluder Adda',
                category:'XYZ',
                price:"20$",
            },
            bookCategory:"Basic",
        },
        {
            bookId:2,
            bookDetails:{
                name:'Antidar Adda',
                category:'XYZ',
                price:"40$",
            },
            bookCategory:"beginner",
        }
    ]
}

console.log(data2.data[0]["bookDetails"]["name"]);
console.log(data2.data[1]["bookCategory"]);
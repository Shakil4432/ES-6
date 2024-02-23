let data = {
    Sophia:{
        id:33,
        study:[
            {
                primary:[
                    {school_name:"Kutubkhali High school"},
                    {location:'Jatrabari, Dhaka-1236'}
                ]
            },
            {
                secondary:[
                    {school_name:"ABC secondary School"},
                    {location:"St Lorence"}
                ]
            }
        ]
    }
}

console.log(data.Sophia?.study[1]?.secondary[1]?.location);
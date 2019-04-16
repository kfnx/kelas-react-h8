const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Doryaky", species: "fish"},
    {name: "Ursa", species: "cat"},
    {name: "Thanos", species: "dog"},
    {name: "Flinnt", species: "fish"},
    {name: "Reek", species: "cat"}
    ];

    // let fish = [];

    let fish = animals.filter((animal) => animal.species === "fish" && animal.name.length > 4)
    let names = animals.map((animal) => animal.name + " is a " + animal.species + "\n");

    // for(let i = 0; i < animals.length; i++) {
    //   if (animals[i].species === 'fish') {
    //     fish.push(animals[i]);
    //   }
    // }

    let orders = [
        { total: 325 },
        { total: 512},
        { total: 128},
        { total: 32 }
        ];

    let total = orders.reduce((total, order) => total + order.total, 0);
    
    console.log("[FILTER] fish are : ");
    console.log(fish);
    console.log("[MAP] names are : \n"+names);
    console.log("[REDUCE] total are : \n"+total);
let ray = ['1jas','2jos','3jeess', '4jays'];

let foric = []
foric[0] = ray.map(name => {
    name = 'x-'+name
    return name
})

foric[1] = ray.map(name => {
    name = 'y>'+name
    return name
})
console.log(foric)
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: true},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: true},
            {ballroom: true},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: true},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: true},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let availableData = videoData.filter((data) => data.present === true)
let arrayOfAvailableNames = videoData.map((data) => data.name)
let totalAvailableRooms = availableData.reduce((total, data) => total + data.rooms.length,0)

// let totalAvailableRoomsTes = 
let totalRooms = 0

let arrayOfAvailableRooms = [];
availableData.forEach(
    function(data){
        // console.log(data.rooms)
        data.rooms.forEach(
            function(room){
                // room.filter((data) => data.present === true))
                // if(room == true){
                //     totalRooms = totalRooms + 1
                //     arrayOfAvailableRooms.push(room)
                // }
                // console.log(Object.keys('room'))
                console.log(room)
            }
        )
    }
)

// console.log(totalRooms)
// console.log(arrayOfAvailableRooms)

// console.log("availableData\n")
// console.log(availableData)
// console.log("arrayOfAvailableNames\n")
// console.log(arrayOfAvailableNames)
// console.log("totalAvailableRooms\n")
// console.log(totalAvailableRooms)
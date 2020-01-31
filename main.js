const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createArtist ={
    createBluegrass: (name, age) => {
        const newArtist = {
            artistName: name,
            artistAge: age,
            genre: "Bluegrass"
        }
        chattenRecords.push(newArtist);
    },
    createCountry: (name, age) => {
        const newArtist = {
            artistName: name,
            artistAge: age,
            genre: "Country"
        }
        chattenRecords.push(newArtist);
    },
    createFunk: (name, age) => {
        const newArtist = {
            artistName: name,
            artistAge: age,
            genre: "Funk"
        }
        jumpStopRecords.push(newArtist);
    },
    createRap: (name, age) => {
        const newArtist = {
            artistName: name,
            artistAge: age,
            genre: "Rap"
        }
        jumpStopRecords.push(newArtist);
    },
    createPop: (name, age) => {
        const newArtist = {
            artistName: name,
            artistAge: age,
            genre: "Pop"
        }
        polarRecords.push(newArtist);
    },


}
createArtist.createBluegrass('Bartholomew Danielson', 23);
createArtist.createCountry('Bruce Atkins', 23);
createArtist.createCountry('Avilee Dallas', 19);
createArtist.createPop('Austin Kinkaid', 22);
createArtist.createPop('Jensen Brown', 20);
createArtist.createFunk('Dre Funkz', 25);
createArtist.createRap('Dusta Grimes', 21);
createArtist.createRap('Loyoncè Branis', 27);
console.log(jumpStopRecords)
console.log(polarRecords)
console.log(chattenRecords)


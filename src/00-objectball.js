function gameObject () {
    const newObject = {home :{
    teamName:  "Brooklyn Nets", 
    colors : ["black", "white"],
    players : {
        "Alan Anderson":{
            number : 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists : 12,
            steals: 3,
            blocks: 1, 
            dunks: 1},
        "Reggie Evans" :{
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12, 
            assists : 12, 
            steals: 12,
            blocks: 12,
            dunks: 7},
        "Brook Lopez": {
            number: 11, 
            shoe: 17, 
            points: 17, 
            rebounds: 19, 
            assists : 10, 
            steals: 3, 
            blocks: 1, 
            dunks: 15}, 
        "Mason Plumlee": {
            number: 1, 
            shoe: 19, 
            points: 26, 
            rebounds: 12, 
            assists : 6, 
            steals: 3, 
            blocks: 8, 
            dunks: 5}, 
        "Jason Terry": {
            number: 31, 
            shoe: 15, 
            points: 19, 
            rebounds: 2, 
            assists : 2, 
            steals: 4, 
            blocks: 11, 
            dunks: 1}}
},
    away : {teamName: "Charlotte Hornets", colors: "Turqoise, Purple",
    players: {  
        "Jeff Anderson": {
            number: 4, 
            shoe: 18, 
            points: 10, 
            rebounds: 1, 
            assists: 1 , 
            steals: 2, 
            blocks: 7, 
            dunks: 2},
        "Bismak Biyombo" : {
            number: 0, 
            shoe: 16, 
            points: 12, 
            rebounds: 4, 
            assists : 7,
            steals: 7, 
            blocks: 15, 
            dunks: 10},
        "DeSagna Diop" : {
            number: 2, 
            shoe: 14, 
            points: 24, 
            rebounds:12, 
            assists : 12, 
            steals: 4, 
            blocks: 5, 
            dunks: 5}, 
        "Ben Gordon" : {
            number: 8, 
            shoe: 15, 
            points: 33, 
            rebounds: 3, 
            assists : 2, 
            steals: 1, 
            blocks: 1, 
            dunks: 0}, 
        "Brendan Haywood" : {
            number: 33, 
            shoe: 15, 
            points: 6 , 
            rebounds: 12, 
            assists : 12, 
            steals: 22, 
            blocks: 5, 
            dunks: 12}} 
}}
//console.log(newObject)
return newObject
}

// const gameObject = gameObject()
// const numPointsScored = (playerName) => {
//     for (key in object)
// }

const homeTeam = gameObject().home
const awayTeam = gameObject().away
const allPlayers = {...homeTeam.players, ...awayTeam.players}


function numPointsScored (playerName) {
    for (let index in allPlayers) {
        if (index === playerName){
            return allPlayers[playerName].points;
        } 
    }
}

function shoeSize (playerName) {
    for (let index in allPlayers) {
        if (index === playerName){
            return allPlayers[playerName].shoe;
        } 
    }
}

function teamColors(name) {
    return homeTeam.teamName === name ? homeTeam.colors : awayTeam.colors
}

function teamNames(){
    return [homeTeam.name, awayTeam.name]
}

function playerNumbers(teamTitle) {
    let teamPlayers = (homeTeam.teamName === teamTitle ? homeTeam.players : awayTeam.players)
    let result = []
    for (let x in teamPlayers) {
        result.push(teamPlayers[x].number)
    }
    return result;
}



console.log(numPointsScored("Ben Gordon"))

console.log(shoeSize("Ben Gordon"))

console.log(teamColors("Brooklyn Nets"))

console.log(playerNumbers("Brooklyn Nets"))
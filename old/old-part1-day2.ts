import { readFileSync } from 'fs'

// I've way over complicated this one - abandon and refactor

const gameData: string[] = fetchData()
const trueGames = []
const falseGames = []

interface Round {
    red: number,
    blue: number,
    green: number,
    gameID: string
}

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day2/data.txt').toString().split('/n')
    return rawGames
}

export function splitGames(gameString: string) {
    const rounds = gameString.split(/:|;/g)
    const gameID = rounds.shift
    return { gameID, rounds }
}


export function splitRounds(roundString: string, gameID: string) {
    const reds = roundString.match(/\d{1,} red/g)
    const greens = roundString.match(/\d{1,} green/g)
    const blues = roundString.match(/\d{1,} blue/g)
    let numOfRed = reds && reds[0].match(/\d{1,}/) ? reds[0].match(/\d{1,}/) : 0
    let numOfGreen = greens && greens[0].match(/\d{1,}/) ? greens[0].match(/\d{1,}/) : 0
    let numOfBlue = blues && blues[0].match(/\d{1,}/) ? blues[0].match(/\d{1,}/) : 0
    const roundObject: Round = {
        red: Number(numOfRed),
        green: Number(numOfGreen),
        blue: Number(numOfBlue),
        gameID: gameID
    }
    return roundObject
}

export function checkRound(round: Round) {
    if (round.red > 12) {
        falseGames.push(round.gameID)
        return false
    }
    if (round.blue > 13) {
        falseGames.push(round.gameID)
        return false
    }
    if (round.green > 14) {
        falseGames.push(round.gameID)
        return false
    }
    else {
        return true
    }
}
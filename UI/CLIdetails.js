import input from "analiza-sync"

function noteDetailsUi() {
    const ownerUsername = input(`your name: `)
    const text = input(`text: `)
    return {ownerUsername, text}
}

function userDetailsUi() {
    const username = input(`your name: `)
    const password = input(`password: `)
    return {username, password}
}

export {
    noteDetailsUi,
    userDetailsUi
}

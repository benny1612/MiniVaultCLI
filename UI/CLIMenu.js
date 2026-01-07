import input from "analiza-sync"


export function basicMenu() {
    const showMenu = input(`
        Welcome !!!
    what you want to do :
    1. Register.
    2. Login.
    3. Exit.
    Answer : `)
    return showMenu
}

export function loggedInMenu() {
    const logMenu = input(`
        1. Add note.
        2. List Notes.
        3. Delete Note.
        4. LogOut.
        Answer: `)
    return logMenu
}

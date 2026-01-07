import input from "analiza-sync"
import { userDetailsUi } from "./CLIdetails"

function basicMenu() {
    const showMenu = input(`
        Welcome !!!
    what you want to do :
    1. Register.
    2. Login.
    3. Exit.
    Answer : `)
    return showMenu
}

function loggedInMenu() {
    const logMenu = input(`
        1. Add note.
        2. List Notes.
        3. Delete Note.
        4. LogOut.
        Answer: `)
    return logMenu
}
function menuInLogin() {
    let flag = true
    while (flag) {
        const loggedMenu = loggedInMenu()
        switch (loggedMenu) {
            case "1":

                break;
            case "2":

                break;
            case "3":

                break;
            case "4":
                console.log("Logout...");
                console.log("Back To Main Menu:")
                flag = false
                break;
            default:
                console.log();
                console.log(`${loggedMenu} not an option try another option!`);
                break;
        }
    }
}

export function TheMenu() {
    let flag = true
    while (flag) {
        const menu = basicMenu()
        switch (menu) {
            case "1":
                const details = userDetailsUi()
                
                break
            case "2":
                console.log();
                console.log("Login Menu:");
                menuInLogin()
                break
            case "3":
                console.log("Do exit... ")
                setTimeout(() => {
                    console.log("Goodby until next time!☺")
                }, 2000)
                flag = false
                break
            default:
                console.log()
                console.log(`${menu} not an option try another option!`)
                break
        }
    }
}


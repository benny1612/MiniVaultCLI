import { basicMenu, loggedInMenu } from "./UI/CLIMenu.js";
import { idInput, noteDetailsUi, userDetailsUi } from "./UI/CLIdetails.js"
import { addNote, deleteNote, listNotes } from "./services/noteServices.js"
import { login, register } from "./services/userServices.js";

function menuInLogin() {
    let flag = true
    while (flag) {
        const details = userDetailsUi()
        const trueLogin = login(details.username, details.password)
        console.log(trueLogin);
        
        if (trueLogin) {
            console.log();
            console.log("Login Menu:");
            const loggedMenu = loggedInMenu()
            switch (loggedMenu) {
                case "1":
                    const notedetails = noteDetailsUi()
                    addNote(details.username, notedetails.text)
                    break;
                case "2":
                    listNotes(details.username)
                    break;
                case "3":
                    const noteId = idInput()
                    deleteNote(details.username, Number(noteId))
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
        } else {
            console.log("The details are not correct.");
            flag = false
            break 
        }
    }    
}

function app() {
    let flag = true
    while (flag) {
        const menu = basicMenu()
        switch (menu) {
            case "1":
                let details = userDetailsUi()
                console.log(register(details.username, details.password))
                break
            case "2":
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

app()
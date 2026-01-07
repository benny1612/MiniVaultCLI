import input from "analiza-sync";
import { deleteById, listByOwner, Note } from "../repositories/noteRepository.js";
import { exists } from "../repositories/userRepository.js";


function addNote(ownerUsername, text){
    const checkUsername = typeof ownerUsername === "string";
    const checkText = typeof text === "string";
    if (checkUsername && checkText && ownerUsername && text) {
        if (exists(ownerUsername)) {
            const note = new Note(ownerUsername, text)
            note.add()
        } else return "User is not exist."
    } else {
        return "Username or text is not valid.";
    }
}

function listNotes(ownerUsername) {
    const userNotes = listByOwner(ownerUsername)
    if (userNotes[0]) {
        return userNotes
    } else return "This user has no notes."
}

function deleteNote(ownerUsername, noteId) {
    return deleteById(ownerUsername, noteId)
}

export {
    addNote,
    listNotes,
    deleteNote
}

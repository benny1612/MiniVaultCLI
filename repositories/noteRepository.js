import { notes } from "../data/notes.js"

class Note {
    constructor(id, ownerUsername, text) {
        this.id = id,
        this.ownerUsername = ownerUsername,
        this.text = text,
        this.createdAt = new Date()
    }
    add() {
        notes.push(this)
    }
}

function listByOwner(username) {
    
}

function deleteById(ownerUsername, noteId) {

}
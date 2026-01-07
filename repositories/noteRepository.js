import { notes } from "../data/notes.js"

class Note {
    static count = 1
    constructor(ownerUsername, text) {
        this.id = Note.count ++,
        this.ownerUsername = ownerUsername,
        this.text = text,
        this.createdAt = new Date()
    }
    add() {
        notes.push(this)
    }
}

function listByOwner(username) {
    const notes = notes.filter((note) => username === note.ownerUsername)
    return notes
}

function deleteById(ownerUsername, noteId) {
    const noteIndex = notes.findIndex((note) => note.ownerUsername === ownerUsername && note.id === noteId)
    if (noteIndex !== -1) {
        return {deleted: (notes.splice(noteIndex, 1))[0]}
    }
    else return "note is not defind"
}


export {
    Note,
    listByOwner,
    deleteById
}

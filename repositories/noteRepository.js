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
    const owners = []
    notes.forEach(note => {
        if (!owners.find((owner) => owner.username === note.ownerUsername)) {
            owners.push({username: note.ownerUsername})
        }
    });
    return owners
}

function deleteById(ownerUsername, noteId) {
    const note = notes.find((note) => note.ownerUsername === ownerUsername && note.id === noteId)
    if (note) {
        return {deleted: (notes.splice(notes.indexOf(note), 1))[0]}
    }
    else return "note is not defind"
}


export {
    Note,
    listByOwner,
    deleteById
}

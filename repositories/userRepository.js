import { users } from "../data/users.js";
import { Note } from "./noteRepository.js";
class User {
  static count = 1;
  constructor(username, password) {
    this.id = User.count++;
    this.username = username;
    this.password = password;
    this.notes = [];
    this.createdAt = new Date();
    this.genarateTwoNotes();
  }
  add() {
    users.push(this);
  }
  genarateTwoNotes() {
    const n1 = new Note(this.username,"exmpale")
    const n2 = new Note(this.username,"exmpale")

    this.notes.push(n1,n2);
    
  }
}


export function findByUsername(username) {
  const index = users.findIndex((user) => user.username === username);
  if (index !== -1) {
    return users[index];
  }
  return "user not found";
}

export function exists(username) {
  const index = users.findIndex((user) => user.username === username);


  if (index == -1) {
    return true;
  }
  return false;
}

export function validatesinput(username, password) {
  if (username == "") {
    console.log("username is required!");
    return false;
  }
  if (typeof password !== "string") {
    console.log("password must be a string!");
    return false;
  }
  if (!exists(username)) {
    console.log("username must be unique!");
    return false;
  }
  if (username.length < 3) {
    console.log("user name must be > 3 !");
    return false;
  }
  if (password == "") {
    console.log("password is required!");
    return false;
  }
  if (password.length < 6) {
    console.log("password nust be > 6!");
    return false;
  }
  return true;
}



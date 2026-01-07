import { users } from "../data/users.js";
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.createdAt = new Date();
  }
  add() {
    users.push(this);
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

export function validatesinput(id, password) {
  const checkId = typeof id === "string";
  const checkPassword = typeof password === "string";
  if (checkId && checkPassword) {
    return true;
  } else {
    return false;
  }
}

import { users } from "../data/users.js";
export class User {
  static count = 1
  constructor(username, password) {
    this.id = User.count ++;
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
  if (index === -1) {
    return false;
  }
  return true;
}



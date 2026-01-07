import { users } from "../data/users.js";
import { exists, User } from "../repositories/userRepository.js";


export function register(username, password) {
    if (validatesinput(username, password)) {
        if (!exists(username)) {
            const user = new User(username, password)
            user.add()
        } else return "User is exist."
    } else {
        return "Username or password is not valid.";
    }
}

export function validatesinput(username, password) {
  const checkUsername = typeof username === "string";
  const checkPassword = typeof password === "string";
  if (checkUsername && checkPassword && username && password) {
    return true;
  } else {
    return false;
  }
}

export function login(username, password) {
    if (validatesinput(username, password)) {
        console.log(users);
        
        const user = users.find((user) => user.password === password && user.username === username)
        console.log(user);
        
        if (user) {
            return true
        } else return false
    } else return false
}


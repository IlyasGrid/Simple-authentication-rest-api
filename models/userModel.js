const { readDatabase, saveToDatabase } = require("../utils/dbHandler");

const db = readDatabase();
const users = db.users;


class User {
    constructor(id, username, email, pwd) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.pwd = pwd;
    }

    save() {
        users.push(this);
        db.users = users
        saveToDatabase(db);
    }

    delete() {
        const user = users.find((u) => {
            if (u.id = this.id) {
                return u;
            }
        });
        if (!user) {
            return null;
        }
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);

        db.users = users;
        saveToDatabase(db);
    }
}
const allUsers = () => {
    return users;
}

module.exports = { User, allUsers }
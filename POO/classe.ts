class User {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public saveInDatabase(): string {
        return `User '${this.email}' has been saved in database`;
    }

}

const userSingUp = new User('philipe@faria.com', '123456');

console.log(userSingUp.saveInDatabase());

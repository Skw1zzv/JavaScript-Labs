function createUser(name, email, password, age, theme) {
    return {
        name: name,
        profile: {
            email: email,
            password: password,
            age: age,
            settings: { theme: theme }
        }
    };
}

const u1 = createUser("Twizzy", "Twizzyrich@tonka.rich", "system", "28bands", "dark2093" );
const u2 = createUser("Skw1zzv", "Skw1zzTw1zz@gmail.com", "Tw1zz", "17bands", "dark2026" );

console.log(u1);
console.log(u2);

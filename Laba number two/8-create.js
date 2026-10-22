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

const users = [u1, u2];

for (const u of users) {
    printList(u);
    console.log("---");   // разделитель между юзерами
}
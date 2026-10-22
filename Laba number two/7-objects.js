const user  = {
    name: "Skw1zzv",
    profile: {
        settings: {
            theme: "dark2019",
            Verification: "Passed",
            TimeJoined: "23:45:55 22/10/2026"

        }
    }

};

const settings = user.profile.settings;

for (const key in settings) {
    console.log(`${key}: ${settings[key]}`);
}


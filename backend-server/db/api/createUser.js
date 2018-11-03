const createUser = async (auth, db, data) => {
    try {
        // create Firebase Authentication account
        let account = await auth
            .firebase()
            .createUserWithEmailAndPassword(data.email, data.password);

        // we don't want to store passwords - this is handled by Firebase
        delete data.password;

        // add additional properties to our data object
        data = {
            ...data,
            userId: account.user.uid,
            emailVerified: account.user.emailVerified,
            creationTime: account.user.metadata.creationTime,
            lastSignInTime: account.user.metadata.lastSignInTime
        };

        // create the user document
        let ref = db.doc(`users/${account.user.uid}`);
        await ref.set(data, { merge: true });

        return data;
    } catch (error) {
        return { error };
    }
};

module.exports = createUser;
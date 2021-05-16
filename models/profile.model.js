class profile_model {
    constructor() {
    }
    read() {
        return firebase.auth().currentUser;
    }
    update(data) {
        console.log(data);
        firebase.auth().currentUser.updateProfile(data);
        firebase.auth().currentUser.update
    }
}
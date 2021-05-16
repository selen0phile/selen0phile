class profile_model {
    constructor() {
    }
    read() {
        
    }
    update(data) {
        console.log(data);
        firebase.auth().currentUser.updateProfile(data);
    }
}
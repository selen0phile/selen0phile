class symptoms_model {
    constructor() {
    }
    async read() {
        const user=firebase.auth().currentUser;
        return new Promise(function(resolve, reject){
            firebase.firestore().collection('symptoms').doc(user.uid).get().then(doc=>{
                resolve(doc.data());
            }).catch(error=>{
                console.log(error);
            });
        });
    }
    update(data) {
        const user=firebase.auth().currentUser;
        firebase.firestore().collection('symptoms').doc(user.uid).set(data);
    }
}
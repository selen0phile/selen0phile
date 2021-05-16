class map_model {
    constructor() {
    }
    async read() {
        const user=firebase.auth().currentUser;
        return new Promise(function(resolve, reject){
            firebase.firestore().collection('symptoms').get().then(all=>{
                let loc={};
                all.docs.forEach(doc=>{
                    const row=doc.data();
                    console.log(row);
                });
                resolve('asdasd');
            }).catch(error=>{
                console.log(error);
            });
        });
    }
}
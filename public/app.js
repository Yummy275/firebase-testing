//get database
//I should have named 'stuff' people or something
const db = firebase.firestore();

//get information from "jimbo" doc in stuff collection
var docRef = db.collection('stuff').doc('jimbo');

docRef
    .get()
    .then(function (doc) {
        if (doc.exists) {
            console.log('Document data:', doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
        }
    })
    .catch(function (error) {
        console.log('Error getting document:', error);
    });

// Add a new doc "cooper" in collection "stuff"
db.collection('stuff')
    .doc('poophead')
    .set({
        name: 'ung',
        cats: '5',
        dogs: '5',
        cash: '3.25',
        rent_paid: true,
    })

    .then(function () {
        console.log('Document successfully written!');
    })
    .catch(function (error) {
        console.error('Error writing document: ', error);
    });

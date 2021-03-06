import { firestore as db } from "../firebase";
// Load Chance
const Chance = require("chance");

export function getRecord(id) {
  return new Promise((resolve, reject) => {
    db.collection("domain")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          resolve(doc.data());
        } else {
          reject("No doc found");
        }
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

export function getRecordObserver(id, callback) {
  return db.collection("domain").doc(id).onSnapshot(callback);
}

export function saveRecord(id, data) {
  return new Promise((resolve, reject) => {
    if (!id) {
      // Instantiate Chance so it can be used
      var chance = new Chance();
      id = chance.bb_pin();
    }
    db.collection("domain")
      .doc(id)
      .set(data)
      .then(() => {
        resolve();
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

export function getList() {
  return new Promise((resolve, reject) => {
    db.collection("domain")
      .get()
      .then((snapshot) => {
        resolve(manageRecordList(snapshot));
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

export function setListObserver(callback) {
  db.collection("domain").onSnapshot(callback);
}

export function manageRecordList(snapshot) {
  var newRecords = [];
  snapshot.forEach((item) => {
    newRecords.push({ id: item.id, data: item.data() });
  });
  return newRecords;
}

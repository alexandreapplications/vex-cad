import { firestore as db } from "../firebase";
// Load Chance
const Chance = require("chance");

export function getCliente(id) {
  return new Promise((resolve, reject) => {
    db.collection("clients")
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

export function getClienteObserver(id, callback) {
  return db.collection("clients").doc(id).onSnapshot(callback);
}

export function saveCliente(id, data) {
  return new Promise((resolve, reject) => {
    if (!id) {
      // Instantiate Chance so it can be used
      var chance = new Chance();
      id = chance.bb_pin();
    }
    db.collection("clients")
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

export function getClientes() {
  return new Promise((resolve, reject) => {
    db.collection("clients")
      .get()
      .then((snapshot) => {
        resolve(manageRecordList(snapshot));
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

export function setClientesObserver(callback) {
  db.collection("clients").onSnapshot(callback);
}

export function manageRecordList(snapshot) {
  var newRecords = [];
  snapshot.forEach((item) => {
    newRecords.push({ id: item.id, data: item.data() });
  });
  return newRecords;
}

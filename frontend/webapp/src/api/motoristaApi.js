import { firestore as db } from "../firebase";
import { manageRecordList } from "./commonApi"
// Load Chance
const Chance = require("chance");

////#region Private functions
function getCollectionName(domain) {
  return `${domain}_motorista`
}
////#endregion

////#region Public and common functions
export function getRecord(domain, id) {
  return new Promise((resolve, reject) => {
    db.collection(getCollectionName(domain))
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

export function getRecordObserver(domain, id, callback) {
  return db.collection(getCollectionName(domain)).doc(id).onSnapshot(callback);
}

export function saveRecord(domain, id, data) {
  return new Promise((resolve, reject) => {
    if (!id) {
      // Instantiate Chance so it can be used
      var chance = new Chance();
      id = chance.bb_pin();
    }
    return db.collection(getCollectionName(domain))
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

export function getList(domain) {
  return new Promise((resolve, reject) => {
    db.collection(getCollectionName(domain))
      .get()
      .then((snapshot) => {
        resolve(manageRecordList(snapshot));
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

export function setListObserver(domain, callback) {
  return db.collection(getCollectionName(domain)).onSnapshot(callback);
}

export function setListLookupObserver(domain, callback) {
  return db.collection(getCollectionName(domain)).orderBy("nome", "asc").onSnapshot(callback);
}


////#endregion
import { firestore as db } from "../firebase";
import { manageRecordList } from "./commonApi"
// Load Chance
const Chance = require("chance");

////#region Private functions
export const collectionName = "empresa"
////#endregion

////#region Public and common functions
export function getRecord(id) {
    return new Promise((resolve, reject) => {
        db.collection(collectionName)
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
    return db.collection(collectionName).doc(id).onSnapshot(callback);
}

export function saveRecord(id, data) {
    return new Promise((resolve, reject) => {
        if (!id) {
            // Instantiate Chance so it can be used
            var chance = new Chance();
            id = chance.bb_pin();
        }
        db.collection(collectionName)
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
        db.collection(collectionName)
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
    return db.collection(collectionName).onSnapshot(callback);
}

export function setListLookupObserver(callback) {
    return db.collection(collectionName).orderBy("nome", "asc").onSnapshot(callback);
}
////#endregion
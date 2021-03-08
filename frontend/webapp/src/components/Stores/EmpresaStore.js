import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import {
    setListObserver,
} from "../../api/empresaApi";
import { manageRecordList } from "../../api/commonApi"

const CHANGE_EVENT = "Change";

var records = [];

class EmpresaStore extends EventEmitter {
    getRecords() {
        return records;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    getRecord(id) {
        return records.find(x => x.id === id);
    }

    getLookupName(id) {
        let record = this.getRecord(id);
        return record ? record.data.nome : "Not Found";
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

const store = new EmpresaStore();

setListObserver("default", handleChange)

function handleChange(doc) {
    records = manageRecordList(doc);
    store.emitChange()
}

Dispatcher.register((action) => {
    switch (action.actionType) {
        default:
        // nothing to do
    }
});

export default store;

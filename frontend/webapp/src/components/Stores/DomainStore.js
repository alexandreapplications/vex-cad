import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import {
    setListObserver,
    manageRecordList,
} from "../../../api/domainApi";

const CHANGE_EVENT = "Change";

var domains = [];

class DomainStore extends EventEmitter {
    constructor() {
        super()
        setListObserver(this.handleChange)
    }

    handleChange(doc) {
        domains = manageRecordList(doc);
        this.emitChange()
    }


    getDomains() {
        return domains;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

const store = new DomainStore();

Dispatcher.register((action) => {
    switch (action.actionType) {
        default:
        // nothing to do
    }
});

export default store;

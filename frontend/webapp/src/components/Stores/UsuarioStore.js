import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";

const CHANGE_EVENT = "Change";

var record = {};

class UsuarioStore extends EventEmitter {
    getRecord() {
        return record;
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

const store = new UsuarioStore();

Dispatcher.register((action) => {
    switch (action.actionType) {
        default:
        // nothing to do
    }
});

export default store;

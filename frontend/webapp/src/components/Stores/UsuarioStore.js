import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import actionTypes from "../../actions/actionTypes"
import { getRecordObserver } from "../../api/usuarioApi"
import authStore from "./AuthStore"

const CHANGE_EVENT = "Change";

var record = null;
var usuarioObserver = null;

class UsuarioStore extends EventEmitter {
    setUsuario(doc) {
        record = doc;
    }

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

function handleUsuarioGet(doc) {
    if (doc.exists) {
        store.setUsuario(doc)
    } else {
        const authentication = authStore.getUser()
        store.setUsuario({
            codigo: authentication.email,
            displayName: authentication.displayName,
            telefones: {
                numero: authentication.phoneNumber,
                tipo: "CELCOM"
            },
            emails: {
                valor: authentication.email,
                tipo: "PR"
            },
            empresas: [

            ],
            isCreated: false
        });
    }
    store.emitChange();
}

Dispatcher.register((action) => {
    switch (action.actionType) {
        case actionTypes.CHANGE_AUTHENTICATION:
            if (usuarioObserver) {
                usuarioObserver.unsubscribe();
            }
            if (action.authentication) {
                getRecordObserver(action.authentication.email, handleUsuarioGet);
            }
            else {
                store.setUsuario(null);
                store.emitChange();
            }
            store.emitChange();
            break;
        default:
        // nothing to do
    }
});

export default store;

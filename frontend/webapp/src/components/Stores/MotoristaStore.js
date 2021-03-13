import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import {
    getRecord,
    setListObserver,
    saveRecord
} from "../../api/motoristaApi";
import { manageRecordList } from "../../api/commonApi"

const CHANGE_EVENT = "Change";

var _records = [];
var _prefixo_empresa = "none";
var _isLoaded = false;

class MotoristaStore extends EventEmitter {
    getRecords() {
        return _records;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    isLoaded = () => (_isLoaded);

    getRecord(codigo) {
        return new Promise((resolve, reject) => {
            if (_isLoaded) {
                let result = _records.find(x => x.codigo === codigo);
                if (result) {
                    resolve(result);
                } else {
                    reject("Not Found")
                }
            } else {
                getRecord(_prefixo_empresa, codigo).then(doc => {
                    resolve(doc);
                }).catch(error => {
                    reject(error);
                })
            }
        })
    }

    getLookupName(id) {
        let record = this.getRecord(id);
        return record ? record.data.nome : "Not Found";
    }

    getEmptyRecord() {
        return {
            codigo: "",
            nome: "",
            apelido: "",
            cpf: "",
            telefones: [{
                numero: "",
                tipo: "CELCOM",
                whatsApp: false
            }],
            emails: [{
                valor: "",
                tipo: "PR"
            }],
            ativo: true
        }
    }

    doAddRecord(record) {
        return saveRecord(_prefixo_empresa, record.codigo, record);
    }

    doUpdateRecord(record) {
        return saveRecord(_prefixo_empresa, record.codigo, record);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

const store = new MotoristaStore();

setListObserver(_prefixo_empresa, handleChange)

function handleChange(doc) {
    _records = manageRecordList(doc);
    _isLoaded = true;
    store.emitChange()
}

Dispatcher.register((action) => {
    switch (action.actionType) {
        default:
        // nothing to do
    }
});

export default store;

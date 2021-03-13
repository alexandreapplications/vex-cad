import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import {
    getRecord,
    setListObserver,
    saveRecord
} from "../../api/empresaApi";
import { manageRecordList } from "../../api/commonApi"
import actionTypes from "../../actions/actionTypes"

const CHANGE_EVENT = "Change";

var _records = [];
var _isLoaded = false;
var _usuario = null;

class EmpresaStore extends EventEmitter {
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
                getRecord(codigo).then(doc => {
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
            cnpj: "",
            inscricao: "",
            enderecos: [{
                logradouro: "",
                numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                uf: "",
                cep: "",
                codibge: "",
            }],
            telefones: [{
                numero: "",
                tipo: "CELCOM"
            }],
            emails: [{
                valor: "",
                tipo: "PR"
            }],
            regimeTibutario: "",
            tipoEmissao: "",
            dataContingencia: "",
            horaContingencia: "",
            tipoContingencia: "",
            sequenciaManifesto: 0,
            ativo: true,
            usuarios: [{
                email: _usuario ? _usuario.codigo : "",
                nome: _usuario ? _usuario.displayName || "" : "",
                tipo: "RESPONSAVEL"
            }]
        }
    }

    doAddRecord(record) {
        return saveRecord(record.codigo, record);
    }

    doUpdateRecord(record) {
        return saveRecord(record.codigo, record);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

}

const store = new EmpresaStore();

setListObserver(handleChange)

function handleChange(doc) {
    _records = manageRecordList(doc);
    _isLoaded = true;
    store.emitChange()
}

Dispatcher.register((action) => {
    switch (action.actionType) {
        case actionTypes.CHANGE_USER:
            _usuario = action.usuario
            break;
        default:
        // nothing to do
    }
});

export default store;

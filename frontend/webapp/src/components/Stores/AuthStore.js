import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";
import { auth } from "../../firebase";
import actionTypes from "../../actions/actionTypes"
const CHANGE_EVENT = "Change";

let initialized = false;

class AuthStore extends EventEmitter {
  getUser() {
    return auth.currentUser;
  }

  isAutenticated() {
    return auth.currentUser != null;
  }

  isInitialized() {
    return initialized;
  }

  loginByForm(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return auth.signOut();
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

const store = new AuthStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    default:
    // nothing to do
  }
});

auth.onAuthStateChanged(() => {
  initialized = true;
  store.emitChange();
  Dispatcher.dispatch({ actionType: actionTypes.CHANGE_AUTHENTICATION, authentication: store.getUser() })
});

export default store;

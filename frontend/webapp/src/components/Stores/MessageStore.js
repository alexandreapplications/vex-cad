import { EventEmitter } from "events";
import Dispatcher from "../../appDispatcher";

const CHANGE_EVENT = "Change";

var messages = [];
var sequence = 1;

class MessageStore extends EventEmitter {
  addMessage(value) {
    const id = sequence++;
    messages.push({ id, value });
    setTimeout(() => {
      this.removeMessage(id);
    }, 10000);
    this.emit(CHANGE_EVENT);
  }

  removeMessage(id) {
    messages = messages.filter((value) => value.id !== id);
    this.emit(CHANGE_EVENT);
  }

  getMessages() {
    return messages;
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

const store = new MessageStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    default:
    // nothing to do
  }
});

export default store;

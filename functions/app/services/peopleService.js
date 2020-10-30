module.exports = function() {
    this.getList = () => {
        return Promise.resolve([{ id: 1, nome: "People one"}, { id: 2, nome: "People two"}]);
    }

    return this;
}

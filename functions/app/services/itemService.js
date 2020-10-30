module.exports = function() {
    this.getList = () => {
        return Promise.resolve([{ id: 1, nome: "Item one"}, { id: 2, nome: "Item two"}]);
    }

    return this;
}

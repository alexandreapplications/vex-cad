const peopleService = require("../services/peopleService")();

module.exports = function() {
    this.getList = (req, res) => {
            peopleService.getList().then(success => {
                res.status(200).send(success);
            }).catch(reason => {
                res.status(400).send(reason);
            })
    }

    return this;
}

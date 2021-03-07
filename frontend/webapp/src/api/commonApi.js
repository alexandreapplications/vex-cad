
export function manageRecordList(snapshot) {
    var newRecords = [];
    snapshot.forEach((item) => {
        newRecords.push({ id: item.id, data: item.data() });
    });
    return newRecords;
}


export function manageRecordList(snapshot) {
    let response = [];
    snapshot.forEach((item) => {
        response.push({ ...item.data(), id: item.id });
    });
    return response;
}
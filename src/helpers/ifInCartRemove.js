export function ifInCartRemove (arr, newEl) {
    let flag = true;
    const sorted = arr.map((e) => {
        if (e.id === newEl.id) {
            flag = false;
            return {...e, count: e.count -= 1};
        }
        return e
    })
    if (!flag) {
        return sorted.filter((e) => {
            return e.count > 0
        })
    }
    return sorted
}
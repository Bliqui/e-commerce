export function ifInCartAdd (arr, newEl) {
    let flag = true;
    const sorted = arr.map((e) => {
        if (e.id === newEl.id) {
            flag = false;
            return {...e, count: e.count += 1};
        }
        return e
    })
    if (!flag) {
        return sorted;
    };

    return sorted.concat(newEl)
}
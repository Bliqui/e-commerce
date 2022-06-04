import {PhoneInterface} from "../types/PhoneInterface";

export function ifInCartRemove <T extends PhoneInterface[], K extends PhoneInterface>(arr: T, newEl: K) {
    let flag: boolean = true;
    const sorted: PhoneInterface[] = arr.map((e) => {
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
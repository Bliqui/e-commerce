import {PhoneInterface} from "../types/PhoneInterface";

export function ifInCartAdd <T extends PhoneInterface[], K extends PhoneInterface>(arr: T, newEl: K): T {
    let flag: boolean = true;
    const sorted: any = arr.map((e) => {
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
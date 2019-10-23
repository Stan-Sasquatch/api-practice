export function alphabeticalSortByField(field) {

    return function alphabeticalSort(a, b) {

        if (a[field] < b[field]) { return -1; }
        if (a[field] > b[field]) { return 1; }
        return 0;
    }


}


export function dateSort(a, b) {

    return toDateObject(a["Date Joined"]) - toDateObject(b["Date Joined"])
}

export function toDateObject(stringDate) {
    let dateArray = stringDate.split("/");
    let dateObject = [dateArray[2], dateArray[0] - 1, dateArray[1]]
    return new Date(...dateObject)
}


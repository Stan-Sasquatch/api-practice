// export function alphabeticalSort(field, a, b) {

//     if (a[field] < b[field]) { return -1; }
//     if (a[field] > b[field]) { return 1; }
//     return 0;
// }
export function alphabeticalSortByField(field) {

    function alphabeticalSort(a, b) {

        if (a[field] < b[field]) { return -1; }
        if (a[field] > b[field]) { return 1; }
        return 0;
    }
}





export function dateSort(a, b) {
    let toDateObject = (stringDate) => {
        let slashPosition = []
        for (let i = 0; i < stringDate.length; i++) {
            if (stringDate.charAt(i) == "/") {
                slashPosition.push(i);
            }
        }

        let month = stringDate.substring(0, slashPosition[0]) - 1;


        let day = stringDate.substring(slashPosition[0] + 1, slashPosition[1]);

        let year = stringDate.substring(slashPosition[1] + 1);

        let dateObject = [year, month, day]

        return dateObject
    }
    return new Date(...toDateObject(a["Date Joined"])) - new Date(...toDateObject(b["Date Joined"]))
}
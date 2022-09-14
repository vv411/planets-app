//check if the data contains an exact match for the string(s) being searched

export default function checkIfIncludes(inputData, searchTerms) {
    let ret = false;
    if (!searchTerms || searchTerms == "") { 
        return true;
    }

    let dataArr = inputData.split(",");
    let dataLen = dataArr.length;

    let searchLen = searchTerms.length;

    for (let i = 0; i < dataLen; i++) {
        let currItem = dataArr[i].trim();

        if (searchTerms.includes(currItem)) {
            ret = true;
            break;
        }
    }

    return ret;
}
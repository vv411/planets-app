 //sort input data depending on which sort field is passed in

export default function getSortedData(sortKey, initialData) {
    let returnData = {};

    switch (sortKey) {
      case "name":
        returnData = initialData.sort(function(a, b){ 
          return (a[sortKey].toLowerCase() > b[sortKey].toLowerCase() ? 1 : a[sortKey].toLowerCase() === b[sortKey].toLowerCase() ? 0 : -1);
        });
        break;
      case "population":
      case "id":
        returnData = initialData.sort(function(a, b){
            if(isNaN(Number(a[sortKey]))){  //move non-numeric values to the back
                return 1;
            }

            if(isNaN(Number(b[sortKey]))){
                return -1;
            }

           return Number(a[sortKey]) - Number(b[sortKey]);
        });
        break;
      case "residents":
        returnData = initialData.sort(function(a, b){ 
          return (a[sortKey].length > b[sortKey].length ? 1 : a[sortKey].length === b[sortKey].length ? 0 : -1);
        });
        break;
      default:
        returnData = initialData;
    }

    return returnData;

}
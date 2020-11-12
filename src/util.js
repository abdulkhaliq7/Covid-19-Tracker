export const sortData = (data) => {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1  // if a greater than b, a will be first
        } else {
            return 1 
        }
    } )
    return sortedData
}
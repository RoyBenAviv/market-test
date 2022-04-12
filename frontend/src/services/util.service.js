Array.prototype.autoSortObj = function (objKey, isAsc) {
    if (!this.length || !this[0][objKey]) return this
    // params:
    // objKey = the key that holds the value to sort by
    // sortType = the type of value expected to be in the specified key
    // isAsc = the order to sort the elements by, 1 = ascending, -1 = descending
    const sortDir = isAsc ? 1 : -1
    // console.log(this)
    const sortType = typeof (this[0][objKey]) === 'string' ? 'string' : 'number'
    if (sortType === 'string') return this.sort((a, b) => a[objKey]?.toUpperCase().localeCompare(b[objKey]?.toUpperCase()) * sortDir)
    else if (sortType === 'number') return this.sort((a, b) => a[objKey] - b[objKey] * sortDir)
}


export const utilService = {

}
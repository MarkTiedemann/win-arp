'use strict'

module.exports = ({ table, filter }) => {

    return table.trim()
        .split('\n') // split table lines
        .slice(2) // remove table description
        .map(e => e.trim())
        .map(e => e.replace(/  +/g, ' ')) // harmonize inner table whitespaces
        .map(e => e.split(' ')) // map table strings to array
        .map(e => new Object({ // map table arrays to objects
            ip: e.shift(),
            mac: e.shift(),
            type: e.shift()
        }))
        .filter(e => filter.test(e.type))

}

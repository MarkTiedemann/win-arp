'use strict'

const { exec } = require('child_process')
const getIfaceAddress = require('./lib/get-iface-address')
const parseArpTable = require('./lib/parse-arp-table')

module.exports = ({ iface = 'WiFi', type = 'static|dynamic' }) => {

    return new Promise ((resolve, reject) => {

        const address = getIfaceAddress(iface)

        exec(`arp -a -N ${address}`, (err, table) => {
            if (err) reject(err)
            else resolve(parseArpTable({ table, filter: new RegExp(type) }))
        })

    })

}

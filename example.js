'use strict'

const arp = require('.')({ iface: 'WiFi', type: 'dynamic' })
    .then(console.log)
    // => [ { ip: '192.168.0.21',
    //        mac: 'c5-0e-14-0d-2f-76',
    //        type: 'dynamic'
    //      }, ... ]

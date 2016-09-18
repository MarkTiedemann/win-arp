
# win-arp

**Access the [Windows ARP cache](https://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/arp.mspx).**

## Quickstart

```js

// Get all dynamic ARP records found for the WiFi network interface

const arp = require('win-arp')({ iface: 'WiFi', type: 'dynamic' })
    .then(console.log)
    // => [ { ip: '192.168.0.21',
    //        mac: 'c5-0e-14-0d-2f-76',
    //        type: 'dynamic'
    //      }, ... ]

```

## API

### `require('win-arp')(options)`

- **options** `<Object>`
    - **iface** `<String>`: *default =* `WiFi`; the interface for which to retrieve arp records
    - **type** `<String>`: *default =* `dynamic|static`; the type of the records, one of `dynamic`, `static` or `dynamic|static`
- **throws** an `<Error>` if the interface cannot be found
- **returns** a `<Promise>` which:
    - resolves with **records** => `<Array>`: the arp records found
        - with each **record** being an `<Object>` with the following properties:
            - **ip** `<String>`: the IP address of the record
            - **mac** `<String>`: the MAC address of the record
            - **type** `<String>`: the type of the record, one of `dynamic` or `static`

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).

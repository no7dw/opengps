# opengps: get gps address from ip


### node example:

```
    const gps = require('opengps')
    let ip = '116.22.135.246'
    const ipResult = (yield gps.getAddress(ip)).values[0]

```

use co to drive to test

```
    const co = require('co').co
    co(function *(){ const re = yield gps.getAddress(ip); console.log(re)})
```

    {
        "resultCode": "161",
        "ip": "116.22.135.246",
        "service": "",
        "lng": 113.3445796425,
        "lat": 23.089357864749,
        "radius": 7577,
        "confidence": 0.2,
        "address": "广东省广州市海珠区东环路16-18号",
        "loc_Time": "2016 /12/16 00:30:12",
        "remark": ""
    }

shell example:

    `curl --data "ip=116.22.135.246" https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx `


crawl data example:

```
    node crawl
```

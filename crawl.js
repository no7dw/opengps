'use strict'

const gps = require('./index')
const co = require('co').co
const ipAddress = require('./model/ipAddress')

co(function * () {
        let ipPrefix = ['116.22.135.120', '183.232.228.60', '120.10.135.120',]
        for (var i = 0; i < ipPrefix.length; i++) {
            var ip = ipPrefix[i]
            const re = yield gps.getAddress(ip)
            console.log(ip + ' ->' + JSON.stringify(re))
            let ipResult = re.values[0]
            //save it
            ipAddress.update({ip: ipResult.ip}, ipResult, {upsert: true}).exec()

        }
        process.exit(0)
    }
).
    catch(function (err) {
        console.error('error', err.stack)
    })


'use strict'

const gps = require('./index')
const co = require('co').co
const ipAddress = require('./model/ipAddress')

let constructIpArray = function(){
    //A类地址的表示范围为：0.0.0.0~126.255.255.255
    //B类地址的表示范围为：128.0.0.0~191.255.255.255
    //C类地址的表示范围为：192.0.0.0~223.255.255.255
    let ipPrefix = ['116.22.135.120', '183.232.228.60', '120.10.135.120',]
    return ipPrefix
}

let starCrawl = function * (){

    let ipPrefix = constructIpArray()
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

co(
    starCrawl()
).catch(function (err) {
    console.error('error', err.stack)
    process.exit(1)
})


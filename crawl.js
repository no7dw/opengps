'use strict'

const gps = require('./index')
const co = require('co').co
const ipAddress = require('./model/ipAddress')
const _ = require('lodash')
const listIps = require('list-ips')

let constructIpArray = function(){
    //A类地址的表示范围为：0.0.0.0~126.255.255.255 A类地址分配给规模特别大的网络使用
    //B类地址的表示范围为：128.0.0.0~191.255.255.255 B类地址分配给一般的中型网络
    //C类地址的表示范围为：192.0.0.0~223.255.255.255 C类地址分配给小型网络，如一般的局域网和校园网
    //    特殊IP：
    //    0.0.0.0 和127.0.0.0保留
    //    10.x.x.x、172.16.x.x～172.31.x.x、192.168.x.x 私有地址，这些地址被大量用于内部网络中
    //    224.0.0.0到239.255.255.255用于多点广播
    let A = listIps.list('14.14.14.*') //11.1.1.*
    return A
}

let starCrawl = function * (){

    let ipRange = constructIpArray()
    let locResult = {success: 0 ,fail : 0}
    for (var i = 0; i < ipRange.length; i++) {
        var ip = ipRange[i]
        const re = yield gps.getAddress(ip)
        console.log(ip + ' ->' + JSON.stringify(re))
        let ipResult = re.values[0]
        if(ipResult.resultCode == '定位成功'){
            locResult.success++
            //save it
            ipAddress.update({ip: ipResult.ip}, ipResult, {upsert: true}).exec()
        }
        else{
            locResult.fail++
        }

    }
    console.info(locResult)
    process.exit(0)
}

co(
    starCrawl()
).catch(function (err) {
    console.error('error', err.stack)
    process.exit(1)
})


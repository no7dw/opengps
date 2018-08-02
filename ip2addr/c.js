const { Chromeless } = require('chromeless')
async function run() {
    const chromeless = new Chromeless()
    const html = await chromeless.goto('https://www.opengps.cn/Data/IP/ipplus.aspx').html()
    
    const start = html.indexOf('<span id="msg2"><br>')
    const end = html.indexOf('<span id="msg3">')
    let address = html.substring(start, end  )
    console.log(address)
    address = address.substring( 25, address.indexOf('</span>') )//5 你的位置： //7 pre
    console.log(address)
    await chromeless.end()
}

run().catch(console.error.bind(console))


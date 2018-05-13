'use strict'

function sleep(ms) {
   return new Promise((resolve) => {
       setTimeout(resolve, ms)
   })
}

function Strategy(exchanges) {
    // Attributes
    this.exchange = exchanges[0]
    this.exchanges = exchanges
    this.tasks = []

    this.initTask 

    this.main = async function() {
        while(true) {
            await this.loop()
            await sleep(3000)
        }
    }

    this.loop = async function() {
        // TODO: 想想怎么写测试
        let exchange = this.exchange
        let ticker = null
    }

    this.invest = async function() {
        // 1. getTicker
        try {
            console.log("正在获取 ticker 数据")
            ticker = await exchange.fetchTicker("NAS/USDT")
        } catch(error) {
            console.error(error)
        } finally {
            if (ticker === null) {
                console.log("获取 ticker 失败")
                return false 
            }
        }
    }
}

module.exports = Strategy

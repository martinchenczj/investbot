# Trading Robot

基本架构。

策略相关的文件都放在 strategy 里面。
bot 是一个机器人的 wrapper，每一个策略由一个 bot 来维护。

## Usage

1.编辑配置文件

invest-example.json

```

    "exchange": "binance",
    "paris": [
      {
        currency:"BTC/USDT",
        amount: 10 
      }
    ]
  },
  {
    "exchange": "bittrex",
  },
  ],
}
```

```
$ ./invest.js invest.json 
```





## CCXT 的文档

  fetchTickers()
  fetchOpenOrders()
  createOrder()
  cancelOrder()
  fetchBalance()

  Config Files:

  ```

{
  "exchanges_unencrypted": [
  {
    "exchange": "binance",
      "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXX",
      "apiSecret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  {
    "exchange": "bittrex",
    "inactive": 1,
    "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "apiSecret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  ],
  "exchange_for_fiat": "okcoinusd"
}
```
架构：

MVC 

Task Controller -> 



# TODO:

- command-line-args
- command-line-usage
[ ] 初始化项目
[ ] 查看 ccxt 的文档。
[ ] 列一个工作计划



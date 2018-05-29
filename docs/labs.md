---
layout: page
title: 接口文档 
permalink: /labs/
---

最新接口以[wiki - 接口文档](https://github.com/martinchenczj/investbot/wiki/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3)为准。

# API接口

## 基本信息

#### Request
- Method: **GET**
- URL:  `/info`
- Headers：
- Body: 

#### Response
- Body
```
{
    "data": {
        "name" :"定投机器人",
        "createdDate" : 
        ...
    }
}
```

- 机器人名称：name
- 创建日期：createdDate
- 状态：status
- 托管地址：location
- 交易平台: exchanges

## 日志

### 获取LogStatus

### 参数

- 如果不指定参数会同时返回两种不同的类型。
- type:`type`
    - type 有两种: `table`, `message`        

#### Request
- Method: **GET**
- URL:  ```/logStatus?type="{type}"```
- Headers：
- Body: 

#### Response
- Body
```
{
    "data":[
        {
            "type":"message",
            "status":"Current status is like this"
        },
        {
            "type":"table",
            "title":"持仓信息",
            "cols":[
                "列1",
                "列2"
            ],
            "rows":[
                [
                    "abc",
                    "def"
                ],
                [
                    "ABC",
                    "support color #ff0000"
                ]
            ]
        }
    ]
}
```


### 获取Log

### 参数

- limit: 最多 100 条，默认100条。
- offset: 默认是0

#### Request
- Method: **GET**
- URL:  ```/log?offset={offset}&limit={limit}```
- Headers：
- Body: 

#### Response
- Body
```
{
  "data": [{type: "error", message: "error message"},...,{type: "normal", message:"normal"}]
}
```

### 获取LogProfit

### 参数

limit: 最多 100 条，默认100条。
offset: 默认是0

#### Request
- Method: **GET**
- URL:  ```/logProfit?offset={offset}&limit={limit}```
- Headers：
- Body: 

#### Response
- Body
```
{
  "data": [100,99,98,97,...,1]
}
```

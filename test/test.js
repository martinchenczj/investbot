const mocha = require("mocha")
const sinon = require("sinon")
const assert = require("chai").assert
const strategy = require("../src/strategy.js")
const utils = require("../src/utils.js")

// Unit test

describe('utils.js', function () {
    let stub = {}

    before(function() {
        stub = sinon.stub();
        console.log("setup the stub function before test")
    });

    it("should be able to call function with args", function () {
        utils._C(stub, "1", "2", "3");
        assert.isTrue(stub.calledOnceWith("1","2","3"),"should call the function with args 1,2,3 ");
        assert.isNotTrue(stub.calledOnceWith("1","2"),"should call the function with args 1,2,3 ");
        assert.isTrue(stub.calledOnce, "should call the function once");
    })
});

// Below is intergreted test

describe('strategy.js', function () {
    it("should be able to load the tikcker of the wetsite", async function () {
        this.timeout(20000)
        result = await strategy.run()
    });

});

describe('bot.js', function () {
    it("")
});

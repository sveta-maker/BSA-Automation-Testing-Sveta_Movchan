class BaseElement {
constructor(selector,index){
this.selector=selector;
this.index=index;
}
async waitForVisible(element, timeout=5000){
    await element.waitForDisplayed({
        timeout,
        timeoutMsg: `Element is not displayed. Selector${this.selector},`
    })

}
}

module.exports = {BaseElement};
const {BaseElement} = require('./base.element');
class Link extends BaseElement{
    constructor(selector, index){
        super(selector, index);
    }
    async click(){
        let element;
        if(this.index){
            element=(await $$(this.selector))[this.index];
        } else{
            element=await $(this.selector);
        }
        await this.waitForVisible(element);
        await element.click();
    }
    
    }

module.exports = {Link};
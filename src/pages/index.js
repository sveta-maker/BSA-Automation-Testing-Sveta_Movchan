const {AuthPage}=require('./auth.page');
class App{
    constructor(){
        this.AuthPage=new AuthPage();
    }
}
module.exports = {App};
const {Button}=require('../elements');
class ProfilePage{

    constructor(){
        this.editButton = new Button('button'); 
        this.editButton = new Button('button.styles_edit__ftuHl');
        this.specDdl= new Button('div.selectStyles__control',0);
        this.clinicDdl= new Button('div.selectStyles__control',1);
        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.submitspecButton = new Button('button.button.styles_btn___s1BB',2);
        this.submitclinicButton = new Button('button.button.styles_btn___s1BB',3);    
    }

    async clickEdit() {
        await this.editButton.click();         
    }
    async changeSpec({spec}) {    
    await this.specDdl.click();
    await this.ddlOption.clickByText(spec);

    await this.submitspecButton.click();         
}

async changeClinic({clinic}) {    
    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinic);

    await this.submitclinicButton.click();         
}

}

module.exports={ProfilePage};
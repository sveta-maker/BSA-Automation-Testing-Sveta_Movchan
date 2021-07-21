const {Button}=require('../elements');
class ClinicPage{

    constructor(){
        this.clinicnameField = new Input('input[name="name"]');
        this.addressField = new Input('input[name="address"]');
        this.statusDdl= new Button('div.selectStyles__control',0);
        this.cityDdl= new Button('div.selectStyles__control',1);
        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.submitButton = new Button('button.styles_btn___s1BB',2);
        this.AddButton = new Button('button.styles_btn___s1BB',1);
    }

    async clickAddClinic(){
        await this.AddButton.click()
    };

    async addClinic({name, address, status, city}) {
        
        await this.usernameField.setValue(name);
    
        await this.addressField.setValue(address);
        await this.cityDdl.click();
        await this.ddlOption.clickByText(city);
    
        await this.statusDdl.click();
        await this.ddlOption.clickByText(status);
    
        await this.submitButton.click();         
    }
   
    } 
module.exports={ClinicPage};
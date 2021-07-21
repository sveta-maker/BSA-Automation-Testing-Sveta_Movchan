const {Link}=require('../elements');
class DoctorPage{

    constructor(){
        this.profileLink = new Link('a.link_link__3zEN3',3);
        this.clinicLink = new Link('a.link_link__3zEN3',2);
    }
    async clickProfileLink(){
        await this.profileLink.click();   
    } 
    async clickClinicLink(){
        await this.clinicLink.click();   
    } 
}
module.exports={DoctorPage};
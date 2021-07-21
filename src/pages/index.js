const {AuthPage}=require('./auth.page');
const {ProfilePage}=require('./profile.page');
const {DoctorPage}=require('./doctors.page');
const {EditUser}=require('./edituser.page');
const {ClinicPage}=require('./clinics.page');
class App{
    constructor(){
        this.AuthPage=new AuthPage();
        this.ProfilePage=new ProfilePage();
        this.DoctorPage=new DoctorPage();
        this.EditUser=new EditUser();
        this.ClinicPage=new ClinicPage();

    }
}
module.exports = {App};
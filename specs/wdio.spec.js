const { expect } = require('chai');
const { App} = require('../src/pages');
const rundomNumber = () => Date.now();
const app= new App();

describe('Registration:', function () {
  beforeEach(async function() {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

 afterEach(async function() {
  await browser.reloadSession();
  });

  xit('should be able to register doctor', async function () {

    await app.AuthPage.register({
     name:'test',
     surname:'test',
     email: `marcus${rundomNumber()}@gmail.com`,
     password: 'Pa55word',
     phone:'380000000000',
     birthDate: '11/11/1999',
     status:'doctor',
     gender:'female',
    });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
  });

  xit('should be able to register patient', async function () {

    await app.AuthPage.register({
      name:'test1',
      surname:'test1',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone:'380000000000',
      birthDate: '11/11/1999',
      status:'patient',
      gender:'male',
     });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
   
  });
});

/////////////////AUTHORIZATION //////////////////////////////////////////

describe('Authorization:', function () {
  beforeEach(async function() {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

 afterEach(async function() {
  await browser.reloadSession();
  });

  xit('should be able to log in with valid data', async function () {

    await app.AuthPage.authorization({
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

     });
     ///////////////AUTHORIZATION WİTH İNVALİD DATA//////////////////////////////////////////
     xit('should not be able to log in using invalid data', async function () {

      await app.AuthPage.authorization({
        email: `marcus${rundomNumber()}@gmail.com`,
        password: '1',
            });
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/doctors');
  
    });
});


////////////////////////CHANGE PERSONAL INFO//////////////////////////////////////
describe('Chage info in Profile:', function () {
  beforeEach(async function() {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

 afterEach(async function() {
  await browser.reloadSession();
  });
  xit('should be able to change personal data in Profile', async function () {

    await app.AuthPage.authorization({
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    await app.DoctorPage.clickProfileLink();
     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/user-profile';
       },
       { timeout: 5000 },
     );

     await app.ProfilePage.clickEdit();
     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/api/v1/users/current-user';
       },
       { timeout: 5000 },
     );

     await app.EditUser.edit({
      name:'test3',
     surname:'test3',
     email: `marcus${rundomNumber()}@gmail.com`,
     password: 'Pa66word',
     phone:'390000000000',
     birthDate: '11/12/1999',
     status:'doctor',
     gender:'female',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile';
      },
      { timeout: 5000 },
    );

    const myInputName = $('span.styles_name__2vTNE[0]');

    expect(myInputName).toHaveValue('test3');
  });
////////////////////////CHANGE PERSONAL speciality/clinic//////////////////////////////////////
  it('should be able to change speciality/clinic in Profile', async function () {

    await app.AuthPage.authorization({
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    await app.DoctorPage.clickProfileLink();
     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/user-profile';
       },
       { timeout: 5000 },
     );

     await app.ProfilePage.changeSpec({
      
      spec:'Surgeon',
     });
     await app.ProfilePage.changeClinic({
      
      clinic:'Cleveland Clinic',
     });

     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/user-profile';
       },
       { timeout: 5000 },
     );
    
    const myInputSpec = $('selectStyles__placeholder.css-1wa3eu0-placeholder');
    const myInputClin = $('selectStyles__single-value.css-1uccc91-singleValue');

    expect(myInputSpec).toHaveValue('Surgeon');
    expect(myInputClin).toHaveValue('Cleveland Clinic');
  });
///////////////////////////////ADD CLİNİC///////////////////////////////////////////////////////////////////////
const rundomNumber_1_2 = () => Math.round(Math.random()*(2-1)+1).toString();
  xit('should be able to add a clinic', async function () {

    await app.AuthPage.authorization({
      email: `john_admin${rundomNumber_1_2()}@gmail.com`,
      password: 'Pa55word',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    await app.DoctorPage.clickClinicLink();
     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/clinics';
       },
       { timeout: 5000 },
     );
     await app.ClinicPage.clickAddClinic();
     await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === ' http://46.101.234.121/api/v1/clinics/';
       },
       { timeout: 5000 },
     );

     await app.ClinicPage.addClinic({
      name:'test53',
     address:'test53',
     status:'Stater',
     city:'Baltimore',
          });
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === http://46.101.234.121/api/v1/clinics/';
      },
      { timeout: 5000 },
    );
    const myInput = await $('span.styles_title__3xRccspan');
    expect(myInput).toHaveValue('test53');
    
   

  });

});


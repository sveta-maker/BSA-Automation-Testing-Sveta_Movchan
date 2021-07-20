const { expect } = require('chai');
const { App, App } = require('../src/pages');
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
    })
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
     })
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
          })
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

      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
      
      const signInButton = await $('button');
      
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue(`john_admin${rundomNumber_fale()}@admin.com`);
  
      await passwordField.waitForDisplayed({ timeout: 5000 });
      await passwordField.setValue('Pa55word');
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/doctors');
  
      await browser.reloadSession();
    });
});




////////////////////////CHANGE PERSONAL INFO//////////////////////////////////////
describe('Chage info in Profile:', function () {

  xit('should be able to change data in Profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
   
    const signInButton = await $('button');
      
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin${rundomNumber_1_2()}@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

//Page 'doctors' opens
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
//Click the Profile link
    const link=await $$('a.link_link__3zEN3');
    const profile_link=link[3];
    await profile_link.waitForDisplayed({timeout:5000});
    await profile_link.click(); 
//Profile page opens
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        if  (emailField===`john_admin1@admin.com`){
          return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265'
          } else if (emailField===`john_admin2@admin.com`){
          return url === 'http://46.101.234.121/user-profile/e7c5dc9f-eb9c-4ecb-afb0-a2d703d54263'}
          
      },
      { timeout: 5000 },
    );
//Click the edit button
    const editButton = await $('button.styles_edit__ftuHl');
    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();

//Edit Username and usersurname
    const profile_usernameField = await $('input[name="name"]');
    await profile_usernameField.waitForDisplayed({ timeout: 5000 });
    await profile_usernameField.setValue(`TestName${rundomNumber()}`);

//Click to submit
    const submit_editButton = await $('button.styles_btn___s1BB');
    await submit_editButton.waitForDisplayed({ timeout: 5000 });
    await submit_editButton.click();

    const myInputName = $('span.styles_name__2vTNE[0]')

    expect(myInputName).toHaveValue(profile_usernameField);

    await browser.reloadSession();
  });
});

////////////////////////CHANGE PERSONAL speciality/clinic//////////////////////////////////////
const rundomNumber_0_4 = () => Math.round(Math.random()*(4-0)+0).toString();
const rundomNumber_0_34 = () => Math.round(Math.random()*(34-0)+0).toString();

describe('Change speciality/clinic in Profile:', function () {

  it('should be able to change speciality/clinic in Profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
      
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin${rundomNumber_1_2()}@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

//Page 'doctors' opens
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
//Click the Profile link
    const link=await $$('a.link_link__3zEN3');
    const profile_link=link[3];
    await profile_link.waitForDisplayed({timeout:5000});
    await profile_link.click(); 
//Profile page opens
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        if  (emailField===`john_admin1@admin.com`){
          return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
          } else if (emailField===`john_admin2@admin.com`){
          return url === 'http://46.101.234.121/user-profile/e7c5dc9f-eb9c-4ecb-afb0-a2d703d54263';}
          
      },
      { timeout: 5000 },
    );
    
    const ddls_prof = await $$('div.selectStyles__control');

    const specialityDdl = ddls_prof[0];
    const clinicDdl = ddls_prof[1];

    const spec_option = await $(`div#react-select-8-option-${rundomNumber_0_4()}`);
    const clinic_option = await $(`div#react-select-9-option-${rundomNumber_0_34()}`);
   
    await specialityDdl.waitForDisplayed({ timeout: 5000 });
    await specialityDdl.click();

    await clinicDdl.waitForDisplayed({ timeout: 5000 });
    await clinicDdl.click();

    const myInputSpec = $('selectStyles__placeholder.css-1wa3eu0-placeholder');
    const myInputClin = $('selectStyles__single-value.css-1uccc91-singleValue');

    expect(myInputSpec).toHaveValue(spec_option);
    expect(myInputClin).toHaveValue(clinic_option);
     
    await browser.reloadSession();

  });
});
///////////////////////////////ADD CLİNİC///////////////////////////////////////////////////////////////////////
const rundomNumber_0_1 = () => Math.round(Math.random()*(1-0)+0).toString();
const rundomNumber_0_17 = () => Math.round(Math.random()*(17-0)+0).toString();

describe('Add a clinic:', function () {

  xit('should be able to add a clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
   
    const signInButton = await $('button');
      
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin${rundomNumber_1_2()}@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    //Page 'doctors' opens
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
//Click the Clinics link
    const link=await $$('a.link_link__3zEN3');
    const clinic_link=link[2];
    await clinic_link.waitForDisplayed({timeout:5000});
    await clinic_link.click(); 
//Profile page opens
await browser.waitUntil(
  async function () {
    const url = await browser.getUrl();
    return url === 'http://46.101.234.121/clinics';
  },
  { timeout: 5000 },
);
//ADD BUTTON
const addButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3 styles_primary-dark__1WnyR');
await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click();

    const clinicnameField = await $('input[name="name"]');
    const clinicaddressField = await $('input[name="address"]');

    const ddls_cl = await $$('div.selectStyles__control');

    const stateDdl = ddls_cl[0];
    const cityDdl = ddls_cl[1];

    const status_option = await $(`div#react-select-16-option-${rundomNumber_0_1()}`);
    const city_option = await $(`div#react-select-19-option-${rundomNumber_0_17()}`);

    const addcityButton = await $('button');

    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue(`TestName${rundomNumber()}`);

    await clinicaddressField.waitForDisplayed({ timeout: 5000 });
    await clinicaddressField.setValue(`TestName${rundomNumber()}`);
    
    await stateDdl.waitForDisplayed({ timeout: 5000 });
    await stateDdl.click();

    await cityDdl.waitForDisplayed({ timeout: 5000 });
    await cityDdl.click();

    await addcityButton.waitForDisplayed({ timeout: 5000 });
    await addcityButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/clinics';;
      },
      { timeout: 5000 },
    );
    
    const myInput = await $('span.styles_title__3xRccspan');
    expect(myInput).toHaveValue(clinicnameField, { ignoreCase: true })
    
    await browser.reloadSession();

  });
});
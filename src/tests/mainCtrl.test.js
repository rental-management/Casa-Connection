const mainCtrl = require('../../server/controllers/mainCtrl');

//Zac's 5 tests
describe('getProperties Method:', function(){
    //test
    test('req.body is undefined', () => {
        expect(mainCtrl.getProperties.req).toBe(undefined);

    })        
    
});

describe('addProperty Method: ', function(){
    test('prop_name to be a string', ()=> {
    
        expect(typeof mainCtrl.addProperty.prop_name).toBe(typeof(string));
    })

});

describe('addWorkOrder Method: ', function(){
    
    test('user is an integer', () => {
        expect(typeof mainCtrl.addWorkOrder.user).toBe(typeof(number));
    })
});

describe('editTenant Method: ', function(){
    test('email is not a number value', () => {
        expect(typeof mainCtrl.editTenant.email === '').toBe(!typeof(number));

    })
})

describe('editExpenses Method: ', function(){
    test('editExpenses is a type of function', () => {
        expect(typeof mainCtrl.editExpenses).toBe("function");
    })
})

//Mike's 5 Tests
describe('addContractor:', function() {
    it('add contractor email to equal a string', () => {
       expect(typeof mainCtrl.addContractor.email).toBe(typeof(string))
    })
});

describe('addContractor:', function() {
    it('add contractor last name to equal a string ', () => {
       expect(typeof mainCtrl.addContractor.l_name).toBe(typeof (string))
    })
});

describe('editContractor:', function() {
    it('edit contractor first name to equal a string', () => {
        expect(typeof mainCtrl.editContractor.f_name).toBe(typeof(string))
    })
});

describe('editContractor:', function() {
   it('edit contractor id to equal the provided a number', () => {
       expect(typeof mainCtrl.editContractor.id).toBe(typeof(number))
   })
});

describe('deleteContractor:', function(){
    it('delete contractor id should be a number', () => {
        expect(typeof mainCtrl.deleteContractor.id).toBe(typeof(number))
    })
});
//


//

//Sara's 5 tests
describe('editContractor:', function() {
    it('rent is a number', () => {
        expect(typeof mainCtrl.editContractor.rent).toBe(typeof(number))
    })
 })
 
 describe('addExpenses:', function() {
    it('added expense mortgage comes back as a number', () => {
        expect(typeof mainCtrl.addExpenses.monthly_mortgage).toBe(typeof(number))
    })
 })
 describe('editExpenses:', function() {
    it('edit expenses id comes back as a number', () => {
        expect(typeof mainCtrl.editExpenses.id).toBe(typeof(number))
    })
 })
 describe('deleteWorkOrders', () => {
    it('deleting workorders by id', () => {
        expect(mainCtrl.deleteWorkOrders.workorders_id).toBe(undefined)
    })
 })

 describe('addContractor:', () => {
    it('contractor first and last name should be string', () => {
        expect(typeof mainCtrl.addContractor.f_name).toBe(typeof(string))
    })
 })

 //

 //Gab's 5 Tests

describe('getProperties Method:', function(){
    //test
    it('sends a valid response', () => {
        expect(mainCtrl.getProperties.req).toBe(undefined);
    })
});

describe('getProperty Method', function() {
    //test
    it('sends a valid response', () => {
        expect(mainCtrl.getProperty.req).toBe(undefined);
    })
})

describe('deleteContractor', function() {
    //test
    it('deletes information related to contractor', () =>{
        expect(mainCtrl.deleteContractor.req).toBe(undefined);
    })
})

describe('getWorkOrders', function(){
    //test
    it('gets work orders by prop id', () => {
        expect(mainCtrl.getWorkOrders.req).toBe(undefined);
    })
})

describe('addContractor', function(){
    it('tests that state is a string', () => {
        expect(typeof mainCtrl.addContractor.state).toBe(typeof(string))

    })
})
//


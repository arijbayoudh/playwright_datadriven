import { Page, Locator } from '@playwright/test';
import { PageActions } from '../actions/PageActions';
import { PageAssertions } from '../actions/PageAssertions';
import checkOutData from '../data/checkOutData.json';

export class CheckOutPage {

    readonly page: Page;
    readonly actions : PageActions;
    readonly assertions : PageAssertions;

    readonly shoppingCart: Locator;
    readonly termsCheckBox: Locator;
    readonly cartCheckOutButton: Locator;
    readonly billingAddressSelect: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly countrySelect: Locator;
    readonly stateSelect: Locator;
    readonly cityField: Locator;
    readonly address1Field: Locator;   
    readonly zipCodeField: Locator;
    readonly phoneField: Locator;
    readonly continueButtonStep1: Locator;
    readonly shippingAddressInStore : Locator;
    readonly continueButtonStep2: Locator;
    readonly paymentMethodCreditCard: Locator;
    readonly continueButtonStep3: Locator;
    readonly creditCardSelect: Locator;
    readonly cardholderName: Locator;
    readonly cardNumber: Locator;
    readonly cardexpirationMonth: Locator;
    readonly cardexpirationYear: Locator;
    readonly cardCode: Locator;
    readonly continueButtonStep4: Locator;
    readonly continueButtonStep5: Locator;
    readonly successMessage: Locator;


      constructor (page: Page){ 
        this.page = page;
        this.actions = new PageActions(page);
        this.assertions = new PageAssertions(page);

        /*Locators*/ 
        this.shoppingCart = page.locator("//span[normalize-space()='Shopping cart']");
        this.termsCheckBox = page.locator("#termsofservice");
        this.cartCheckOutButton = page.locator("#checkout");
        this.billingAddressSelect = page.locator("#billing-address-select");
        this.firstNameField = page.locator("#BillingNewAddress_FirstName");
        this.lastNameField = page.locator("#BillingNewAddress_LastName");
        this.emailField = page.locator("#BillingNewAddress_Email");
        this.countrySelect = page.locator("#BillingNewAddress_CountryId");
        this.stateSelect = page.locator("#BillingNewAddress_StateProvinceId");
        this.cityField = page.locator("#BillingNewAddress_City");
        this.address1Field = page.locator("#BillingNewAddress_Address1");
        this.zipCodeField = page.locator("#BillingNewAddress_ZipPostalCode");
        this.phoneField = page.locator("#BillingNewAddress_PhoneNumber");
        this.continueButtonStep1 = page.locator("input[onclick='Billing.save()']");
        this.shippingAddressInStore = page.locator("#PickUpInStore");
        this.continueButtonStep2 = page.locator("input[onclick='Shipping.save()']");
        this.paymentMethodCreditCard = page.locator("#paymentmethod_2");
        this.continueButtonStep3 = page.locator("input[class='button-1 payment-method-next-step-button']");
        this.creditCardSelect = page.locator("#CreditCardType");        
        this.cardholderName = page.locator("#CardholderName");
        this.cardNumber = page.locator("#CardNumber");
        this.cardexpirationMonth = page.locator("#ExpireMonth");
        this.cardexpirationYear = page.locator("#ExpireYear");
        this.cardCode = page.locator("#CardCode");
        this.continueButtonStep4 = page.locator("input[class='button-1 payment-info-next-step-button']");
        this.continueButtonStep5 = page.locator("input[value='Confirm']");
        this.successMessage = page.getByText("Your order has been successfully processed!");


    }

     async checkOut(){
        await this.actions.click(this.shoppingCart);
        await this.actions.click(this.termsCheckBox);
        await this.actions.click(this.cartCheckOutButton);
        await this.actions.selectOption(this.billingAddressSelect,checkOutData.CheckOut.billingAddress);
        await this.actions.fill(this.firstNameField,checkOutData.CheckOut.firstName);
        await this.actions.fill(this.lastNameField,checkOutData.CheckOut.lastName);
        await this.actions.fill(this.emailField,checkOutData.CheckOut.email);
        await this.actions.selectOption(this.countrySelect,checkOutData.CheckOut.country);
        await this.actions.selectOption(this.stateSelect,checkOutData.CheckOut.state);        
        await this.actions.fill(this.cityField,checkOutData.CheckOut.city);
        await this.actions.fill(this.address1Field,checkOutData.CheckOut.address1);
        await this.actions.fill(this.zipCodeField,checkOutData.CheckOut.zipCode);
        await this.actions.fill(this.phoneField,checkOutData.CheckOut.phone);
        await this.actions.click(this.continueButtonStep1);
        await this.actions.click(this.shippingAddressInStore);
        await this.actions.click(this.continueButtonStep2);
        await this.actions.click(this.paymentMethodCreditCard);
        await this.actions.click(this.continueButtonStep3);
        await this.actions.fill(this.cardholderName,checkOutData.CheckOut.cardholderName);
        await this.actions.fill(this.cardNumber,checkOutData.CheckOut.cardNumber);
        await this.actions.selectOption(this.cardexpirationMonth,checkOutData.CheckOut.cardExpirationMonth);
        await this.actions.selectOption(this.cardexpirationYear,checkOutData.CheckOut.cardExpirationYear);
        await this.actions.fill(this.cardCode,checkOutData.CheckOut.cardCode);
        await this.actions.click(this.continueButtonStep4);
        await this.actions.click(this.continueButtonStep5);
     } 
     
     async assertOrderProcess(){
        await this.assertions.expectVisible(this.successMessage);
     }
 }

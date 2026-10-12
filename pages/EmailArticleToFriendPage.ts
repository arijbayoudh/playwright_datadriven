import { Page, Locator } from '@playwright/test';
import { PageActions } from '../actions/PageActions';
import { PageAssertions } from '../actions/PageAssertions';
import emailToFriendData from '../data/emailToFriendData.json';

export class EmailArticleToFriendPage {

    readonly page: Page;
    readonly actions : PageActions;
    readonly assertions : PageAssertions;

    readonly computersButton: Locator;
    readonly desktopsButton: Locator;
    readonly chosenComputer: Locator;
    readonly emailFriendButton: Locator;
    readonly friendEmailField: Locator;
    readonly yourEmailField: Locator;
    readonly message: Locator;
    readonly sendEmailButton: Locator;
    readonly successMessage: Locator;


      constructor (page: Page){ 
        this.page = page;
        this.actions = new PageActions(page);
        this.assertions = new PageAssertions(page);

        /*Locators*/ 
        this.computersButton = page.locator("//ul[@class='top-menu']//a[normalize-space()='Computers']");
        this.desktopsButton = page.locator("img[title='Show products in category Desktops']");
        this.chosenComputer = page.locator("//a[normalize-space()='Desktop PC with CDRW']");
        this.emailFriendButton = page.locator("input[value='Email a friend']");
        this.friendEmailField = page.locator("#FriendEmail");
        this.yourEmailField = page.locator("#YourEmailAddress");
        this.message = page.locator("#PersonalMessage");
        this.sendEmailButton = page.locator("input[value='Send email']");
        this.successMessage = page.getByText("Your message has been sent.");
    }

     async emailItemToFriend(){
        await this.actions.click(this.computersButton);
        await this.actions.click(this.desktopsButton);
        await this.actions.click(this.chosenComputer);
        await this.actions.click(this.emailFriendButton);
        await this.actions.fill(this.friendEmailField,emailToFriendData.validFriend.FriendEmail);
        await this.actions.fill(this.yourEmailField,emailToFriendData.validFriend.yourEmail);
        await this.actions.fill(this.message,emailToFriendData.validFriend.Message);        
        await this.actions.click(this.sendEmailButton);
     } 
     
     async assertEmailSended(){
        await this.assertions.expectVisible(this.successMessage);
     }

 }

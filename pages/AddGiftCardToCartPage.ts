import { Page, Locator } from '@playwright/test';
import { PageActions } from '../actions/PageActions';
import { PageAssertions } from '../actions/PageAssertions';
import giftCardData from '../data/giftCardData.json';


export class AddGiftCardToCartPage {

    readonly page: Page;
    readonly actions : PageActions;
    readonly assertions : PageAssertions;

    readonly giftCardsButton: Locator;
    readonly chosenGiftCard: Locator;
    readonly recipientNameField: Locator;
    readonly yourNameField: Locator;
    readonly messageField: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly articleInCart: Locator; 


      constructor (page: Page){ 
        this.page = page;
        this.actions = new PageActions(page);
        this.assertions = new PageAssertions(page);

        /*Locators*/ 
        this.giftCardsButton = page.locator("//ul[@class='top-menu']//a[normalize-space()='Gift Cards']");
        this.chosenGiftCard = page.locator("//h2[@class='product-title']//a[contains(text(),'$50 Physical Gift Card')]");
        this.recipientNameField = page.locator('#giftcard_3_RecipientName');
        this.yourNameField = page.locator('#giftcard_3_SenderName');
        this.messageField = page.locator('#giftcard_3_Message');         
        this.addToCartButton = page.locator('#add-to-cart-button-3');
        this.shoppingCartButton = page.locator("a[class='ico-cart'] span[class='cart-label']");
        this.articleInCart = page.locator("//a[@class='product-name'][normalize-space()='$50 Physical Gift Card']");

    }

     async addGiftCardToCart(){
        await this.actions.click(this.giftCardsButton);
        await this.actions.click(this.chosenGiftCard);
        await this.actions.fill(this.recipientNameField,giftCardData.GiftCard.recipientName);     
        await this.actions.fill(this.yourNameField,giftCardData.GiftCard.yourName);     
        await this.actions.fill(this.messageField,giftCardData.GiftCard.message);     
        await this.actions.click(this.addToCartButton);     
     } 
     
     async assertItemAdded(){
        await this.actions.click(this.shoppingCartButton);
        await this.assertions.expectVisible(this.articleInCart);
     }

 }

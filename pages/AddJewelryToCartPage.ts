import { Page, Locator } from '@playwright/test';
import { PageActions } from '../actions/PageActions';
import { PageAssertions } from '../actions/PageAssertions';

export class AddJewelryToCartPage {

    readonly page: Page;
    readonly actions : PageActions;
    readonly assertions : PageAssertions;

    readonly jewelryButton: Locator;
    readonly chosenItem: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly articleInCart: Locator; 


      constructor (page: Page){ 
        this.page = page;
        this.actions = new PageActions(page);
        this.assertions = new PageAssertions(page);

        /*Locators*/ 
        this.jewelryButton = page.locator("//ul[@class='top-menu']//a[normalize-space()='Jewelry']");
        this.chosenItem = page.locator("//h2[@class='product-title']//a[normalize-space()='Black & White Diamond Heart']");        
        this.addToCartButton = page.locator('#add-to-cart-button-14');
        this.shoppingCartButton = page.locator("a[class='ico-cart'] span[class='cart-label']");
        this.articleInCart = page.locator("//a[@class='product-name'][normalize-space()='Black & White Diamond Heart']");

    }

     async addItem1ToCart(){
        await this.actions.click(this.jewelryButton);
        await this.actions.click(this.chosenItem);
        await this.actions.click(this.addToCartButton);     
     } 
     
     async assertItemAdded(){
        await this.actions.click(this.shoppingCartButton);
        await this.assertions.expectVisible(this.articleInCart);
     }

 }

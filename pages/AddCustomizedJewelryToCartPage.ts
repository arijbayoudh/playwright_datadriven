import { Page, Locator } from '@playwright/test';
import { PageActions } from '../actions/PageActions';
import { PageAssertions } from '../actions/PageAssertions';

export class AddCustomizedJewelryToCartPage {

    readonly page: Page;
    readonly actions : PageActions;
    readonly assertions : PageAssertions;

    readonly jewelryButton: Locator;
    readonly chosenItem: Locator;
    readonly materialField: Locator;
    readonly lengthField : Locator;
    readonly pendantField: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly articleInCart: Locator; 


      constructor (page: Page){ 
        this.page = page;
        this.actions = new PageActions(page);
        this.assertions = new PageAssertions(page);

        /*Locators*/ 
        this.jewelryButton = page.locator("//ul[@class='top-menu']//a[normalize-space()='Jewelry']");
        this.chosenItem = page.locator("//h2[@class='product-title']//a[normalize-space()='Create Your Own Jewelry']");
        this.materialField = page.locator('#product_attribute_71_9_15');
        this.lengthField = page.locator('#product_attribute_71_10_16');
        this.pendantField = page.locator('#product_attribute_71_11_17_49');         
        this.addToCartButton = page.locator('#add-to-cart-button-71');
        this.shoppingCartButton = page.locator("a[class='ico-cart'] span[class='cart-label']");
        this.articleInCart = page.locator("//a[@class='product-name'][normalize-space()='Black & White Diamond Heart']");

    }

     async addItem2ToCart(){
        await this.actions.click(this.jewelryButton);
        await this.actions.click(this.chosenItem);
        await this.actions.selectOption(this.materialField, '46');
        await this.actions.fill(this.lengthField,'12')
        await this.actions.click(this.pendantField)
        await this.actions.click(this.addToCartButton);     
     } 
     async assertItemAdded(){
        await this.actions.click(this.shoppingCartButton);
        await this.assertions.expectVisible(this.articleInCart);
     }

 }

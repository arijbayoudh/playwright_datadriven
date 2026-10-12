
import { test, expect } from '../fixtures/loginSetup';
import { AddGiftCardToCartPage } from '../pages/AddGiftCardToCartPage';


test.describe('Test Add Gift Card To Cart' , () =>{

test('Add 50$ Gift Card ', async ({ page }) => {
 const addGiftCardToCartPage = new AddGiftCardToCartPage(page);
 await addGiftCardToCartPage.addGiftCardToCart();
 await addGiftCardToCartPage.assertItemAdded();
});

});
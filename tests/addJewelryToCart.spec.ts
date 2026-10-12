
import { test, expect } from '../fixtures/loginSetup';
import { AddJewelryToCartPage } from '../pages/AddJewelryToCartPage';
import { AddCustomizedJewelryToCartPage } from '../pages/AddCustomizedJewelryToCartPage';


test.describe('Test Add Jewelry To Cart' , () =>{

test('Add a simple Jewelry item', async ({ page }) => {
 const addJewelryToCartPage = new AddJewelryToCartPage(page);
 await addJewelryToCartPage.addItem1ToCart();
 await addJewelryToCartPage.assertItemAdded();
});

test('Add a complex Jewelry item', async ({ page }) => {
 const addJewelryPage = new AddCustomizedJewelryToCartPage(page);
 await addJewelryPage.addItem2ToCart();
 await addJewelryPage.assertItemAdded();
});
});
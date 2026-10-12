
import { test, expect } from '../fixtures/loginSetup';
import { CheckOutPage } from '../pages/CheckOutPage';
import { AddJewelryToCartPage } from '../pages/AddJewelryToCartPage';

test.describe('Test Checkout' , () =>{

test('Test CheckOut', async ({ page }) => {
 const checkOutPage = new CheckOutPage(page);
 const addJewelryToCartPage = new AddJewelryToCartPage(page);
  await addJewelryToCartPage.addItem1ToCart();
 await checkOutPage.checkOut();
 await checkOutPage.assertOrderProcess();
});
});

import { test, expect } from '../fixtures/loginSetup';
import { EmailArticleToFriendPage } from '../pages/EmailArticleToFriendPage';

test.describe('Email an Item to a Friend' , () =>{

test('Email Item to a valid Friend Email', async ({ page }) => {
 const emailArticleToFriendPage = new EmailArticleToFriendPage(page);
 await emailArticleToFriendPage.emailItemToFriend();
 await emailArticleToFriendPage.assertEmailSended();
});
});
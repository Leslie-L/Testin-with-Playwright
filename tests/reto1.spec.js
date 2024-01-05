const {test, expect} = require('@playwright/test')
test('add to cart', async({page})=>{
    await page.goto('https://automationexercise.com/')
    //hover al primer producto
    await page.hover('.features_items .col-sm-4 >> nth=2')
    // click en agregar el primer producto
    await page.locator('.features_items a:has-text("Add to cart") >> nth=2').click();
    //revisar si el modal esta visible
    await expect(page.locator('#cartModal')).toBeVisible();
    //revisar si se agrego
    await expect(page.locator('.modal-header')).toContainText('Added!');
    //cerrar modal
    await page.locator('.modal-footer .btn').click()
    //asegurarse de que el modal se cerro
    await expect(page.locator('#cartModal')).not.toBeVisible();
})
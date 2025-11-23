// ====================================
// CARRINHO – Testes SauceDemo
// ====================================
import { test, expect } from '@playwright/test';

test.describe('Módulo de Carrinho', () => {

  test('Adicionar item ao carrinho', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('Adicionar mais de um item', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('.shopping_cart_link');

    await expect(page.locator('.cart_item')).toHaveCount(2);
  });

  test('Remover item do carrinho', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

});

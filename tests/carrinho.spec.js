// ====================================================================================
// 🛒 TESTE DE CARRINHO – Template Profissional Playwright (Raquel)
// Objetivo: Validar adicionar item ao carrinho, aumentar quantidade e remover.
// ====================================================================================

import { test, expect } from '@playwright/test';

test.describe('Módulo de Carrinho', () => {

  test('Deve adicionar um item ao carrinho', async ({ page }) => {
    await page.goto('/');

    // Abre detalhes do primeiro produto
    await page.locator('.product-card').first().click();

    // Adiciona ao carrinho
    await page.click('button.add-to-cart-button');

    // Abre o carrinho
    await page.click('button[aria-label="Cart"]');

    // Valida que o item está no carrinho
    await expect(page.locator('.cart-item')).toHaveCount(1);
  });

  test('Deve aumentar quantidade de um item no carrinho', async ({ page }) => {
    await page.goto('/');

    await page.locator('.product-card').first().click();
    await page.click('button.add-to-cart-button');
    await page.click('button[aria-label="Cart"]');

    // Clica no botão de aumentar quantidade
    await page.click('button.increment-quantity');

    // Valida quantidade > 1
    const quantity = await page.locator('.cart-item-quantity').textContent();
    expect(Number(quantity)).toBeGreaterThan(1);
  });

  test('Deve remover item do carrinho', async ({ page }) => {
    await page.goto('/');

    await page.locator('.product-card').first().click();
    await page.click('button.add-to-cart-button');
    await page.click('button[aria-label="Cart"]');

    // Remove item
    await page.click('button.remove-item');

    // Carrinho deve ficar vazio
    await expect(page.locator('.empty-cart')).toBeVisible();
  });

});

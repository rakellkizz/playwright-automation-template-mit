// ====================================================================================
// 🔎 TESTE DE BUSCA – Template Profissional Playwright (Raquel)
// Objetivo: Validar que busca funciona, lista produtos e abre página de detalhes.
// ====================================================================================

import { test, expect } from '@playwright/test';

test.describe('Módulo de Busca de Produtos', () => {

  test('Deve buscar um produto e retornar resultados', async ({ page }) => {
    await page.goto('/');

    // Campo de busca da Demo Store
    const searchInput = page.locator('input[placeholder="Search products"]');

    await searchInput.fill('laptop');
    await page.keyboard.press('Enter');

    // Valida que há produtos listados
    const produtos = page.locator('.product-card');
    await expect(produtos.first()).toBeVisible();
  });

  test('Deve abrir página de detalhes ao clicar no produto', async ({ page }) => {
    await page.goto('/');

    await page.fill('input[placeholder="Search products"]', 'laptop');
    await page.keyboard.press('Enter');

    // Clica no primeiro produto
    await page.locator('.product-card').first().click();

    // Valida que carregou a tela de detalhes
    await expect(page.locator('.product-detail')).toBeVisible();
  });

});

// ====================================================================================
// 🧪 EXEMPLO DE TESTE – Raquel Souza Template Playwright
// Objetivo: Mostrar a estrutura básica para criação de novos testes.
// ====================================================================================

import { test, expect } from '@playwright/test';

test('Página inicial deve carregar corretamente', async ({ page }) => {

  // 1) Acessa a home
  await page.goto('/');

  // 2) Verifica título
  await expect(page).toHaveTitle(/Playwright Demo/);

  // 3) Verifica se existe pelo menos um produto
  const produtos = page.locator('.product-card');
  await expect(produtos.first()).toBeVisible();
});



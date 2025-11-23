// ====================================================================================
// 🔐 TESTE DE LOGIN – Template Profissional Playwright (Raquel)
// Objetivo: Validar login correto, incorreto e comportamento da interface.
// Base: https://demo.playwright.dev/
// ====================================================================================

import { test, expect } from '@playwright/test';

test.describe('Módulo de Login', () => {

  test('Login deve falhar com credenciais inválidas', async ({ page }) => {
    await page.goto('/');

    // Abre o menu de login
    await page.click('button[aria-label="Open Login Dialog"]');

    // Preenche usuário e senha incorretos
    await page.fill('#username', 'usuario_errado');
    await page.fill('#password', 'senha_errada');

    // Envia
    await page.click('button[type="submit"]');

    // Valida mensagem de erro
    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('Login deve funcionar com usuário demo', async ({ page }) => {
    await page.goto('/');

    // Abre a modal de login
    await page.click('button[aria-label="Open Login Dialog"]');

    // Playwright Demo aceita esse login automático
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin');

    await page.click('button[type="submit"]');

    // Valida que o usuário está logado
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

});

// ===============================
// LOGIN – Testes no SauceDemo
// ===============================
import { test, expect } from '@playwright/test';

test.describe('Módulo de Login', () => {

  test('Login deve falhar com credenciais inválidas', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'usuario_errado');
    await page.fill('#password', 'senha_errada');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Login deve funcionar com usuário padrão (standard_user)', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Usuário deve conseguir fazer logout', async ({ page }) => {
    await page.goto('/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('/');
  });

});

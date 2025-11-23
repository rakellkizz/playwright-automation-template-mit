import { test, expect } from "@playwright/test";

test.describe("Módulo de Busca / Filtro", () => {

  test("Deve filtrar produtos por nome (A to Z)", async ({ page }) => {
    await page.goto("/");

    // Login obrigatório
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    // Espera os produtos aparecerem
    await page.waitForSelector(".inventory_item");

    // --- CORREÇÃO 01 ---
    // Espera o dropdown existir de verdade
    const filtro = page.locator("select.product_sort_container");
    await expect(filtro).toBeVisible();

    // --- CORREÇÃO 02 ---
    // Seleciona corretamente a opção "az"
    await filtro.selectOption("az");

    // Valida que produtos continuam renderizados
    const produtos = page.locator(".inventory_item");
    await expect(produtos.first()).toBeVisible();
  });

});

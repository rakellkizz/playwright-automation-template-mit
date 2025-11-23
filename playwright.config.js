// ====================================================================================
// 🎭 Playwright Config – Template Playwright Automação Raquel
// Descrição: Configuração padrão recomendada para novos projetos de automação.
// Inclui:
//   • baseURL (SauceDemo)
//   • timeouts ajustados
//   • diretórios de relatórios
//   • traces, vídeos, screenshots
//   • browsers desktop e mobile
// ====================================================================================

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 📂 Diretório onde ficam os testes (seguindo nossa estrutura UI)
  testDir: './tests/ui',
  //  ✋ Ignorar testes na pasta de exemplos
  reporter: [
    ['list'],
    ['allure-playwright']
  ],


  // 🕒 Timeout global
  timeout: 30 * 1000,

  // 🚀 Configurações padrão
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,

    // 🎥 Grava vídeos para cada teste
    video: 'on',

    // 📸 Screenshot somente em falhas
    screenshot: 'only-on-failure',

    // 🔍 Gera trace para depuração profunda
    trace: 'retain-on-failure',

    // Esperas inteligentes
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },

  // 🖥️💻 Projetos (browsers)
  projects: [
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com',
      },
    },
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
        baseURL: 'https://www.saucedemo.com',
      },
    },
  ],

  // 📊 Diretórios de relatórios
  reporter: [
    ['list'],                    // CLI bonito
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/report.json' }],
  ],

  // 📁 Onde salvar traces, vídeos e screenshots
  outputDir: 'test-results',
});

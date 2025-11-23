// ====================================================================================
// 🎭 Playwright Config – Template Playwright Automação Raquel
// Descrição: Configuração profissional, organizada e com Allure integrado.
// Inclui:
//   • Estrutura de testes em /tests/ui
//   • Reporter Allure + HTML
//   • Timeout otimizado
//   • Traces, vídeos e screenshots
//   • Browsers Desktop e Mobile
// ====================================================================================

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 📂 Diretório onde ficam os testes
  testDir: './tests/ui',

  // 🧪 Reporters corretos (sem duplicação!)
  reporter: [
    ['list'],                                // Reporter da CLI
    ['allure-playwright'],                   // Reporter Allure (gera allure-results/)
    ['html', { outputFolder: 'playwright-report', open: 'never' }]  // HTML
  ],

  // 🕒 Timeout global
  timeout: 30 * 1000,

  // 🚀 Configurações padrão
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,

    // 🎥 Vídeos sempre gravados
    video: 'retain-on-failure',

    // 📸 Screenshot apenas em falhas
    screenshot: 'only-on-failure',

    // 🔍 Trace SOMENTE em falhas (ótimo para depuração)
    trace: 'on-first-retry',
 
    // Esperas inteligentes
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },

  // 💻🖥️ Projetos (Browsers Desktop e Mobile)
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

  // 📁 Local onde salvaremos vídeos, screenshots e traces
  outputDir: 'test-results',
});

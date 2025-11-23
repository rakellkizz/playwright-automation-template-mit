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

// ====================================================================================
// 🎭 Playwright Config – Template Playwright Automação Raquel
// Descrição: Configuração profissional, organizada e com Allure integrado.
// Inclui:
//   • Estrutura de testes em /tests/ui
//   • Reporter Allure + HTML + JSON
//   • Timeout otimizado
//   • Traces, vídeos e screenshots
//   • Browsers Desktop e Mobile
// ====================================================================================

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 📂 Diretório onde ficam os testes
  testDir: './tests/ui',

  // 🧪 Reporters (sem duplicação!)
  reporter: [
    ['list'],                                         // Terminal bonito
    ['allure-playwright'],                            // Allure Reports
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Relatório HTML
    ['json', { outputFile: 'playwright-report/report.json' }],      // JSON para CI/CD
  ],

  // 🕒 Timeout global
  timeout: 30 * 1000,

  // 🚀 Configurações padrão
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,

    // 🎥 Grava vídeos
    video: 'on',

    // 📸 Screenshot só nos erros
    screenshot: 'only-on-failure',

    // 🔍 Trace completo somente em falhas
    trace: 'retain-on-failure',

    // Esperas inteligentes
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },

  // 💻🖥️ Projetos (browsers)
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

  // 📁 Onde salvar traces, vídeos e screenshots
  outputDir: 'test-results',
});

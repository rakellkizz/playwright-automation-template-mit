// ====================================================================================
// 🎭 Playwright Config – Template Playwright Automação Raquel
// Descrição: Configuração padrão recomendada para novos projetos de automação.
// Inclui:
//   • baseURL (pode alterar conforme projeto futuro)
//   • timeouts ajustados
//   • diretórios de reports e traces
//   • browsers desktop e mobile
// ====================================================================================

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 📁 Onde ficam os testes
  timeout: 30_000,     // ⏱️ Timeout global de cada teste (30s)
  expect: {
    timeout: 5_000,    // ⏱️ Timeout das asserções (5s)
  },

  // 💾 Onde salvar relatórios e traces
  outputDir: 'test-results',

  use: {
    baseURL: 'https://demo.playwright.dev/', // 🌐 URL padrão para testes
    headless: true,                          // 👤 Não abre navegador na máquina
    screenshot: 'only-on-failure',           // 📸 Print apenas quando falhar
    video: 'retain-on-failure',              // 🎥 Vídeo apenas em falhas
    trace: 'on-first-retry',                 // 🧪 Trace de debugging
  },

  // 🖥️ + 📱 Browsers configurados
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],

  // 📊 Relatório HTML nativo do Playwright
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
});

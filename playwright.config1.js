// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 1,
  /* Run tests in files in parallel */
  timeout: 40 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: 'html',
  projects: [
    {
    name: 'safari',
    use: {
      browserName: "webkit",
      headless: false,
      screenshot: 'on',
      trace: 'on'

    }
  },
  {
    name: 'chrome',
    use: {
      browserName: "chromium",
      headless: false,
      screenshot: 'on',
      trace: 'on',
      viewport : {width: 1024,height:1024},
      video : 'on-first-retry'
    }
  }
  ]


});
module.exports = config


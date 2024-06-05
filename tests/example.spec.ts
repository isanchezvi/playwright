import { test, expect } from '@playwright/test';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const username = config.credentials.username;
const password = config.credentials.password;
test('ssfc  home', async ({ page }) => {
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');
  const authorizationHeader = `Basic ${credentials}`;
  await page.setExtraHTTPHeaders({ 'Authorization': authorizationHeader });
  const homeUrl = config.sandbox.urlStart + config.sandbox.sandboxNumber + config.urls.home;
  await page.goto(homeUrl);
  await page.waitForTimeout(5000); // esperar para que la página cargue completamente y evitar errores
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test(',club by ', async ({ page }) => {
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');
  const authorizationHeader = `Basic ${credentials}`;
  await page.setExtraHTTPHeaders({ 'Authorization': authorizationHeader });
  const clubby = config.sandbox.urlStart + config.sandbox.sandboxNumber + config.urls.clubby;
  await page.goto(clubby);
  await page.waitForTimeout(5000); // esperar para que la página cargue completamente y evitar errores
  await expect(page).toHaveScreenshot({ fullPage: true });
});
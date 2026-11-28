import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addStyleTag({
    content: "*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }",
  });
});

async function waitForStablePage(page: import("@playwright/test").Page) {
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForLoadState("networkidle");
}

test("front page", async ({ page }) => {
  await page.goto("/");
  await waitForStablePage(page);
  await expect(page).toHaveScreenshot("frontpage.png", { animations: "disabled" });
});

test("music board", async ({ page }) => {
  await page.goto("/#board/music");
  await waitForStablePage(page);
  await expect(page).toHaveScreenshot("board.png", { animations: "disabled" });
});

test("thread route", async ({ page }) => {
  await page.goto("/#thread/essential-post-punk");
  await waitForStablePage(page);
  await expect(page).toHaveScreenshot("thread.png", { animations: "disabled" });
});

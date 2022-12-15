const { By, until } = require("selenium-webdriver");
let webdriver = require("selenium-webdriver");
require("chromedriver");

let driver = new webdriver.Builder().forBrowser("chrome").build();

test();

async function test() {
  await mpaTest();
  console.log("\n\n");
  await spaTest();
  driver.quit();
}

async function mpaTest() {
  console.log(`*****Starting Multi Page Application Test*****`);
  let totalTime = 0;
  let mpaBaseUrl = "https://mpa.nusaakses.net";

  let start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.get(mpaBaseUrl);
  let finish = parseFloat(Date.now());
  console.log(`Load time halaman home : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Perusahaan")).click();
  await driver.findElement(By.linkText("Profile Perusahaan")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman profile perusahaan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Perusahaan")).click();
  await driver.findElement(By.linkText("Sejarah Perusahaan")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman sejarah perusahaan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Layanan")).click();
  await driver.findElement(By.className("dropdown-item mt-2")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman layanan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Berita")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman berita : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver
    .wait(until.elementLocated(By.name("detail-berita")), 10000)
    .click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman detail berita : ${finish - start} ms`);
  totalTime += finish - start;

  console.log(`*****Finish Multi Page Application Test*****`);
  console.log(`Total time for all pages : ${totalTime} ms`);
}

async function spaTest() {
  console.log(`*****Starting Single Page Application Test*****`);
  let totalTime = 0;

  let start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.get("https://spa.nusaakses.net");
  let finish = parseFloat(Date.now());
  console.log(`Load time halaman home : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Perusahaan")).click();
  await driver.findElement(By.linkText("Profile Perusahaan")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman profile perusahaan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Sejarah Perusahaan")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman sejarah perusahaan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Layanan")).click();
  await driver.findElement(By.name("service")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman layanan : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver.findElement(By.linkText("Berita")).click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman berita : ${finish - start} ms`);
  totalTime += finish - start;

  start = parseFloat(Date.now());
  await driver.manage().window().fullscreen();
  await driver
    .wait(until.elementLocated(By.name("detail-berita")), 10000)
    .click();
  finish = parseFloat(Date.now());
  console.log(`Load time halaman detail berita : ${finish - start} ms`);
  totalTime += finish - start;

  console.log(`*****Finish Single Page Application Test*****`);

  console.log(`Total time for all pages : ${totalTime} ms`);
}

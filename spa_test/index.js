const { By, until } = require("selenium-webdriver");
let webdriver = require("selenium-webdriver");
require("chromedriver");

let driver = new webdriver.Builder().forBrowser("chrome").build();

navigate();

async function navigate() {
  try {
    console.log(`*****Starting Test*****`);
    let totalTime = 0;

    let start = parseFloat(Date.now());
    await driver.get("http://localhost:3000/");
    let finish = parseFloat(Date.now());
    console.log(`Load time halaman home : ${finish - start} Millisecond`);
    totalTime += finish - start;

    start = parseFloat(Date.now());
    await driver.findElement(By.linkText("Perusahaan")).click();
    await driver.findElement(By.linkText("Profile Perusahaan")).click();
    finish = parseFloat(Date.now());
    console.log(
      `Load time halaman profile perusahaan : ${finish - start} Millisecond`
    );
    totalTime += finish - start;

    start = parseFloat(Date.now());
    await driver.findElement(By.linkText("Sejarah Perusahaan")).click();
    finish = parseFloat(Date.now());
    console.log(
      `Load time halaman sejarah perusahaan : ${finish - start} Millisecond`
    );
    totalTime += finish - start;

    start = parseFloat(Date.now());
    await driver.findElement(By.linkText("Layanan")).click();
    await driver.findElement(By.name("service")).click();
    finish = parseFloat(Date.now());
    console.log(`Load time halaman layanan : ${finish - start} Millisecond`);
    totalTime += finish - start;

    start = parseFloat(Date.now());
    await driver.findElement(By.linkText("Berita")).click();
    finish = parseFloat(Date.now());
    console.log(`Load time halaman berita : ${finish - start} Millisecond`);
    totalTime += finish - start;

    start = parseFloat(Date.now());
    await driver
      .wait(until.elementLocated(By.name("detail-berita")), 10000)
      .click();
    finish = parseFloat(Date.now());
    console.log(
      `Load time halaman detail berita : ${finish - start} Millisecond`
    );
    totalTime += finish - start;

    console.log(`*****Finish Test*****`);

    console.log(`Total time for all pages : ${totalTime} Millisecond`);

    driver.quit();
  } catch (err) {
    console.log(err);
    driver.quit();
  }
}

driver.takeScreenshot();

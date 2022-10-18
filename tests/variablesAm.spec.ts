
import test, { expect, Locator, Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly clientes = [{
    usuario: "Gilgamesh20", 
    nombre: "Gilgamesh",
    apellido: "Sumerio",
    contra: "a1234mMn@#AS",
    confirContra: "a1234mMn@#AS"
  },
  {
    usuario: "KittyBenvenuto", 
    nombre: "Kitty",
    apellido: "caceres",
    contra: "a1234mMn@#AS",
    confirContra: "a1234mMn@#AS"
  },
  {
    usuario: "ReneMoralesBenvenuto", 
    nombre: "Rene",
    apellido: "Morales",
    contra: "a1234mMnAS",
    confirContra: "a1234mMnAS",
  }];

   constructor(page: Page) {
    this.page = page;    
  }
  async goto() {
    await this.page.goto('https://buggy.justtestit.org/register');
  }
         
}




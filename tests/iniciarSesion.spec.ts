import test, { expect, Locator, Page } from '@playwright/test';
import { PlaywrightDevPage } from './variablesAm.spec';
export class iniciarUsuarios{
    readonly page: Page;
    readonly usuarioT: Locator;
    readonly clave: Locator;
    readonly ingresar: Locator;
    readonly nombreUsuario: Locator;
    readonly cerrar: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usuarioT = page.locator('[placeholder="Login"]');
        this.clave = page.locator('text=Login Register >> input[name="password"]');
        this.ingresar =  page.locator('//button[contains(@class,"btn btn-success")]');
        this.nombreUsuario = page.locator('//span[contains(@class,"nav-link disabled")]');
        this.cerrar=  page.locator('text=Logout');
      }
      async iniciarSesion(page) {
        const variables = new PlaywrightDevPage(page);
        await variables.goto();
        
        for(var i in variables.clientes){
            try {

                await this.usuarioT.click();
                await this.usuarioT.fill(variables.clientes[i].usuario);

                await this.clave.click();
                await this.clave.fill(variables.clientes[i].contra);
                await this.ingresar.click();

                await expect(this.page.locator('//span[contains(@class,"nav-link disabled")]')).toContainText(variables.clientes[i].nombre);
                await this.page.screenshot({ path:'Nombre del usuario es '+variables.clientes[i].nombre+'.png'});
                await this.cerrar.click();

            }catch (e) {
                await expect(this.page.locator('//span[@class="label label-warning"]')).toContainText("Invalid username/password");
                await this.page.screenshot({ path:variables.clientes[i].nombre+' validar.png'});
              } 
        }
    } 
}

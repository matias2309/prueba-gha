import test, { expect, Locator, Page } from '@playwright/test';
import { PlaywrightDevPage } from './variablesAm.spec';
export class iniciarUsuarios{
    readonly page: Page;
    readonly usuarioT: Locator;
    readonly clave: Locator;
    readonly ingresar: Locator;
    readonly validacion: Locator;
    readonly nombreUsuario: Locator;
    readonly cerrar: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usuarioT = page.locator('//input[contains(@name,"login")]');
        this.clave =  page.locator('//input[contains(@name,"password")]');
        this.ingresar =  page.locator('//button[@class="btn btn-success"]');
        this.validacion = page.locator('//span[@class="label label-warning"]');
        this.nombreUsuario = page.locator('//span[@class="nav-link disabled"]');
        this.cerrar=  page.locator('//a[@class="nav-link"][contains(.,"Logout")]');
      }
      async iniciarSesion(page) {
        const variables = new PlaywrightDevPage(page);
        let nombreDelUsu:string;
        let valida:string;
        for(var i in variables.clientes){
            await this.usuarioT.click();
            await this.usuarioT.fill(variables.clientes[i].usuario);

            await this.clave.click();
            await this.clave.fill(variables.clientes[i].contra);

            await this.ingresar.click();

            nombreDelUsu= await this.nombreUsuario.innerText();
            valida= await this.validacion.innerText();
            if(variables.clientes[i].nombre == nombreDelUsu){
                await this.page.screenshot({ path:'nombreDelUsario.png'});
                await this.cerrar.click();
            }else if(valida=='Invalid username/password'){
                await this.page.screenshot({ path:'validar.png'});
            }
        }
      }  
}
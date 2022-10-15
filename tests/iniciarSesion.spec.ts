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
      async goto() {
        await this.page.goto('https://buggy.justtestit.org/register');
      }
      async iniciarSesion(page) {
        const variables = new PlaywrightDevPage(page);
        await this.goto();
        let nombreDelUsu:Locator;
        
       
        for(var i in variables.clientes){
            await this.usuarioT.click();
            await this.usuarioT.fill(variables.clientes[i].usuario);

            await this.clave.click();
            await this.clave.fill(variables.clientes[i].contra);
            await this.ingresar.click();


            console.log(await this.page.isVisible('//span[@class="label label-warning"]'));
            /*if(await this.page.isVisible('//span[@class="label label-warning"]')) {
                await this.page.screenshot({ path:variables.clientes[i].nombre+' validar.png'});
                console.log("Encontrado");
            }else{
                await this.page.screenshot({ path:variables.clientes[i].nombre+' No validar.png'});
                await this.cerrar.click();
                console.log("No encontrado");
            }*/
            //<span _ngcontent-blg-2="" class="label label-warning">Invalid username/password</span>
            
            
            //await this.page.screenshot({ path:variables.clientes[i].nombre+' validar.png'});
            //await this.page.screenshot({ path:'verificar.png'+i});
            
            /*
            if(await this.nombreUsuario.innerText.length>0){
                if(await this.nombreUsuario.innerText()==variables.clientes[i].nombre){
                    await this.page.screenshot({ path:variables.clientes[i].nombre+' validar.png'});
                }
            }*/
        }
      }  
}
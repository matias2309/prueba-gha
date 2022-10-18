import test, { expect, Locator, Page } from '@playwright/test';
import { PlaywrightDevPage } from './variablesAm.spec';
export class registrar{
    readonly page: Page;
    readonly usuarioT: Locator;
    readonly nombre: Locator;
    readonly apellido:Locator;
    readonly clave: Locator;
    readonly confiClave: Locator;
    readonly guardar: Locator;

    readonly creado: Locator;
    readonly errores: Locator;
    constructor(page: Page) {
        this.page = page;
        this.creado = page.locator("//div[contains(@class,'result alert alert-success')]");
        this.errores = page.locator('//div[contains(@class,"result alert alert-danger")]');
        this.usuarioT = page.locator('input[name="username"]');
        this.nombre = page.locator('input[name="firstName"]');
        this.apellido =  page.locator('input[name="lastName"]');
        this.clave =  page.locator('text=Password Password is required >> input[name="password"]');
        this.confiClave =  page.locator('input[name="confirmPassword"]');
        this.guardar =  page.locator('//button[@class="btn btn-default"][contains(.,"Register")]');
 
      }
    async agregar(page) {
        const variables = new PlaywrightDevPage(page);
        await variables.goto();
        
        for (var x in variables.clientes){
          try{
            await this.usuarioT.click();
            await this.usuarioT.fill(variables.clientes[x].usuario);
            
          
            await this.nombre.click();
            await this.nombre.fill(variables.clientes[x].nombre);
                
              
            await this.apellido.click();
            await this.apellido.fill(variables.clientes[x].apellido);
                
              
            await this.clave.click();
            await this.clave.fill(variables.clientes[x].contra);
                
              
            await this.confiClave.click();
            await this.confiClave.fill(variables.clientes[x].confirContra);
            await this.guardar.click();
          
            await expect(this.creado).toContainText('Registration is successful');
            await this.page.screenshot({ path: 'Usuario registrado '+variables.clientes[x].nombre+'.png'});
           
          }catch(e){
              let errores= await this.page.locator('//div[contains(@class,"result alert alert-danger")]');
              if(await errores.innerText() == 'UsernameExistsException: User already exists'){
                await this.page.screenshot({ path: 'Usuario ya existente '+variables.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidPasswordException: Password did not conform with policy: Password must have symbol characters'){
                await this.page.screenshot({ path: 'contraseña no cumple con las politica '+variables.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters'){
                await this.page.screenshot({ path: 'contraseña incorrecta '+variables.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidParameter: 1 validation error(s) found. - minimum field size of 6, SignUpInput.Password.'){
                await this.page.screenshot({ path: 'contraseña incorrecta '+variables.clientes[x].nombre+'.png'});
              }
           }finally{
            
          }
          
        }
          
    }
}


import test, { expect, Locator, Page } from '@playwright/test';
const clientes = [{
  usuario: "lucas1234s", 
  nombre: "lucas",
  apellido: "vergara",
  contra: "1234man@#",
  confirContra: "1234man@#"
},
{
  usuario: "marquisio98", 
  nombre: "marcos",
  apellido: "caceres",
  contra: "1234man@#AS",
  confirContra: "1234man@#AS"
},
{
  usuario: "hola12sf", 
  nombre: "aros",
  apellido: "uytb",
  contra: "aosdk@alksd.com",
  confirContra: "aosdk@alksd.com",
}];
export class PlaywrightDevPage {
  readonly page: Page;
  readonly usuarioT: Locator;
  readonly nombre: Locator;
  readonly apellido:Locator;
  readonly clave: Locator;
  readonly confiClave: Locator;
  readonly guardar: Locator;
  readonly creado: Locator;
  
  
  constructor(page: Page) {
    this.page = page;
    this.usuarioT = page.locator('input[name="username"]');
    this.nombre = page.locator('input[name="firstName"]');
    this.apellido =  page.locator('input[name="lastName"]');
    this.clave =  page.locator('text=Password Password is required >> input[name="password"]');
    this.confiClave =  page.locator('input[name="confirmPassword"]');
    this.guardar =  page.locator('button:has-text("Register")');
    this.creado =  page.locator('[class="result alert alert-danger"]');
  }
  async goto() {
    await this.page.goto('https://buggy.justtestit.org/register');
  }
  async registrar() {
      
        await this.goto();
        let mensaje:string;
        for (var x in clientes){
          await this.usuarioT.click();
          await this.usuarioT.fill(clientes[x].usuario);
          
        
          await this.nombre.click();
          await this.nombre.fill(clientes[x].nombre);
              
            
          await this.apellido.click();
          await this.apellido.fill(clientes[x].apellido);
              
            
          await this.clave.click();
          await this.clave.fill(clientes[x].contra);
              
            
          await this.confiClave.click();
          await this.confiClave.fill(clientes[x].confirContra);
          
          await this.guardar.click();
          mensaje=await this.creado.innerText();
          if(mensaje == 'InvalidPasswordException: Password did not conform with policy: Password must have symbol characters'){
            await this.page.screenshot({ path: clientes[x].nombre+'.png'});
          }else if(mensaje == 'UsernameExistsException: User already exists'){
            await this.page.screenshot({ path: clientes[x].nombre+'.png'});
          }else if(mensaje == 'Registration is successful'){
            await this.page.screenshot({ path: clientes[x].nombre+'.png'});
          }else if(mensaje == 'InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters'){
            await this.page.screenshot({ path: clientes[x].nombre+'.png'});
          }
          }
        }  
}
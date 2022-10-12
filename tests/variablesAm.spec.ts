
import test, { expect, Locator, Page } from '@playwright/test';

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
      var clientes ={1:['Gild109','Gilgamesh','Istubar','M5Au84Cx4SZtW@n','M5Au84Cx4SZtW@n'],
      2:['dante214','Dante','Alighieri ','M5Au84Cx4SZtW@n','M5Au84Cx4SZtW@n'],
      3:['Sigfried23','Siegfried','Sigurðr','M5Au84Cx4SZtW@n','M5Au84Cx4SZtW@n'], 
      4:['INDEF','LT','Omega','M5Au84Cx4SZtW@n','M5Au84Cx4SZtW@n'],
      5:['Sauron87','Sauron','Olivera','M5Au84Cx4SZtW@n','M5Au84Cx4SZtW@n']};
        await this.goto();
        var mensaje:string;
        for (var x in clientes){
          for(var i=0; i<clientes[x].length; i++){
            await this.usuarioT.click();
            await this.usuarioT.fill(clientes[x][i]);
            
          
            await this.nombre.click();
            await this.nombre.fill(clientes[x][i+1]);
                
              
            await this.apellido.click();
            await this.apellido.fill(clientes[x][i+2]);
               
              
            await this.clave.click();
            await this.clave.fill(clientes[x][i+3]);
                
              
            await this.confiClave.click();
            await this.confiClave.fill(clientes[x][i+4]);
            
            await this.guardar.click();
            mensaje=await this.creado.innerText();
            if( mensaje == 'InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters'){
              await this.page.screenshot({ path: clientes[x]+'.png'});
            }else if(mensaje == 'UsernameExistsException: User already exists'){
              await this.page.screenshot({ path: clientes[x]+'.png'});
            }else if(mensaje == 'Registration is successful'){
              await this.page.screenshot({ path: clientes[x]+'.png'});
            }
          }
        }  
  }
}
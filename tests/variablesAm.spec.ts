
import test, { expect, Locator, Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly usuarioT: Locator;
  readonly nombre: Locator;
  readonly apellido:Locator;
  readonly clave: Locator;
  readonly confiClave: Locator;
  readonly guardar: Locator;
  
  readonly clientes = [{
    usuario: "Gilgamesh17+", 
    nombre: "Gilgamesh",
    apellido: "Sumerio",
    contra: "a1234mMn@#AS",
    confirContra: "a1234mMn@#AS"
  }];
  /*,{
    usuario: "KittyBenvenuto", 
    nombre: "Kitty",
    apellido: "caceres",
    contra: "a1234",
    confirContra: "a1234"
  },
  {
    usuario: "ReneMoralesBenvenuto", 
    nombre: "Rene",
    apellido: "Morales",
    contra: "a1234mMnAS",
    confirContra: "a1234mMnAS",
  }*/
  
  constructor(page: Page) {
    this.page = page;
    this.usuarioT = page.locator('input[name="username"]');
    this.nombre = page.locator('input[name="firstName"]');
    this.apellido =  page.locator('input[name="lastName"]');
    this.clave =  page.locator('text=Password Password is required >> input[name="password"]');
    this.confiClave =  page.locator('input[name="confirmPassword"]');
    this.guardar =  page.locator('//button[@class="btn btn-default"][contains(.,"Register")]');
    
  }
  async goto() {
    await this.page.goto('https://buggy.justtestit.org/register');
  }
  async registrar() {
      
        await this.goto();
        
        for (var x in this.clientes){
         

            await this.usuarioT.click();
            await this.usuarioT.fill(this.clientes[x].usuario);
            
          
            await this.nombre.click();
            await this.nombre.fill(this.clientes[x].nombre);
                
              
            await this.apellido.click();
            await this.apellido.fill(this.clientes[x].apellido);
                
              
            await this.clave.click();
            await this.clave.fill(this.clientes[x].contra);
                
              
            await this.confiClave.click();
            await this.confiClave.fill(this.clientes[x].confirContra);
            await this.guardar.click();

            const creado = await this.page.locator('text=Registration is successful');
            await expect(creado).toContainText('Registration is successful');
            await this.page.screenshot({ path: 'Usuario registrado '+this.clientes[x].nombre+'.png'});
            try{
            }catch(e){/*
              let errores= await this.page.locator('//div[contains(@class,"result alert alert-danger")]');
              if(await errores.innerText() == 'UsernameExistsException: User already exists'){
                await this.page.screenshot({ path: 'Usuario ya existente '+this.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidPasswordException: Password did not conform with policy: Password must have symbol characters'){
                await this.page.screenshot({ path: 'contraseña no cumple con las politica '+this.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters'){
                await this.page.screenshot({ path: 'contraseña incorrecta '+this.clientes[x].nombre+'.png'});
              }else if(await errores.innerText() == 'InvalidParameter: 1 validation error(s) found. - minimum field size of 6, SignUpInput.Password.'){
                await this.page.screenshot({ path: 'contraseña incorrecta '+this.clientes[x].nombre+'.png'});
              }
          */}finally{
            
          }
          
        }
          
    }

      
         
}




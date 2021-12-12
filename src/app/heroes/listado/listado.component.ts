import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent{

    heroes: string[]=['Spiderman','Ironman','Strange','Venom']
    heroesBorrado:string='';
    
    borrarHeroe(){
      this.heroesBorrado=this.heroes.pop()||'';
    }

    mostrarBorrados():boolean{
      if(this.heroesBorrado!=''){
        return true;
      }
      else{

        return false;
      }

    }
}

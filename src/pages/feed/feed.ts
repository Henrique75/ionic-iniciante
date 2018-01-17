import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario: string = "Henrique Montana";
  public avatar: string = "Chucky Norris";
  public mcfly: string = "Marty McFly";
  
  
  // public nome_variavel: any = "Qualquer tipo será aceito";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // public numeros():number{
  //   return 3;
  // }
  //public somaDoisNumeros(num1:number,num2:number): void {
  // public somaDoisNumeros(): void {
    // alert("Minha função funfou!");
    // alert(5+10);
  //  alert(num1+num2);
  //}

  // Ciclo de vida da página
  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(7,99); //passando parametros ou argumentos
  }

}

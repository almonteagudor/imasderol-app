import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../entities/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  public getCharacters(): Observable<Character[]> {
    return of(this.characters);
  }

  private characters = [
    new Character(1, 'Achille', 3, 'Achille.png'),
    new Character(2, 'Adriana', 3, 'Adriana.png'),
    new Character(3, 'Audrey', 3, 'Audrey.png'),
    new Character(4, 'Bastian', 3, 'Bastian.png'),
    new Character(5, 'Benny', 3, 'Benny.png'),
    new Character(6, 'Brad', 3, 'Brad.png'),
    new Character(7, 'Cat', 3, 'Cat.png'),
    new Character(8, 'Chaz', 3, 'Chaz.png'),
    new Character(9, 'Chuck', 3, 'Chuck.png'),
    new Character(10, 'Claudia', 3, 'Claudia.png'),
    new Character(11, 'Curro', 3, 'Curro.png'),
    new Character(12, 'Dakota', 3, 'Dakota.png'),
    new Character(13, 'Dave', 3, 'Dave.png'),
    new Character(14, 'Dick', 3, 'Dick.png'),
    new Character(15, 'Doc', 3, 'Doc.png'),
    new Character(16, 'El-Cholo', 3, 'El-Cholo.png'),
    new Character(17, 'Elsa', 3, 'Elsa.png'),
    new Character(18, 'Eva', 3, 'Eva.png'),
    new Character(19, 'Frank', 3, 'Frank.png'),
    new Character(20, 'Fred', 3, 'Fred.png'),
    new Character(21, 'Gary', 3, 'Gary.png'),
    new Character(22, 'Helen', 3, 'Helen.png'),
    new Character(23, 'Ivy', 3, 'Ivy.png'),
    new Character(24, 'Jesse', 3, 'Jesse.png'),
    new Character(25, 'Kabir', 3, 'Kabir.png'),
    new Character(26, 'Kirk', 3, 'Kirk.png'),
    new Character(27, 'Kris', 3, 'Kris.png'),
    new Character(28, 'Lea', 3, 'Lea.png'),
    new Character(29, 'Leroy', 3, 'Leroy.png'),
    new Character(30, 'Lucius', 3, 'Lucius.png'),
    new Character(31, 'Mack', 3, 'Mack.png'),
    new Character(32, 'Marvin', 3, 'Marvin.png'),
    new Character(33, 'Mike', 3, 'Mike.png'),
    new Character(34, 'Miss-Trish', 3, 'Miss-Trish.png'),
    new Character(35, 'Nick', 3, 'Nick.png'),
    new Character(36, 'Nikki', 3, 'Nikki.png'),
    new Character(37, 'Oksana', 3, 'Oksana.png'),
    new Character(38, 'Patrick', 3, 'Patrick.png'),
    new Character(39, 'Paul', 3, 'Paul.png'),
    new Character(40, 'Ralph', 3, 'Ralph.png'),
    new Character(41, 'Rick', 3, 'Rick.png'),
    new Character(42, 'Rob', 3, 'Rob.png'),
    new Character(43, 'Rose', 3, 'Rose.png'),
    new Character(44, 'Ross', 3, 'Ross.png'),
    new Character(45, 'Seth', 3, 'Seth.png'),
    new Character(46, 'Smith', 3, 'Smith.png'),
    new Character(47, 'Spencer', 3, 'Spencer.png'),
    new Character(48, 'Thaissa', 3, 'Thaissa.png'),
    new Character(49, 'The-Cardboard-Tube-Samurai', 3, 'The-Cardboard-Tube-Samurai.png'),
    new Character(50, 'Troy', 3, 'Troy.png'),
    new Character(51, 'Union-Worker', 3, 'Union-Worker.png'),
    new Character(52, 'Will', 3, 'Will.png'),
    new Character(53, 'Yuri', 3, 'Yuri.png'),
  ];

  // private characters = [
  //   new Character(1, 'AMY', 3, '', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 ACCIÓN', '+1 ACCIÓN DE COMBATE CUERPO A CUERPO GRATUITA', '+1 ACCIÓN DE COMBATE A DISTANCIA GRATUITA', '+1 DADO: COMBATE', '+1 A LAS TIRADAS: COMBATE', 'MÉDICO'),
  //   new Character(2, 'DOUG', 3, '', 'PAR CONJUNTADO', '+1 ACCIÓN', '+1 DADO: A DISTANCIA', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 A LAS TIRADAS: COMBATE', 'AMBIDIESTRO', 'ESCURRIDIZO'),
  //   new Character(3, 'ELLE', 3, '', 'FRANCOTIRADORA', '+1 ACCIÓN', '+1 DADO: COMBATE', '+1 ACCIÓN DE COMBATE A DISTANCIA GRATUITA', '+1 DADO: A DISTANCIA', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 A LAS TIRADAS: A DISTANCIA'),
  //   new Character(4, 'JOSH', 3, '', 'ESCURRIDIZO', '+1 ACCIÓN', '+1 DADO: CUERPO A CUERPO', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 A LAS TIRADAS: COMBATE', 'AFORTUNADO'),
  //   new Character(5, 'NED', 3, '', '+1 ACCIÓN DE BÚSQUEDA GRATUITA', '+1 ACCIÓN', '+1 DADO: A DISTANCIA', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 DADO: COMBATE', '+1 A LAS TIRADAS: COMBATE', 'EMPUJÓN'),
  //   new Character(6, 'WANDA', 3, '', 'ESPRINTAR', '+1 ACCIÓN', '+1 A LAS TIRADAS: CUERPO A CUERPO', 'ESCURRIDIZA', '+1 DADO: COMBATE', '+1 ACCIÓN DE COMBATE CUERPO A CUERPO GRATUITA', '+1 ACCIÓN DE MOVIMIENTO GRATUITA'),
  //   new Character(7, 'BUNNY G', 3, '', 'AFORTUNADO', '+1 ACCIÓN', '+1 A LAS TIRADAS: CUERPO A CUERPO', 'SALTO', '+1 AL DAÑO: CUERPO A CUERPO', '+1 ACCIÓN DE COMBATE GRATUITA', '6 EN EL DADO: +1 DADO EN COMBATE'),
  //   new Character(8, 'LILI', 3, '', '+1 AL ALCANCE MÁXIMO', '+1 ACCIÓN', '+1 DADO A DISTANCIA', 'ESPRINTAR', '+1 ACCIÓN DE COMBATE GRATUITA', '+ 1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 A LAS TIRADAS: COMBATE'),
  //   new Character(9, 'LOU', 3, '', 'ACOMETIDA', '+1 ACCIÓN', '+1 DADO: COMBATE', '+1 ACCIÓN DE COMBATE CUERPO A CUERPO GRATUITA', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 ACCIÓN DE COMBATE A DISTANCIA GRATUITA', 'MÉDICO'),
  //   new Character(10, 'ODIN', 3, '', '+1 DADO: CUERPO A CUERPO', '+1 ACCIÓN', '+1 ACCIÓN DE COMBATE CUERPO A CUERPO GRATUITA', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 DADO: CUERPO A CUERPO', '+1 DADO: A DISTANCIA', '+1 ACCIÓN DE COMBATE GRATUITA'),
  //   new Character(11, 'OSTARA', 3, '', 'PUEDES BUSCAR MÁS DE UNA VEZ', '+1 ACCIÓN', '+1 DADO: A DISTANCIA', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 A LAS TIRADAS: A DISTANCIA', 'ESCURRIDIZA'),
  //   new Character(12, 'TIGER SAM', 3, '', '+1 DADO: A DISTANCIA', '+1 ACCIÓN', '+1 ACCIÓN DE MOVIMIENTO GRATUITA', 'FRANCOTIRADOR', '+1 AL DAÑO: A DISTANCIA', '+1 ACCIÓN DE COMBATE GRATUITA', 'EMPUJÓN'),
  //   new Character(13, 'PHIL', 3, '', 'A DISTANCIA: DAÑO 2', '+1 ACCIÓN', '+1 ACCIÓN DE COMBATE GRATUITA', '+1 A LAS TIRADAS: A DISTANCIA', '+1 DADO: COMBATE', 'H.D.A: +1 ACCIÓN DE COMBATE GRATUITA', 'FRANCOTIRADOR'),
  // ];
}

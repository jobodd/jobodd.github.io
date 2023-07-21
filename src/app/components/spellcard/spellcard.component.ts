import { Component, Input } from '@angular/core';
import { Spell } from 'src/models/spell';

@Component({
  selector: 'app-spellcard',
  templateUrl: './spellcard.component.html',
  styleUrls: ['./spellcard.component.css']
})
export class SpellcardComponent {
    @Input() spell!: Spell;

}

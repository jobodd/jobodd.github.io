import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { CastTime, Spell, SpellLevel } from 'src/models/spell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
        switch(event.key)
        {
            case "V":
                case "v":
                this.toggleVerbal()
            break;
            case "S":
                case "s":
                this.toggleSomatic()
            break;
            case "M":
                case "m":
                this.toggleMaterial()
            break;
        }
    }

    title = 'myApp';

    // Filters
    showVerbal: boolean = true;
    showSomatic: boolean = true;
    showMaterial: boolean = true;

    spells: Spell[] = [
        {
            name: 'Verbal Spell',
            description: 'This is a spell',
            isPrepared: true,
            isVerbal: true,
            isSomatic: false,
            isMaterial: false,
            isConcentration: false,
            castTime: CastTime.Action,
            spellLevel: SpellLevel.Cantrip,
        },
        {
            name: 'Somatic Spell',
            description: 'This is a spell',
            isPrepared: true,
            isVerbal: false,
            isSomatic: true,
            isMaterial: false,
            isConcentration: true,
            castTime: CastTime.Action,
            spellLevel: SpellLevel.Cantrip,
        },
        {
            name: 'Material Spell',
            description: 'This is a spell',
            isPrepared: true,
            isVerbal: false,
            isSomatic: false,
            isMaterial: true,
            isConcentration: true,
            castTime: CastTime.Action,
            spellLevel: SpellLevel.Cantrip,
        },
        {
            name: 'Verbal Somatic Spell',
            description: 'This is a spell',
            isPrepared: true,
            isVerbal: true,
            isSomatic: true,
            isMaterial: false,
            isConcentration: true,
            castTime: CastTime.Action,
            spellLevel: SpellLevel.Cantrip,
        },
    ]
    filteredSpells: Spell[] = [];

    ngOnInit(){
        this.filteredSpells = this.spells;
    }
    toggleVerbal(){
        this.showVerbal = !this.showVerbal;
        this.updateSpellFilter();
    }
    toggleSomatic(){
        this.showSomatic = !this.showSomatic;
        this.updateSpellFilter();
    }
    toggleMaterial(){
        this.showMaterial = !this.showMaterial;
        this.updateSpellFilter();
    }
    

    updateSpellFilter() {
        this.filteredSpells = this.spells;

        if(!this.showVerbal){
            this.filteredSpells = this.filteredSpells.filter(spell => spell.isVerbal != true);
        }
        if(!this.showSomatic){
            this.filteredSpells = this.filteredSpells.filter(spell => spell.isSomatic != true);
        }
        if(!this.showMaterial){
            this.filteredSpells = this.filteredSpells.filter(spell => spell.isMaterial != true);
        }

    }
}

import { OkPacket } from "mysql";
import { execute } from '../services/mysql.connector';
import { Spell } from './spells.model';
import { spellQueries } from './spells.queries';

export const readSpells = async () => {
    return execute<Spell[]>(spellQueries.readSpells, []);
}

export const readSpellsById = async (spellId: number) => {
    return execute<Spell[]>(spellQueries.readSpellsById, [spellId]);
}

export const readSpellsByLevel = async (level: number) => {
    return execute<Spell[]>(spellQueries.readSpellsByLevel, [level]);
}

export const readSpellsByName = async (name: string) => {
    return execute<Spell[]>(spellQueries.readSpellsByName, [name]);
}

export const readSpellsByClassSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Spell[]>(spellQueries.readSpellsByClassSearch, [search]);
}

export const readSpellsBySchoolSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Spell[]>(spellQueries.readSpellsBySchoolSearch, [search]);
}

export const createSpell = async (spell: Spell) => {
    return execute<OkPacket>(spellQueries.createSpell, 
        [spell.name, spell.school, spell.castTime, spell.spellRange, spell.duration, spell.level, spell.classes, spell.source, spell.description]);
}

export const updateSpell = async (spell: Spell) => {
    return execute<OkPacket>(spellQueries.updateSpell, 
        [spell.name, spell.school, spell.castTime, spell.spellRange, spell.duration, spell.level, spell.classes, spell.source, spell.description, spell.spellId]);
}

export const deleteSpell = async (spellId: number) => {
    return execute<OkPacket>(spellQueries.deleteSpell, [spellId]);
}


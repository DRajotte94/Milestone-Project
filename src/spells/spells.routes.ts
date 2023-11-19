import { Router } from "express";
import * as SpellController from './spells.controller';

const router = Router();

router.
    route('/spells').
    get(SpellController.readSpells);

router.
    route('/spells/:name').
    get(SpellController.readSpellsByName);

router.
    route('/spells/level/:level').
    get(SpellController.readSpellsByLevel);

router.
    route('/spells/class/:search').
    get(SpellController.readSpellsByClassSearch);

router.
    route('/spells/school/:search').
    get(SpellController.readSpellsBySchoolSearch);

router.
    route('/spells').
    post(SpellController.createSepll);

router.
    route('/spells').
    put(SpellController.updateSepll);

router.
    route('/spells/:spellId').
    delete(SpellController.deleteSpell);

export default router;


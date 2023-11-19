import { Request, RequestHandler, Response } from 'express';
import { Spell } from './spells.model';
import * as SpellDao from './spells.dao';
import { OkPacket } from 'mysql';

export const readSpells: RequestHandler = async (req: Request, res: Response) => {
    try {
        let spells;
        let spellId = parseInt(req.query.spellId as string);

        console.log('spellId', spellId);
        if (Number.isNaN(spellId)) {
            spells = await SpellDao.readSpells();
        } else {
            spells = await SpellDao.readSpellsById(spellId);
        }

        res.status(200).json(spells);

    } catch (error) {
        console.error('[spells.controller][readSpells][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching spells'});
    }
}

export const readSpellsByLevel: RequestHandler = async (req: Request, res: Response) => {
    try {
        let spells;
        let level = parseInt(req.params.level as string);

        console.log('level', level);
        spells = await SpellDao.readSpellsByLevel(level);

        res.status(200).json(spells);

    } catch (error) {
        console.error('[spells.controller][readSpellsByLevel][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching spells'});
    }
}

export const readSpellsByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const spells = await SpellDao.readSpellsByName(req.params.name);
        res.status(200).json(spells);
    } catch (error) {
        console.error('[spells.spellController][readSpellsByName][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching spells'});
    }
}

export const readSpellsByClassSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const spells = await SpellDao.readSpellsByClassSearch('%' + req.params.search + '%');
        res.status(200).json(spells);
    } catch (error) {
        console.error('[spells.spellController][readSpellsByClassSearch][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching spells'});
    }
}

export const readSpellsBySchoolSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const spells = await SpellDao.readSpellsBySchoolSearch('%' + req.params.search + '%');
        res.status(200).json(spells);
    } catch (error) {
        console.error('[spells.spellController][readSpellsBySchoolSearch][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching spells'});
    }
}

export const createSepll: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SpellDao.createSpell(req.body);

        console.log('req.body', req.body);
        console.log('spell', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[spells.controller][createSpell][Error] ', error);
        res.status(500).json({message: 'There was an error creating the spell'});
    }
}

export const updateSepll: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SpellDao.updateSpell(req.body);

        console.log('req.body', req.body);
        console.log('spell', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[spells.controller][updateSpell][Error] ', error);
        res.status(500).json({message: 'There was an error updating the spell'});
    }
}

export const deleteSpell: RequestHandler = async (req: Request, res: Response) => {
    try {
        let spellId = parseInt(req.params.spellId as string);

        console.log('spellId', spellId);
        if (!Number.isNaN(spellId)) {
            const response = await SpellDao.deleteSpell(spellId);
            res.status(200).json(response);
        } else {
            throw new Error('Integer expected for spellId');
        }
    } catch (error) {
        console.error('[spells.controller][deleteSpell][Error] ', error);
        res.status(500).json({message: 'There was an error deleting the spell'});
    }
}


export const spellQueries = {

    readSpells: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells`,

    readSpellsById: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells
    WHERE dnd.spells.spell_id = ?`,

    readSpellsByName: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells
    WHERE dnd.spells.spell_name = ?`,

    readSpellsByLevel: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells
    WHERE dnd.spells.level = ?`,

    readSpellsByClassSearch: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells
    WHERE dnd.spells.classes LIKE ?`,

    readSpellsBySchoolSearch: `
    SELECT
        spell_id AS spellId, spell_name AS name, school AS school,
        cast_time AS castTime, spell_range AS spellRange, duration AS duration, level AS level, 
        classes AS classes, image AS image, source AS source, description AS description
    FROM dnd.spells
    WHERE dnd.spells.school LIKE ?`,

    createSpell: `
    INSERT INTO dnd.spells(spell_name, school, cast_time, spell_range, duration, level, classes, source, description)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,

    updateSpell: `
    UPDATE dnd.spells
    SET spell_name = ?, school = ?, cast_time = ?, spell_range = ?, duration = ?, level = ?, classes = ?, source = ?, description = ?
    WHERE spell_id = ?`,

    deleteSpell: `
    DELETE FROM dnd.spells
    WHERE spell_id = ?`

}


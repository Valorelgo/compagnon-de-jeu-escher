// data.js - Base de données Necromunda (Escher, Mercenaires, Armes, Équipements, Traits, Cartes Tactiques, Territoires, Conditions)

const db = {
    // ===== RÈGLES GÉNÉRALES DE LA LISTE D'ARMÉE ESCHER =====
    // - army_special_rule : règle spéciale d'armée, possédée par TOUTES les
    //   figurines Escher (à afficher avec les compétences, en première position).
    // - starting_skill_selection : rappel des règles de choix de compétence de
    //   départ selon le type de guerrier (déjà implémentées dans le code de
    //   recrutement, cf. fighter-recruit.js / fighter-skills-tactics.js).
    army_special_rule: {
        name: "Nimble",
        desc: "Les guerriers peuvent relancer les résultats de 1 sur leurs tests d'agilité."
    },
    starting_skill_selection: {
        "leader_champion": "Les figurines de type leader ou champion choisissent 1 compétence de départ parmi leurs compétences primaires, à la création de gang ou au recrutement.",
        "specialiste": "Les guerriers de type spécialiste choisissent 1 compétence de départ parmi les 8 compétences de spécialiste, à la création de gang ou au recrutement."
    },

    // ===== PERSONNAGES =====
    characters: [
        {
            id: "char_reine_de_gang",
            name: "Reine de gang",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 3, I: 5, A: 3, Sv: '5+', Ld: 8, Cl: 8, Wil: 7, Int: 7 },
            type: ["Guerrier", "leader"],
            starting_xp: 61,
            starting_skill: "1 au choix dans les primaires (Inspirant et Chef acquis automatiquement via le type leader)",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "savant", "finesse"],
            secondary_skills: ["combat", "tir"],
            cost: 135,
            tactics_cards: 2
        },
        {
            id: "char_matriarche",
            name: "Matriarche",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 2, I: 5, A: 2, Sv: '5+', Ld: 7, Cl: 7, Wil: 6, Int: 7 },
            type: ["guerrier", "champion"],
            starting_xp: 37,
            starting_skill: "1 au choix dans les primaires (Inspirant et Sous-chef acquis automatiquement via le type champion)",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "combat", "finesse"],
            secondary_skills: ["savant"],
            cost: 100,
            tactics_cards: 1
        },
        {
            id: "char_death_maiden",
            name: "Death maiden",
            stats: { M: '6"', WS: '3+', BS: '3+', S: 3, T: 4, W: 2, I: 5, A: 3, Sv: '5+', Ld: 6, Cl: 8, Wil: 7, Int: 7 },
            type: ["guerrier", "champion", "solitaire"],
            starting_xp: 49,
            starting_skill: "Poison blood, 1 au choix dans les primaires (Inspirant et Sous-chef acquis automatiquement via le type champion)",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "combat", "finesse"],
            secondary_skills: ["muscle"],
            cost: 130,
            tactics_cards: 1,
            allowed_weapons_exclusive: ["wpn_venom_claw"]
        },
        {
            id: "char_gang_sister",
            name: "Gang sister",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 6 },
            type: ["guerrier", "ganger", "spécialiste"],
            starting_xp: 13,
            starting_skill: "selon spécialité",
            special_rules: ["Nimble", "lourd (Bulging biceps), artilleur (Hip-shooting), pistolero (Gunfighter), scout (Clamber), sniper (Precision shot), bagarreur (Berserker), medic (Medicate), tech (Munitioneer)"],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["combat", "tir"],
            cost: 40
        },
        {
            id: "char_blade_maiden",
            name: "Blade Maiden",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 2, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 6 },
            type: ["Guerrier", "ganger"],
            starting_xp: 19,
            starting_skill: "Deadly blows, Hit & run",
            special_rules: ["Nimble", "Peut acheter l'arme Khimerix sting (arme réservée, pas encore renseignée dans l'appli — à ajouter avec la catégorie armes)."],
            primary_skills: ["combat", "finesse"],
            secondary_skills: ["agilité", "muscle"],
            cost: 65
        },
        {
            id: "char_chem_wytch",
            name: "Chem Wytch",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 7 },
            type: ["Guerrier", "ganger"],
            starting_xp: 19,
            starting_skill: "Medicate",
            special_rules: ["Nimble", "Peut accompagner un guerrier en blessure critique à l'escorte médicale, comme un leader ou un champion.", "Peut acheter les équipements Auto-chem et Servo-medicae, qui lui sont réservés."],
            primary_skills: ["savant", "finesse"],
            secondary_skills: ["agilité", "combat"],
            cost: 55
        },
        {
            id: "char_gun_maiden",
            name: "Gun maiden",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 7, Cl: 6, Wil: 6, Int: 6 },
            type: ["Guerrier", "ganger"],
            starting_xp: 19,
            starting_skill: "Hip-shooting, Lightning reflexes",
            special_rules: ["Nimble", "Peut acheter l'arme Repeater needle rifle (arme réservée, pas encore renseignée dans l'appli — à ajouter avec la catégorie armes)."],
            primary_skills: ["tir", "finesse"],
            secondary_skills: ["agilité", "combat"],
            cost: 55
        },
        {
            id: "char_huntress",
            name: "Huntress",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 7, Int: 6 },
            type: ["Guerrier", "ganger"],
            starting_xp: 19,
            starting_skill: "Gunfighter, Hip-shooting",
            special_rules: ["Nimble", "Peut acheter l'équipement Multi-harness, qui lui est réservé."],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["combat", "tir"],
            cost: 55
        },
        {
            id: "char_wyld_runner",
            name: "Wyld runner",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 6, Wil: 5, Int: 5 },
            type: ["guerrier", "prospect"],
            starting_xp: 4,
            starting_skill: "Clamber",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["ruse"],
            cost: 30,
            allowed_weapons_exclusive: ["wpn_wyld_bow", "wpn_fouet"]
        },
        {
            id: "char_little_sister",
            name: "Little sister",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 6, Wil: 5, Int: 5 },
            type: ["guerrier", "prospect"],
            starting_xp: 1,
            starting_skill: "",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["combat"],
            cost: 25
        },
        {
            id: "char_khimerix",
            name: "Khimerix",
            stats: { M: '6"', WS: '4+', BS: '4+', S: 4, T: 5, W: 4, I: 4, A: 3, Sv: '6+', Ld: 5, Cl: 6, Wil: 7, Int: 4 },
            type: ["guerrier", "bête", "brute"],
            starting_xp: 25,
            starting_skill: "Regeneration (Juggernaut acquis automatiquement via le type brute)",
            special_rules: ["Nimble", "Ne peut acheter armes/matériel sauf upgrade."],
            primary_skills: ["muscle", "finesse"],
            secondary_skills: ["agilité"],
            cost: 220,
            default_weapons: ["wpn_chemical_cloud", "wpn_talons"]
        },
        {
            id: "char_phyrr_cat",
            name: "Phyrr cat",
            is_gang: true,
            stats: { M: '7"', WS: '3+', BS: '6+', S: 3, T: 3, W: 1, I: 5, A: 2, Sv: '6+', Ld: 5, Cl: 6, Wil: 6, Int: 5 },
            type: ["guerrier", "bête", "familier"],
            starting_xp: 13,
            starting_skill: "leash de 9\", Lands on their feet",
            special_rules: ["Nimble", "Rattaché à une figurine"],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["combat"],
            cost: 80,
            default_weapons: ["wpn_talons_cat"]
        },
        {
            id: "char_phelynx",
            name: "Phelynx",
            is_gang: true,
            stats: { M: '6"', WS: '4+', BS: '6+', S: 2, T: 3, W: 1, I: 4, A: 2, Sv: '6+', Ld: 4, Cl: 6, Wil: 6, Int: 4 },
            type: ["guerrier", "bête", "familier"],
            starting_xp: 13,
            starting_skill: "leash de 3\"",
            special_rules: ["Nimble", "Rattaché à une figurine"],
            primary_skills: ["agilité", "finesse"],
            secondary_skills: ["combat"],
            cost: 60,
            default_weapons: ["wpn_claws_cat"]
        }
    ],

    // ===== DICTIONNAIRE DES COMPETENCES =====
    skills: {
        agilite: [
            { id: "sk_chute_chat", name: "Catfall", desc: "Réduit le cran de distance verticale en cas de chute/saut. Test d'agilité pour ne pas être suppressed si non blessé/hors combat." },
            { id: "sk_grimper", name: "Clamber", desc: "Mouvement non divisé par deux en grimpant." },
            { id: "sk_esquive", name: "Dodge", desc: "Avant jet d'armure, sur un 6, ignore la blessure. Si gabarit, déplace de 2\" pour éviter." },
            { id: "sk_bond_prodigieux", name: "Mighty leap", desc: "Ignore les 2 premiers pouces de distance lors d'un saut (saut 4\" sans test)." },
            { id: "sk_jaillir", name: "Spring up", desc: "Si suppressed, test d'agilité. Si réussi, n'est plus suppressed." },
            { id: "sk_sprint", name: "Sprint", desc: "Action double : déplacement = Mouvement + (2 x Initiative)." }
        ],
        muscle: [
            { id: "sk_charge_taureau", name: "Bull charge", desc: "Attaque de charge : l'arme gagne knockback (6+) et +1 en Force." },
            { id: "sk_biceps_saillants", name: "Bulging biceps", desc: "Braced shot : déplacement d'Initiative en pouces avant ou après. Arme lourde au close : peut déclarer arme secondaire non lourde." },
            { id: "sk_redoutable", name: "Fearsome", desc: "Condition fearsome." },
            { id: "sk_machoire_acier", name: "Iron jaw", desc: "Endurance +2 si touché par arme sans AP." },
            { id: "sk_nerfs_acier", name: "Nerves of steel", desc: "Si touché au tir, test de cool : si réussi, non suppressed." },
            { id: "sk_instoppable", name: "Unstoppable", desc: "A l'activation, test de Willpower : si réussi, récupère 1 PV." }
        ],
        combat: [
            { id: "sk_berserker", name: "Berserker", desc: "Condition frénésie." },
            { id: "sk_maitre_combat", name: "Combat master", desc: "Pas de malus d'interférence pour toucher. Peut toujours assister quel que soit le nb d'ennemis." },
            { id: "sk_coup_boule", name: "Headbutt", desc: "Arme intégrée : engagé, F+1, L:1, attaques additionnelles (1)." },
            { id: "sk_coups_puissants", name: "Heavy blows", desc: "Arme lourde au close = +1 Force." },
            { id: "sk_pluie_coups", name: "Rain of blows", desc: "Si après une action d'attaque, le guerrier est toujours engagé, peut faire une action d'attaque gratuite en plus." },
            { id: "sk_combat_2_armes", name: "Two-weapon fighter", desc: "Fait 2 attaques avec son arme secondaire au lieu d'une." }
        ],
        ruse: [
            { id: "sk_backstab", name: "Backstab", desc: "Armes close gagnent Backstab. Si déjà acquis, Force +2 au lieu de +1." },
            { id: "sk_contre_attaque", name: "Counter-attack", desc: "Peut faire une attaque additionnelle quand un ennemi l'attaque, au même rang d'initiative que lui." },
            { id: "sk_coupe_gorge", name: "Cut-throat", desc: "Relance son D6 de coup de grâce." },
            { id: "sk_infiltration", name: "Infiltrate", desc: "Déploiement spécial : hors ligne de vue et à + de 9\" de tout ennemi." },
            { id: "sk_se_cacher", name: "Lie low", desc: "Si suppressed, inciblable au-delà de la portée courte des ennemis." },
            { id: "sk_overwatch", name: "Overwatch", desc: "Interrompt une action ennemie avec un tir en perdant son marqueur ready." }
        ],
        savant: [
            { id: "sk_connecte", name: "Connected", desc: "Visite le Trading Post avec 1 TP supplémentaire post-cycle (2 visites max)." },
            { id: "sk_recharge_rapide", name: "Fast reload", desc: "Recharge toutes ses armes d'un coup." },
            { id: "sk_volonte_fer", name: "Iron will", desc: "Soustrait 1 aux tests de bottle check du gang." },
            { id: "sk_soin", name: "Medicate", desc: "Action : un allié à 1\" qui n'est pas seriously injured récupère 1 PV." },
            { id: "sk_mentor", name: "Mentor", desc: "Si un allié à 6\" gagne 1 XP, test de Ld : si réussi, gagne 1 XP." },
            { id: "sk_munitions", name: "Munitioneer", desc: "Action distribution : alliés à 6\" font test d'Int, si réussi -> recharge gratuite." }
        ],
        tir: [
            { id: "sk_tir_rapide", name: "Fast shot", desc: "Peut faire 2 actions de tir pendant l'activation." },
            { id: "sk_pistolero", name: "Gunfighter", desc: "Peut tirer avec 2 armes de tir (léger) sur cibles différentes." },
            { id: "sk_tir_hanche", name: "Hip-shooting", desc: "Les armes de tir (non lourdes) gagnent le trait assaut." },
            { id: "sk_tireur_habile", name: "Marksman", desc: "+1 pour toucher les cibles entre portée courte et longue." },
            { id: "sk_tir_precision", name: "Precision shot", desc: "Sur un 6 naturel pour toucher, ignore l'armure (sauf explosion/tir rapide)." },
            { id: "sk_tireur_elite", name: "Sharpshooter", desc: "Aimed shot : +2 pour toucher au lieu de +1." }
        ],
        generique: [
            { id: "sk_poison_blood", name: "Poison blood", desc: "Quand le guerrier utilise une arme avec le trait toxine (X+), les résultats de 1 peuvent être relancés." },
            { id: "sk_lands_on_feet", name: "Lands on their feet", desc: "Si le guerrier tombe pour n'importe quelle raison, réduire de 3\" la hauteur de chute dans le tableau.", specific_to: "char_phyrr_cat" },
            { id: "sk_hit_run", name: "Hit & run", desc: "Après action de combat, peut consolider (sortir de 1\") en finissant à +1\" des ennemis." },
            { id: "sk_inspirant", name: "Inspirant", desc: "Peut faire l'action d'activation de groupe en action gratuite." },
            { id: "sk_chef", name: "Chef", desc: "Tous les alliés dans les 12\" et en ligne de vue peuvent utiliser le Cl du leader pour leurs tests de nerf." },
            { id: "sk_sous_chef", name: "Sous-chef", desc: "Tous les alliés dans les 6\" et en ligne de vue peuvent utiliser le Cl du leader pour leurs tests de nerf." },
            { id: "sk_juggernaut", name: "Juggernaut", desc: "Si touché au tir, suppressed uniquement si PV perdu ou effet du dé de blessure.", specific_to: "brute" },
            { id: "sk_regeneration", name: "Regeneration", desc: "Action : mouvement puis 4+ = récupère 1 PV." },
            { id: "sk_leash", name: "Leash de X\"", desc: "Portée pour familiers pour ignorer le test de panique." }
        ],
        // Nouvel arbre de compétence primaire, accessible à tous les guerriers
        // en plus de leurs arbres primaires/secondaires habituels.
        finesse: [
            { id: "sk_acrobatic", name: "Acrobatic", desc: "Ce guerrier peut ignorer les ennemis quand il se déplace, tant qu'il finit à plus de 1\" à la fin de leur mouvement, et ils ignorent les obstacles de 2\" et moins quand ils se déplacent." },
            { id: "sk_deadly_blows", name: "Deadly blows", desc: "Si le guerrier a une initiative plus haute que celle des ennemis engagés avec lui, il peut relancer un dé de résultat de blessure." },
            { id: "sk_lets_dance", name: "Let's dance", desc: "Après que ce guerrier a fait une attaque au corps à corps, au lieu de consolider, il peut effectuer un tir en action gratuite." },
            { id: "sk_lightning_reflexes", name: "Lightning reflexes", desc: "Ce guerrier gagne une sauvegarde invulnérable de 5+ au corps à corps et traite l'action de retraite comme une action gratuite." },
            { id: "sk_perfect_strike", name: "Perfect strike", desc: "Quand ce guerrier fait une attaque au corps à corps, au lieu de déclarer ses armes principale et secondaire, il peut ne faire qu'une seule attaque qui touchera sur 2+." },
            { id: "sk_sommersault", name: "Sommersault", desc: "Ce guerrier peut faire l'action double sommersault : placer ce guerrier à 6\" en ligne de vue de sa position actuelle." }
        ]
    },

    // ===== ARMES INTÉGRÉES DONNÉES PAR UNE COMPÉTENCE =====
    // Table de correspondance id de compétence -> arme accordée automatiquement.
    // Chaque entrée a tous les champs d'une arme normale (id, name, profiles
    // avec SR/LR/S/AP/L/traits, cost_credits) plus isInnateWeapon: true.
    // Le mécanisme générique qui l'ajoute au guerrier dès qu'il a la compétence
    // correspondante (sans jamais compter dans la limite d'emplacements, et de
    // façon idempotente) est ensureInnateFighterSkills() dans gang-views.js.
    // Volontairement séparée de db.weapons : ces armes ne doivent jamais
    // apparaître comme achetables au recrutement, en post-cycle ou au Trading Post.
    innate_weapons_by_skill: {
        "sk_coup_boule": {
            id: "wpn_innate_headbutt",
            name: "Headbutt",
            profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, attaque additionnelle (1)" }],
            cost_credits: 0,
            isInnateWeapon: true
        }
    },

    // ===== ARMES =====
    weapons: [
        { id: "wpn_autogun", name: "Autogun", profiles: [{ name: "Unique", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "tir rapide (1)" }], cost_credits: 20, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_autopistol", name: "Autopistol", profiles: [{ name: "Unique", SR: '4"', LR: '12"', S: 3, AP: "-", L: 1, traits: "tir rapide (1), léger" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_heavy_stubber", name: "Heavy stubber*", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "tir rapide (2), lourd" }], cost_credits: 70, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_long_rifle", name: "Long rifle", profiles: [{ name: "Unique", SR: '24"', LR: '48"', S: 4, AP: "-1", L: 1, traits: "Knockback (6+)" }], cost_credits: 55, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_stub_gun", name: "Stub gun", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 3, AP: "-", L: 1, traits: "léger" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_boltgun", name: "Boltgun", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+)" }], cost_credits: 55, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_bolt_pistol", name: "Bolt pistol", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+), léger" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_heavy_bolter", name: "Heavy bolter*", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 5, AP: "-2", L: 2, traits: "tir rapide (2), munitions (3+), lourd" }], cost_credits: 100, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_warpstorm_bolter", name: "Warpstorm bolter", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (6+), rare (4+), maudit" }], cost_credits: 65, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lance_flamme", name: "Lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }], cost_credits: 70, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_pist_lance_flamme", name: "Pistolet lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "munitions (6+), flammes (5+), gabarit, léger" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_lance_flamme_lourd", name: "Lance flamme lourd", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-2", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }], cost_credits: 95, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grav_gun", name: "Grav gun", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-", L: 2, traits: "munitions (5+), explosion (3\"), graviton pulse" }], cost_credits: 50, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grav_pistol", name: "Grav pistol", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 2, traits: "munitions (5+), explosion (3\"), graviton pulse, léger" }], cost_credits: 40, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grenade_launcher", name: "Grenade launcher", profiles: [
            { name: "Frag grenades", SR: '6"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), Knockback (5+)" },
            { name: "krak grenades", SR: '6"', LR: '24"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+)" }
        ], optional_profiles: [
            { name: "Photon flash", SR: '6"', LR: '24"', S: "-", AP: "-", L: "-", traits: "Munitions (5+), Explosion (3\"), flash", extra_cost: 15 },
            { name: "Fumigène", SR: '6"', LR: '24"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), Explosion (3\"), fumée", extra_cost: 15 }
        ], cost_credits: 80, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lasgun", name: "Lasgun", profiles: [{ name: "Unique", SR: '16"', LR: '24"', S: 3, AP: "-", L: 1, traits: "" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_laspistol", name: "Laspistol", profiles: [{ name: "Unique", SR: '8"', LR: '12"', S: 3, AP: "-", L: 1, traits: "léger" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_long_las", name: "Long Las", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 4, AP: "-", L: 1, traits: "" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fuseur", name: "Fuseur", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3)" }], cost_credits: 140, cost_tp: 4, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_multifuseur", name: "Multifuseur", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3), lourd" }], cost_credits: 150, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_canon_plasma", name: "Canon plasma", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 6, AP: "-2", L: 2, traits: "Munitions (6+), explosion (3\"), Dommages (2), lourd, instable" }], cost_credits: 115, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fusil_plasma", name: "Fusil plasma", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), tir rapide(1), Dommages (2), instable" }], cost_credits: 85, cost_tp: 3, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_pistolet_plasma", name: "Pistolet plasma", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), tir rapide(1), léger, instable" }], cost_credits: 70, cost_tp: 3, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_couteau_lancer", name: "Couteau de lancer", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: "-", AP: "-", L: 1, traits: "Munitions (3+), toxine (4+)" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_canon_rad", name: "Canon rad *", profiles: [{ name: "Unique", SR: '16"', LR: '32"', S: 3, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), lourd, rad-phage" }], cost_credits: 55, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fusil_rad", name: "Fusil rad", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-1", L: 1, traits: "Munitions (5+), Rad-phage, gabarit" }], cost_credits: 60, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lance_harpon", name: "Lance harpon", profiles: [{ name: "Unique", SR: '6"', LR: '18"', S: 5, AP: "-3", L: 1, traits: "Munitions (5+), attirer" }], cost_credits: 80, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_cutter_laser", name: "Cutter laser", profiles: [{ name: "Unique", SR: '2"', LR: '4"', S: 9, AP: "-2", L: 2, traits: "Dommages (2), léger, tir unique" }], cost_credits: 80, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_laser_minage", name: "Laser de minage", profiles: [{ name: "Unique", SR: '10"', LR: '14"', S: 9, AP: "-3", L: 3, traits: "Munitions (5+), Dommages (2), lourd" }], cost_credits: 125, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_pompe_combat", name: "Fusil à pompe de combat", profiles: [
            { name: "Salve", SR: '4"', LR: '12"', S: 4, AP: "-", L: 1, traits: "Knockback (6+)" },
            { name: "Déchiquetant", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "Munitions (6+), tir rapide(1), déchiqueter (6+), gabarit" }
        ], cost_credits: 35, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_pompe_canon_scie", name: "Fusil à pompe à canon scié", profiles: [
            { name: "Dispersion", SR: '4"', LR: '8"', S: 2, AP: "-", L: 1, traits: "tir rapide (2), léger" },
            { name: "Concentré", SR: '4"', LR: '8"', S: 4, AP: "-", L: 1, traits: "Knockback (6+), léger" }
        ], cost_credits: 30, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_fusil_pompe", name: "Fusil à pompe", profiles: [
            { name: "Dispersion", SR: '4"', LR: '8"', S: 3, AP: "-", L: 1, traits: "tir rapide (2)" },
            { name: "Concentré", SR: '8"', LR: '16"', S: 4, AP: "-", L: 1, traits: "Knockback (5+)" }
        ], optional_profiles: [
            { name: "Acide", SR: '4"', LR: '8"', S: 3, AP: "-1", L: 1, traits: "Flammes (5+), tir rapide (1)", extra_cost: 15 }
        ], cost_credits: 35, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_pist_aiguille", name: "Pistolet à aiguille", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 1, traits: "Toxine (3+), léger" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_fusil_aiguille", name: "Fusil à aiguille", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Toxine (3+)" }], cost_credits: 45, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_fusil_web", name: "Fusil web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-", L: "-", traits: "Munitions (6+), toile, gabarit" }], cost_credits: 65, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_pistolet_web", name: "Pistolet web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-", L: "-", traits: "munitions (6+), toile, gabarit, léger" }], cost_credits: 50, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grenade_explo", name: "Grenade explosive", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 5, AP: "-1", L: 2, traits: "Munitions (5+), explosion (5\"), limité, Knockback (5+)" }], cost_credits: 60, cost_tp: 2, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_gaz", name: "Grenade à gaz asphyxiant", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: 1, traits: "Munitions (5+), explosion (3\"), limité, Gaz, toxine (3)" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_gang: true, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_charge_demo", name: "Charge de démolition", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 6, AP: "-3", L: 3, traits: "Munitions (6+), explosion (5\"), limité, Dommages (2)" }], cost_credits: 85, cost_tp: 3, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_frag", name: "Grenade frag", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), limité, Knockback (6+)" }], cost_credits: 30, cost_tp: 0, is_gang_weapon: true, is_gang: true, is_hive_scum: true, counts_as_equip: true },
        { id: "wpn_grenade_inc", name: "Grenade incendiaire", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (5+), explosion (5\"), limité, flammes (5+)" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_krak", name: "Grenade krak", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+), limité" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_gang: true, is_hive_scum: true, counts_as_equip: true },
        { id: "wpn_grenade_phos", name: "Grenade au phosphore", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 4, AP: "-2", L: 2, traits: "Munitions (5+), explosion (3\"), limité, flammes (5+), instable" }], cost_credits: 65, cost_tp: 3, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_photon", name: "Grenade à photon", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (5\"), flash, limité" }], cost_credits: 15, cost_tp: 1, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_plasma", name: "Grenade à plasma", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 5, AP: "-1", L: 2, traits: "Munitions (4+), explosion (3\"), limité, dommages (2), instable" }], cost_credits: 70, cost_tp: 3, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_rad", name: "Grenade rad", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 2, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), limité, Rad-phage" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: false, is_gang: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_fumi", name: "Grenades fumigènes", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (3\"), limité, fumée" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, is_gang: true, is_hive_scum: true, counts_as_equip: true },
        
        // Corps à Corps / Melee
        { id: "wpn_hache_tron", name: "Hache tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+)" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_epee_tron", name: "Epée tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, déchiqueter (5+), parade" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_hache_nrj", name: "Hache énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-3", L: 1, traits: "Melee, breche (5+)" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_gantelet_nrj", name: "Gantelet énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+3", AP: "-3", L: 2, traits: "Melee, breche (6+), Dommages (2), commotion (5+), encombrant" }], cost_credits: 105, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_marteau_nrj", name: "Marteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 2, traits: "Melee, breche (6+), commotion (6+)" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_couteau_nrj", name: "Couteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "Melee, breche (6+), backstab" }], cost_credits: 30, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_masse_nrj", name: "Masse énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-2", L: 1, traits: "Melee, breche (6+), commotion (6+)" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_epee_nrj", name: "Epée énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "melee, breche (6+), parade" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_hache", name: "Hache", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_couteau_combat", name: "Couteau de combat", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, backstab" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_fleau", name: "Fléau", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+)" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_masse", name: "Masse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, commotion (6+)" }], cost_credits: 20, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_hache_2m", name: "Hache à deux mains", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-1", L: 2, traits: "Melee, Lourd, encombrant" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_marteau_2m", name: "Marteau à deux mains", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 3, traits: "Melee, Lourd, encombrant, commotion (6+)" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_servo_griffe", name: "Servo-griffe", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-", L: 2, traits: "Melee, encombrant" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_baton_shock", name: "Baton shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "melee, parade, shock (6+)" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_arme_hast_shock", name: "Shock staves", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, shock (5+)" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fouet_shock", name: "Fouet shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+), shock (6+)" }], cost_credits: 10, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_couteau_stylet", name: "Couteau stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "Melee, Toxine (3+)" }], cost_credits: 25, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_epee_stylet", name: "Epée stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-1", L: 1, traits: "Melee, Parade, toxine (3+)" }], cost_credits: 45, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        
        // Armes spéciales / Escher Cutter / Autres
        { id: "wpn_cutter_heavy_stubbers", name: "Cutter heavy stubbers", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "tir rapide (2), lourd, jumelé, arc (ligne centrale)" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: true, requires_equip: "eq_escher_cutter", replaces: "wpn_cutter_grenade_launcher" },
        { id: "wpn_combi_bolter_needler", name: "Combi-bolter / Needler", profiles: [
            { name: "Bolter", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+), combi, rare (4+)" },
            { name: "Needler", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Combi, toxine (3+)" }
        ], cost_credits: 70, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_cutter_grenade_launcher", name: "Cutter grenade launcher", profiles: [
            { name: "Frag grenades", SR: '6"', LR: '24"', S: 3, AP: "-", L: 1, traits: "tir rapide (1), munitions (4+), explosion (3\"), knockback (5+), arc (ligne centrale)" },
            { name: "krak grenades", SR: '6"', LR: '24"', S: 6, AP: "-2", L: 1, traits: "tir rapide (1), munitions (4), arc (ligne centrale)" }
        ], cost_credits: 0, is_gang_weapon: true, requires_equip: "eq_escher_cutter", note: "inclus dans escher cutter" },
        { id: "wpn_chemical_cloud", name: "Chemical cloud breath", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 3, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\")" }], default_for: "char_khimerix" },
        { id: "wpn_gaseous_eruption", name: "Gaseous eruption breath", profiles: [{ name: "Unique", SR: "T", LR: "-", S: "-", AP: "-", L: 1, traits: "Munitions (6+), gaz, gabarit, toxine (3+)" }], cost_credits: 25, is_gang_weapon: true, upgrades_from: "wpn_chemical_cloud", specific_to: "char_khimerix" },
        { id: "wpn_cutter_plasma_guns", name: "Cutter plasma guns", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), Dommages (2), tir rapide (1), jumelé, instable, arc (ligne centrale)" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, requires_equip: "eq_escher_cutter", replaces: "wpn_cutter_grenade_launcher" },
        { id: "wpn_wyld_bow", name: "Wyld bow", profiles: [{ name: "Flèches normales", SR: '9"', LR: '18"', S: 3, AP: "-", L: 1, traits: "assaut" }], optional_profiles: [
            { name: "Flèches acides", SR: '9"', LR: '18"', S: 3, AP: "-", L: 1, traits: "Assaut, munitions (4+), flammes (5+)", extra_cost: 15 },
            { name: "Flèches explosives", SR: '9"', LR: '18"', S: 2, AP: "-", L: 1, traits: "Assaut, munitions (4+), explosion (3\"), instable", extra_cost: 10 },
            { name: "Flèches empoisonnées", SR: '9"', LR: '18"', S: "-", AP: "-", L: 1, traits: "Assaut, munitions (4+), toxine (3+)", extra_cost: 30 }
        ], cost_credits: 15, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_heavy_wyld_bow", name: "Heavy wyld bow", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 4, AP: "-1", L: 1, traits: "" }], cost_credits: 50, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_needle_sniper", name: "Needle sniper", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: "-", AP: "-2", L: 1, traits: "Toxine (3+)" }], cost_credits: 60, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_repeater_needle_rifle", name: "Repeater needle rifle", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Toxine (3+), tir rapide (1)" }], cost_credits: 55, cost_tp: 0, is_gang_weapon: true, specific_to: "char_gun_maiden" },
        { id: "wpn_nox_servo_claw", name: "\"Nox\" servo claw", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+)" }], cost_credits: 40, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_khimerix_sting", name: "Khimerix sting*", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-1", L: 1, traits: "Melee, toxine (3+), paire (2)" }], cost_credits: 45, cost_tp: 0, is_gang_weapon: true, specific_to: "char_blade_maiden" },
        { id: "wpn_nightshade", name: "Nightshade chem-thrower", profiles: [{ name: "Unique", SR: "T", LR: "-", S: "-", AP: "-", L: 1, traits: "Munitions (6+), toxine (3+), gaz, gabarit" }], cost_credits: 95, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_claws_cat", name: "Claws", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "Melee, Toxine (3+)" }], default_for: "char_phelynx" },
        { id: "wpn_razor_talons", name: "Razor-sharp talons", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-2", L: 3, traits: "Melee, déchirant (6+)" }], cost_credits: 25, is_gang_weapon: true, upgrades_from: "wpn_talons", specific_to: "char_khimerix" },
        { id: "wpn_talons", name: "Talons (Khimerix)", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 2, traits: "Melee" }], default_for: "char_khimerix" },
        { id: "wpn_talons_cat", name: "Talons (Phyrr Cat)", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 2, traits: "Melee" }], default_for: "char_phyrr_cat" },
        { id: "wpn_fouet", name: "Fouet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+)" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, specific_to: "char_wyld_runner" },
        { id: "wpn_venom_claw", name: "Venom claw", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-2", L: 1, traits: "Melee, Toxine (3+), déchiqueter (5+)" }], cost_credits: 50, cost_tp: 0, is_gang_weapon: true, specific_to: "char_death_maiden" }
    ],

    // ===== EQUIPEMENTS =====
    equipment: [
        { id: "eq_armure_cara_leg", name: "Armure carapace légère", type: "Armure", cost_credits: 100, cost_tp: 1, effect: "Améliore la sauvegarde de 1. Réduit l'initative de 1." },
        { id: "eq_armure_cara_lourde", name: "Armure carapace lourde", type: "Armure", cost_credits: 140, cost_tp: 3, effect: "Améliore la sauvegarde de 2. Réduit l'initiative de 2. Malus aux jets d'agilité de -1." },
        { id: "eq_champ_reflec", name: "Refractor field", type: "Armure", cost_credits: 50, cost_tp: 2, effect: "Sauvegarde invulnérable de 5+. Au 1er jet de 1, ne fonctionne plus. Peut être combiné avec les autres armures.", is_gang: true },
        { id: "eq_combi_protec", name: "Hazard suit", type: "Armure", cost_credits: 10, cost_tp: 0, effect: "Immunisé flammes et rad-phage.", is_hive_scum: true },
        { id: "eq_mesh_armour", name: "Mesh armour", type: "Armure", cost_credits: 40, cost_tp: 0, effect: "Améliore sauvegarde de 1 au CàC.", is_gang: true },
        { id: "eq_nuage_reflec", name: "Reflec shroud", type: "Armure", cost_credits: 25, cost_tp: 1, effect: "AP des armes las, plasma et fuseur = '-'" },
        
        { id: "eq_bio_booster", name: "Bio-booster", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1ère fois blessé : réduit léthalité de 1 (si 0, jette 2 dés et choisis)." },
        { id: "eq_corde_descente", name: "Drop rig", type: "Personnel", cost_credits: 10, cost_tp: 0, effect: "Action descendre : 12\" vertical, 3\" horizontal.", is_gang: true, is_hive_scum: true },
        { id: "eq_grav_chute", name: "Grav-chute", type: "Personnel", cost_credits: 30, cost_tp: 0, effect: "Chute sans dommage, jamais suppressed." },
        { id: "eq_kit_medical", name: "Medicae kit", type: "Personnel", cost_credits: 20, cost_tp: 0, effect: "Soigne un allié, jette 2 dés de recovery et garde au choix.", is_gang: true },
        { id: "eq_lampe_frontale", name: "Photo-lumens", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Visibilité +9\" mais toujours ciblable." },
        { id: "eq_lance_grappin", name: "Grapnel launcher", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "Action grappin : déplace 12\" ligne droite, doit finir plus haut." },
        { id: "eq_lunettes_infra", name: "Photo-goggles", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Visibilité +9\", voit dans fumée. Malus -2 init si munition flash.", is_gang: true, is_hive_scum: true },
        { id: "eq_stimm_slug", name: "Stimm-slug stash", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1/bataille : +2 M, S, T. A la prochaîne activ : 1 = prend une blessure." },
        { id: "eq_respirateur", name: "Respirateur", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Save 5+ invulnérable contre le gaz.", is_gang: true },
        { id: "eq_servo_partiel", name: "Servo-harness partial", type: "Personnel", cost_credits: 100, cost_tp: 2, effect: "+2 Force, +1 Endo. Malus -1 Mvt et Init." },
        { id: "eq_servo_total", name: "Servo-harness full", type: "Personnel", cost_credits: 130, cost_tp: 3, effect: "Idem partiel sans malus. Incompatible servo-griffe." },
        { id: "eq_dirt_bike", name: "Dirt bike", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Devient monté. M = 8\", Dash = 5\".", is_gang: true },
        { id: "eq_escher_cutter", name: "Escher cutter", type: "Personnel", cost_credits: 150, cost_tp: 0, effect: "Le guerrier gagne les types monté et volant. M = 9\", Dash = 5\". Armé de base d'un cutter grenade launcher, qu'il peut remplacer par un cutter heavy stubber (+10 crédits) ou un cutter plasma guns (+15 crédits). Peut équiper des armes lourdes malgré la restriction du type monté, mais uniquement le cutter heavy stubber.", is_gang: true },
        
        { id: "eq_medicrane", name: "Medicrane", type: "Personnel", cost_credits: 0, effect: "Figurine à 1\", T3 Sv6+. Soigne en action gratuite.", specific_to: "merc_rogue_doc" },

        { id: "eq_auto_chem", name: "Auto chem", type: "Personnel", cost_credits: 30, cost_tp: 0, effect: "Traite l'action administrate dose comme une action gratuite.", is_gang: true, specific_to: "char_chem_wytch" },
        { id: "eq_multi_harness", name: "Multi harness", type: "Personnel", cost_credits: 20, cost_tp: 0, effect: "Toute arme légère équipée par le guerrier gagne le trait fiable.", is_gang: true, specific_to: "char_huntress" },
        { id: "eq_servo_medicae", name: "Servo medicae", type: "Personnel", cost_credits: 30, cost_tp: 0, effect: "Donne l'action auto medicate (action gratuite) : le guerrier peut se cibler ou cibler un allié dans les 3\" qui est actif ou suppressed, et faire un test d'intelligence. S'il est réussi, la cible récupère un point de vie.", is_gang: true, specific_to: "char_chem_wytch" },
        
        { id: "eq_cristal_concen", name: "Focusing crystal", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "AP+1. Arme devient instable." },
        { id: "eq_hotshot", name: "Hotshot las pack", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "Force +1" },
        { id: "eq_suspenseur", name: "Suspensors", type: "Accessoire", cost_credits: 40, cost_tp: 0, effect: "Arme avec * compte pour 1 emplacement au lieu de 2." },
        { id: "eq_viseur", name: "Mono-sight", type: "Accessoire", cost_credits: 20, cost_tp: 0, effect: "Aimed shot : bonus +2 au lieu de +1." },
        { id: "eq_viseur_infra", name: "Infra sight", type: "Accessoire", cost_credits: 10, cost_tp: 0, effect: "Tire à travers fumée. Visibilité +9\"." },
        { id: "eq_viseur_laser", name: "Las-projector", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit bonus de couvert de 1 à portée courte.", is_gang: true },
        { id: "eq_viseur_longue", name: "Telescopic sight", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit bonus de couvert de 1 sur portée longue.", is_hive_scum: true },

        // ===== STIMMS =====
        // Nouvelle catégorie d'équipement personnel. Règle commune (non répétée
        // sur chaque entrée, voir db.stimm_rules ci-dessous) : chaque stimm ne
        // peut être utilisé qu'une fois par cycle de campagne, mais un guerrier
        // peut posséder plusieurs exemplaires du même stimm (achats multiples
        // déjà possibles techniquement, addEquipment() ne déduplique pas).
        { id: "eq_stimm_blood_rush", name: "Blood rush", type: "Stimm", cost_credits: 15, cost_tp: 0, effect: "Action courte administrate dose : rend 1 PV à la cible.", is_gang: true, uses_per_cycle: 1 },
        { id: "eq_stimm_grace", name: "Grace", type: "Stimm", cost_credits: 20, cost_tp: 0, effect: "Action courte administrate dose : gagne +1 en Initiative et aux tests d'agilité. Doit finir son activation à plus de 3\" de sa position de départ sous peine de subir une touche S2, AP-2, L1.", is_gang: true, uses_per_cycle: 1 },
        { id: "eq_stimm_hyper", name: "Hyper", type: "Stimm", cost_credits: 20, cost_tp: 0, effect: "Action courte administrate dose : gagne +2 en Mouvement, +3 en charge. Malus de -1 pour toucher au tir et au corps à corps.", is_gang: true, uses_per_cycle: 1 }
    ],

    // ===== RÈGLES DES STIMMS =====
    stimm_rules: {
        uses_per_cycle: 1,
        stackable_same_stimm: true,
        desc: "Chaque stimm ne peut être utilisé qu'une seule fois par cycle de campagne. Un guerrier peut posséder plusieurs exemplaires du même stimm (achetés séparément)."
    },

    // ===== RÈGLES DES ACCESSOIRES =====
    accessory_rules: {
        max_per_weapon: 1,
        unequip_to_stash: true,
        desc: "Chaque arme ne peut recevoir qu'un seul accessoire. Si une arme est déséquipée et envoyée dans le stash, son accessoire aussi."
    },

    // ===== TRAITS DES ARMES =====
    weapon_traits: [
        { id: "trait_arc", name: "Arc (X)", desc: "Une arme avec ce trait a un champ de tir limité, indiqué par X." },
        { id: "trait_assaut", name: "Assaut", desc: "Après que l'utilisateur a fait une action de dash, il peut tirer en action gratuite." },
        { id: "trait_attaques_add", name: "Attaques additionnelles (X)", desc: "L'arme peut faire X attaques supplémentaires en plus des attaques normales. Uniquement pendant l'activation et si l'arme n'est pas choisie comme arme primaire ou secondaire." },
        { id: "trait_attirer", name: "Attirer", desc: "Si une figurine est touchée par une arme ayant ce trait mais pas mise hors de combat, l'attaquant peut essayer de l'attirer. Il lance un D6, et si cela dépasse la force de la cible, elle est attirée de D3\". Si elle rencontre une autre figurine, elle est attirée aussi. Si la cible finit dans les 1\" d'un de ses ennemis, elle est déplacée pour être engagée avec lui." },
        { id: "trait_auxilliaire", name: "Auxilliaire", desc: "Une arme avec ce trait ne peut qu'être attachée à une autre arme et jamais prise seule. Elle n'utilise pas d'emplacement d'arme." },
        { id: "trait_backstab", name: "Backstab", desc: "Cette arme gagne +1 en force si l'adversaire est engagé avec plus d'un ennemi." },
        { id: "trait_belier", name: "Bélier", desc: "Une arme avec ce trait ne peut être utilisée que lors d'une charge." },
        { id: "trait_bouclier", name: "Bouclier", desc: "Si la figurine est équipée avec au moins une arme ayant ce trait, elle augmente sa sauvegarde de 1 contre les tirs." },
        { id: "trait_breche", name: "Breche (X+)", desc: "Si le jet de blessure donne X ou +, il ne peut y avoir de jet d'armure." },
        { id: "trait_combi", name: "Combi", desc: "Quand on tire avec cette arme, le personnage peut choisir quel profil il utilise. Il peut aussi tirer avec les deux, mais avec une pénalité de -1 pour toucher." },
        { id: "trait_commotion", name: "Commotion (X+)", desc: "Si l'attaquant blesse son adversaire et que le jet de blessure est de X ou +, l'initiative de la cible baisse de 1 jusqu'à la fin de sa prochaine activation." },
        { id: "trait_dechiqueter", name: "Déchiqueter (X+)", desc: "Lors du jet de blessure avec cette arme, si le résultat est de X ou +, la léthalité de l'arme augmente de 1." },
        { id: "trait_dechirant", name: "Déchirant (X+)", desc: "Si le jet naturel d'une blessure avec cette arme est X ou plus, augmenter l'AP de 1." },
        { id: "trait_dommages", name: "Dommages (X)", desc: "Si un guerrier est blessé par cette arme, il perd X PV au lieu d'un. S'il faut faire un jet de dé de blessure, on ne lance que la léthalité de cette arme, quel que soit le nombre de PV perdu." },
        { id: "trait_encombrant", name: "Encombrant", desc: "Au corps à corps, les attaques avec cette arme se font avec une initiative de 1." },
        { id: "trait_explosion", name: "Explosion (3\"/5\")", desc: "Placer le gabarit correspondant sur la cible du tir. Si la touche rate, le gabarit se déplace de D6\" dans la direction indiquée par le dé de dispersion. Si le dé de dispersion indique un hit et le dé une valeur de 1, le tir est annulé." },
        { id: "trait_fiable", name: "Fiable", desc: "Une arme avec ce trait ignore le premier résultat à court de munitions obtenu à chaque round." },
        { id: "trait_flammes", name: "Flammes (X+)", desc: "Si le jet pour blesser donne X ou plus, on effectue une touche supplémentaire, même s'il n'y a pas de blessure. Faire un nouveau jet de blessure pour cette nouvelle touche." },
        { id: "trait_flash", name: "Flash", desc: "Si une cible est touchée par une arme avec flash, on ne jette pas de jet de blessure, mais d'initiative. S'il est raté, la figurine subit la condition aveugle (perd son token prêt)." },
        { id: "trait_fumee", name: "Fumée", desc: "Cette arme ne cible pas une figurine, mais un point sur le champ de bataille. Une colonne de fumée s'élève à cet endroit, bloquant les lignes de vue." },
        { id: "trait_gabarit", name: "Gabarit", desc: "Quand un tir est réalisé avec cette arme, placer le gabarit en larme. Toute figurine sous le gabarit est automatiquement touchée." },
        { id: "trait_gaz", name: "Gaz", desc: "Un guerrier ne peut faire de jet d'armure contre les armes ayant ce trait. Les guerriers équipés d'un respirateur ont une sauvegarde invulnérable de 5+ contre ces armes." },
        { id: "trait_graviton_pulse", name: "Graviton pulse", desc: "Au lieu de lancer un jet de blessure, la cible doit faire un test de force. S'il est raté, la figurine subit une blessure sans sauvegarde." },
        { id: "trait_independant", name: "Indépendant", desc: "Le porteur de cette arme ne peut pas tirer avec. À la place, elle tire en même temps que son porteur, en pouvant avoir une autre cible (touche toujours sur 4+)." },
        { id: "trait_instable", name: "Instable", desc: "Si le jet pour toucher avec cette arme donne 1, le guerrier maniant cette arme subit une touche automatique avec le profil de l'arme." },
        { id: "trait_jumelee", name: "Jumelée", desc: "Lors d'un tir avec cette arme, le dé de tir rapide peut être relancé." },
        { id: "trait_knockback", name: "Knockback (X+)", desc: "Si cette arme touche avec un résultat de X ou plus, la cible est repoussée de 1\", ce qui peut la faire tomber ou la désengager." },
        { id: "trait_lance", name: "Lance", desc: "Si le guerrier portant cette arme est monté, il ajoute +1 en force à ses attaques de charge." },
        { id: "trait_lance_bombe", name: "Lance-bombe", desc: "La première touche de la partie avec cette arme est résolue avec son profil primed, toutes les autres avec son profil utilisé." },
        { id: "trait_leger", name: "Léger", desc: "Cette arme peut être utilisée en tant qu'arme primaire ou secondaire au corps à corps, mais ne pourra faire qu'une seule attaque." },
        { id: "trait_limite", name: "Limité", desc: "Si cette arme tombe à court de munitions, elle ne peut plus être utilisée pour cette partie." },
        { id: "trait_lourd", name: "Lourd", desc: "Une arme avec ce trait ne peut tirer qu'en utilisant l'action braced shot. Une arme de corps à corps avec ce trait ne peut pas être utilisée en arme secondaire." },
        { id: "trait_maudit", name: "Maudit", desc: "Un guerrier touché par une arme maudite doit réussir un test de willpower ou subir la condition folie (insanity)." },
        { id: "trait_melee", name: "Melee", desc: "Cette arme ne peut être utilisée que quand on est engagé au corps à corps." },
        { id: "trait_munitions", name: "Munitions (X+)", desc: "Après le tir avec cette arme, lancer un D6. Si le résultat est inférieur à X, l'arme est à court de munitions." },
        { id: "trait_paire", name: "Paire (X)", desc: "Quand on attaque avec cette arme, on ajoute X attaques supplémentaires." },
        { id: "trait_parade", name: "Parade", desc: "Quand cette arme est utilisée au corps à corps, la sauvegarde augmente de 1." },
        { id: "trait_power_pack", name: "Power pack", desc: "Ne compte pas dans la limite d'armes portées (max 2 avec ce trait)." },
        { id: "trait_rad_phage", name: "Rad-phage", desc: "Quand un guerrier subit une blessure non sauvegardée d'une arme avec ce trait, il devient empoisonné aux radiations (-1 Endurance)." },
        { id: "trait_rare", name: "Rare (X+)", desc: "Lors de l'action de recharge, il faut lancer un D6 (réussi sur X+)." },
        { id: "trait_shock", name: "Shock (X+)", desc: "Lors du jet pour toucher, si le résultat est X+, on considère que le jet de blessure donne 6." },
        { id: "trait_temeraire", name: "Téméraire", desc: "Peut toucher toute figurine en ligne de vue dans les 6\", même amie, à déterminer aléatoirement." },
        { id: "trait_tir_rapide", name: "Tir rapide (X)", desc: "Ajoute le dé de tir rapide (nombre de touches potentielles et risque de court de munitions)." },
        { id: "trait_tir_unique", name: "Tir unique", desc: "Ne peut tirer qu'une fois par partie sans pouvoir être rechargée." },
        { id: "trait_toile", name: "Toile", desc: "Pas de sauvegarde d'armure (sauf invulnérable). La cible blessée gagne la condition entoilé." },
        { id: "trait_toxine", name: "Toxine (X+)", desc: "Lors du jet de blessure, on ignore l'endurance de la cible, blessée sur X+." }
    ],

    // ===== CARTES TACTIQUES (18) =====
    tactics: [
        { id: "tac_point_blank_shot", name: "Point-blank shot", timing: "Quand un guerrier s'active, avant ses actions", effect: "Une des armes du guerrier qui n'a pas les traits explosions ou template gagne le trait léger." },
        { id: "tac_hidden_stash", name: "Hidden stash", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pendant son activation, ce guerrier peut faire gratuitement une action de recharge." },
        { id: "tac_suppressing_fire", name: "Suppressing fire", timing: "Quand un guerrier tire", effect: "La cible est suppressed même si elle n'est pas touchée. Les compétences ne peuvent empêcher le suppressed." },
        { id: "tac_burst_of_courage", name: "Burst of courage", timing: "Avant de faire un bottle check", effect: "Le test est automatiquement réussi." },
        { id: "tac_adrenaline_surge", name: "Adrenaline surge", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire une action supplémentaire." },
        { id: "tac_desperate_effort", name: "Desperate effort", timing: "Juste avant de choisir quel guerrier va s'activer", effect: "Activer le guerrier comme s'il avait un marqueur prêt. À la fin de son activation, il est suppressed et subit une blessure qu'on ne peut sauvegarder ou empêcher." },
        { id: "tac_grenade_bouquet", name: "Grenade bouquet", timing: "Quand un guerrier tire avec une grenade ayant le trait explosion", effect: "Le guerrier résout 3 attaques ciblant le même ennemi. Elles dévient toutes et l'arme devient à court de munitions." },
        { id: "tac_quick_finish", name: "Quick finish", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire un coup de grâce en action gratuite." },
        { id: "tac_remorseless_killer", name: "Remorseless killer", timing: "Quand un guerrier fait un coup de grâce, avant de jeter les dés", effect: "L'ennemi est directement out of combat sans jet de dé." },
        { id: "tac_last_gap", name: "Last gap", timing: "Quand un guerrier reçoit l'état out of action", effect: "Le guerrier peut immédiatement faire un tir avant d'être retiré du terrain." },
        { id: "tac_thundering_charge", name: "Thundering charge", timing: "Quand un guerrier déclare une charge, avant de jeter le dé de distance", effect: "Lancer 2 dés et choisir lequel garder pour la distance de charge." },
        { id: "tac_chain_attack", name: "Chain attack", timing: "Quand un guerrier a résolu un combat et n'est plus engagé", effect: "Le guerrier peut immédiatement effectuer une charge gratuite même s'il a déjà charged ce tour. La distance de charge sera de D6+2\"." },
        { id: "tac_opening_volley", name: "Opening volley", timing: "Avant le premier round et le jet de priorité", effect: "Un guerrier peut immédiatement effectuer un tir sans perdre son état prêt." },
        { id: "tac_you", name: "You !", timing: "Quand un guerrier s'active, avant ses actions", effect: "Désigner un guerrier ennemi, le guerrier aura +1 pour blesser cet ennemi pour toute la partie. Tant que l'ennemi est sur la table, le guerrier ne peut prendre que lui pour cible de ses actions." },
        { id: "tac_rapid_healing", name: "Rapid healing", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier récupère immédiatement 1 PV perdu." },
        { id: "tac_reckless_attack", name: "Reckless attack", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pour son activation, le guerrier a +1 à sa WS. Jusqu'à sa prochaine activation, il sera touché sur un 2+ au corps à corps." },
        { id: "tac_rapid_fire", name: "Rapid fire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Durant son activation, ce guerrier peut faire une action de tir gratuitement (pas une en plus)." },
        { id: "tac_crossfire", name: "Crossfire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Si ce guerrier fait une attaque de tir sur un ennemi qui a déjà été pris pour cible par un allié à ce round, le tir touche automatiquement." }
    ],

    // ===== CARTES TACTIQUES ESCHER (6) =====
    // Pool propre à la maison Escher, distinct des cartes génériques ci-dessus.
    // Placeholder en attendant la liste des 6 cartes (à intégrer telles quelles,
    // même structure que db.tactics : id/name/timing/effect).
    tactics_escher: [
        { id: "tac_escher_thrill_hunt", name: "Thrill of the hunt", timing: "Après qu'un ennemi ait été mis hors de combat", effect: "Le guerrier ayant éliminé l'adversaire peut faire un mouvement, même s'il en avait déjà fait un." },
        { id: "tac_escher_long_leash", name: "Long leash", timing: "Au début du premier round, avant le jet de priorité", effect: "Sélectionner un familier et augmenter son leash de 6\" pour toute la partie." },
        { id: "tac_escher_chem_queen", name: "Chem queen", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pour toute la partie, le guerrier est équipé d'une dose de stimm." },
        { id: "tac_escher_blade_shield", name: "Blade shield", timing: "Quand un guerrier équipé d'une arme avec parade est attaqué au corps à corps", effect: "Le guerrier ne peut pas faire d'attaque mais gagne une sauvegarde invulnérable de 4+." },
        { id: "tac_escher_toxic_blood", name: "Toxic blood", timing: "Quand un allié est mis hors de combat", effect: "Centrer le gabarit de 3\" sur le guerrier. Toute figurine touchée subit une attaque avec S -, AP -1, L1, toxine (3+)." },
        { id: "tac_escher_three_point_landing", name: "Three-point landing", timing: "Quand un allié tombe", effect: "Le guerrier ne subit aucun dommage et n'est pas suppressed." }
    ],

    // ===== TERRITOIRES (19) =====
    territories: [
        { id: "ter_settlement", name: "Settlement", income: 15, optionType: "discount_ganger", optionText: "Option : Recruter un ganger (-25 cr sur coût)", desc: "Revenu : 15 cr OU recruter un ganger pour 25 cr de moins." },
        { id: "ter_bullet_den", name: "Bullet den", income: 15, optionType: "discount_ammojack", optionText: "Option : Recruter un Ammo-jack (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Ammo-jack pour 30 cr de moins." },
        { id: "ter_rogue_doc_shop", name: "Rogue doc shop", income: 15, optionType: "discount_doc", optionText: "Option : Recruter un Rogue doc (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Rogue doc pour 30 cr de moins." },
        { id: "ter_mess_shack", name: "Mess Shack", income: 15, optionType: "discount_slopper", optionText: "Option : Recruter un Slopper (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Slopper pour 30 cr de moins." },
        { id: "ter_drinking_hole", name: "Drinking hole", income: 15, optionType: "discount_watcher", optionText: "Option : Recruter un Hive watcher (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Hive watcher pour 30 cr de moins." },
        { id: "ter_fence_hangout", name: "Fence hangout", income: 15, optionType: "discount_runner", optionText: "Option : Recruter un Dome runner (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Dome runner pour 30 cr de moins." },
        { id: "ter_bounty_den", name: "Bounty den", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_generatorium", name: "Generatorium", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_corpse_farm", name: "Corpse farm", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_tunnels", name: "Tunnels", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_tech_bazaar", name: "Tech bazaar", income: 15, passive: "+1 TP", desc: "Revenu : 15 cr. Passif : +1 TP au Trading Post." },
        { id: "ter_promethium_cache", name: "Promethium cache", income: 15, optionType: "items_suits", optionText: "Option : 3 Combinaisons de protection gratos", desc: "Revenu : 15 cr OU récupérer gratuitement 3 combinaisons de protection dans le Stash." },
        { id: "ter_collapsed_dome", name: "Collapsed dome", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_bone_shrine", name: "Bone shrine", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_mine_workings", name: "Mine workings", income: 20, optionType: "items_respirators", optionText: "Option : 2 Respirateurs gratos", desc: "Revenu : 20 cr OU récupérer gratuitement 2 respirateurs dans le Stash." },
        { id: "ter_gambling_den", name: "Gambling den", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_synth_still", name: "Synth still", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_old_ruins", name: "Old ruins", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_fighting_pit", name: "Fighting pit", income: 25, desc: "Revenu : 25 crédits." }
    ],

    // ===== CONDITIONS =====
    conditions: {
        "Fearsome": "Lorsqu'il est pris pour cible d'une attaque de corps à corps, l'attaquant fait un jet de Wil. En cas d'échec, sa WS passe à 6+. Les guerriers fearsome ne sont pas affectés, sauf si la cible est terrifying.",
        "Frénésie": "Le guerrier doit déclarer une charge s'il commence son activation à son M + 6\" d'un ennemi. Il devra charger l'ennemi le plus proche. Ils gagnent +1A.",
        "Haine": "Quand le guerrier engage, charge ou est la cible de ces actions par une figurine haïe, il peut relancer les jets pour toucher ratés.",
        "Blessé": "Le guerrier perd toutes ses compétences jusqu'à ce qu'il récupère un point de vie.",
        "Intoxiqué": "Le guerrier baisse de 1 ses WS et BS, mais augmente son cool de 1.",
        "Terrifying": "A les mêmes avantages qu'un guerrier fearsome. De plus, pour charger ou engager ce guerrier, il faut réussir un test Will. En cas d'échec, l'attaquant reste sur place.",
        "Entoilé": "Le guerrier ne peut plus se déplacer, ni être déplacé et il subit un -1 à tous ses jets pour toucher. À la fin de son activation, un test de force réussi le libère.",
        "Folie": "Quand un guerrier atteint de folie s'active, jeter un dé sur le tableau de folie pour voir comment il va agir. À la fin de son activation, un jet de Will réussi annule la condition folie."
    }
};

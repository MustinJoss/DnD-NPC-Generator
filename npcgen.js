// function to generate random number for use in other functions
function getRandom(){
    var randomNum = Math.floor(Math.random)
    return randomNum
}

// change npc race
function changeRace(){
}

// change npc name: switch
function getName(){
    var nameVal = document.getElementById("npcName");
    switch(raceList.value){
        case "1": // dwarf name
            if(sexList.value=="1"){
                var mNameDwarf = ["Adrik", "Alberich", "Baern", "Barendd", "Brottoe", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"];
                var rand1 = mNameDwarf[Math.floor(Math.random() * mNameDwarf.length)];
            }else{
                var fNameDwarf = ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hiln", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"];
                var rand1 = fNameDwarf[Math.floor(Math.random() * fNameDwarf.length)];
            }
            var surNameDwarf = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"]; 
            var rand2 = surNameDwarf[Math.floor(Math.random() * surNameDwarf.length)];
            break
        case "2": // elf name
            if(sexList.value=="1"){
                var mNameElf = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"];
                var rand1 = mNameElf[Math.floor(Math.random() * mNameElf.length)];
            }else{
                var fNameElf = ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"];
                var rand1 = fNameElf[Math.floor(Math.random() * fNameElf.length)];
            }
            var surNameElf = ["Diamonddew", "Gemblossom", "Gemflower", "Glimmerleaf", "Goldpetal", "Oakenheel", "Moonbrook", "Moonwhisper", "Nightbreeze", "Silverfrond", "Starflower"];
            var rand2 = surNameElf[Math.floor(Math.random() * surNameElf.length)];
            break
        case "3": // halfling name
            if(sexList.value=="1"){
                var mNameHalfling = ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"];
                var rand1 = mNameHalfling[Math.floor(Math.random() * mNameHalfling.length)];
            }else{
                var fNameHalfling = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Livinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"];
                var rand1 = fNameHalfling[Math.floor(Math.random() * fNameHalfling.length)];
            }
            var surNameHalfling = ["Brushgather", "Goodbarrel", "Greenbottle", "Highhill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];
            var rand2 = surNameHalfling[Math.floor(Math.random() * surNameHalfling.length)];
            break
        case "4": // human name
            if(sexList.value=="1"){
                var mNameHuman = ["Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"];
                var rand1 = mNameHuman[Math.floor(Math.random() * mNameHuman.length)];
            }else{
                var fNameHuman = ["Alethra", "Kara", "Katerin", "Mara", "Natali", "Olma", "Tana", "Zora"];
                var rand1 = fNameHuman[Math.floor(Math.random() * fNameHuman.length)];
            }
            var surNameHuman = ["Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag"];
            var rand2 = surNameHuman[Math.floor(Math.random() * surNameHuman.length)];
            break
    }
    // combine first name and surname
    nameVal.innerHTML = rand1 + " " + rand2;
}

// generate alignment
function getAlignment(){
    var alignment = ["Lawful Good", "Netural Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
    var alignmentVal = document.getElementById("npcAlignment");
    alignmentVal.innerHTML = alignment[Math.floor(Math.random() * alignment.length)];
}

// generate appearance
function getAppearance(){
    var appearance = ["distinctive jewelry", "piercings", "flamboyant clothes", "formal, clean clothes", "ragged, dirty clothes", "pronunced scar", "missing teeth", "missing fingers", "unusual eye color", "tattoos", "birthmark", "unusual skin color", "bald", "braided beard or hair", "unusual hair color", "nervous eye twitch", "distinctive nose", "crooked posture", "exceptionally beautiful", "exceptionally ugly"];
    var appearanceVal = document.getElementById("npcAppearance");
    appearanceVal.innerHTML = appearance[Math.floor(Math.random() * appearance.length)];
}

// generate abilities
function getAbilities(){
    var abilities = ["strong, brawny (high STR)", "agile, graceful (high DEX)", "hardy, healthy (high CON)", "studious, inquisitive (high INT)", "perceptive, insightful (high WIS)", "charming, persuasive (high CHA)", "feeble, scrawny (low STR)", "clumsy, fumbling (low DEX)", "sickly, pale (low CON)", "dim-witted, slow (low INT)", "oblivious, absent-minded (low WIS)", "dull, boring (low CHA)"];
    var abilitiesVal = document.getElementById("npcAbilities");
    abilitiesVal.innerHTML = abilities[Math.floor(Math.random() * abilities.length)];
}

// generate talent
function getTalent(){
    var talent = ["plays a musical instrument", "speaks several languages", "unbelievably lucky", "perfect memory", "great with animals", "great with children", "great at solving puzzles", "great at games of chance", "great at impressions", "draws beautifully", "paints beautifully", "paints beautifully", "sings beautifully", "drinks everyone under the tabble", "expert carpenter", "expert cook", "expert dart thrower and rock skipper", "expert juggler", "skilled actor and master of disguise", "skilled dancer", "knows thieves' cant"];
    var talentVal = document.getElementById("npcTalent");
    talentVal.innerHTML = talent[Math.floor(Math.random() * talent.length)];
}

// generate mannerisms
function getMannerisms(){
    var mannerisms = ["prone to singing, whistling, or humming", "speaks in rhyme or other strange fashion", "particularly low or high voice", "slurs words, lisps, or stutters", "enunciates overly clearly", "speaks loudly", "whispers", "uses flowery speech or long words", "frequently uses the wrong word", "uses colorful oaths and exclamations", "makes constant jokes or puns", "prone to predictions of doom", "constantly fidgets", "squints", "stares into the distance while speaking", "chews on something constantly", "paces while speaking", "taps fingers", "bites fingernails", "twirls hair or tugs beard"];
    var mannerismsVal = document.getElementById("npcMannerisms");
    mannerismsVal.innerHTML = mannerisms[Math.floor(Math.random() * mannerisms.length)];
}

// generate disposition
function getDisposition(){
    var disposition = ["argumentative", "arrogant", "blustering", "rude", "curious", "friendly", "honest", "hot tempered", "irritable", "ponderous", "quiet", "suspicious"];
    var dispositionVal = document.getElementById("npcDisposition");
    dispositionVal.innerHTML = disposition[Math.floor(Math.random() * disposition.length)];
}

// generate ideals
function getIdeals(){
    var ideals = ["beauty", "charity", "greater good", "life", "respect", "self-sacrifice", "community", "fairness", "honor", "logic", "responsibility", "tradition", "balance", "knowledge", "live and let live", "moderation", "neutrality", "people", "change", "creativity", "freedom", "independence", "no limits", "whimsy", "aspiration", "discovery", "glory", "nation", "redemption", "self-knowledge"];
    var idealsVal = document.getElementById("npcIdeals");
    idealsVal.innerHTML = ideals[Math.floor(Math.random() * ideals.length)];
}

// generate bond
function getBond(){
    var bond = ["dedicated to fufilling a personal life goal", "protective of close family members", "protective of colleagues or compatriots", "loyal to a benefactor, patron, or employer", "captivated by a romantic interest", "drawn to a special place", "protective of a sentimental keepsake", "protective of a valuable possession", "out for revenge"];
    var bondVal = document.getElementById("npcBond");
    bondVal.innerHTML = bond[Math.floor(Math.random() * bond.length)];
}

// generate flaw
function getFlaw(){
    var flaw = ["forbidden love or susceptibility to romance", "enjoys decadent pleasures", "arrogance", "envies another creature's position or station", "overpowering greed", "prone to rage", "has a powerful enemy", "has a specific phobia", "shameful or scandalous history", "secret crime or misdeed", "possession of forbidden lore", "foolhardy bravery"];
    var flawVal = document.getElementById("npcFlaw");
    flawVal.innerHTML = flaw[Math.floor(Math.random() * flaw.length)];
}

// generate plot hook
function getPlotHook(){
    var plotHook = ["currently being chased by bandits, and enlists the PCs help", "possessed by a demon, and can only control themself at night", "requires the PCs to deliver an important item"];
    var plotHookVal = document.getElementById("plotHook");
    plotHookVal.innerHTML = plotHook[Math.floor(Math.random() * plotHook.length)];
}

// master function to generate new NPC
function genNPC(){
    getName();
    //getAlignment();
    getAppearance();
    getAbilities();
    getTalent();
    getMannerisms();
    getDisposition();
    getIdeals();
    getBond();
    getFlaw();
    getPlotHook();
}
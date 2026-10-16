// HypnoLingo : bibliothèque embarquée (fonctionne hors ligne)
// Chaque ligne d'une langue : mot | romanisation (alphabets non latins) | prononciation à la française | astuce

const LANGS = [
    { code: 'en', name: 'Anglais', flag: '🇬🇧', voice: 'en-GB' },
    { code: 'es', name: 'Espagnol', flag: '🇪🇸', voice: 'es-ES' },
    { code: 'zh', name: 'Chinois', flag: '🇨🇳', voice: 'zh-CN' },
    { code: 'ja', name: 'Japonais', flag: '🇯🇵', voice: 'ja-JP' },
    { code: 'ko', name: 'Coréen', flag: '🇰🇷', voice: 'ko-KR' },
    { code: 'ru', name: 'Russe', flag: '🇷🇺', voice: 'ru-RU' },
    { code: 'ar', name: 'Arabe', flag: '🇸🇦', voice: 'ar-SA', rtl: true },
    { code: 'no', name: 'Norvégien', flag: '🇳🇴', voice: 'nb-NO' }
];

const THEMES = [
    { id: 'salut', title: 'Salutations et politesse', icon: '👋',
      fr: ['bonjour', 'au revoir', 'merci', "s'il te plaît", 'pardon', 'oui', 'non', 'bonne nuit', "l'ami", 'comment ça va ?'],
      img: ['👋', '🚶', '🙏', '🤲', '😅', '✅', '❌', '🌙', '🤝', '🙂'] },
    { id: 'resto', title: 'Restaurant et cuisine', icon: '🍽️',
      fr: ["l'addition", "l'eau", 'le café', 'le pain', 'la fourchette', 'le couteau', 'le verre', 'le vin', 'le gâteau', "l'assiette"],
      img: ['svg:bill', 'svg:water', 'svg:coffee', 'svg:bread', 'svg:fork', 'svg:knife', 'svg:glass', 'svg:wine', 'svg:cake', 'svg:plate'] },
    { id: 'voyage', title: 'Voyage et aéroport', icon: '✈️',
      fr: ["l'avion", 'le passeport', 'la valise', 'le billet', 'la gare', 'le train', 'le taxi', 'la carte', 'la plage', "l'hôtel"],
      img: ['✈️', '🛂', '🧳', '🎫', '🚉', '🚆', '🚕', '🗺️', '🏖️', '🏨'] },
    { id: 'sante', title: 'Urgences et santé', icon: '🚑',
      fr: ['le médecin', "l'hôpital", 'la pharmacie', "à l'aide !", 'la police', "j'ai mal", 'la fièvre', "l'ambulance", 'le dentiste', 'malade'],
      img: ['🩺', '🏥', '💊', '🆘', '🚓', '🤕', '🤒', '🚑', '🦷', '🤢'] },
    { id: 'courses', title: 'Courses et magasins', icon: '🛒',
      fr: ["l'argent", 'le prix', 'le magasin', 'la pomme', 'le lait', 'le sac', 'la carte bancaire', 'le marché', "l'œuf", 'le fromage'],
      img: ['💶', '🏷️', '🏪', '🍎', '🥛', '🛍️', '💳', '🧺', '🥚', '🧀'] },
    { id: 'famille', title: 'Famille', icon: '👨‍👩‍👧',
      fr: ['la mère', 'le père', 'le frère', 'la sœur', "l'enfant", 'le bébé', 'la grand-mère', 'le grand-père', 'le mari', "l'épouse"],
      img: ['👩', '👨', '👦', '👧', '🧒', '👶', '👵', '👴', '🤵', '👰'] },
    { id: 'maison', title: 'Maison', icon: '🏠',
      fr: ['la maison', 'la porte', 'la fenêtre', 'le lit', 'la chaise', 'la clé', 'la cuisine', 'la salle de bain', 'la lampe', 'le canapé'],
      img: ['🏠', '🚪', '🪟', '🛏️', '🪑', '🔑', '🍳', '🛁', '💡', '🛋️'] },
    { id: 'travail', title: 'Travail et business', icon: '💼',
      fr: ['le travail', 'la réunion', "l'ordinateur", 'le téléphone', "l'e-mail", 'le contrat', 'le patron', 'le rendez-vous', 'le salaire', 'le bureau'],
      img: ['💼', '👥', '💻', '📱', '📧', '📄', '👔', '📅', '💰', '🏢'] },
    { id: 'meteo', title: 'Météo et saisons', icon: '🌦️',
      fr: ['le soleil', 'la pluie', 'la neige', 'le vent', 'chaud', 'froid', 'le nuage', "l'orage", "l'hiver", "l'été"],
      img: ['☀️', '🌧️', '❄️', '💨', '🥵', '🥶', '☁️', '⛈️', '⛄', '🌞'] },
    { id: 'nombres', title: 'Nombres de 1 à 10', icon: '🔢',
      fr: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'],
      img: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'] }
];

// Phrases d'exemple (anglais, restaurant)
const EXAMPLES = {
    'en:bill': ['Can I have the bill, please?', "L'addition, s'il vous plaît."],
    'en:water': ['A glass of water, please.', "Un verre d'eau, s'il vous plaît."],
    'en:coffee': ['Two coffees, please.', "Deux cafés, s'il vous plaît."],
    'en:bread': ['Could we have more bread?', 'Pourrions-nous avoir encore du pain ?'],
    'en:fork': ['I need a fork.', "J'ai besoin d'une fourchette."],
    'en:knife': ['This knife is very sharp.', 'Ce couteau coupe très bien.'],
    'en:glass': ['Can I have a clean glass?', 'Je peux avoir un verre propre ?'],
    'en:wine': ['A glass of red wine, please.', "Un verre de vin rouge, s'il vous plaît."],
    'en:cake': ['The chocolate cake is delicious.', 'Le gâteau au chocolat est délicieux.'],
    'en:plate': ['Be careful, the plate is hot.', "Attention, l'assiette est chaude."]
};

const RAW = {};

RAW.en = `
# salut
hello||hè-lo|Hello sonne comme « allô » : on dit bonjour au téléphone.
goodbye||goud-baï|Good + bye : un bon « bye-bye » pour partir.
thank you||thènk you|Thank sonne comme « tank » : merci, gros comme un tank !
please||pliiz|Please ressemble à « plaise » : s'il te plaît.
sorry||so-ri|Sorry, comme un « sourire » gêné pour s'excuser.
yes||yèss|Yes : le « oui » qu'on crie quand on gagne.
no||nô|No, c'est presque « non ».
good night||goud naït|Night ressemble à « nuit » : bonne nuit.
friend||frènnd|Friend, comme « frangin » : un ami proche.
how are you?||hao ar you|Imagine un ami qui te salue en criant « Hao ! » : comment vas-tu ?
# resto
bill||bil|Imagine un serveur qui s'appelle Bill : c'est toujours lui qui t'apporte l'addition.
water||ouô-teur|Les « water », ce sont les toilettes : l'endroit où coule l'eau.
coffee||ko-fi|Coffee, c'est « café » dit avec l'accent anglais.
bread||brèd|Bread rime avec « red » : imagine une baguette toute rouge qui sort du four.
fork||forc|Fork ressemble à « fourche » : une petite fourche pour manger.
knife||naïf|Le k ne se prononce pas : « naïf ». Ne sois pas naïf, un couteau, ça coupe !
glass||glass|Glass ressemble à « glace » : un verre transparent comme de la glace.
wine||ouaïne|Wine, c'est « vin » avec un w devant : « ouaïne ».
cake||kéïk|En français, un « cake » est déjà un gâteau. En anglais, c'est tous les gâteaux !
plate||pléït|Plate ressemble à « plat » : une assiette, c'est bien plat.
# voyage
plane||pléïn|Plane, comme « planer » : l'avion plane dans le ciel.
passport||pass-port|Le passeport pour passer la porte (port).
suitcase||sout-kéïs|Une caisse (case) pour tes costumes (suits) : la valise.
ticket||ti-kit|Comme en français : un ticket, un billet.
station||stéï-chenn|Une station… de train : la gare.
train||tréïn|Comme en français, avec l'accent.
taxi||tak-si|Le même mot partout dans le monde.
map||map|Map, comme « mappemonde » : une carte.
beach||biitch|Beach, avec un « i » bien long : la plage.
hotel||hô-tèl|Comme en français, accent sur « tel ».
# sante
doctor||dok-teur|Doctor, comme « docteur ».
hospital||hos-pi-teul|Hospital, comme « hôpital ».
pharmacy||far-ma-si|Pharmacy, comme « pharmacie ».
help!||hèlp|Help ! Le cri célèbre des Beatles : à l'aide !
police||po-liiss|Comme en français, accent sur « liiss ».
it hurts||it heurts|Hurts, comme « heurter » : ça fait mal quand on se heurte.
fever||fii-veur|Fever, comme « fièvre ».
ambulance||am-biou-lennss|Presque comme en français.
dentist||dèn-tist|Dentist, comme « dentiste ».
sick||sik|Sick sonne comme « sic » : malade, c'est triste.
# courses
money||ma-ni|Money, comme « monnaie ».
price||praïss|Price, comme « prix ».
shop||chop|Shop : on fait du shopping dans un magasin.
apple||a-peul|Apple, comme la marque à la pomme.
milk||milk|Milk, comme dans « milk-shake ».
bag||bag|Bag, comme « bagage » : le sac.
credit card||krè-dit kard|Card = carte : la carte de crédit.
market||mar-kit|Market, comme « marché » (supermarket).
egg||ègg|Imagine un œuf qui fait « ègg » en tombant.
cheese||tchiiz|« Say cheese ! » : on sourit pour la photo… avec du fromage.
# famille
mother||ma-zeur|Mother, comme « maternel ».
father||fa-zeur|Father, comme « paternel ».
brother||bra-zeur|Brother : le frère, « bro » !
sister||sis-teur|Sister : la sœur, « sis » !
child||tchaïld|Child : imagine un enfant qui crie « tchaï ! ».
baby||béï-bi|Comme en français : un bébé.
grandmother||grand-ma-zeur|Grand + mother : la grand-mère.
grandfather||grand-fa-zeur|Grand + father : le grand-père.
husband||hoz-bennd|Husband : le mari, lié (band) à sa femme.
wife||ouaïf|Wife sonne comme « Wi-Fi » : ma femme est toujours connectée.
# maison
house||haos|House, comme la musique house qu'on écoute à la maison.
door||door|Door sonne comme « dort » : la porte de la chambre où l'on dort.
window||ouinn-do|Window, comme Windows : les fenêtres de l'ordinateur.
bed||bèd|Bed, comme « bed and breakfast » : le lit.
chair||tchèr|Chair, comme « chaise ».
key||kii|Key sonne comme « qui » : qui a la clé ?
kitchen||kit-chenn|Kitchen : le « kit » de cuisine.
bathroom||baz-roum|Bath (bain) + room (pièce) : la salle de bain.
lamp||lamp|Lamp, comme « lampe ».
sofa||sô-fa|Comme en français : le canapé.
# travail
work||oueurk|Work, comme « workout » : du travail pour les muscles.
meeting||mii-ting|Comme en français : un meeting, une réunion.
computer||kom-piou-teur|Computer, celui qui « compute » (calcule) : l'ordinateur.
phone||fône|Phone, comme « téléphone ».
email||ii-méïl|Comme en français.
contract||konn-trakt|Contract, comme « contrat ».
boss||boss|Comme en français : le patron.
appointment||a-poïnt-ment|Un « point » fixé dans l'agenda : le rendez-vous.
salary||sa-la-ri|Salary, comme « salaire ».
office||o-fiss|Office, comme « office » : le bureau.
# meteo
sun||sann|Sun, comme Sunday : le jour du soleil.
rain||réïn|Rain sonne comme « reine » : la reine sous la pluie.
snow||snô|Snow, comme « snowboard » sur la neige.
wind||ouinnd|Wind, comme « windsurf » : le vent.
hot||hott|Hot, comme « hot-dog » : bien chaud !
cold||kôld|Cold sonne comme « col » : remonte ton col, il fait froid.
cloud||klaod|Cloud, comme le « cloud » informatique : dans les nuages.
storm||storm|Storm : la tempête, l'orage.
winter||ouinn-teur|Winter : le vent (wind) d'hiver.
summer||sa-meur|Summer sonne comme « sommeil » : la sieste d'été.
# nombres
one||ouann|One, comme le « one-man show » : un seul.
two||tou|Two sonne comme « tout » : deux.
three||thrii|Three : trois, avec la langue entre les dents.
four||foor|Four sonne comme « four » : quatre.
five||faïv|Five : tape-m'en cinq, « high five » !
six||siks|Comme en français, avec un « k ».
seven||sè-venn|Seven, comme « sept ».
eight||éït|Eight sonne comme « hait » : huit.
nine||naïnn|Nine sonne comme « naine » : neuf.
ten||tènn|Ten, comme « tennis » : dix.
`;

RAW.es = `
# salut
hola||o-la|Hola, comme « holà ! ».
adiós||a-diòss|Adiós : « à Dieu », au revoir.
gracias||gra-ciass|Gracias, comme « grâce » : merci.
por favor||por fa-bor|Por favor : « pour une faveur », s'il te plaît.
perdón||pèr-donn|Perdón, comme « pardon ».
sí||si|Sí, comme « si ! » en français.
no||no|Comme en français, presque.
buenas noches||bouè-nass no-tchèss|Noches, comme « nocturne » : bonne nuit.
amigo||a-mi-go|Amigo, comme « ami ».
¿qué tal?||ké tal|¿Qué tal? : « quel état ? », comment ça va ?
# resto
la cuenta||la kouènn-ta|La cuenta, comme « le compte » : l'addition.
el agua||èl a-goua|Agua, comme « aquarium » : l'eau.
el café||èl ka-fé|Comme en français.
el pan||èl pann|Pan, comme « pain ».
el tenedor||èl té-né-dor|Tenedor : celui qui « tient » la nourriture, la fourchette.
el cuchillo||èl kou-tchi-yo|Cuchillo, comme « couteau ».
el vaso||èl ba-sso|Vaso, comme « vase » : un verre.
el vino||èl bi-no|Vino, comme « vin ».
la tarta||la tar-ta|Tarta, comme « tarte » : le gâteau.
el plato||èl pla-to|Plato, comme « plat » : l'assiette.
# voyage
el avión||èl a-bi-onn|Avión, comme « avion ».
el pasaporte||èl pa-sa-por-té|Comme « passeport ».
la maleta||la ma-lé-ta|Maleta, comme « malle » : la valise.
el billete||èl bi-yé-té|Billete, comme « billet ».
la estación||la ès-ta-cionn|Estación, comme « station » : la gare.
el tren||èl trènn|Tren, comme « train ».
el taxi||èl tak-si|Comme en français.
el mapa||èl ma-pa|Mapa, comme « mappemonde » : la carte.
la playa||la pla-ya|Playa, comme « plage ».
el hotel||èl o-tèl|Le h ne se prononce pas : « otel ».
# sante
el médico||èl mé-di-ko|Médico, comme « médecin ».
el hospital||èl os-pi-tal|Comme « hôpital ».
la farmacia||la far-ma-cia|Comme « pharmacie ».
¡socorro!||so-ko-rro|Socorro, comme « secours » : à l'aide !
la policía||la po-li-ci-a|Comme « police ».
me duele||mé douè-lé|Duele, comme « douleur » : j'ai mal.
la fiebre||la fiè-bré|Fiebre, comme « fièvre ».
la ambulancia||la am-bou-lann-cia|Comme « ambulance ».
el dentista||èl dènn-tis-ta|Comme « dentiste ».
enfermo||ènn-fèr-mo|Enfermo : malade, comme « infirme » ou « infirmerie ».
# courses
el dinero||èl di-né-ro|Dinero, comme « denier », une ancienne pièce : l'argent.
el precio||èl pré-cio|Precio, comme « prix ».
la tienda||la tiènn-da|Tienda, comme une « tente » de marché : le magasin.
la manzana||la mann-ça-na|Imagine une pomme qui tourne sur un « manège ».
la leche||la lé-tché|Leche, comme « lécher » : on lèche le lait.
la bolsa||la bol-sa|Bolsa, comme « bourse » : un sac.
la tarjeta||la tar-rré-ta|Tarjeta, comme « étiquette » : la carte (bancaire).
el mercado||èl mèr-ka-do|Mercado, comme « marché ».
el huevo||èl ouè-bo|Imagine un œuf qui dit « ouè-bo ».
el queso||èl ké-sso|Queso : « qu'est-ce ? » Du fromage !
# famille
la madre||la ma-dré|Madre, comme « mère » (maternel).
el padre||èl pa-dré|Padre, comme « père » (paternel).
el hermano||èl èr-ma-no|Hermano, comme « germain » : le frère.
la hermana||la èr-ma-na|Même mot avec un a : la sœur.
el niño||èl ni-gno|Niño, comme le phénomène El Niño, « l'enfant ».
el bebé||èl bé-bé|Comme « bébé ».
la abuela||la a-bouè-la|Abuela : imagine une grand-mère qui fait « bouh ! ».
el abuelo||èl a-bouè-lo|Même mot avec un o : le grand-père.
el marido||èl ma-ri-do|Marido, comme « mari ».
la esposa||la ès-po-sa|Esposa, comme « épouse ».
# maison
la casa||la ka-sa|Casa, comme « case » : la maison.
la puerta||la pouèr-ta|Puerta, comme « porte ».
la ventana||la bènn-ta-na|Ventana : par là entre le « vent », la fenêtre.
la cama||la ka-ma|Imagine un « camarade » endormi dans le lit.
la silla||la si-ya|Silla, comme « siège ».
la llave||la ya-bé|Imagine une clé qui « lave » la serrure.
la cocina||la ko-ci-na|Cocina, comme « cuisine ».
el baño||èl ba-gno|Baño, comme « bain ».
la lámpara||la lamm-pa-ra|Comme « lampe ».
el sofá||èl so-fa|Comme en français.
# travail
el trabajo||èl tra-ba-rro|Trabajo, comme « travail ».
la reunión||la ré-ou-nionn|Comme « réunion ».
el ordenador||èl or-dé-na-dor|Ordenador, comme « ordinateur ».
el teléfono||èl té-lé-fo-no|Comme « téléphone ».
el correo||èl ko-rré-o|Correo, comme « courrier » : l'e-mail.
el contrato||èl konn-tra-to|Comme « contrat ».
el jefe||èl rré-fé|Jefe, comme « chef » : le patron.
la cita||la ci-ta|Un rendez-vous « cité » dans l'agenda.
el sueldo||èl souèl-do|Sueldo, comme « solde » : la paie du soldat, le salaire.
la oficina||la o-fi-ci-na|Oficina, comme « office » : le bureau.
# meteo
el sol||èl sol|Sol, comme « solaire ».
la lluvia||la you-bia|Lluvia, comme « pluvieux ».
la nieve||la niè-bé|Nieve, comme « névé » : la neige.
el viento||èl biènn-to|Viento, comme « vent ».
calor||ka-lor|Calor, comme « calorie » : chaud.
frío||fri-o|Frío, comme « frigo » : froid.
la nube||la nou-bé|Nube, comme « nuage » (nébuleuse).
la tormenta||la tor-mènn-ta|Tormenta, comme « tourmente » : l'orage.
el invierno||èl inn-biè-rno|Invierno, comme « hivernal ».
el verano||èl bé-ra-no|Verano, comme « vernal », la belle saison : l'été.
# nombres
uno||ou-no|Uno, comme le jeu de cartes.
dos||doss|Dos : deux, comme le « dos » et ses deux épaules.
tres||trèss|Tres, comme « trois ».
cuatro||koua-tro|Cuatro, comme « quatre ».
cinco||cinn-ko|Cinco, comme « cinq ».
seis||sèïss|Seis ressemble à « seize »… mais c'est six.
siete||siè-té|Siete, comme « sept ».
ocho||o-tcho|Ocho, comme « octo » (octogone) : huit.
nueve||nouè-bé|Nueve, comme « neuf ».
diez||dièss|Diez, comme « dix ».
`;

RAW.zh = `
# salut
你好|nǐ hǎo|ni hao|Imagine un ami qui te salue en criant « Hao ! ».
再见|zàijiàn|dzaï-djiènn|Zài = encore, jiàn = voir : « à la revoyure ».
谢谢|xièxie|siè-siè|« Siè-siè » : merci pour la sieste !
请|qǐng|tching|Qǐng : « tching ! », comme un verre qu'on trinque poliment.
对不起|duìbuqǐ|doueï-bou-tchi|Littéralement « je ne suis pas à la hauteur » : pardon.
是|shì|cheu|Shì : « c'est ça », oui.
不|bù|bou|Bù : un « bouh ! » de refus, non.
晚安|wǎn'ān|ouann-ann|Wǎn = soir, ān = paix : bonne nuit.
朋友|péngyou|pèng-yo|Imagine ton ami qui fait « yo ! ».
你好吗？|nǐ hǎo ma?|ni hao ma|« Ni hao » + « ma » (question) : comment ça va ?
# resto
买单|mǎidān|maï-dann|Mǎi = acheter, dān = la note : l'addition.
水|shuǐ|choueï|L'eau qui fait « chouïï » en coulant.
咖啡|kāfēi|ka-féï|Kāfēi, comme « café ».
面包|miànbāo|miènn-bao|« Miam » + « bao » (brioche) : le pain.
叉子|chāzi|tcha-dzeu|Chā : une fourche qui pique, la fourchette.
刀|dāo|dao|Dāo : le couteau du cuisinier.
杯子|bēizi|beï-dzeu|Imagine un verre de « bière » (beï).
葡萄酒|pútaojiǔ|pou-tao-djio|Pútao = raisin, jiǔ = alcool : le vin.
蛋糕|dàngāo|dann-gao|Dàn = œuf, gāo = gâteau : un gâteau aux œufs.
盘子|pánzi|pann-dzeu|Pánzi, comme « panse » : l'assiette qu'on remplit.
# voyage
飞机|fēijī|féï-dji|Fēi = voler, jī = machine : l'avion.
护照|hùzhào|hou-djao|Hù = protéger : le passeport te protège.
行李箱|xínglixiāng|sing-li-siang|Xíngli = bagages, xiāng = boîte : la valise.
票|piào|piao|Imagine un « piaf » qui t'apporte ton billet.
火车站|huǒchēzhàn|houo-tcheu-djann|Huǒchē (train) + zhàn (station) : la gare.
火车|huǒchē|houo-tcheu|« Char de feu » : le train à vapeur.
出租车|chūzūchē|tchou-dzou-tcheu|Chūzū = louer, chē = voiture : le taxi.
地图|dìtú|di-tou|Dì = terre, tú = image : la carte.
海滩|hǎitān|haï-tann|Hǎi = mer, tān = rive : la plage.
酒店|jiǔdiàn|djio-diènn|Jiǔdiàn : l'hôtel.
# sante
医生|yīshēng|yi-cheng|Yī = soigner : le médecin.
医院|yīyuàn|yi-yuènn|Yī = soigner, yuàn = cour : l'hôpital.
药店|yàodiàn|yao-diènn|Yào = médicament, diàn = magasin : la pharmacie.
救命！|jiùmìng!|djio-ming|« Sauvez ma vie ! » : à l'aide !
警察|jǐngchá|djing-tcha|« Djing ! » comme la sirène : la police.
我疼|wǒ téng|ouo teng|Téng : « tèng ! » comme un coup, ça fait mal.
发烧|fāshāo|fa-chao|Shāo sonne comme « chaud » : la fièvre.
救护车|jiùhùchē|djio-hou-tcheu|Jiù = sauver, chē = voiture : l'ambulance.
牙医|yáyī|ya-yi|Yá = dent, yī = médecin : le dentiste.
生病|shēngbìng|cheng-bing|« Bing ! » au lit : tomber malade.
# courses
钱|qián|tchiènn|Une pièce qui tinte « tchiènn » : l'argent.
价格|jiàgé|djia-gueu|Jiàgé : le prix.
商店|shāngdiàn|chang-diènn|Shāng = commerce, diàn = magasin : la boutique.
苹果|píngguǒ|ping-guo|Un fruit rond comme une balle de « ping-pong » : la pomme.
牛奶|niúnǎi|niou-naï|Niú = vache, nǎi = lait : le lait de vache.
袋子|dàizi|daï-dzeu|Dàizi : le sac.
银行卡|yínhángkǎ|yinn-hang-ka|Yínháng = banque, kǎ = carte : la carte bancaire.
市场|shìchǎng|cheu-tchang|Shìchǎng : le marché.
鸡蛋|jīdàn|dji-dann|Jī = poule, dàn = œuf : l'œuf.
奶酪|nǎilào|naï-lao|Nǎi = lait : le fromage, fait de lait.
# famille
妈妈|māma|ma-ma|Comme « maman ».
爸爸|bàba|ba-ba|Comme « papa ».
哥哥|gēge|gueu-gueu|Gēge : le grand frère.
姐姐|jiějie|djiè-djiè|Jiějie : la grande sœur.
孩子|háizi|haï-dzeu|Háizi : l'enfant.
宝宝|bǎobao|bao-bao|« Petit trésor » : le bébé.
奶奶|nǎinai|naï-naï|Nǎinai : la grand-mère (côté du père).
爷爷|yéye|yé-yé|« Yé-yé », la musique de sa jeunesse : le grand-père.
丈夫|zhàngfu|djang-fou|Zhàngfu : le mari.
妻子|qīzi|tchi-dzeu|Qīzi : l'épouse.
# maison
房子|fángzi|fang-dzeu|Fángzi : la maison.
门|mén|meunn|Le caractère 门 ressemble à une porte de saloon.
窗户|chuānghu|tchouang-hou|Chuānghu : la fenêtre.
床|chuáng|tchouang|« Tchouang ! » on se jette sur le lit.
椅子|yǐzi|yi-dzeu|Yǐzi : la chaise.
钥匙|yàoshi|yao-cheu|Yàoshi : la clé.
厨房|chúfáng|tchou-fang|Chú = cuisiner, fáng = pièce : la cuisine.
浴室|yùshì|yu-cheu|Yù = bain, shì = pièce : la salle de bain.
灯|dēng|deng|« Ding ! » ça s'allume : la lampe.
沙发|shāfā|cha-fa|Shāfā, comme « sofa ».
# travail
工作|gōngzuò|gong-dzouo|« Gong ! » la journée de travail commence.
会议|huìyì|houeï-yi|Huìyì : la réunion.
电脑|diànnǎo|diènn-nao|Diàn = électrique, nǎo = cerveau : l'ordinateur.
电话|diànhuà|diènn-houa|Diàn = électrique, huà = parole : le téléphone.
电子邮件|diànzǐ yóujiàn|diènn-dzeu yo-djiènn|Courrier électronique : l'e-mail.
合同|hétong|heu-tong|Hétong : le contrat.
老板|lǎobǎn|lao-bann|Lǎobǎn : le patron.
约会|yuēhuì|yuè-houeï|Yuēhuì : le rendez-vous.
工资|gōngzī|gong-dzeu|Gōng (travail) + zī : le salaire.
办公室|bàngōngshì|bann-gong-cheu|Bàngōng = travailler au bureau, shì = pièce : le bureau.
# meteo
太阳|tàiyáng|taï-yang|Le grand « yang » : le soleil.
雨|yǔ|yu|Le caractère 雨 montre des gouttes sous un toit : la pluie.
雪|xuě|suè|Xuě : la neige.
风|fēng|feng|Fēng, comme le « feng shui » (vent et eau).
热|rè|jeu|Rè : chaud.
冷|lěng|leng|Lěng : froid.
云|yún|yunn|Yún : le nuage.
雷雨|léiyǔ|leï-yu|Léi = tonnerre, yǔ = pluie : l'orage.
冬天|dōngtiān|dong-tiènn|Dōng = hiver, tiān = ciel : l'hiver.
夏天|xiàtiān|sia-tiènn|Xià = été, tiān = ciel : l'été.
# nombres
一|yī|yi|Un seul trait : 一.
二|èr|eur|Deux traits : 二.
三|sān|sann|Trois traits : 三.
四|sì|seu|Sì : quatre.
五|wǔ|ou|Wǔ : cinq.
六|liù|lio|Liù : six.
七|qī|tchi|Qī : sept.
八|bā|ba|Bā : huit, le chiffre porte-bonheur.
九|jiǔ|djio|Jiǔ : neuf.
十|shí|cheu|Une croix 十 : dix.
`;

RAW.ja = `
# salut
こんにちは|konnichiwa|kon-ni-tchi-wa|Le bonjour japonais de la journée.
さようなら|sayōnara|sa-yo-na-ra|« Ça y est, on rentre » : au revoir.
ありがとう|arigatō|a-ri-ga-to|Imagine qu'on t'offre un « gâteau » : merci !
おねがいします|onegaishimasu|o-né-gaï-chi-mass|Pour demander quelque chose : s'il vous plaît.
すみません|sumimasen|sou-mi-ma-sènn|Pardon, excusez-moi.
はい|hai|haï|Hai : oui ! (pas « je hais »).
いいえ|iie|i-ié|Iie : non.
おやすみなさい|oyasuminasai|o-ya-sou-mi-na-saï|Oyasumi : repose-toi, bonne nuit.
ともだち|tomodachi|to-mo-da-tchi|Tomodachi : l'ami.
おげんきですか？|ogenki desu ka?|o-guènn-ki dèss ka|Genki = en forme : tu vas bien ?
# resto
おかいけい|okaikei|o-kaï-kéï|Okaikei : l'addition.
みず|mizu|mi-dzou|Mizu : l'eau.
コーヒー|kōhī|kô-hii|Kōhī, comme « coffee ».
パン|pan|pann|Pan, comme « pain » (vient du portugais).
フォーク|fōku|fô-kou|Fōku, comme « fork ».
ナイフ|naifu|naï-fou|Naifu, comme « knife ».
コップ|koppu|kop-pou|Koppu, comme « coupe » : le verre.
ワイン|wain|ouaïnn|Wain, comme « wine ».
ケーキ|kēki|ké-ki|Kēki, comme « cake ».
おさら|osara|o-sa-ra|Osara : l'assiette.
# voyage
ひこうき|hikōki|hi-kô-ki|Hikōki : l'avion.
パスポート|pasupōto|pa-sou-pô-to|Comme « passport ».
スーツケース|sūtsukēsu|sou-tsou-ké-sou|Comme « suitcase ».
きっぷ|kippu|kip-pou|Kippu : le billet, garde-le (« keep ») !
えき|eki|é-ki|Eki : la gare.
でんしゃ|densha|dènn-cha|Densha : le train électrique.
タクシー|takushī|ta-kou-chii|Comme « taxi ».
ちず|chizu|tchi-dzou|Chizu : la carte.
ビーチ|bīchi|bii-tchi|Comme « beach ».
ホテル|hoteru|ho-té-rou|Comme « hôtel ».
# sante
いしゃ|isha|i-cha|Isha : le médecin.
びょういん|byōin|byô-inn|Byōin : l'hôpital.
やっきょく|yakkyoku|yak-kyo-kou|Yakkyoku : la pharmacie.
たすけて！|tasukete!|ta-sou-ké-té|Tasukete : à l'aide !
けいさつ|keisatsu|kéï-sa-tsou|Keisatsu : la police.
いたい|itai|i-taï|Itai : « aïe ! », ça fait mal.
ねつ|netsu|né-tsou|Netsu : la fièvre.
きゅうきゅうしゃ|kyūkyūsha|kyou-kyou-cha|« Kyou-kyou » comme la sirène : l'ambulance.
はいしゃ|haisha|haï-cha|Haisha : le dentiste.
びょうき|byōki|byô-ki|Byōki : malade.
# courses
おかね|okane|o-ka-né|Okane : l'argent.
ねだん|nedan|né-dann|Nedan : le prix.
みせ|mise|mi-sé|Mise : le magasin, où l'on « mise » son argent.
りんご|ringo|rinn-go|Ringo, comme Ringo Starr : la pomme.
ぎゅうにゅう|gyūnyū|gyou-nyou|Gyūnyū : le lait de vache.
ふくろ|fukuro|fou-kou-ro|Fukuro : le sac.
クレジットカード|kurejitto kādo|kou-ré-djit-to ka-do|Comme « credit card ».
いちば|ichiba|i-tchi-ba|Ichiba : le marché.
たまご|tamago|ta-ma-go|Tamago, comme les sushis à l'omelette : l'œuf.
チーズ|chīzu|tchii-dzou|Comme « cheese ».
# famille
おかあさん|okāsan|o-kaa-sann|Okāsan : la mère.
おとうさん|otōsan|o-too-sann|Otōsan : le père.
おにいさん|onīsan|o-nii-sann|Onīsan : le grand frère.
おねえさん|onēsan|o-néé-sann|Onēsan : la grande sœur.
こども|kodomo|ko-do-mo|Kodomo : l'enfant.
あかちゃん|akachan|a-ka-tchann|« Petit rouge » : le bébé.
おばあさん|obāsan|o-baa-sann|Obāsan : la grand-mère.
おじいさん|ojīsan|o-djii-sann|Ojīsan : le grand-père.
おっと|otto|ot-to|Otto : le mari.
つま|tsuma|tsou-ma|Tsuma : l'épouse.
# maison
いえ|ie|i-é|Ie : la maison.
ドア|doa|do-a|Comme « door ».
まど|mado|ma-do|Mado : la fenêtre.
ベッド|beddo|bèd-do|Comme « bed ».
いす|isu|i-sou|Isu : la chaise.
かぎ|kagi|ka-gui|Kagi : la clé.
だいどころ|daidokoro|daï-do-ko-ro|Daidokoro : la cuisine.
おふろ|ofuro|o-fou-ro|Ofuro : le bain japonais.
でんき|denki|dènn-ki|Denki : la lumière électrique, la lampe.
ソファ|sofa|so-fa|Comme « sofa ».
# travail
しごと|shigoto|chi-go-to|Shigoto : le travail.
かいぎ|kaigi|kaï-gui|Kaigi : la réunion.
パソコン|pasokon|pa-so-konn|« Personal computer » raccourci : l'ordinateur.
でんわ|denwa|dènn-wa|Denwa : le téléphone.
メール|mēru|mé-rou|Comme « mail ».
けいやく|keiyaku|kéï-ya-kou|Keiyaku : le contrat.
しゃちょう|shachō|cha-tchô|Shachō : le patron.
よやく|yoyaku|yo-ya-kou|Yoyaku : la réservation, le rendez-vous.
きゅうりょう|kyūryō|kyou-ryô|Kyūryō : le salaire.
オフィス|ofisu|o-fi-sou|Comme « office ».
# meteo
たいよう|taiyō|taï-yô|Taiyō : le soleil.
あめ|ame|a-mé|Ame sonne comme « âme » : une âme qui pleure, la pluie.
ゆき|yuki|you-ki|Yuki : la neige.
かぜ|kaze|ka-dzé|Kaze : le vent.
あつい|atsui|a-tsouï|Atsui : chaud.
さむい|samui|sa-mouï|Imagine un samouraï qui grelotte : froid.
くも|kumo|kou-mo|Kumo : le nuage.
かみなり|kaminari|ka-mi-na-ri|Kaminari : le tonnerre, l'orage.
ふゆ|fuyu|fou-you|Fuyu : l'hiver.
なつ|natsu|na-tsou|Natsu : l'été.
# nombres
いち|ichi|i-tchi|Ichi : un.
に|ni|ni|Ni : deux.
さん|san|sann|San : trois.
よん|yon|yonn|Yon : quatre.
ご|go|go|Go : cinq.
ろく|roku|ro-kou|Roku : six.
なな|nana|na-na|Nana : sept.
はち|hachi|ha-tchi|Hachi : huit.
きゅう|kyū|kyou|Kyū : neuf.
じゅう|jū|djou|Jū : dix.
`;

RAW.ko = `
# salut
안녕하세요|annyeonghaseyo|ann-nyong-ha-sé-yo|Le bonjour poli coréen.
안녕히 가세요|annyeonghi gaseyo|ann-nyong-hi ga-sé-yo|« Va en paix » : au revoir.
감사합니다|gamsahamnida|kam-sa-ham-ni-da|Gamsahamnida : merci.
주세요|juseyo|djou-sé-yo|« Donnez-moi, s'il vous plaît. »
죄송합니다|joesonghamnida|djwé-song-ham-ni-da|Joesonghamnida : pardon.
네|ne|né|Ne veut dire oui… même si ça sonne comme « non » !
아니요|aniyo|a-ni-yo|Aniyo : non.
안녕히 주무세요|annyeonghi jumuseyo|ann-nyong-hi djou-mou-sé-yo|« Dors en paix » : bonne nuit.
친구|chingu|tchinn-gou|On trinque « tchin ! » entre amis.
잘 지내요?|jal jinaeyo?|djal dji-nè-yo|Jal = bien : tu vas bien ?
# resto
계산서|gyesanseo|kyé-sann-so|Gyesanseo : le calcul, l'addition.
물|mul|moul|Mul, comme « mouiller » : l'eau.
커피|keopi|ko-pi|Comme « coffee ».
빵|ppang|ppang|« Pan ! » : le pain.
포크|pokeu|po-keu|Comme « fork ».
칼|kal|kal|Kal : le couteau.
잔|jan|djann|Jan : le verre.
와인|wain|ouaïnn|Comme « wine ».
케이크|keikeu|ké-i-keu|Comme « cake ».
접시|jeopsi|djop-chi|Jeopsi : l'assiette.
# voyage
비행기|bihaenggi|bi-hèng-gi|Bihaenggi : l'avion.
여권|yeogwon|yo-gwonn|Yeogwon : le passeport.
여행 가방|yeohaeng gabang|yo-hèng ka-bang|Sac (gabang) de voyage (yeohaeng) : la valise.
표|pyo|pyo|Pyo : le billet.
역|yeok|yok|Yeok : la gare.
기차|gicha|gi-tcha|« Gi-tcha » comme la vapeur : le train.
택시|taeksi|tèk-chi|Comme « taxi ».
지도|jido|dji-do|Jido : la carte.
해변|haebyeon|hè-byonn|Haebyeon : la plage.
호텔|hotel|ho-tèl|Comme « hôtel ».
# sante
의사|uisa|eui-sa|Uisa : le médecin.
병원|byeongwon|byong-wonn|Byeongwon : l'hôpital.
약국|yakguk|yak-kouk|Yak = médicament : la pharmacie.
도와주세요!|dowajuseyo!|do-wa-djou-sé-yo|Aidez-moi, s'il vous plaît !
경찰|gyeongchal|kyong-tchal|Gyeongchal : la police.
아파요|apayo|a-pa-yo|Apayo : « aïe », j'ai mal.
열|yeol|yol|Yeol : la fièvre.
구급차|gugeupcha|kou-geup-tcha|Gugeupcha : l'ambulance.
치과|chigwa|tchi-kwa|Chigwa : le dentiste.
아픈|apeun|a-peunn|Apeun : malade, de la même famille que apayo.
# courses
돈|don|donn|Don : l'argent… un vrai « don » !
가격|gagyeok|ka-gyok|Gagyeok : le prix.
가게|gage|ka-gué|Gage : le magasin.
사과|sagwa|sa-gwa|Sagwa : la pomme.
우유|uyu|ou-you|Uyu : le lait.
가방|gabang|ka-bang|Gabang : le sac.
카드|kadeu|ka-deu|Comme « card ».
시장|sijang|chi-djang|Sijang : le marché.
계란|gyeran|kyé-rann|Gyeran : l'œuf.
치즈|chijeu|tchi-djeu|Comme « cheese ».
# famille
어머니|eomeoni|o-mo-ni|Eomeoni : la mère.
아버지|abeoji|a-bo-dji|Abeoji : le père.
형|hyeong|hyong|Hyeong : le grand frère (dit par un garçon).
누나|nuna|nou-na|Nuna : la grande sœur (dit par un garçon).
아이|ai|a-i|Ai : l'enfant.
아기|agi|a-gi|Agi : le bébé.
할머니|halmeoni|hal-mo-ni|Halmeoni : la grand-mère.
할아버지|harabeoji|ha-ra-bo-dji|Harabeoji : le grand-père.
남편|nampyeon|nam-pyonn|Nampyeon : le mari.
아내|anae|a-nè|Anae : l'épouse.
# maison
집|jip|djip|Jip : la maison.
문|mun|moun|Mun : la porte.
창문|changmun|tchang-moun|Chang + mun (porte) : la fenêtre.
침대|chimdae|tchim-dè|Chimdae : le lit.
의자|uija|eui-dja|Uija : la chaise.
열쇠|yeolsoe|yol-swé|Yeolsoe : la clé.
부엌|bueok|bou-ok|Bueok : la cuisine.
욕실|yoksil|yok-chil|Yoksil : la salle de bain.
전등|jeondeung|djonn-deung|Jeondeung : la lampe.
소파|sopa|so-pa|Comme « sofa ».
# travail
일|il|il|Il : le travail.
회의|hoeui|hwé-eui|Hoeui : la réunion.
컴퓨터|keompyuteo|kom-pyou-to|Comme « computer ».
전화|jeonhwa|djonn-hwa|Jeonhwa : le téléphone.
이메일|imeil|i-mé-il|Comme « e-mail ».
계약|gyeyak|kyé-yak|Gyeyak : le contrat.
사장|sajang|sa-djang|Sajang : le patron.
약속|yaksok|yak-sok|Yaksok : le rendez-vous, la promesse.
월급|wolgeup|wol-geup|Wolgeup : le salaire du mois.
사무실|samusil|sa-mou-chil|Samusil : le bureau.
# meteo
해|hae|hè|Hae : le soleil.
비|bi|bi|Bi : la pluie.
눈|nun|noun|Nun : la neige (et aussi l'œil !).
바람|baram|ba-ram|Baram : le vent.
더워요|deowoyo|do-wo-yo|Deowoyo : il fait chaud.
추워요|chuwoyo|tchou-wo-yo|Chuwoyo : il fait froid.
구름|gureum|kou-reum|Gureum : le nuage.
폭풍우|pokpungu|pok-poung-ou|Pokpungu : l'orage.
겨울|gyeoul|kyo-oul|Gyeoul : l'hiver.
여름|yeoreum|yo-reum|Yeoreum : l'été.
# nombres
일|il|il|Il : un.
이|i|i|I : deux.
삼|sam|sam|Sam : trois.
사|sa|sa|Sa : quatre.
오|o|o|O : cinq.
육|yuk|youk|Yuk : six.
칠|chil|tchil|Chil : sept.
팔|pal|pal|Pal : huit.
구|gu|kou|Gu : neuf.
십|sip|chip|Sip : dix.
`;

RAW.ru = `
# salut
здравствуйте|zdravstvuyte|zdras-tvouï-tié|« Zdras » : le bonjour poli.
до свидания|do svidaniya|da svi-da-ni-ya|« Jusqu'à la revoyure » : au revoir.
спасибо|spasibo|spa-si-ba|« Spa si beau ! » : merci.
пожалуйста|pozhaluysta|pa-jal-sta|S'il te plaît (et aussi « de rien »).
извините|izvinite|iz-vi-ni-tié|Pardon, excusez-moi.
да|da|da|Da : oui.
нет|net|niét|Niet : non, bien net.
спокойной ночи|spokoynoy nochi|spa-koï-naï no-tchi|Nochi, comme « nocturne » : bonne nuit.
друг|drug|drouk|Drug : l'ami.
как дела?|kak dela?|kak di-la|Comment vont les affaires ? Comment ça va ?
# resto
счёт|schyot|chiot|Le compte : l'addition.
вода|voda|va-da|Voda, comme « vodka » (« petite eau ») : l'eau.
кофе|kofe|ko-fié|Comme « café ».
хлеб|khleb|khlièp|Khleb : le pain.
вилка|vilka|vil-ka|Vilka : la fourchette.
нож|nozh|noch|Noj : le couteau.
стакан|stakan|sta-kann|Stakan : le verre.
вино|vino|vi-no|Comme « vin ».
торт|tort|tort|Tort, comme « tarte » : le gâteau.
тарелка|tarelka|ta-riél-ka|Tarelka : l'assiette.
# voyage
самолёт|samolyot|sa-ma-liot|« Qui vole tout seul » : l'avion.
паспорт|pasport|pas-part|Comme « passeport ».
чемодан|chemodan|tché-ma-dann|Tchémodane : la valise.
билет|bilet|bi-liét|Comme « billet ».
вокзал|vokzal|vak-zal|Vokzal, du nom de la gare de Vauxhall à Londres : la gare.
поезд|poezd|po-ïést|Poïezd : le train.
такси|taksi|tak-si|Comme « taxi ».
карта|karta|kar-ta|Comme « carte ».
пляж|plyazh|pliach|Pliaj, comme « plage ».
гостиница|gostinitsa|gas-ti-ni-tsa|La maison des « hôtes » : l'hôtel.
# sante
врач|vrach|vratch|Vratch : le médecin.
больница|bolnitsa|bal-ni-tsa|Bolnitsa : l'hôpital.
аптека|apteka|ap-tié-ka|Comme « apothicaire » : la pharmacie.
помогите!|pomogite!|pa-ma-gui-tié|Aidez-moi ! À l'aide !
полиция|politsiya|pa-li-tsi-ya|Comme « police ».
болит|bolit|ba-lit|Bolit : ça fait mal.
температура|temperatura|tièm-pi-ra-tou-ra|Comme « température » : la fièvre.
скорая помощь|skoraya pomoshch|sko-ra-ya po-mochtch|« Aide rapide » : l'ambulance.
стоматолог|stomatolog|sta-ma-to-lak|Comme « stomatologue » : le dentiste.
больной|bolnoy|bal-noï|Bolnoï : malade.
# courses
деньги|dengi|dièn-gui|Comme « deniers » : l'argent.
цена|tsena|tsé-na|Tsena : le prix.
магазин|magazin|ma-ga-zinn|Comme « magasin ».
яблоко|yabloko|ya-bla-ka|Yabloko : la pomme.
молоко|moloko|ma-la-ko|Moloko : le lait.
пакет|paket|pa-kiét|Comme « paquet » : le sac.
банковская карта|bankovskaya karta|bann-kaf-ska-ya kar-ta|Carte (karta) de banque : la carte bancaire.
рынок|rynok|ri-nak|Rynok : le marché.
яйцо|yaytso|yaï-tso|Yaïtso : l'œuf.
сыр|syr|sir|Syr : le fromage.
# famille
мама|mama|ma-ma|Comme « maman ».
папа|papa|pa-pa|Comme « papa ».
брат|brat|brat|Brat, comme « brother » : le frère.
сестра|sestra|siés-tra|Sestra, comme « sister » : la sœur.
ребёнок|rebyonok|ri-bio-nak|Rebionok : l'enfant.
малыш|malysh|ma-lich|Malych : le petit, le bébé.
бабушка|babushka|ba-bouch-ka|Babouchka : la grand-mère.
дедушка|dedushka|dié-douch-ka|Diédouchka : le grand-père.
муж|muzh|mouch|Mouj : le mari.
жена|zhena|ji-na|Jéna : l'épouse.
# maison
дом|dom|dom|Dom, comme « domicile » : la maison.
дверь|dver|dvièr|Dvier, comme « door » : la porte.
окно|okno|ak-no|Okno, de « oko » (l'œil) : l'œil de la maison, la fenêtre.
кровать|krovat|kra-vat|Krovat : le lit.
стул|stul|stoul|Stoul, comme « stool » : la chaise.
ключ|klyuch|kliouch|Klioutch, comme « clé ».
кухня|kukhnya|koukh-nia|Koukhnia, comme « cuisine ».
ванная|vannaya|van-na-ya|La pièce de la « vanne » (baignoire) : la salle de bain.
лампа|lampa|lam-pa|Comme « lampe ».
диван|divan|di-vann|Divan : le canapé.
# travail
работа|rabota|ra-bo-ta|Rabota, comme « robot » qui travaille.
совещание|soveshchanie|sa-vié-chtcha-ni-ié|La réunion.
компьютер|kompyuter|kam-piou-tèr|Comme « computer ».
телефон|telefon|ti-li-fonn|Comme « téléphone ».
электронная почта|elektronnaya pochta|é-lièk-tro-na-ya potch-ta|Poste électronique : l'e-mail.
контракт|kontrakt|kan-trakt|Comme « contrat ».
начальник|nachalnik|na-tchal-nik|Celui qui « commence » (natchalo) : le chef.
встреча|vstrecha|fstrié-tcha|Vstretcha : le rendez-vous.
зарплата|zarplata|zar-pla-ta|Zarplata : le salaire.
офис|ofis|o-fis|Comme « office ».
# meteo
солнце|solntse|sonn-tsé|Comme « solaire » : le soleil.
дождь|dozhd|dochtch|Dojd : la pluie.
снег|sneg|sniék|Sneg, comme « snow » : la neige.
ветер|veter|vié-tièr|Vieter, comme « vent ».
жарко|zharko|jar-ka|Jarko : il fait chaud.
холодно|kholodno|kho-lad-na|Kholodno, comme « cold » : il fait froid.
облако|oblako|o-bla-ka|Oblako : le nuage.
гроза|groza|gra-za|Groza : l'orage.
зима|zima|zi-ma|Zima : l'hiver.
лето|leto|lié-ta|Lieto : l'été.
# nombres
один|odin|a-dinn|Odin, comme le dieu viking : un.
два|dva|dva|Dva, comme « deux » (duo).
три|tri|tri|Tri, comme « trois » (tricycle).
четыре|chetyre|tchi-ti-ré|Tchétyré : quatre.
пять|pyat|piat|Piat : cinq.
шесть|shest|chest|Chest : six.
семь|sem|siém|Siem, comme « sept ».
восемь|vosem|vo-siém|Vossiem : huit.
девять|devyat|dié-viat|Diéviat : neuf.
десять|desyat|dié-siat|Diéssiat, comme « dix » (décimal).
`;

RAW.ar = `
# salut
مرحبا|marḥaban|mar-ha-bann|Marhaba : bonjour, bienvenue.
مع السلامة|maʿa as-salāma|ma-a s-sa-la-ma|« Avec la paix » : au revoir.
شكرا|shukran|chou-krann|Choukrane : merci.
من فضلك|min faḍlak|minn fad-lak|S'il te plaît.
آسف|āsif|a-sif|Assif : désolé, pardon.
نعم|naʿam|na-amm|Naam : oui.
لا|lā|la|La : non.
تصبح على خير|tuṣbiḥ ʿalā khayr|tous-bih a-la khaïr|« Réveille-toi dans le bien » : bonne nuit.
صديق|ṣadīq|sa-diik|Sadiq : l'ami.
كيف حالك؟|kayfa ḥāluk?|kaï-fa ha-louk|Comment vas-tu ?
# resto
الحساب|al-ḥisāb|al-hi-sab|Le compte : l'addition.
ماء|māʾ|maa|Maa : l'eau.
قهوة|qahwa|qah-oua|Qahwa, le mot qui a donné « café ».
خبز|khubz|khobz|Khobz : le pain.
شوكة|shawka|chaw-ka|Chawka, « l'épine » : la fourchette.
سكين|sikkīn|sik-kiin|Sikkin : le couteau.
كأس|kaʾs|kass|Kass : le verre.
نبيذ|nabīdh|na-biidh|Nabidh : le vin.
كعكة|kaʿka|kaa-ka|Kaaka : le gâteau.
صحن|ṣaḥn|sahn|Sahn : l'assiette.
# voyage
طائرة|ṭāʾira|taa-i-ra|« Celle qui vole » : l'avion.
جواز السفر|jawāz as-safar|dja-waz as-sa-far|Permis de voyage (safar) : le passeport.
حقيبة|ḥaqība|ha-qii-ba|Haqiba : la valise.
تذكرة|tadhkira|tadh-ki-ra|Tadhkira : le billet.
محطة|maḥaṭṭa|ma-hat-ta|Mahatta : la gare.
قطار|qiṭār|qi-taar|Qitar : le train.
تاكسي|tāksī|tak-si|Comme « taxi ».
خريطة|kharīṭa|kha-rii-ta|Kharita : la carte.
شاطئ|shāṭiʾ|chaa-ti|Chati : la plage.
فندق|funduq|fonn-douq|Fondouk : l'hôtel.
# sante
طبيب|ṭabīb|ta-biib|Tabib, d'où vient « toubib » : le médecin.
مستشفى|mustashfā|mous-tach-fa|Moustachfa : l'hôpital.
صيدلية|ṣaydaliyya|saï-da-liy-ya|Saydaliyya : la pharmacie.
النجدة!|an-najda!|an-nadj-da|À l'aide !
الشرطة|ash-shurṭa|ach-chour-ta|Achourta : la police.
يؤلمني|yuʾlimunī|you-li-mou-ni|Ça me fait mal.
حمى|ḥummā|houm-ma|Houmma : la fièvre.
سيارة إسعاف|sayyārat isʿāf|saï-yaa-rat is-aaf|Voiture (sayyara) de secours : l'ambulance.
طبيب أسنان|ṭabīb asnān|ta-biib as-nann|Médecin (tabib) des dents : le dentiste.
مريض|marīḍ|ma-riid|Marid : malade.
# courses
مال|māl|maal|Maal : l'argent.
سعر|siʿr|si-r|Siir : le prix.
متجر|matjar|mat-djar|Matjar : le magasin.
تفاحة|tuffāḥa|touf-faa-ha|Touffaha : la pomme.
حليب|ḥalīb|ha-liib|Halib : le lait.
كيس|kīs|kiis|Kis : le sac.
بطاقة بنكية|biṭāqa bankiyya|bi-taa-qa bann-kiy-ya|Carte (bitaqa) de banque : la carte bancaire.
سوق|sūq|souq|Souq, comme « souk » : le marché !
بيضة|bayḍa|baï-da|Bayda : l'œuf.
جبن|jubn|djoubn|Joubn : le fromage.
# famille
أم|umm|oumm|Oumm : la mère.
أب|ab|ab|Ab : le père.
أخ|akh|akh|Akh : le frère.
أخت|ukht|oukht|Oukht : la sœur.
طفل|ṭifl|tifl|Tifl : l'enfant.
رضيع|raḍīʿ|ra-diiʿ|Radi : le bébé.
جدة|jadda|djad-da|Jadda : la grand-mère.
جد|jadd|djadd|Jadd : le grand-père.
زوج|zawj|zawdj|Zawj : le mari.
زوجة|zawja|zaw-dja|Zawja : l'épouse.
# maison
بيت|bayt|baït|Bayt : la maison.
باب|bāb|baab|Bab, comme Bab el-Oued : la porte.
نافذة|nāfidha|naa-fi-dha|Nafidha : la fenêtre.
سرير|sarīr|sa-riir|Sarir : le lit.
كرسي|kursī|kour-si|Koursi : la chaise.
مفتاح|miftāḥ|mif-taah|Miftah : la clé.
مطبخ|maṭbakh|mat-bakh|Matbakh : la cuisine.
حمام|ḥammām|ham-maam|Hammam : la salle de bain !
مصباح|miṣbāḥ|mis-baah|Misbah : la lampe.
أريكة|arīka|a-rii-ka|Arika : le canapé.
# travail
عمل|ʿamal|a-mal|Amal : le travail.
اجتماع|ijtimāʿ|idj-ti-maa|Ijtima : la réunion.
حاسوب|ḥāsūb|haa-soub|« Le calculateur » : l'ordinateur.
هاتف|hātif|haa-tif|Hatif : le téléphone.
بريد إلكتروني|barīd iliktrūnī|ba-riid i-lik-trou-ni|Courrier (barid) électronique : l'e-mail.
عقد|ʿaqd|aqd|Aqd : le contrat.
مدير|mudīr|mou-diir|Moudir : le directeur.
موعد|mawʿid|maw-id|Mawid : le rendez-vous.
راتب|rātib|raa-tib|Ratib : le salaire.
مكتب|maktab|mak-tab|Maktab : le bureau.
# meteo
شمس|shams|chamss|Chams : le soleil.
مطر|maṭar|ma-tar|Matar : la pluie.
ثلج|thalj|thaldj|Thalj : la neige.
ريح|rīḥ|riih|Rih : le vent.
حار|ḥārr|haarr|Harr, comme dans « harissa » : chaud !
بارد|bārid|baa-rid|Barid : froid.
غيمة|ghayma|ghaï-ma|Ghayma : le nuage.
عاصفة|ʿāṣifa|aa-si-fa|Asifa : la tempête, l'orage.
شتاء|shitāʾ|chi-taa|Chita : l'hiver.
صيف|ṣayf|saïf|Sayf : l'été.
# nombres
واحد|wāḥid|waa-hid|Wahid : un.
اثنان|ithnān|ith-naan|Ithnan : deux.
ثلاثة|thalātha|tha-laa-tha|Thalatha : trois.
أربعة|arbaʿa|ar-ba-a|Arbaa : quatre.
خمسة|khamsa|kham-sa|Khamsa, comme la main de Fatma à cinq doigts : cinq.
ستة|sitta|sit-ta|Sitta : six.
سبعة|sabʿa|sab-a|Saba : sept.
ثمانية|thamāniya|tha-maa-ni-ya|Thamaniya : huit.
تسعة|tisʿa|tis-a|Tisa : neuf.
عشرة|ʿashara|a-cha-ra|Ashara : dix.
`;

RAW.no = `
# salut
hei||haï|On dit « haï ! » en agitant la main : salut.
ha det||ha dé|Ha det sonne comme « à dé… main » : au revoir !
takk||takk|Un « tac » sec et poli : merci.
vær så snill||vèr so snill|« Sois si gentil » : s'il te plaît.
unnskyld||unn-chull|Unnskyld : pardon, excuse-moi.
ja||ya|Ja, comme en allemand : oui.
nei||naï|Nei : non.
god natt||gou natt|Natt, comme « nuit » (nocturne) : bonne nuit.
venn||vènn|L'ami qui « vient » toujours.
hvordan går det?||vour-dann gor dé|« Comment ça va ? », går = aller.
# resto
regningen||raï-ning-enn|Regning : le règlement, l'addition.
vann||vann|Vann, comme « water » : l'eau.
kaffe||ka-fé|Comme « café ».
brød||breu|Brød, comme « bread » : le pain.
gaffel||ga-fel|Gaffel : la fourchette, comme une « gaffe » à crochets.
kniv||kniv|Kniv, comme « canif » : le couteau.
glass||glass|Comme en anglais : un verre.
vin||vinn|Vin, comme « vin ».
kake||kâ-ké|Kake, comme « cake » : le gâteau.
tallerken||ta-lèr-kenn|On « taille » sa viande dans l'assiette.
# voyage
fly||flu|Fly : l'avion qui vole (« fly » en anglais).
pass||pass|Pass, comme « passeport ».
koffert||kou-fert|Koffert, comme « coffre » : la valise.
billett||bi-lètt|Billett, comme « billet ».
stasjon||sta-chounn|Stasjon, comme « station » : la gare.
tog||toug|Le train qui « tire » (tug) ses wagons.
taxi||tak-si|Comme en français.
kart||kart|Kart, comme « carte ».
strand||strann|Strand : la plage, la grève.
hotell||hou-tèl|Comme « hôtel ».
# sante
lege||lé-gué|Lege : le médecin.
sykehus||su-ké-hus|Syk (malade) + hus (maison) : l'hôpital.
apotek||a-pou-ték|Apotek, comme « apothicaire » : la pharmacie.
hjelp!||yèlp|Hjelp, comme « help » : à l'aide !
politi||pou-li-ti|Politi, comme « police ».
det gjør vondt||dé yeur vonnt|Ça fait mal.
feber||fé-ber|Feber, comme « fièvre ».
ambulanse||amm-bu-lann-sé|Comme « ambulance ».
tannlege||tann-lé-gué|Tann (dent) + lege (médecin) : le dentiste.
syk||suk|Syk, comme « sick » : malade.
# courses
penger||pèng-er|Penger, comme « pfennig » : l'argent.
pris||pris|Pris, comme « prix ».
butikk||bu-tikk|Butikk, comme « boutique ».
eple||èp-lé|Eple, comme « apple » : la pomme.
melk||mèlk|Melk, comme « milk » : le lait.
pose||pou-sé|Le sac où l'on « pose » ses courses.
bankkort||bannk-kort|Bank + kort (carte) : la carte bancaire.
marked||mar-ked|Marked, comme « marché ».
egg||ègg|Comme en anglais : l'œuf.
ost||oust|Ost : le fromage ; le brunost norvégien est brun et sucré.
# famille
mor||mour|Mor, comme « mère » (maternel).
far||far|Far, comme « father » : le père.
bror||brour|Bror, comme « brother » : le frère.
søster||seus-ter|Søster, comme « sister » : la sœur.
barn||barn|Barn, comme « bambin » : l'enfant.
baby||bé-bi|Comme « bébé ».
bestemor||bès-té-mour|Beste + mor : « la meilleure mère », la grand-mère.
bestefar||bès-té-far|Beste + far : « le meilleur père », le grand-père.
mann||mann|Mann, comme « man » : l'homme, le mari.
kone||kou-né|Kone : l'épouse.
# maison
hus||hus|Hus, comme « house » : la maison.
dør||deur|Dør, comme « door » : la porte.
vindu||vinn-du|Vindu, comme « window » : la fenêtre.
seng||sèng|Seng : le lit où tu « sens » le sommeil venir.
stol||stoul|Stol, comme « stool » : la chaise.
nøkkel||neu-kel|Nøkkel, comme « nickel » : une clé en métal.
kjøkken||cheu-kenn|Kjøkken, comme « kitchen » : la cuisine.
bad||bâd|Bad, comme « bath » : la salle de bain.
lampe||lamm-pé|Comme « lampe ».
sofa||sou-fa|Comme « sofa ».
# travail
jobb||yobb|Jobb, comme « job » : le travail.
møte||meu-té|Møte, comme « meeting » : la réunion.
datamaskin||da-ta-ma-chinn|La « machine à données » : l'ordinateur.
telefon||té-lé-foun|Comme « téléphone ».
e-post||é-post|E + post : le courrier électronique.
kontrakt||kounn-trakt|Comme « contrat ».
sjef||chéf|Sjef, comme « chef » : le patron.
avtale||av-ta-lé|Avtale : le rendez-vous, l'accord.
lønn||leunn|Lønn, comme « Lohn » en allemand : le salaire.
kontor||kounn-tour|Kontor, comme « comptoir » : le bureau.
# meteo
sol||soul|Sol, comme « solaire ».
regn||raïn|Regn, comme « rain » : la pluie.
snø||sneu|Snø, comme « snow » : la neige.
vind||vinn|Vind, comme « wind » : le vent.
varm||varm|Varm, comme « warm » : chaud.
kald||kall|Kald, comme « cold » : froid.
sky||chu|Le nuage dans le « sky » (le ciel).
tordenvær||tour-denn-vèr|Torden, comme Thor, le dieu du tonnerre : l'orage.
vinter||vinn-ter|Vinter, comme « winter » : l'hiver.
sommer||sou-mer|Sommer, comme « summer » : l'été.
# nombres
en||énn|En : un.
to||tou|To, comme « two » : deux.
tre||tré|Tre, comme « trois ».
fire||fi-ré|Fire : quatre.
fem||fèmm|Fem : cinq.
seks||sèks|Seks, comme « six ».
sju||chu|Sju : sept.
åtte||o-té|Åtte, comme « eight » : huit.
ni||ni|Ni, comme « nine » : neuf.
ti||ti|Ti : dix.
`;

// Transforme les textes ci-dessus en données
const LIB = {};
for (const lang in RAW) {
    LIB[lang] = {};
    let cur = null;
    RAW[lang].split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;
        if (line.startsWith('# ')) { cur = line.slice(2); LIB[lang][cur] = []; return; }
        const [word, roman, ph, tip] = line.split('|');
        LIB[lang][cur].push({ word, roman: roman || '', ph: ph || '', tip: tip || '' });
    });
}

// Illustrations dessinées du thème Restaurant
const SVGS = {
    bill: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#6366f1" opacity=".15"/><path d="M34 16h52v84l-6.5-5-6.5 5-6.5-5-6.5 5-6.5-5-6.5 5-6.5-5-6.5 5z" fill="#f1f5f9"/><rect x="42" y="28" width="36" height="5" rx="2.5" fill="#94a3b8"/><rect x="42" y="40" width="24" height="4" rx="2" fill="#cbd5e1"/><rect x="70" y="40" width="8" height="4" rx="2" fill="#cbd5e1"/><rect x="42" y="50" width="20" height="4" rx="2" fill="#cbd5e1"/><rect x="70" y="50" width="8" height="4" rx="2" fill="#cbd5e1"/><rect x="42" y="60" width="26" height="4" rx="2" fill="#cbd5e1"/><rect x="70" y="60" width="8" height="4" rx="2" fill="#cbd5e1"/><rect x="42" y="72" width="36" height="2" fill="#94a3b8"/><text x="60" y="91" text-anchor="middle" font-size="15" font-weight="700" fill="#6366f1" font-family="sans-serif">42 €</text></svg>`,
    water: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#67e8f9" opacity=".12"/><path d="M60 14C60 14 28 52 28 74a32 32 0 0 0 64 0C92 52 60 14 60 14z" fill="#22d3ee"/><path d="M60 22C60 22 34 54 34 74a26 26 0 0 0 26 26" fill="none" stroke="#a5f3fc" stroke-width="0"/><path d="M44 74a16 16 0 0 0 12 16" fill="none" stroke="#ecfeff" stroke-width="5" stroke-linecap="round" opacity=".8"/><circle cx="74" cy="60" r="4" fill="#ecfeff" opacity=".6"/></svg>`,
    coffee: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#f59e0b" opacity=".12"/><path d="M44 30c-4-6 4-10 0-16M58 30c-4-6 4-10 0-16M72 30c-4-6 4-10 0-16" fill="none" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="58" cy="94" rx="42" ry="8" fill="#e2e8f0"/><path d="M28 42h60v28c0 14-12 24-30 24s-30-10-30-24z" fill="#f8fafc"/><ellipse cx="58" cy="42" rx="30" ry="6" fill="#78350f"/><path d="M88 50a12 12 0 0 1 0 24" fill="none" stroke="#f8fafc" stroke-width="7"/></svg>`,
    bread: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#f59e0b" opacity=".12"/><g transform="rotate(-35 60 60)"><rect x="8" y="46" width="104" height="28" rx="14" fill="#d97706"/><rect x="12" y="49" width="96" height="10" rx="5" fill="#f59e0b"/><path d="M28 52l10 16M48 52l10 16M68 52l10 16M88 52l8 14" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/></g></svg>`,
    fork: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#818cf8" opacity=".14"/><rect x="44" y="12" width="5" height="32" rx="2.5" fill="#e2e8f0"/><rect x="52.5" y="12" width="5" height="32" rx="2.5" fill="#e2e8f0"/><rect x="61" y="12" width="5" height="32" rx="2.5" fill="#e2e8f0"/><rect x="69.5" y="12" width="5" height="32" rx="2.5" fill="#e2e8f0"/><path d="M44 40h30.5v6c0 8-6 12-15 12s-15-4-15-12z" fill="#e2e8f0"/><rect x="55" y="54" width="9" height="56" rx="4.5" fill="#cbd5e1"/></svg>`,
    knife: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#818cf8" opacity=".14"/><path d="M53 10c18 6 20 34 17 56H53z" fill="#e2e8f0"/><path d="M53 10c8 4 10 20 9 56h-9z" fill="#cbd5e1"/><rect x="51" y="64" width="20" height="46" rx="7" fill="#6366f1"/><circle cx="61" cy="76" r="2.5" fill="#c7d2fe"/><circle cx="61" cy="96" r="2.5" fill="#c7d2fe"/></svg>`,
    glass: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#67e8f9" opacity=".1"/><path d="M34 18h52l-8 88H42z" fill="#67e8f9" fill-opacity=".18" stroke="#a5f3fc" stroke-width="4" stroke-linejoin="round"/><path d="M38 58h44l-4.6 48H42.6z" fill="#22d3ee" fill-opacity=".45"/><path d="M46 28l4 64" stroke="#ecfeff" stroke-width="4" stroke-linecap="round" opacity=".7"/></svg>`,
    wine: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#e11d48" opacity=".12"/><path d="M36 14h48c2 34-8 52-24 52S34 48 36 14z" fill="#f1f5f9" fill-opacity=".15" stroke="#e2e8f0" stroke-width="3.5"/><path d="M38.5 36h43c-2 18-10 27-21.5 27S40.5 54 38.5 36z" fill="#be123c"/><rect x="57.5" y="66" width="5" height="30" fill="#e2e8f0"/><ellipse cx="60" cy="100" rx="20" ry="5" fill="#e2e8f0"/></svg>`,
    cake: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#ec4899" opacity=".12"/><rect x="57" y="20" width="6" height="22" rx="2" fill="#a5b4fc"/><path d="M60 8c5 6 5 10 0 12-5-2-5-6 0-12z" fill="#fbbf24"/><rect x="20" y="44" width="80" height="54" rx="8" fill="#7c2d12"/><rect x="20" y="66" width="80" height="8" fill="#f9a8d4"/><path d="M20 52c0-5 4-8 8-8h64c4 0 8 3 8 8v4c-6 6-10-2-16 4s-10-2-16 4-10-2-16 4-10-2-16 4-10-2-16-4z" fill="#fdf2f8"/><ellipse cx="60" cy="100" rx="48" ry="6" fill="#e2e8f0"/></svg>`,
    plate: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#818cf8" opacity=".12"/><circle cx="60" cy="60" r="46" fill="#e2e8f0"/><circle cx="60" cy="60" r="32" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><path d="M44 50a22 22 0 0 1 14-14" fill="none" stroke="#e0e7ff" stroke-width="4" stroke-linecap="round"/></svg>`
};

// HypnoLingo : textes de l'appli dans 20 langues (fonctionne hors ligne)
// UI_LANGS : langues de l'interface. UI[code] : textes. MEAN[code] : sens des 100 mots de la bibliothèque,
// une ligne par thème (même ordre que THEMES), 10 mots séparés par « | ».

const UI_LANGS = [
    { code: 'fr', name: 'Français', voice: 'fr-FR' },
    { code: 'en', name: 'English', voice: 'en-GB' },
    { code: 'es', name: 'Español', voice: 'es-ES' },
    { code: 'de', name: 'Deutsch', voice: 'de-DE' },
    { code: 'it', name: 'Italiano', voice: 'it-IT' },
    { code: 'pt', name: 'Português', voice: 'pt-PT' },
    { code: 'nl', name: 'Nederlands', voice: 'nl-NL' },
    { code: 'pl', name: 'Polski', voice: 'pl-PL' },
    { code: 'sv', name: 'Svenska', voice: 'sv-SE' },
    { code: 'ru', name: 'Русский', voice: 'ru-RU' },
    { code: 'uk', name: 'Українська', voice: 'uk-UA' },
    { code: 'tr', name: 'Türkçe', voice: 'tr-TR' },
    { code: 'ar', name: 'العربية', voice: 'ar-SA', rtl: true },
    { code: 'hi', name: 'हिन्दी', voice: 'hi-IN' },
    { code: 'zh', name: '中文', voice: 'zh-CN' },
    { code: 'ja', name: '日本語', voice: 'ja-JP' },
    { code: 'ko', name: '한국어', voice: 'ko-KR' },
    { code: 'id', name: 'Bahasa Indonesia', voice: 'id-ID' },
    { code: 'vi', name: 'Tiếng Việt', voice: 'vi-VN' },
    { code: 'th', name: 'ไทย', voice: 'th-TH' }
];

// Nom des langues à apprendre, dans leur propre langue (compréhensible partout)
const LANG_ENDONYM = { en: 'English', es: 'Español', zh: '中文', ja: '日本語', ko: '한국어', ru: 'Русский', ar: 'العربية', no: 'Norsk' };

const UI = {};
const MEAN = {};

UI.fr = {
    home: "Retour à l'accueil", on: 'En ligne', off: 'Hors ligne', vol: 'Volume du fond sonore', snd: 'Fond sonore', sndOn: 'Son actif', sndOff: 'Son coupé',
    s1: '1 · Se poser', s2: '2 · Apprendre', s3: '3 · Se tester',
    your: 'Ta séance', sub: '{n} mots · environ 10 minutes', start: 'Commencer la séance', skip: 'Aller directement aux cartes',
    rev1: 'Le mot raté la dernière fois passe en premier.', revN: 'Les {n} mots ratés la dernière fois passent en premier.',
    hLang: '1. Langue à apprendre', hTheme: '2. Thème', themeNote: 'Bibliothèque intégrée : marche sans connexion.', w10: '10 mots', toRev: '{n} à revoir',
    hMine: 'Mes sujets sur mesure', mineNote: "Créés avec l'IA et gardés sur cet appareil : disponibles hors ligne.", mineCount: '{n} mots · sur mesure', del: 'Supprimer ce sujet', delOk: 'Confirmer la suppression',
    aiT: "Créer un sujet sur mesure avec l'IA", aiD: "Tape n'importe quel sujet : vocabulaire du golf, immobilier, cuisine thaïlandaise… L'IA prépare 10 mots dans la langue choisie. Il faut une connexion pour créer le sujet, plus pour le réviser.", aiPh: 'Ex. : vocabulaire du golf', aiB: 'Créer le sujet',
    aiSet: "Réglages de l'IA (clé d'API)", aiKey: "Dans l'appli installée, l'IA passe par une clé d'API Anthropic (console.anthropic.com). Elle reste enregistrée sur cet appareil uniquement.", save: 'Enregistrer', keyOk: 'Clé enregistrée sur cet appareil.', keyNone: 'Aucune clé enregistrée.', keyDel: 'Clé supprimée.',
    offline: 'Vous êtes actuellement hors ligne. Choisissez un thème de la bibliothèque locale ou reconnectez-vous pour générer un sujet sur-mesure.',
    aiWork: 'Création du sujet « {t} »… (cela peut prendre une minute)', aiOk: 'Sujet créé et enregistré sur cet appareil : tu pourras le réviser hors ligne.', aiNoSave: "Sujet créé, mais cet appareil n'a pas pu l'enregistrer : il sera perdu à la fermeture.",
    eKey: "Ajoute ta clé d'API dans « Réglages de l'IA » pour créer des sujets.", eBad: "La clé d'API est refusée. Vérifie-la dans « Réglages de l'IA ».", eDeny: "Tu as refusé l'accès à Claude pour cette page. Recharge-la pour réessayer.", eRate: "Trop de demandes d'un coup. Réessaie dans une minute.", eFmt: "L'IA a renvoyé une leçon incomplète. Réessaie ou reformule le sujet.", eGen: 'La création a échoué (problème de connexion ?). Réessaie dans un instant.',
    bLen: 'Durée de la respiration', vGuide: 'Voix qui guide la respiration', uiLang: "Langue de l'appli",
    bT: 'Se poser', bD: 'Mets ton casque. Inspire quand le cercle grandit, expire quand il se réduit.', inh: 'Inspire', exh: 'Expire', bSkip: "Passer à l'apprentissage",
    vIntro: 'Installe-toi confortablement. Ferme les yeux si tu veux. Inspire quand le cercle grandit, et expire doucement quand il se réduit.', vEnd: 'Très bien. Garde ce calme. On passe aux mots.', vGood: 'Très bien joué.', vOk: 'Bon travail. Tu reverras ces mots demain.',
    review: 'À revoir', listen: 'Écouter la prononciation', pron: 'se prononce', tip: 'Astuce pour retenir', prev: 'Précédent', next: 'Suivant', toQuiz: 'Passer au quiz',
    q: 'Question {i} / {n}', good: 'Bonnes réponses : {n}', qHow: 'Comment dit-on « {w} » ?', qEar: 'Écoute : que veut dire ce mot ?', relisten: 'Réécouter le mot', bravo: 'Bravo !', was: 'C’était « {w} »', sure: 'Tu étais sûr de ta réponse ?', yes: 'Oui, sûr', no: 'Pas vraiment',
    r100: 'Sans faute !', r70: 'Très bonne séance', r40: 'Bon début', r0: 'On continue demain', rScore: '{g} / {n} mots retrouvés.', rConf: 'Confiance : tu étais sûr de toi pour {p} % des réponses.', rCal: '{c} fois sur {n}, ton impression était juste.', rMiss: 'Mots à revoir', rRev: 'Revoir les mots ratés', rHome: "Retour à l'accueil", rTom: 'Refais le quiz demain : se tester quelques jours de suite est ce qui ancre le mieux les mots.',
    foot: 'Relaxation guidée et mémorisation par associations. À écouter au casque, jamais en conduisant.',
    themes: ['Salutations et politesse', 'Restaurant et cuisine', 'Voyage et aéroport', 'Urgences et santé', 'Courses et magasins', 'Famille', 'Maison', 'Travail et business', 'Météo et saisons', 'Nombres de 1 à 10']
};
MEAN.fr = `bonjour|au revoir|merci|s'il te plaît|pardon|oui|non|bonne nuit|l'ami|comment ça va ?
l'addition|l'eau|le café|le pain|la fourchette|le couteau|le verre|le vin|le gâteau|l'assiette
l'avion|le passeport|la valise|le billet|la gare|le train|le taxi|la carte|la plage|l'hôtel
le médecin|l'hôpital|la pharmacie|à l'aide !|la police|j'ai mal|la fièvre|l'ambulance|le dentiste|malade
l'argent|le prix|le magasin|la pomme|le lait|le sac|la carte bancaire|le marché|l'œuf|le fromage
la mère|le père|le frère|la sœur|l'enfant|le bébé|la grand-mère|le grand-père|le mari|l'épouse
la maison|la porte|la fenêtre|le lit|la chaise|la clé|la cuisine|la salle de bain|la lampe|le canapé
le travail|la réunion|l'ordinateur|le téléphone|l'e-mail|le contrat|le patron|le rendez-vous|le salaire|le bureau
le soleil|la pluie|la neige|le vent|chaud|froid|le nuage|l'orage|l'hiver|l'été
un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix`;

UI.en = {
    home: 'Back to home', on: 'Online', off: 'Offline', vol: 'Background sound volume', snd: 'Background sound', sndOn: 'Sound on', sndOff: 'Sound off',
    s1: '1 · Settle in', s2: '2 · Learn', s3: '3 · Test yourself',
    your: 'Your session', sub: '{n} words · about 10 minutes', start: 'Start the session', skip: 'Go straight to the cards',
    rev1: 'The word you missed last time comes first.', revN: 'The {n} words you missed last time come first.',
    hLang: '1. Language to learn', hTheme: '2. Topic', themeNote: 'Built-in library: works offline.', w10: '10 words', toRev: '{n} to review',
    hMine: 'My custom topics', mineNote: 'Made with AI and kept on this device: available offline.', mineCount: '{n} words · custom', del: 'Delete this topic', delOk: 'Confirm deletion',
    aiT: 'Create a custom topic with AI', aiD: 'Type any topic: golf vocabulary, real estate, Thai cooking… The AI prepares 10 words in the chosen language. You need a connection to create the topic, not to review it.', aiPh: 'E.g. golf vocabulary', aiB: 'Create topic',
    aiSet: 'AI settings (API key)', aiKey: 'In the installed app, the AI uses an Anthropic API key (console.anthropic.com). It is stored on this device only.', save: 'Save', keyOk: 'Key saved on this device.', keyNone: 'No key saved.', keyDel: 'Key deleted.',
    offline: 'You are currently offline. Choose a topic from the built-in library, or reconnect to generate a custom topic.',
    aiWork: 'Creating the topic “{t}”… (this can take a minute)', aiOk: 'Topic created and saved on this device: you can review it offline.', aiNoSave: 'Topic created, but this device could not save it: it will be lost when you close the app.',
    eKey: 'Add your API key in “AI settings” to create topics.', eBad: 'The API key was refused. Check it in “AI settings”.', eDeny: 'You declined Claude access for this page. Reload it to try again.', eRate: 'Too many requests at once. Try again in a minute.', eFmt: 'The AI returned an incomplete lesson. Try again or rephrase the topic.', eGen: 'Creation failed (connection problem?). Try again in a moment.',
    bLen: 'Breathing length', vGuide: 'Voice guiding the breathing', uiLang: 'App language',
    bT: 'Settle in', bD: 'Put on your headphones. Breathe in as the circle grows, breathe out as it shrinks.', inh: 'Breathe in', exh: 'Breathe out', bSkip: 'Skip to learning',
    vIntro: 'Get comfortable. Close your eyes if you like. Breathe in as the circle grows, and breathe out slowly as it shrinks.', vEnd: 'Very good. Keep this calm. Now for the words.', vGood: 'Well done.', vOk: 'Good work. You will see these words again tomorrow.',
    review: 'To review', listen: 'Listen to the pronunciation', pron: 'pronounced', tip: 'Memory tip', prev: 'Previous', next: 'Next', toQuiz: 'Go to the quiz',
    q: 'Question {i} / {n}', good: 'Correct answers: {n}', qHow: 'How do you say “{w}”?', qEar: 'Listen: what does this word mean?', relisten: 'Hear the word again', bravo: 'Well done!', was: 'It was “{w}”', sure: 'Were you sure of your answer?', yes: 'Yes, sure', no: 'Not really',
    r100: 'Perfect score!', r70: 'Great session', r40: 'Good start', r0: 'Keep going tomorrow', rScore: '{g} / {n} words remembered.', rConf: 'Confidence: you felt sure for {p}% of your answers.', rCal: 'Your feeling was right {c} times out of {n}.', rMiss: 'Words to review', rRev: 'Review missed words', rHome: 'Back to home', rTom: 'Take the quiz again tomorrow: testing yourself several days in a row is what makes words stick.',
    foot: 'Guided relaxation and memory by association. Use headphones, never while driving.',
    themes: ['Greetings and politeness', 'Restaurant and food', 'Travel and airport', 'Emergencies and health', 'Shopping', 'Family', 'Home', 'Work and business', 'Weather and seasons', 'Numbers 1 to 10']
};
MEAN.en = `hello|goodbye|thank you|please|sorry|yes|no|good night|friend|how are you?
the bill|water|coffee|bread|fork|knife|glass|wine|cake|plate
plane|passport|suitcase|ticket|station|train|taxi|map|beach|hotel
doctor|hospital|pharmacy|help!|police|it hurts|fever|ambulance|dentist|sick
money|price|shop|apple|milk|bag|bank card|market|egg|cheese
mother|father|brother|sister|child|baby|grandmother|grandfather|husband|wife
house|door|window|bed|chair|key|kitchen|bathroom|lamp|sofa
work|meeting|computer|phone|email|contract|boss|appointment|salary|office
sun|rain|snow|wind|hot|cold|cloud|storm|winter|summer
one|two|three|four|five|six|seven|eight|nine|ten`;

UI.es = {
    home: 'Volver al inicio', on: 'En línea', off: 'Sin conexión', vol: 'Volumen del sonido de fondo', snd: 'Sonido de fondo', sndOn: 'Sonido activado', sndOff: 'Sonido apagado',
    s1: '1 · Relajarse', s2: '2 · Aprender', s3: '3 · Ponerse a prueba',
    your: 'Tu sesión', sub: '{n} palabras · unos 10 minutos', start: 'Empezar la sesión', skip: 'Ir directamente a las tarjetas',
    rev1: 'La palabra que fallaste la última vez sale primero.', revN: 'Las {n} palabras que fallaste la última vez salen primero.',
    hLang: '1. Idioma que aprender', hTheme: '2. Tema', themeNote: 'Biblioteca integrada: funciona sin conexión.', w10: '10 palabras', toRev: '{n} por repasar',
    hMine: 'Mis temas a medida', mineNote: 'Creados con IA y guardados en este dispositivo: disponibles sin conexión.', mineCount: '{n} palabras · a medida', del: 'Eliminar este tema', delOk: 'Confirmar eliminación',
    aiT: 'Crear un tema a medida con IA', aiD: 'Escribe cualquier tema: vocabulario de golf, inmobiliaria, cocina tailandesa… La IA prepara 10 palabras en el idioma elegido. Necesitas conexión para crear el tema, no para repasarlo.', aiPh: 'Ej.: vocabulario de golf', aiB: 'Crear el tema',
    aiSet: 'Ajustes de la IA (clave de API)', aiKey: 'En la app instalada, la IA usa una clave de API de Anthropic (console.anthropic.com). Se guarda solo en este dispositivo.', save: 'Guardar', keyOk: 'Clave guardada en este dispositivo.', keyNone: 'Ninguna clave guardada.', keyDel: 'Clave eliminada.',
    offline: 'Ahora mismo no tienes conexión. Elige un tema de la biblioteca integrada o vuelve a conectarte para generar un tema a medida.',
    aiWork: 'Creando el tema «{t}»… (puede tardar un minuto)', aiOk: 'Tema creado y guardado en este dispositivo: podrás repasarlo sin conexión.', aiNoSave: 'Tema creado, pero este dispositivo no pudo guardarlo: se perderá al cerrar.',
    eKey: 'Añade tu clave de API en «Ajustes de la IA» para crear temas.', eBad: 'La clave de API ha sido rechazada. Revísala en «Ajustes de la IA».', eDeny: 'Has rechazado el acceso a Claude para esta página. Recárgala para volver a intentarlo.', eRate: 'Demasiadas solicitudes a la vez. Inténtalo de nuevo en un minuto.', eFmt: 'La IA devolvió una lección incompleta. Inténtalo de nuevo o reformula el tema.', eGen: 'La creación falló (¿problema de conexión?). Inténtalo de nuevo en un momento.',
    bLen: 'Duración de la respiración', vGuide: 'Voz que guía la respiración', uiLang: 'Idioma de la app',
    bT: 'Relajarse', bD: 'Ponte los auriculares. Inspira cuando el círculo crece y espira cuando se reduce.', inh: 'Inspira', exh: 'Espira', bSkip: 'Pasar al aprendizaje',
    vIntro: 'Ponte cómodo. Cierra los ojos si quieres. Inspira cuando el círculo crece y espira despacio cuando se reduce.', vEnd: 'Muy bien. Mantén esta calma. Vamos con las palabras.', vGood: 'Muy bien hecho.', vOk: 'Buen trabajo. Volverás a ver estas palabras mañana.',
    review: 'Por repasar', listen: 'Escuchar la pronunciación', pron: 'se pronuncia', tip: 'Truco para recordar', prev: 'Anterior', next: 'Siguiente', toQuiz: 'Ir al test',
    q: 'Pregunta {i} / {n}', good: 'Respuestas correctas: {n}', qHow: '¿Cómo se dice «{w}»?', qEar: 'Escucha: ¿qué significa esta palabra?', relisten: 'Volver a escuchar la palabra', bravo: '¡Muy bien!', was: 'Era «{w}»', sure: '¿Estabas seguro de tu respuesta?', yes: 'Sí, seguro', no: 'No mucho',
    r100: '¡Sin fallos!', r70: 'Muy buena sesión', r40: 'Buen comienzo', r0: 'Seguimos mañana', rScore: '{g} / {n} palabras recordadas.', rConf: 'Confianza: estabas seguro en el {p} % de las respuestas.', rCal: 'Tu impresión fue acertada {c} veces de {n}.', rMiss: 'Palabras por repasar', rRev: 'Repasar las palabras falladas', rHome: 'Volver al inicio', rTom: 'Repite el test mañana: ponerse a prueba varios días seguidos es lo que mejor fija las palabras.',
    foot: 'Relajación guiada y memorización por asociaciones. Úsala con auriculares, nunca conduciendo.',
    themes: ['Saludos y cortesía', 'Restaurante y cocina', 'Viajes y aeropuerto', 'Urgencias y salud', 'Compras y tiendas', 'Familia', 'Casa', 'Trabajo y negocios', 'Tiempo y estaciones', 'Números del 1 al 10']
};
MEAN.es = `hola|adiós|gracias|por favor|perdón|sí|no|buenas noches|amigo|¿qué tal?
la cuenta|el agua|el café|el pan|el tenedor|el cuchillo|el vaso|el vino|la tarta|el plato
el avión|el pasaporte|la maleta|el billete|la estación|el tren|el taxi|el mapa|la playa|el hotel
el médico|el hospital|la farmacia|¡socorro!|la policía|me duele|la fiebre|la ambulancia|el dentista|enfermo
el dinero|el precio|la tienda|la manzana|la leche|la bolsa|la tarjeta bancaria|el mercado|el huevo|el queso
la madre|el padre|el hermano|la hermana|el niño|el bebé|la abuela|el abuelo|el marido|la esposa
la casa|la puerta|la ventana|la cama|la silla|la llave|la cocina|el baño|la lámpara|el sofá
el trabajo|la reunión|el ordenador|el teléfono|el correo|el contrato|el jefe|la cita|el sueldo|la oficina
el sol|la lluvia|la nieve|el viento|calor|frío|la nube|la tormenta|el invierno|el verano
uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez`;

UI.de = {
    home: 'Zurück zum Start', on: 'Online', off: 'Offline', vol: 'Lautstärke der Hintergrundmusik', snd: 'Hintergrundklang', sndOn: 'Ton an', sndOff: 'Ton aus',
    s1: '1 · Ankommen', s2: '2 · Lernen', s3: '3 · Testen',
    your: 'Deine Sitzung', sub: '{n} Wörter · etwa 10 Minuten', start: 'Sitzung starten', skip: 'Direkt zu den Karten',
    rev1: 'Das zuletzt falsche Wort kommt zuerst.', revN: 'Die {n} zuletzt falschen Wörter kommen zuerst.',
    hLang: '1. Sprache zum Lernen', hTheme: '2. Thema', themeNote: 'Eingebaute Bibliothek: funktioniert offline.', w10: '10 Wörter', toRev: '{n} wiederholen',
    hMine: 'Meine eigenen Themen', mineNote: 'Mit KI erstellt und auf diesem Gerät gespeichert: offline verfügbar.', mineCount: '{n} Wörter · eigenes Thema', del: 'Dieses Thema löschen', delOk: 'Löschen bestätigen',
    aiT: 'Eigenes Thema mit KI erstellen', aiD: 'Gib ein beliebiges Thema ein: Golf-Vokabular, Immobilien, thailändische Küche … Die KI bereitet 10 Wörter in der gewählten Sprache vor. Zum Erstellen brauchst du Internet, zum Wiederholen nicht.', aiPh: 'z. B. Golf-Vokabular', aiB: 'Thema erstellen',
    aiSet: 'KI-Einstellungen (API-Schlüssel)', aiKey: 'In der installierten App nutzt die KI einen Anthropic-API-Schlüssel (console.anthropic.com). Er wird nur auf diesem Gerät gespeichert.', save: 'Speichern', keyOk: 'Schlüssel auf diesem Gerät gespeichert.', keyNone: 'Kein Schlüssel gespeichert.', keyDel: 'Schlüssel gelöscht.',
    offline: 'Du bist gerade offline. Wähle ein Thema aus der eingebauten Bibliothek oder verbinde dich wieder, um ein eigenes Thema zu erstellen.',
    aiWork: 'Thema „{t}“ wird erstellt … (kann eine Minute dauern)', aiOk: 'Thema erstellt und auf diesem Gerät gespeichert: Du kannst es offline wiederholen.', aiNoSave: 'Thema erstellt, aber dieses Gerät konnte es nicht speichern: Es geht beim Schließen verloren.',
    eKey: 'Füge deinen API-Schlüssel in den „KI-Einstellungen“ hinzu, um Themen zu erstellen.', eBad: 'Der API-Schlüssel wurde abgelehnt. Prüfe ihn in den „KI-Einstellungen“.', eDeny: 'Du hast Claude den Zugriff für diese Seite verweigert. Lade sie neu, um es erneut zu versuchen.', eRate: 'Zu viele Anfragen auf einmal. Versuche es in einer Minute erneut.', eFmt: 'Die KI hat eine unvollständige Lektion geliefert. Versuche es erneut oder formuliere das Thema um.', eGen: 'Erstellen fehlgeschlagen (Verbindungsproblem?). Versuche es gleich noch einmal.',
    bLen: 'Dauer der Atemübung', vGuide: 'Stimme, die die Atmung begleitet', uiLang: 'App-Sprache',
    bT: 'Ankommen', bD: 'Setz deine Kopfhörer auf. Atme ein, wenn der Kreis wächst, und aus, wenn er kleiner wird.', inh: 'Einatmen', exh: 'Ausatmen', bSkip: 'Weiter zum Lernen',
    vIntro: 'Mach es dir bequem. Schließ die Augen, wenn du möchtest. Atme ein, wenn der Kreis wächst, und atme langsam aus, wenn er kleiner wird.', vEnd: 'Sehr gut. Behalte diese Ruhe. Jetzt kommen die Wörter.', vGood: 'Sehr gut gemacht.', vOk: 'Gute Arbeit. Du siehst diese Wörter morgen wieder.',
    review: 'Wiederholen', listen: 'Aussprache anhören', pron: 'Aussprache', tip: 'Merkhilfe', prev: 'Zurück', next: 'Weiter', toQuiz: 'Zum Quiz',
    q: 'Frage {i} / {n}', good: 'Richtige Antworten: {n}', qHow: 'Wie sagt man „{w}“?', qEar: 'Hör zu: Was bedeutet dieses Wort?', relisten: 'Wort noch einmal hören', bravo: 'Super!', was: 'Richtig war „{w}“', sure: 'Warst du dir sicher?', yes: 'Ja, sicher', no: 'Nicht wirklich',
    r100: 'Fehlerfrei!', r70: 'Sehr gute Sitzung', r40: 'Guter Anfang', r0: 'Morgen geht es weiter', rScore: '{g} / {n} Wörter gewusst.', rConf: 'Sicherheit: Du warst dir bei {p} % der Antworten sicher.', rCal: 'Dein Gefühl lag {c} von {n} Mal richtig.', rMiss: 'Wörter zum Wiederholen', rRev: 'Falsche Wörter wiederholen', rHome: 'Zurück zum Start', rTom: 'Mach das Quiz morgen noch einmal: Sich mehrere Tage hintereinander zu testen verankert die Wörter am besten.',
    foot: 'Geführte Entspannung und Lernen durch Assoziationen. Mit Kopfhörern hören, nie beim Autofahren.',
    themes: ['Begrüßung und Höflichkeit', 'Restaurant und Essen', 'Reise und Flughafen', 'Notfall und Gesundheit', 'Einkaufen', 'Familie', 'Zuhause', 'Arbeit und Business', 'Wetter und Jahreszeiten', 'Zahlen von 1 bis 10']
};
MEAN.de = `hallo|auf Wiedersehen|danke|bitte|Entschuldigung|ja|nein|gute Nacht|der Freund|wie geht's?
die Rechnung|das Wasser|der Kaffee|das Brot|die Gabel|das Messer|das Glas|der Wein|der Kuchen|der Teller
das Flugzeug|der Reisepass|der Koffer|die Fahrkarte|der Bahnhof|der Zug|das Taxi|die Karte|der Strand|das Hotel
der Arzt|das Krankenhaus|die Apotheke|Hilfe!|die Polizei|es tut weh|das Fieber|der Krankenwagen|der Zahnarzt|krank
das Geld|der Preis|das Geschäft|der Apfel|die Milch|die Tasche|die Bankkarte|der Markt|das Ei|der Käse
die Mutter|der Vater|der Bruder|die Schwester|das Kind|das Baby|die Großmutter|der Großvater|der Ehemann|die Ehefrau
das Haus|die Tür|das Fenster|das Bett|der Stuhl|der Schlüssel|die Küche|das Badezimmer|die Lampe|das Sofa
die Arbeit|die Besprechung|der Computer|das Telefon|die E-Mail|der Vertrag|der Chef|der Termin|das Gehalt|das Büro
die Sonne|der Regen|der Schnee|der Wind|heiß|kalt|die Wolke|das Gewitter|der Winter|der Sommer
eins|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn`;

UI.it = {
    home: 'Torna alla home', on: 'Online', off: 'Offline', vol: 'Volume del suono di sottofondo', snd: 'Suono di sottofondo', sndOn: 'Audio attivo', sndOff: 'Audio spento',
    s1: '1 · Rilassarsi', s2: '2 · Imparare', s3: '3 · Mettersi alla prova',
    your: 'La tua sessione', sub: '{n} parole · circa 10 minuti', start: 'Inizia la sessione', skip: 'Vai subito alle carte',
    rev1: 'La parola sbagliata l’ultima volta viene per prima.', revN: 'Le {n} parole sbagliate l’ultima volta vengono per prime.',
    hLang: '1. Lingua da imparare', hTheme: '2. Argomento', themeNote: 'Libreria integrata: funziona offline.', w10: '10 parole', toRev: '{n} da ripassare',
    hMine: 'I miei argomenti su misura', mineNote: 'Creati con l’IA e salvati su questo dispositivo: disponibili offline.', mineCount: '{n} parole · su misura', del: 'Elimina questo argomento', delOk: 'Conferma eliminazione',
    aiT: 'Crea un argomento su misura con l’IA', aiD: 'Scrivi qualsiasi argomento: lessico del golf, immobiliare, cucina thailandese… L’IA prepara 10 parole nella lingua scelta. Serve una connessione per crearlo, non per ripassarlo.', aiPh: 'Es.: lessico del golf', aiB: 'Crea l’argomento',
    aiSet: 'Impostazioni IA (chiave API)', aiKey: 'Nell’app installata, l’IA usa una chiave API Anthropic (console.anthropic.com). Resta salvata solo su questo dispositivo.', save: 'Salva', keyOk: 'Chiave salvata su questo dispositivo.', keyNone: 'Nessuna chiave salvata.', keyDel: 'Chiave eliminata.',
    offline: 'Al momento sei offline. Scegli un argomento della libreria integrata o riconnettiti per generare un argomento su misura.',
    aiWork: 'Creazione dell’argomento «{t}»… (può richiedere un minuto)', aiOk: 'Argomento creato e salvato su questo dispositivo: potrai ripassarlo offline.', aiNoSave: 'Argomento creato, ma questo dispositivo non è riuscito a salvarlo: andrà perso alla chiusura.',
    eKey: 'Aggiungi la tua chiave API in «Impostazioni IA» per creare argomenti.', eBad: 'La chiave API è stata rifiutata. Controllala in «Impostazioni IA».', eDeny: 'Hai rifiutato l’accesso a Claude per questa pagina. Ricaricala per riprovare.', eRate: 'Troppe richieste insieme. Riprova tra un minuto.', eFmt: 'L’IA ha restituito una lezione incompleta. Riprova o riformula l’argomento.', eGen: 'Creazione non riuscita (problema di connessione?). Riprova tra poco.',
    bLen: 'Durata della respirazione', vGuide: 'Voce che guida la respirazione', uiLang: 'Lingua dell’app',
    bT: 'Rilassarsi', bD: 'Metti le cuffie. Inspira quando il cerchio si allarga, espira quando si restringe.', inh: 'Inspira', exh: 'Espira', bSkip: 'Passa all’apprendimento',
    vIntro: 'Mettiti comodo. Chiudi gli occhi se vuoi. Inspira quando il cerchio si allarga ed espira piano quando si restringe.', vEnd: 'Molto bene. Mantieni questa calma. Passiamo alle parole.', vGood: 'Ottimo lavoro.', vOk: 'Buon lavoro. Rivedrai queste parole domani.',
    review: 'Da ripassare', listen: 'Ascolta la pronuncia', pron: 'si pronuncia', tip: 'Trucco per ricordare', prev: 'Indietro', next: 'Avanti', toQuiz: 'Vai al quiz',
    q: 'Domanda {i} / {n}', good: 'Risposte giuste: {n}', qHow: 'Come si dice «{w}»?', qEar: 'Ascolta: cosa significa questa parola?', relisten: 'Riascolta la parola', bravo: 'Bravo!', was: 'Era «{w}»', sure: 'Eri sicuro della risposta?', yes: 'Sì, sicuro', no: 'Non proprio',
    r100: 'Nessun errore!', r70: 'Ottima sessione', r40: 'Buon inizio', r0: 'Continuiamo domani', rScore: '{g} / {n} parole ricordate.', rConf: 'Sicurezza: eri sicuro nel {p} % delle risposte.', rCal: 'La tua sensazione era giusta {c} volte su {n}.', rMiss: 'Parole da ripassare', rRev: 'Ripassa le parole sbagliate', rHome: 'Torna alla home', rTom: 'Rifai il quiz domani: mettersi alla prova per più giorni di fila è ciò che fissa meglio le parole.',
    foot: 'Rilassamento guidato e memorizzazione per associazioni. Da ascoltare in cuffia, mai alla guida.',
    themes: ['Saluti e cortesia', 'Ristorante e cucina', 'Viaggi e aeroporto', 'Emergenze e salute', 'Spesa e negozi', 'Famiglia', 'Casa', 'Lavoro e affari', 'Meteo e stagioni', 'Numeri da 1 a 10']
};
MEAN.it = `ciao|arrivederci|grazie|per favore|scusa|sì|no|buonanotte|l'amico|come stai?
il conto|l'acqua|il caffè|il pane|la forchetta|il coltello|il bicchiere|il vino|la torta|il piatto
l'aereo|il passaporto|la valigia|il biglietto|la stazione|il treno|il taxi|la mappa|la spiaggia|l'albergo
il medico|l'ospedale|la farmacia|aiuto!|la polizia|mi fa male|la febbre|l'ambulanza|il dentista|malato
i soldi|il prezzo|il negozio|la mela|il latte|la borsa|la carta bancaria|il mercato|l'uovo|il formaggio
la madre|il padre|il fratello|la sorella|il bambino|il neonato|la nonna|il nonno|il marito|la moglie
la casa|la porta|la finestra|il letto|la sedia|la chiave|la cucina|il bagno|la lampada|il divano
il lavoro|la riunione|il computer|il telefono|l'e-mail|il contratto|il capo|l'appuntamento|lo stipendio|l'ufficio
il sole|la pioggia|la neve|il vento|caldo|freddo|la nuvola|il temporale|l'inverno|l'estate
uno|due|tre|quattro|cinque|sei|sette|otto|nove|dieci`;

UI.pt = {
    home: 'Voltar ao início', on: 'Online', off: 'Offline', vol: 'Volume do som de fundo', snd: 'Som de fundo', sndOn: 'Som ligado', sndOff: 'Som desligado',
    s1: '1 · Relaxar', s2: '2 · Aprender', s3: '3 · Testar-se',
    your: 'A tua sessão', sub: '{n} palavras · cerca de 10 minutos', start: 'Começar a sessão', skip: 'Ir diretamente aos cartões',
    rev1: 'A palavra que falhaste da última vez aparece primeiro.', revN: 'As {n} palavras que falhaste da última vez aparecem primeiro.',
    hLang: '1. Língua a aprender', hTheme: '2. Tema', themeNote: 'Biblioteca integrada: funciona sem ligação.', w10: '10 palavras', toRev: '{n} para rever',
    hMine: 'Os meus temas personalizados', mineNote: 'Criados com IA e guardados neste dispositivo: disponíveis offline.', mineCount: '{n} palavras · personalizado', del: 'Apagar este tema', delOk: 'Confirmar eliminação',
    aiT: 'Criar um tema personalizado com IA', aiD: 'Escreve qualquer tema: vocabulário de golfe, imobiliário, cozinha tailandesa… A IA prepara 10 palavras na língua escolhida. Precisas de ligação para criar o tema, não para o rever.', aiPh: 'Ex.: vocabulário de golfe', aiB: 'Criar o tema',
    aiSet: 'Definições da IA (chave de API)', aiKey: 'Na app instalada, a IA usa uma chave de API da Anthropic (console.anthropic.com). Fica guardada apenas neste dispositivo.', save: 'Guardar', keyOk: 'Chave guardada neste dispositivo.', keyNone: 'Nenhuma chave guardada.', keyDel: 'Chave apagada.',
    offline: 'Estás offline neste momento. Escolhe um tema da biblioteca integrada ou volta a ligar-te para gerar um tema personalizado.',
    aiWork: 'A criar o tema «{t}»… (pode demorar um minuto)', aiOk: 'Tema criado e guardado neste dispositivo: podes revê-lo offline.', aiNoSave: 'Tema criado, mas este dispositivo não o conseguiu guardar: perde-se ao fechar.',
    eKey: 'Adiciona a tua chave de API em «Definições da IA» para criar temas.', eBad: 'A chave de API foi recusada. Verifica-a em «Definições da IA».', eDeny: 'Recusaste o acesso ao Claude para esta página. Recarrega-a para tentar de novo.', eRate: 'Demasiados pedidos de uma vez. Tenta de novo daqui a um minuto.', eFmt: 'A IA devolveu uma lição incompleta. Tenta de novo ou reformula o tema.', eGen: 'A criação falhou (problema de ligação?). Tenta de novo daqui a pouco.',
    bLen: 'Duração da respiração', vGuide: 'Voz que guia a respiração', uiLang: 'Língua da app',
    bT: 'Relaxar', bD: 'Põe os auscultadores. Inspira quando o círculo cresce, expira quando diminui.', inh: 'Inspira', exh: 'Expira', bSkip: 'Passar à aprendizagem',
    vIntro: 'Põe-te confortável. Fecha os olhos se quiseres. Inspira quando o círculo cresce e expira devagar quando diminui.', vEnd: 'Muito bem. Mantém esta calma. Vamos às palavras.', vGood: 'Muito bem feito.', vOk: 'Bom trabalho. Vais rever estas palavras amanhã.',
    review: 'Para rever', listen: 'Ouvir a pronúncia', pron: 'pronuncia-se', tip: 'Dica para memorizar', prev: 'Anterior', next: 'Seguinte', toQuiz: 'Ir para o quiz',
    q: 'Pergunta {i} / {n}', good: 'Respostas certas: {n}', qHow: 'Como se diz «{w}»?', qEar: 'Ouve: o que significa esta palavra?', relisten: 'Ouvir a palavra outra vez', bravo: 'Muito bem!', was: 'Era «{w}»', sure: 'Tinhas a certeza da resposta?', yes: 'Sim, tinha', no: 'Nem por isso',
    r100: 'Sem erros!', r70: 'Ótima sessão', r40: 'Bom começo', r0: 'Continuamos amanhã', rScore: '{g} / {n} palavras lembradas.', rConf: 'Confiança: tinhas a certeza em {p} % das respostas.', rCal: 'A tua impressão estava certa {c} vezes em {n}.', rMiss: 'Palavras para rever', rRev: 'Rever as palavras falhadas', rHome: 'Voltar ao início', rTom: 'Repete o quiz amanhã: testar-se vários dias seguidos é o que melhor fixa as palavras.',
    foot: 'Relaxamento guiado e memorização por associações. Ouvir com auscultadores, nunca a conduzir.',
    themes: ['Cumprimentos e cortesia', 'Restaurante e cozinha', 'Viagem e aeroporto', 'Urgências e saúde', 'Compras e lojas', 'Família', 'Casa', 'Trabalho e negócios', 'Tempo e estações', 'Números de 1 a 10']
};
MEAN.pt = `olá|adeus|obrigado|por favor|desculpa|sim|não|boa noite|o amigo|como estás?
a conta|a água|o café|o pão|o garfo|a faca|o copo|o vinho|o bolo|o prato
o avião|o passaporte|a mala|o bilhete|a estação|o comboio|o táxi|o mapa|a praia|o hotel
o médico|o hospital|a farmácia|socorro!|a polícia|dói-me|a febre|a ambulância|o dentista|doente
o dinheiro|o preço|a loja|a maçã|o leite|o saco|o cartão bancário|o mercado|o ovo|o queijo
a mãe|o pai|o irmão|a irmã|a criança|o bebé|a avó|o avô|o marido|a esposa
a casa|a porta|a janela|a cama|a cadeira|a chave|a cozinha|a casa de banho|o candeeiro|o sofá
o trabalho|a reunião|o computador|o telefone|o e-mail|o contrato|o chefe|a marcação|o salário|o escritório
o sol|a chuva|a neve|o vento|quente|frio|a nuvem|a trovoada|o inverno|o verão
um|dois|três|quatro|cinco|seis|sete|oito|nove|dez`;

UI.nl = {
    home: 'Terug naar start', on: 'Online', off: 'Offline', vol: 'Volume achtergrondgeluid', snd: 'Achtergrondgeluid', sndOn: 'Geluid aan', sndOff: 'Geluid uit',
    s1: '1 · Tot rust komen', s2: '2 · Leren', s3: '3 · Jezelf testen',
    your: 'Jouw sessie', sub: '{n} woorden · ongeveer 10 minuten', start: 'Sessie starten', skip: 'Direct naar de kaarten',
    rev1: 'Het woord dat je vorige keer fout had, komt eerst.', revN: 'De {n} woorden die je vorige keer fout had, komen eerst.',
    hLang: '1. Taal om te leren', hTheme: '2. Onderwerp', themeNote: 'Ingebouwde bibliotheek: werkt offline.', w10: '10 woorden', toRev: '{n} herhalen',
    hMine: 'Mijn eigen onderwerpen', mineNote: 'Gemaakt met AI en bewaard op dit apparaat: offline beschikbaar.', mineCount: '{n} woorden · eigen onderwerp', del: 'Dit onderwerp verwijderen', delOk: 'Verwijderen bevestigen',
    aiT: 'Eigen onderwerp maken met AI', aiD: 'Typ een willekeurig onderwerp: golfwoorden, vastgoed, Thaise keuken… De AI maakt 10 woorden in de gekozen taal. Je hebt internet nodig om het te maken, niet om het te herhalen.', aiPh: 'Bijv. golfwoorden', aiB: 'Onderwerp maken',
    aiSet: 'AI-instellingen (API-sleutel)', aiKey: 'In de geïnstalleerde app gebruikt de AI een Anthropic API-sleutel (console.anthropic.com). Die wordt alleen op dit apparaat bewaard.', save: 'Opslaan', keyOk: 'Sleutel opgeslagen op dit apparaat.', keyNone: 'Geen sleutel opgeslagen.', keyDel: 'Sleutel verwijderd.',
    offline: 'Je bent momenteel offline. Kies een onderwerp uit de ingebouwde bibliotheek of maak opnieuw verbinding om een eigen onderwerp te maken.',
    aiWork: 'Onderwerp ‘{t}’ wordt gemaakt… (kan een minuut duren)', aiOk: 'Onderwerp gemaakt en opgeslagen op dit apparaat: je kunt het offline herhalen.', aiNoSave: 'Onderwerp gemaakt, maar dit apparaat kon het niet opslaan: het gaat verloren bij afsluiten.',
    eKey: 'Voeg je API-sleutel toe in ‘AI-instellingen’ om onderwerpen te maken.', eBad: 'De API-sleutel is geweigerd. Controleer hem in ‘AI-instellingen’.', eDeny: 'Je hebt Claude geen toegang gegeven voor deze pagina. Laad haar opnieuw om het nog eens te proberen.', eRate: 'Te veel verzoeken tegelijk. Probeer het over een minuut opnieuw.', eFmt: 'De AI gaf een onvolledige les. Probeer opnieuw of formuleer het onderwerp anders.', eGen: 'Maken mislukt (verbindingsprobleem?). Probeer het zo opnieuw.',
    bLen: 'Duur van de ademhaling', vGuide: 'Stem die de ademhaling begeleidt', uiLang: 'Taal van de app',
    bT: 'Tot rust komen', bD: 'Zet je koptelefoon op. Adem in als de cirkel groeit, adem uit als hij kleiner wordt.', inh: 'Inademen', exh: 'Uitademen', bSkip: 'Door naar het leren',
    vIntro: 'Ga lekker zitten. Sluit je ogen als je wilt. Adem in als de cirkel groeit en adem rustig uit als hij kleiner wordt.', vEnd: 'Heel goed. Houd deze rust vast. Nu de woorden.', vGood: 'Heel goed gedaan.', vOk: 'Goed gewerkt. Morgen zie je deze woorden terug.',
    review: 'Herhalen', listen: 'Uitspraak beluisteren', pron: 'uitspraak', tip: 'Ezelsbruggetje', prev: 'Vorige', next: 'Volgende', toQuiz: 'Naar de quiz',
    q: 'Vraag {i} / {n}', good: 'Goede antwoorden: {n}', qHow: 'Hoe zeg je ‘{w}’?', qEar: 'Luister: wat betekent dit woord?', relisten: 'Woord opnieuw horen', bravo: 'Goed zo!', was: 'Het was ‘{w}’', sure: 'Was je zeker van je antwoord?', yes: 'Ja, zeker', no: 'Niet echt',
    r100: 'Foutloos!', r70: 'Heel goede sessie', r40: 'Goed begin', r0: 'Morgen verder', rScore: '{g} / {n} woorden onthouden.', rConf: 'Zekerheid: je was zeker bij {p}% van de antwoorden.', rCal: 'Je gevoel klopte {c} van de {n} keer.', rMiss: 'Woorden om te herhalen', rRev: 'Foute woorden herhalen', rHome: 'Terug naar start', rTom: 'Doe de quiz morgen opnieuw: een paar dagen achter elkaar oefenen zet de woorden het best vast.',
    foot: 'Begeleide ontspanning en onthouden via associaties. Luister met een koptelefoon, nooit tijdens het rijden.',
    themes: ['Begroeten en beleefdheid', 'Restaurant en eten', 'Reizen en luchthaven', 'Noodgevallen en gezondheid', 'Boodschappen en winkels', 'Familie', 'Thuis', 'Werk en zaken', 'Weer en seizoenen', 'Getallen van 1 tot 10']
};
MEAN.nl = `hallo|tot ziens|dank je|alsjeblieft|sorry|ja|nee|welterusten|de vriend|hoe gaat het?
de rekening|het water|de koffie|het brood|de vork|het mes|het glas|de wijn|de taart|het bord
het vliegtuig|het paspoort|de koffer|het kaartje|het station|de trein|de taxi|de kaart|het strand|het hotel
de dokter|het ziekenhuis|de apotheek|help!|de politie|het doet pijn|de koorts|de ambulance|de tandarts|ziek
het geld|de prijs|de winkel|de appel|de melk|de tas|de bankpas|de markt|het ei|de kaas
de moeder|de vader|de broer|de zus|het kind|de baby|de oma|de opa|de man|de vrouw
het huis|de deur|het raam|het bed|de stoel|de sleutel|de keuken|de badkamer|de lamp|de bank
het werk|de vergadering|de computer|de telefoon|de e-mail|het contract|de baas|de afspraak|het salaris|het kantoor
de zon|de regen|de sneeuw|de wind|warm|koud|de wolk|het onweer|de winter|de zomer
een|twee|drie|vier|vijf|zes|zeven|acht|negen|tien`;

UI.pl = {
    home: 'Powrót do startu', on: 'Online', off: 'Offline', vol: 'Głośność dźwięku w tle', snd: 'Dźwięk w tle', sndOn: 'Dźwięk włączony', sndOff: 'Dźwięk wyłączony',
    s1: '1 · Wycisz się', s2: '2 · Ucz się', s3: '3 · Sprawdź się',
    your: 'Twoja sesja', sub: '{n} słów · około 10 minut', start: 'Rozpocznij sesję', skip: 'Przejdź od razu do kart',
    rev1: 'Słowo, którego ostatnio nie znałeś, będzie pierwsze.', revN: 'Słowa, których ostatnio nie znałeś ({n}), będą pierwsze.',
    hLang: '1. Język do nauki', hTheme: '2. Temat', themeNote: 'Wbudowana biblioteka: działa offline.', w10: '10 słów', toRev: '{n} do powtórki',
    hMine: 'Moje własne tematy', mineNote: 'Utworzone przez AI i zapisane na tym urządzeniu: dostępne offline.', mineCount: '{n} słów · własny temat', del: 'Usuń ten temat', delOk: 'Potwierdź usunięcie',
    aiT: 'Utwórz własny temat z AI', aiD: 'Wpisz dowolny temat: słownictwo golfowe, nieruchomości, kuchnia tajska… AI przygotuje 10 słów w wybranym języku. Do utworzenia tematu potrzebny jest internet, do powtórki nie.', aiPh: 'Np. słownictwo golfowe', aiB: 'Utwórz temat',
    aiSet: 'Ustawienia AI (klucz API)', aiKey: 'W zainstalowanej aplikacji AI korzysta z klucza API Anthropic (console.anthropic.com). Jest zapisany tylko na tym urządzeniu.', save: 'Zapisz', keyOk: 'Klucz zapisany na tym urządzeniu.', keyNone: 'Brak zapisanego klucza.', keyDel: 'Klucz usunięty.',
    offline: 'Jesteś teraz offline. Wybierz temat z wbudowanej biblioteki albo połącz się ponownie, aby utworzyć własny temat.',
    aiWork: 'Tworzenie tematu „{t}”… (może to potrwać minutę)', aiOk: 'Temat utworzony i zapisany na tym urządzeniu: możesz go powtarzać offline.', aiNoSave: 'Temat utworzony, ale urządzenie nie mogło go zapisać: zniknie po zamknięciu.',
    eKey: 'Dodaj swój klucz API w „Ustawieniach AI”, aby tworzyć tematy.', eBad: 'Klucz API został odrzucony. Sprawdź go w „Ustawieniach AI”.', eDeny: 'Odmówiłeś Claude dostępu do tej strony. Odśwież ją, aby spróbować ponownie.', eRate: 'Zbyt wiele próśb naraz. Spróbuj ponownie za minutę.', eFmt: 'AI zwróciła niepełną lekcję. Spróbuj ponownie lub zmień opis tematu.', eGen: 'Tworzenie nie powiodło się (problem z połączeniem?). Spróbuj za chwilę.',
    bLen: 'Czas oddychania', vGuide: 'Głos prowadzący oddech', uiLang: 'Język aplikacji',
    bT: 'Wycisz się', bD: 'Załóż słuchawki. Wdech, gdy koło rośnie, wydech, gdy się zmniejsza.', inh: 'Wdech', exh: 'Wydech', bSkip: 'Przejdź do nauki',
    vIntro: 'Usiądź wygodnie. Zamknij oczy, jeśli chcesz. Weź wdech, gdy koło rośnie, i powoli wydychaj, gdy się zmniejsza.', vEnd: 'Bardzo dobrze. Zachowaj ten spokój. Teraz słowa.', vGood: 'Świetna robota.', vOk: 'Dobra robota. Jutro zobaczysz te słowa ponownie.',
    review: 'Do powtórki', listen: 'Posłuchaj wymowy', pron: 'wymowa', tip: 'Sposób na zapamiętanie', prev: 'Wstecz', next: 'Dalej', toQuiz: 'Przejdź do quizu',
    q: 'Pytanie {i} / {n}', good: 'Dobre odpowiedzi: {n}', qHow: 'Jak się mówi „{w}”?', qEar: 'Posłuchaj: co znaczy to słowo?', relisten: 'Posłuchaj słowa jeszcze raz', bravo: 'Brawo!', was: 'To było „{w}”', sure: 'Byłeś pewny odpowiedzi?', yes: 'Tak, pewny', no: 'Nie bardzo',
    r100: 'Bez błędów!', r70: 'Bardzo dobra sesja', r40: 'Dobry początek', r0: 'Kontynuujemy jutro', rScore: '{g} / {n} zapamiętanych słów.', rConf: 'Pewność: byłeś pewny przy {p}% odpowiedzi.', rCal: 'Twoje odczucie było trafne {c} razy na {n}.', rMiss: 'Słowa do powtórki', rRev: 'Powtórz błędne słowa', rHome: 'Powrót do startu', rTom: 'Zrób quiz jutro jeszcze raz: sprawdzanie się kilka dni z rzędu najlepiej utrwala słowa.',
    foot: 'Prowadzony relaks i zapamiętywanie przez skojarzenia. Słuchaj w słuchawkach, nigdy podczas jazdy.',
    themes: ['Powitania i grzeczności', 'Restauracja i jedzenie', 'Podróż i lotnisko', 'Nagłe wypadki i zdrowie', 'Zakupy i sklepy', 'Rodzina', 'Dom', 'Praca i biznes', 'Pogoda i pory roku', 'Liczby od 1 do 10']
};
MEAN.pl = `cześć|do widzenia|dziękuję|proszę|przepraszam|tak|nie|dobranoc|przyjaciel|jak się masz?
rachunek|woda|kawa|chleb|widelec|nóż|szklanka|wino|ciasto|talerz
samolot|paszport|walizka|bilet|dworzec|pociąg|taksówka|mapa|plaża|hotel
lekarz|szpital|apteka|pomocy!|policja|boli mnie|gorączka|karetka|dentysta|chory
pieniądze|cena|sklep|jabłko|mleko|torba|karta bankowa|targ|jajko|ser
matka|ojciec|brat|siostra|dziecko|niemowlę|babcia|dziadek|mąż|żona
dom|drzwi|okno|łóżko|krzesło|klucz|kuchnia|łazienka|lampa|kanapa
praca|zebranie|komputer|telefon|e-mail|umowa|szef|spotkanie|pensja|biuro
słońce|deszcz|śnieg|wiatr|gorąco|zimno|chmura|burza|zima|lato
jeden|dwa|trzy|cztery|pięć|sześć|siedem|osiem|dziewięć|dziesięć`;

UI.sv = {
    home: 'Tillbaka till start', on: 'Online', off: 'Offline', vol: 'Volym för bakgrundsljud', snd: 'Bakgrundsljud', sndOn: 'Ljud på', sndOff: 'Ljud av',
    s1: '1 · Landa', s2: '2 · Lär dig', s3: '3 · Testa dig',
    your: 'Din session', sub: '{n} ord · cirka 10 minuter', start: 'Starta sessionen', skip: 'Gå direkt till korten',
    rev1: 'Ordet du missade förra gången kommer först.', revN: 'De {n} ord du missade förra gången kommer först.',
    hLang: '1. Språk att lära sig', hTheme: '2. Ämne', themeNote: 'Inbyggt bibliotek: fungerar offline.', w10: '10 ord', toRev: '{n} att repetera',
    hMine: 'Mina egna ämnen', mineNote: 'Skapade med AI och sparade på den här enheten: tillgängliga offline.', mineCount: '{n} ord · eget ämne', del: 'Ta bort ämnet', delOk: 'Bekräfta borttagning',
    aiT: 'Skapa ett eget ämne med AI', aiD: 'Skriv vilket ämne som helst: golford, fastigheter, thailändsk mat… AI:n förbereder 10 ord på det valda språket. Du behöver internet för att skapa ämnet, inte för att repetera det.', aiPh: 'T.ex. golford', aiB: 'Skapa ämnet',
    aiSet: 'AI-inställningar (API-nyckel)', aiKey: 'I den installerade appen använder AI:n en API-nyckel från Anthropic (console.anthropic.com). Den sparas bara på den här enheten.', save: 'Spara', keyOk: 'Nyckeln sparad på den här enheten.', keyNone: 'Ingen nyckel sparad.', keyDel: 'Nyckeln borttagen.',
    offline: 'Du är offline just nu. Välj ett ämne i det inbyggda biblioteket eller anslut igen för att skapa ett eget ämne.',
    aiWork: 'Skapar ämnet ”{t}”… (kan ta en minut)', aiOk: 'Ämnet är skapat och sparat på den här enheten: du kan repetera det offline.', aiNoSave: 'Ämnet är skapat, men enheten kunde inte spara det: det försvinner när du stänger appen.',
    eKey: 'Lägg till din API-nyckel under ”AI-inställningar” för att skapa ämnen.', eBad: 'API-nyckeln nekades. Kontrollera den under ”AI-inställningar”.', eDeny: 'Du nekade Claude åtkomst för den här sidan. Ladda om den för att försöka igen.', eRate: 'För många förfrågningar på en gång. Försök igen om en minut.', eFmt: 'AI:n gav en ofullständig lektion. Försök igen eller formulera om ämnet.', eGen: 'Det gick inte att skapa (anslutningsproblem?). Försök igen om en stund.',
    bLen: 'Andningens längd', vGuide: 'Röst som leder andningen', uiLang: 'Appens språk',
    bT: 'Landa', bD: 'Sätt på dig hörlurarna. Andas in när cirkeln växer och ut när den krymper.', inh: 'Andas in', exh: 'Andas ut', bSkip: 'Gå vidare till inlärningen',
    vIntro: 'Sätt dig bekvämt. Blunda om du vill. Andas in när cirkeln växer och andas ut långsamt när den krymper.', vEnd: 'Mycket bra. Behåll lugnet. Nu kommer orden.', vGood: 'Mycket bra jobbat.', vOk: 'Bra jobbat. Du ser de här orden igen i morgon.',
    review: 'Repetera', listen: 'Lyssna på uttalet', pron: 'uttalas', tip: 'Minnesknep', prev: 'Föregående', next: 'Nästa', toQuiz: 'Till quizet',
    q: 'Fråga {i} / {n}', good: 'Rätt svar: {n}', qHow: 'Hur säger man ”{w}”?', qEar: 'Lyssna: vad betyder ordet?', relisten: 'Hör ordet igen', bravo: 'Bra!', was: 'Det var ”{w}”', sure: 'Var du säker på ditt svar?', yes: 'Ja, säker', no: 'Inte riktigt',
    r100: 'Felfritt!', r70: 'Mycket bra session', r40: 'Bra början', r0: 'Vi fortsätter i morgon', rScore: '{g} / {n} ord ihågkomna.', rConf: 'Säkerhet: du var säker på {p} % av svaren.', rCal: 'Din känsla stämde {c} av {n} gånger.', rMiss: 'Ord att repetera', rRev: 'Repetera missade ord', rHome: 'Tillbaka till start', rTom: 'Gör quizet igen i morgon: att testa sig flera dagar i rad är det som bäst fäster orden.',
    foot: 'Guidad avslappning och minne genom associationer. Lyssna i hörlurar, aldrig när du kör.',
    themes: ['Hälsningar och artighet', 'Restaurang och mat', 'Resor och flygplats', 'Nödsituationer och hälsa', 'Handla', 'Familj', 'Hemmet', 'Arbete och affärer', 'Väder och årstider', 'Siffror 1 till 10']
};
MEAN.sv = `hej|hej då|tack|snälla|förlåt|ja|nej|god natt|vän|hur mår du?
notan|vatten|kaffe|bröd|gaffel|kniv|glas|vin|tårta|tallrik
flygplan|pass|resväska|biljett|station|tåg|taxi|karta|strand|hotell
läkare|sjukhus|apotek|hjälp!|polis|det gör ont|feber|ambulans|tandläkare|sjuk
pengar|pris|affär|äpple|mjölk|påse|bankkort|marknad|ägg|ost
mamma|pappa|bror|syster|barn|bebis|mormor|morfar|make|fru
hus|dörr|fönster|säng|stol|nyckel|kök|badrum|lampa|soffa
arbete|möte|dator|telefon|mejl|kontrakt|chef|bokad tid|lön|kontor
sol|regn|snö|vind|varmt|kallt|moln|åska|vinter|sommar
ett|två|tre|fyra|fem|sex|sju|åtta|nio|tio`;

UI.ru = {
    home: 'На главную', on: 'В сети', off: 'Не в сети', vol: 'Громкость фонового звука', snd: 'Фоновый звук', sndOn: 'Звук включён', sndOff: 'Звук выключен',
    s1: '1 · Расслабиться', s2: '2 · Учить', s3: '3 · Проверить себя',
    your: 'Твоё занятие', sub: 'Слов: {n} · около 10 минут', start: 'Начать занятие', skip: 'Сразу к карточкам',
    rev1: 'Слово, в котором ты ошибся в прошлый раз, будет первым.', revN: 'Слова с ошибками из прошлого раза ({n}) будут первыми.',
    hLang: '1. Язык для изучения', hTheme: '2. Тема', themeNote: 'Встроенная библиотека: работает без интернета.', w10: '10 слов', toRev: 'Повторить: {n}',
    hMine: 'Мои темы', mineNote: 'Созданы с ИИ и сохранены на этом устройстве: доступны без интернета.', mineCount: 'Слов: {n} · своя тема', del: 'Удалить тему', delOk: 'Подтвердить удаление',
    aiT: 'Создать свою тему с ИИ', aiD: 'Введи любую тему: гольф, недвижимость, тайская кухня… ИИ подготовит 10 слов на выбранном языке. Интернет нужен для создания темы, но не для повторения.', aiPh: 'Напр.: лексика гольфа', aiB: 'Создать тему',
    aiSet: 'Настройки ИИ (ключ API)', aiKey: 'В установленном приложении ИИ использует ключ API Anthropic (console.anthropic.com). Он хранится только на этом устройстве.', save: 'Сохранить', keyOk: 'Ключ сохранён на этом устройстве.', keyNone: 'Ключ не сохранён.', keyDel: 'Ключ удалён.',
    offline: 'Сейчас ты не в сети. Выбери тему из встроенной библиотеки или подключись снова, чтобы создать свою тему.',
    aiWork: 'Создаю тему «{t}»… (может занять минуту)', aiOk: 'Тема создана и сохранена на устройстве: её можно повторять без интернета.', aiNoSave: 'Тема создана, но устройство не смогло её сохранить: она исчезнет при закрытии.',
    eKey: 'Добавь ключ API в «Настройках ИИ», чтобы создавать темы.', eBad: 'Ключ API отклонён. Проверь его в «Настройках ИИ».', eDeny: 'Ты запретил доступ к Claude для этой страницы. Перезагрузи её, чтобы попробовать снова.', eRate: 'Слишком много запросов сразу. Попробуй через минуту.', eFmt: 'ИИ вернул неполный урок. Попробуй снова или переформулируй тему.', eGen: 'Не удалось создать тему (проблема со связью?). Попробуй чуть позже.',
    bLen: 'Длительность дыхания', vGuide: 'Голос, ведущий дыхание', uiLang: 'Язык приложения',
    bT: 'Расслабиться', bD: 'Надень наушники. Вдыхай, когда круг растёт, выдыхай, когда он уменьшается.', inh: 'Вдох', exh: 'Выдох', bSkip: 'Перейти к обучению',
    vIntro: 'Устройся поудобнее. Закрой глаза, если хочешь. Вдыхай, когда круг растёт, и медленно выдыхай, когда он уменьшается.', vEnd: 'Очень хорошо. Сохрани это спокойствие. Переходим к словам.', vGood: 'Отличная работа.', vOk: 'Хорошая работа. Завтра ты снова увидишь эти слова.',
    review: 'Повторить', listen: 'Послушать произношение', pron: 'произношение', tip: 'Подсказка для запоминания', prev: 'Назад', next: 'Далее', toQuiz: 'К тесту',
    q: 'Вопрос {i} / {n}', good: 'Верных ответов: {n}', qHow: 'Как сказать «{w}»?', qEar: 'Послушай: что значит это слово?', relisten: 'Послушать слово ещё раз', bravo: 'Молодец!', was: 'Правильно: «{w}»', sure: 'Ты был уверен в ответе?', yes: 'Да, уверен', no: 'Не очень',
    r100: 'Без ошибок!', r70: 'Отличное занятие', r40: 'Хорошее начало', r0: 'Продолжим завтра', rScore: 'Запомнено слов: {g} из {n}.', rConf: 'Уверенность: ты был уверен в {p} % ответов.', rCal: 'Твоё ощущение было верным {c} раз из {n}.', rMiss: 'Слова для повторения', rRev: 'Повторить слова с ошибками', rHome: 'На главную', rTom: 'Пройди тест завтра ещё раз: проверка несколько дней подряд лучше всего закрепляет слова.',
    foot: 'Расслабление с голосом и запоминание через ассоциации. Слушай в наушниках, никогда за рулём.',
    themes: ['Приветствия и вежливость', 'Ресторан и еда', 'Путешествия и аэропорт', 'Срочная помощь и здоровье', 'Покупки и магазины', 'Семья', 'Дом', 'Работа и бизнес', 'Погода и времена года', 'Числа от 1 до 10']
};
MEAN.ru = `здравствуйте|до свидания|спасибо|пожалуйста|извините|да|нет|спокойной ночи|друг|как дела?
счёт|вода|кофе|хлеб|вилка|нож|стакан|вино|торт|тарелка
самолёт|паспорт|чемодан|билет|вокзал|поезд|такси|карта|пляж|гостиница
врач|больница|аптека|помогите!|полиция|мне больно|температура|скорая помощь|стоматолог|больной
деньги|цена|магазин|яблоко|молоко|сумка|банковская карта|рынок|яйцо|сыр
мать|отец|брат|сестра|ребёнок|малыш|бабушка|дедушка|муж|жена
дом|дверь|окно|кровать|стул|ключ|кухня|ванная|лампа|диван
работа|совещание|компьютер|телефон|эл. почта|контракт|начальник|встреча|зарплата|офис
солнце|дождь|снег|ветер|жарко|холодно|облако|гроза|зима|лето
один|два|три|четыре|пять|шесть|семь|восемь|девять|десять`;

UI.uk = {
    home: 'На головну', on: 'Онлайн', off: 'Офлайн', vol: 'Гучність фонового звуку', snd: 'Фоновий звук', sndOn: 'Звук увімкнено', sndOff: 'Звук вимкнено',
    s1: '1 · Розслабитися', s2: '2 · Вчити', s3: '3 · Перевірити себе',
    your: 'Твоє заняття', sub: 'Слів: {n} · близько 10 хвилин', start: 'Почати заняття', skip: 'Одразу до карток',
    rev1: 'Слово, у якому ти помилився минулого разу, буде першим.', revN: 'Слова з помилками минулого разу ({n}) будуть першими.',
    hLang: '1. Мова для вивчення', hTheme: '2. Тема', themeNote: 'Вбудована бібліотека: працює без інтернету.', w10: '10 слів', toRev: 'Повторити: {n}',
    hMine: 'Мої теми', mineNote: 'Створені з ШІ та збережені на цьому пристрої: доступні офлайн.', mineCount: 'Слів: {n} · своя тема', del: 'Видалити тему', delOk: 'Підтвердити видалення',
    aiT: 'Створити свою тему з ШІ', aiD: 'Введи будь-яку тему: гольф, нерухомість, тайська кухня… ШІ підготує 10 слів обраною мовою. Інтернет потрібен для створення теми, але не для повторення.', aiPh: 'Напр.: лексика гольфу', aiB: 'Створити тему',
    aiSet: 'Налаштування ШІ (ключ API)', aiKey: 'У встановленому застосунку ШІ використовує ключ API Anthropic (console.anthropic.com). Він зберігається лише на цьому пристрої.', save: 'Зберегти', keyOk: 'Ключ збережено на цьому пристрої.', keyNone: 'Ключ не збережено.', keyDel: 'Ключ видалено.',
    offline: 'Зараз ти офлайн. Обери тему з вбудованої бібліотеки або підключися знову, щоб створити свою тему.',
    aiWork: 'Створюю тему «{t}»… (може тривати хвилину)', aiOk: 'Тему створено й збережено на пристрої: її можна повторювати офлайн.', aiNoSave: 'Тему створено, але пристрій не зміг її зберегти: вона зникне після закриття.',
    eKey: 'Додай ключ API в «Налаштуваннях ШІ», щоб створювати теми.', eBad: 'Ключ API відхилено. Перевір його в «Налаштуваннях ШІ».', eDeny: 'Ти заборонив доступ до Claude для цієї сторінки. Перезавантаж її, щоб спробувати знову.', eRate: 'Забагато запитів одночасно. Спробуй за хвилину.', eFmt: 'ШІ повернув неповний урок. Спробуй ще раз або переформулюй тему.', eGen: 'Не вдалося створити тему (проблема зі зв’язком?). Спробуй трохи згодом.',
    bLen: 'Тривалість дихання', vGuide: 'Голос, що веде дихання', uiLang: 'Мова застосунку',
    bT: 'Розслабитися', bD: 'Одягни навушники. Вдихай, коли коло росте, видихай, коли воно зменшується.', inh: 'Вдих', exh: 'Видих', bSkip: 'Перейти до навчання',
    vIntro: 'Влаштуйся зручно. Заплющ очі, якщо хочеш. Вдихай, коли коло росте, і повільно видихай, коли воно зменшується.', vEnd: 'Дуже добре. Збережи цей спокій. Переходимо до слів.', vGood: 'Чудова робота.', vOk: 'Гарна робота. Завтра ти знову побачиш ці слова.',
    review: 'Повторити', listen: 'Послухати вимову', pron: 'вимова', tip: 'Підказка для запам’ятовування', prev: 'Назад', next: 'Далі', toQuiz: 'До тесту',
    q: 'Питання {i} / {n}', good: 'Правильних відповідей: {n}', qHow: 'Як сказати «{w}»?', qEar: 'Послухай: що означає це слово?', relisten: 'Послухати слово ще раз', bravo: 'Молодець!', was: 'Правильно: «{w}»', sure: 'Ти був упевнений у відповіді?', yes: 'Так, упевнений', no: 'Не дуже',
    r100: 'Без помилок!', r70: 'Чудове заняття', r40: 'Гарний початок', r0: 'Продовжимо завтра', rScore: 'Запам’ятовано слів: {g} з {n}.', rConf: 'Упевненість: ти був упевнений у {p} % відповідей.', rCal: 'Твоє відчуття було правильним {c} разів з {n}.', rMiss: 'Слова для повторення', rRev: 'Повторити слова з помилками', rHome: 'На головну', rTom: 'Пройди тест завтра ще раз: перевірка кілька днів поспіль найкраще закріплює слова.',
    foot: 'Розслаблення з голосом і запам’ятовування через асоціації. Слухай у навушниках, ніколи за кермом.',
    themes: ['Привітання і ввічливість', 'Ресторан і їжа', 'Подорожі та аеропорт', 'Невідкладна допомога і здоров’я', 'Покупки та магазини', 'Сім’я', 'Дім', 'Робота та бізнес', 'Погода та пори року', 'Числа від 1 до 10']
};
MEAN.uk = `привіт|до побачення|дякую|будь ласка|вибачте|так|ні|на добраніч|друг|як справи?
рахунок|вода|кава|хліб|виделка|ніж|склянка|вино|торт|тарілка
літак|паспорт|валіза|квиток|вокзал|потяг|таксі|мапа|пляж|готель
лікар|лікарня|аптека|допоможіть!|поліція|мені боляче|температура|швидка допомога|стоматолог|хворий
гроші|ціна|магазин|яблуко|молоко|сумка|банківська картка|ринок|яйце|сир
мати|батько|брат|сестра|дитина|немовля|бабуся|дідусь|чоловік|дружина
дім|двері|вікно|ліжко|стілець|ключ|кухня|ванна кімната|лампа|диван
робота|нарада|комп’ютер|телефон|електронна пошта|контракт|начальник|зустріч|зарплата|офіс
сонце|дощ|сніг|вітер|спекотно|холодно|хмара|гроза|зима|літо
один|два|три|чотири|п’ять|шість|сім|вісім|дев’ять|десять`;

UI.tr = {
    home: 'Ana sayfaya dön', on: 'Çevrimiçi', off: 'Çevrimdışı', vol: 'Arka plan sesi düzeyi', snd: 'Arka plan sesi', sndOn: 'Ses açık', sndOff: 'Ses kapalı',
    s1: '1 · Sakinleş', s2: '2 · Öğren', s3: '3 · Kendini sına',
    your: 'Oturumun', sub: '{n} kelime · yaklaşık 10 dakika', start: 'Oturumu başlat', skip: 'Doğrudan kartlara geç',
    rev1: 'Geçen sefer bilemediğin kelime önce gelir.', revN: 'Geçen sefer bilemediğin {n} kelime önce gelir.',
    hLang: '1. Öğrenilecek dil', hTheme: '2. Konu', themeNote: 'Yerleşik kütüphane: internetsiz çalışır.', w10: '10 kelime', toRev: '{n} tekrar',
    hMine: 'Kendi konularım', mineNote: 'Yapay zekâyla oluşturuldu ve bu cihazda saklanıyor: çevrimdışı kullanılabilir.', mineCount: '{n} kelime · özel', del: 'Bu konuyu sil', delOk: 'Silmeyi onayla',
    aiT: 'Yapay zekâyla özel konu oluştur', aiD: 'Herhangi bir konu yaz: golf terimleri, emlak, Tay mutfağı… Yapay zekâ seçilen dilde 10 kelime hazırlar. Konuyu oluşturmak için internet gerekir, tekrar etmek için gerekmez.', aiPh: 'Örn. golf terimleri', aiB: 'Konuyu oluştur',
    aiSet: 'Yapay zekâ ayarları (API anahtarı)', aiKey: 'Yüklü uygulamada yapay zekâ bir Anthropic API anahtarı kullanır (console.anthropic.com). Anahtar yalnızca bu cihazda saklanır.', save: 'Kaydet', keyOk: 'Anahtar bu cihaza kaydedildi.', keyNone: 'Kayıtlı anahtar yok.', keyDel: 'Anahtar silindi.',
    offline: 'Şu anda çevrimdışısın. Yerleşik kütüphaneden bir konu seç ya da özel konu oluşturmak için yeniden bağlan.',
    aiWork: '“{t}” konusu oluşturuluyor… (bir dakika sürebilir)', aiOk: 'Konu oluşturuldu ve bu cihaza kaydedildi: çevrimdışı tekrar edebilirsin.', aiNoSave: 'Konu oluşturuldu ama bu cihaz kaydedemedi: kapatınca kaybolacak.',
    eKey: 'Konu oluşturmak için API anahtarını “Yapay zekâ ayarları”na ekle.', eBad: 'API anahtarı reddedildi. “Yapay zekâ ayarları”ndan kontrol et.', eDeny: 'Bu sayfa için Claude erişimini reddettin. Yeniden denemek için sayfayı yenile.', eRate: 'Aynı anda çok fazla istek. Bir dakika sonra yeniden dene.', eFmt: 'Yapay zekâ eksik bir ders verdi. Yeniden dene ya da konuyu farklı yaz.', eGen: 'Oluşturma başarısız (bağlantı sorunu?). Birazdan yeniden dene.',
    bLen: 'Nefes süresi', vGuide: 'Nefese eşlik eden ses', uiLang: 'Uygulama dili',
    bT: 'Sakinleş', bD: 'Kulaklığını tak. Daire büyürken nefes al, küçülürken nefes ver.', inh: 'Nefes al', exh: 'Nefes ver', bSkip: 'Öğrenmeye geç',
    vIntro: 'Rahatça yerleş. İstersen gözlerini kapat. Daire büyürken nefes al, küçülürken yavaşça nefes ver.', vEnd: 'Çok güzel. Bu sakinliği koru. Şimdi kelimelere geçelim.', vGood: 'Çok iyi iş çıkardın.', vOk: 'İyi çalıştın. Bu kelimeleri yarın yeniden göreceksin.',
    review: 'Tekrar', listen: 'Telaffuzu dinle', pron: 'okunuşu', tip: 'Akılda tutma ipucu', prev: 'Geri', next: 'İleri', toQuiz: 'Teste geç',
    q: 'Soru {i} / {n}', good: 'Doğru cevap: {n}', qHow: '“{w}” nasıl söylenir?', qEar: 'Dinle: bu kelime ne demek?', relisten: 'Kelimeyi yeniden dinle', bravo: 'Aferin!', was: 'Doğrusu “{w}”', sure: 'Cevabından emin miydin?', yes: 'Evet, emindim', no: 'Pek değil',
    r100: 'Hatasız!', r70: 'Çok iyi oturum', r40: 'İyi başlangıç', r0: 'Yarın devam', rScore: '{n} kelimeden {g} tanesi hatırlandı.', rConf: 'Güven: cevapların %{p} kadarında emindin.', rCal: 'Hissin {n} seferden {c} tanesinde doğruydu.', rMiss: 'Tekrar edilecek kelimeler', rRev: 'Bilemediğin kelimeleri tekrar et', rHome: 'Ana sayfaya dön', rTom: 'Testi yarın yeniden yap: birkaç gün üst üste kendini sınamak kelimeleri en iyi kalıcı kılar.',
    foot: 'Rehberli rahatlama ve çağrışımla ezberleme. Kulaklıkla dinle, araç kullanırken asla.',
    themes: ['Selamlaşma ve nezaket', 'Restoran ve yemek', 'Seyahat ve havalimanı', 'Acil durum ve sağlık', 'Alışveriş', 'Aile', 'Ev', 'İş ve ticaret', 'Hava ve mevsimler', '1’den 10’a sayılar']
};
MEAN.tr = `merhaba|hoşça kal|teşekkürler|lütfen|özür dilerim|evet|hayır|iyi geceler|arkadaş|nasılsın?
hesap|su|kahve|ekmek|çatal|bıçak|bardak|şarap|pasta|tabak
uçak|pasaport|bavul|bilet|istasyon|tren|taksi|harita|plaj|otel
doktor|hastane|eczane|imdat!|polis|acıyor|ateş|ambulans|diş hekimi|hasta
para|fiyat|dükkân|elma|süt|çanta|banka kartı|pazar|yumurta|peynir
anne|baba|erkek kardeş|kız kardeş|çocuk|bebek|büyükanne|büyükbaba|koca|eş
ev|kapı|pencere|yatak|sandalye|anahtar|mutfak|banyo|lamba|kanepe
iş|toplantı|bilgisayar|telefon|e-posta|sözleşme|patron|randevu|maaş|ofis
güneş|yağmur|kar|rüzgâr|sıcak|soğuk|bulut|fırtına|kış|yaz
bir|iki|üç|dört|beş|altı|yedi|sekiz|dokuz|on`;

UI.ar = {
    home: 'العودة إلى البداية', on: 'متصل', off: 'غير متصل', vol: 'مستوى صوت الخلفية', snd: 'صوت الخلفية', sndOn: 'الصوت مفعّل', sndOff: 'الصوت متوقف',
    s1: '١ · الاسترخاء', s2: '٢ · التعلّم', s3: '٣ · اختبر نفسك',
    your: 'جلستك', sub: '{n} كلمات · نحو 10 دقائق', start: 'ابدأ الجلسة', skip: 'انتقل مباشرة إلى البطاقات',
    rev1: 'الكلمة التي أخطأت فيها المرة الماضية تأتي أولًا.', revN: 'الكلمات التي أخطأت فيها المرة الماضية ({n}) تأتي أولًا.',
    hLang: '١. اللغة التي تتعلمها', hTheme: '٢. الموضوع', themeNote: 'مكتبة مدمجة: تعمل دون إنترنت.', w10: '10 كلمات', toRev: '{n} للمراجعة',
    hMine: 'مواضيعي الخاصة', mineNote: 'أُنشئت بالذكاء الاصطناعي وحُفظت على هذا الجهاز: متاحة دون إنترنت.', mineCount: '{n} كلمات · موضوع خاص', del: 'احذف هذا الموضوع', delOk: 'تأكيد الحذف',
    aiT: 'أنشئ موضوعًا خاصًا بالذكاء الاصطناعي', aiD: 'اكتب أي موضوع: مفردات الغولف، العقارات، المطبخ التايلاندي… يُعدّ الذكاء الاصطناعي 10 كلمات باللغة المختارة. تحتاج إلى الإنترنت لإنشاء الموضوع، لا لمراجعته.', aiPh: 'مثال: مفردات الغولف', aiB: 'أنشئ الموضوع',
    aiSet: 'إعدادات الذكاء الاصطناعي (مفتاح API)', aiKey: 'في التطبيق المثبّت يستخدم الذكاء الاصطناعي مفتاح API من Anthropic ‏(console.anthropic.com). يُحفظ على هذا الجهاز فقط.', save: 'حفظ', keyOk: 'تم حفظ المفتاح على هذا الجهاز.', keyNone: 'لا يوجد مفتاح محفوظ.', keyDel: 'تم حذف المفتاح.',
    offline: 'أنت غير متصل حاليًا. اختر موضوعًا من المكتبة المدمجة أو أعد الاتصال لإنشاء موضوع خاص.',
    aiWork: 'جارٍ إنشاء موضوع «{t}»… (قد يستغرق دقيقة)', aiOk: 'تم إنشاء الموضوع وحفظه على هذا الجهاز: يمكنك مراجعته دون إنترنت.', aiNoSave: 'تم إنشاء الموضوع لكن الجهاز لم يتمكن من حفظه: سيضيع عند الإغلاق.',
    eKey: 'أضف مفتاح API في «إعدادات الذكاء الاصطناعي» لإنشاء المواضيع.', eBad: 'تم رفض مفتاح API. تحقق منه في «إعدادات الذكاء الاصطناعي».', eDeny: 'رفضت وصول Claude لهذه الصفحة. أعد تحميلها للمحاولة مجددًا.', eRate: 'طلبات كثيرة في وقت واحد. حاول بعد دقيقة.', eFmt: 'أعاد الذكاء الاصطناعي درسًا ناقصًا. حاول مجددًا أو أعد صياغة الموضوع.', eGen: 'فشل الإنشاء (مشكلة في الاتصال؟). حاول بعد قليل.',
    bLen: 'مدة التنفس', vGuide: 'صوت يرشد التنفس', uiLang: 'لغة التطبيق',
    bT: 'الاسترخاء', bD: 'ضع سماعاتك. خذ شهيقًا عندما تكبر الدائرة، وزفيرًا عندما تصغر.', inh: 'شهيق', exh: 'زفير', bSkip: 'انتقل إلى التعلّم',
    vIntro: 'اجلس براحة. أغمض عينيك إن شئت. خذ شهيقًا عندما تكبر الدائرة، وأخرج الزفير ببطء عندما تصغر.', vEnd: 'أحسنت. حافظ على هذا الهدوء. ننتقل الآن إلى الكلمات.', vGood: 'عمل رائع.', vOk: 'عمل جيد. سترى هذه الكلمات مجددًا غدًا.',
    review: 'للمراجعة', listen: 'استمع إلى النطق', pron: 'النطق', tip: 'حيلة للحفظ', prev: 'السابق', next: 'التالي', toQuiz: 'انتقل إلى الاختبار',
    q: 'السؤال {i} / {n}', good: 'الإجابات الصحيحة: {n}', qHow: 'كيف تقول «{w}»؟', qEar: 'استمع: ما معنى هذه الكلمة؟', relisten: 'استمع إلى الكلمة مجددًا', bravo: 'أحسنت!', was: 'الصحيح «{w}»', sure: 'هل كنت متأكدًا من إجابتك؟', yes: 'نعم، متأكد', no: 'ليس تمامًا',
    r100: 'بلا أخطاء!', r70: 'جلسة ممتازة', r40: 'بداية جيدة', r0: 'نكمل غدًا', rScore: 'تذكرت {g} من {n} كلمات.', rConf: 'الثقة: كنت متأكدًا في {p}٪ من الإجابات.', rCal: 'كان إحساسك صحيحًا {c} مرات من {n}.', rMiss: 'كلمات للمراجعة', rRev: 'راجع الكلمات الخاطئة', rHome: 'العودة إلى البداية', rTom: 'أعد الاختبار غدًا: اختبار نفسك عدة أيام متتالية هو أفضل ما يثبّت الكلمات.',
    foot: 'استرخاء موجَّه وحفظ بالترابط. استمع بالسماعات، ولا تستخدمه أثناء القيادة أبدًا.',
    themes: ['التحية والأدب', 'المطعم والطعام', 'السفر والمطار', 'الطوارئ والصحة', 'التسوق والمتاجر', 'العائلة', 'المنزل', 'العمل والأعمال', 'الطقس والفصول', 'الأعداد من 1 إلى 10']
};
MEAN.ar = `مرحبا|مع السلامة|شكرا|من فضلك|آسف|نعم|لا|تصبح على خير|صديق|كيف حالك؟
الحساب|الماء|القهوة|الخبز|الشوكة|السكين|الكأس|النبيذ|الكعكة|الصحن
الطائرة|جواز السفر|الحقيبة|التذكرة|المحطة|القطار|سيارة الأجرة|الخريطة|الشاطئ|الفندق
الطبيب|المستشفى|الصيدلية|النجدة!|الشرطة|أشعر بألم|الحمى|سيارة الإسعاف|طبيب الأسنان|مريض
المال|السعر|المتجر|التفاحة|الحليب|الكيس|البطاقة البنكية|السوق|البيضة|الجبن
الأم|الأب|الأخ|الأخت|الطفل|الرضيع|الجدة|الجد|الزوج|الزوجة
البيت|الباب|النافذة|السرير|الكرسي|المفتاح|المطبخ|الحمام|المصباح|الأريكة
العمل|الاجتماع|الحاسوب|الهاتف|البريد الإلكتروني|العقد|المدير|الموعد|الراتب|المكتب
الشمس|المطر|الثلج|الريح|حار|بارد|الغيمة|العاصفة|الشتاء|الصيف
واحد|اثنان|ثلاثة|أربعة|خمسة|ستة|سبعة|ثمانية|تسعة|عشرة`;

UI.hi = {
    home: 'मुख्य पृष्ठ पर लौटें', on: 'ऑनलाइन', off: 'ऑफ़लाइन', vol: 'पृष्ठभूमि ध्वनि का वॉल्यूम', snd: 'पृष्ठभूमि ध्वनि', sndOn: 'ध्वनि चालू', sndOff: 'ध्वनि बंद',
    s1: '1 · शांत हो जाएँ', s2: '2 · सीखें', s3: '3 · खुद को परखें',
    your: 'आपका सत्र', sub: '{n} शब्द · लगभग 10 मिनट', start: 'सत्र शुरू करें', skip: 'सीधे कार्ड पर जाएँ',
    rev1: 'पिछली बार छूटा शब्द पहले आएगा।', revN: 'पिछली बार छूटे {n} शब्द पहले आएँगे।',
    hLang: '1. सीखने की भाषा', hTheme: '2. विषय', themeNote: 'अंतर्निहित लाइब्रेरी: बिना इंटरनेट के चलती है।', w10: '10 शब्द', toRev: '{n} दोहराने हैं',
    hMine: 'मेरे अपने विषय', mineNote: 'AI से बनाए गए और इस डिवाइस पर सहेजे गए: ऑफ़लाइन उपलब्ध।', mineCount: '{n} शब्द · अपना विषय', del: 'यह विषय हटाएँ', delOk: 'हटाने की पुष्टि करें',
    aiT: 'AI से अपना विषय बनाएँ', aiD: 'कोई भी विषय लिखें: गोल्फ़ के शब्द, रियल एस्टेट, थाई खाना… AI चुनी गई भाषा में 10 शब्द तैयार करता है। विषय बनाने के लिए इंटरनेट चाहिए, दोहराने के लिए नहीं।', aiPh: 'जैसे: गोल्फ़ के शब्द', aiB: 'विषय बनाएँ',
    aiSet: 'AI सेटिंग्स (API कुंजी)', aiKey: 'इंस्टॉल किए गए ऐप में AI एक Anthropic API कुंजी (console.anthropic.com) का उपयोग करता है। यह केवल इसी डिवाइस पर सहेजी जाती है।', save: 'सहेजें', keyOk: 'कुंजी इस डिवाइस पर सहेजी गई।', keyNone: 'कोई कुंजी सहेजी नहीं गई।', keyDel: 'कुंजी हटा दी गई।',
    offline: 'आप अभी ऑफ़लाइन हैं। अंतर्निहित लाइब्रेरी से कोई विषय चुनें या अपना विषय बनाने के लिए फिर से कनेक्ट करें।',
    aiWork: '“{t}” विषय बनाया जा रहा है… (एक मिनट लग सकता है)', aiOk: 'विषय बन गया और इस डिवाइस पर सहेज लिया गया: आप इसे ऑफ़लाइन दोहरा सकते हैं।', aiNoSave: 'विषय बन गया, पर यह डिवाइस इसे सहेज नहीं सका: बंद करने पर यह खो जाएगा।',
    eKey: 'विषय बनाने के लिए “AI सेटिंग्स” में अपनी API कुंजी जोड़ें।', eBad: 'API कुंजी अस्वीकार हो गई। “AI सेटिंग्स” में जाँचें।', eDeny: 'आपने इस पेज के लिए Claude की अनुमति नहीं दी। फिर से कोशिश करने के लिए पेज रीलोड करें।', eRate: 'एक साथ बहुत सारे अनुरोध। एक मिनट बाद फिर कोशिश करें।', eFmt: 'AI ने अधूरा पाठ दिया। फिर कोशिश करें या विषय दूसरे शब्दों में लिखें।', eGen: 'विषय नहीं बन सका (कनेक्शन की समस्या?)। थोड़ी देर बाद फिर कोशिश करें।',
    bLen: 'साँस अभ्यास की अवधि', vGuide: 'साँस में मार्गदर्शन करने वाली आवाज़', uiLang: 'ऐप की भाषा',
    bT: 'शांत हो जाएँ', bD: 'हेडफ़ोन लगाएँ। गोला बड़ा होने पर साँस लें, छोटा होने पर साँस छोड़ें।', inh: 'साँस लें', exh: 'साँस छोड़ें', bSkip: 'सीखने पर जाएँ',
    vIntro: 'आराम से बैठ जाइए। चाहें तो आँखें बंद कर लीजिए। गोला बड़ा होने पर साँस लीजिए, और छोटा होने पर धीरे से साँस छोड़िए।', vEnd: 'बहुत अच्छा। यह शांति बनाए रखिए। अब शब्दों की ओर चलते हैं।', vGood: 'बहुत बढ़िया।', vOk: 'अच्छा काम। ये शब्द आप कल फिर देखेंगे।',
    review: 'दोहराना है', listen: 'उच्चारण सुनें', pron: 'उच्चारण', tip: 'याद रखने का तरीका', prev: 'पिछला', next: 'अगला', toQuiz: 'क्विज़ पर जाएँ',
    q: 'प्रश्न {i} / {n}', good: 'सही उत्तर: {n}', qHow: '“{w}” को कैसे कहते हैं?', qEar: 'सुनिए: इस शब्द का क्या अर्थ है?', relisten: 'शब्द फिर से सुनें', bravo: 'शाबाश!', was: 'सही उत्तर “{w}” था', sure: 'क्या आप अपने उत्तर को लेकर निश्चित थे?', yes: 'हाँ, निश्चित', no: 'ज़्यादा नहीं',
    r100: 'एक भी गलती नहीं!', r70: 'बहुत अच्छा सत्र', r40: 'अच्छी शुरुआत', r0: 'कल फिर जारी रखें', rScore: '{n} में से {g} शब्द याद रहे।', rConf: 'भरोसा: {p}% उत्तरों में आप निश्चित थे।', rCal: '{n} में से {c} बार आपका अनुमान सही रहा।', rMiss: 'दोहराने वाले शब्द', rRev: 'छूटे शब्द दोहराएँ', rHome: 'मुख्य पृष्ठ पर लौटें', rTom: 'कल फिर क्विज़ करें: लगातार कुछ दिन खुद को परखना शब्दों को सबसे अच्छी तरह याद कराता है।',
    foot: 'निर्देशित विश्राम और जुड़ाव से याद करना। हेडफ़ोन से सुनें, गाड़ी चलाते समय कभी नहीं।',
    themes: ['अभिवादन और शिष्टाचार', 'रेस्टोरेंट और खाना', 'यात्रा और हवाई अड्डा', 'आपातकाल और स्वास्थ्य', 'खरीदारी', 'परिवार', 'घर', 'काम और व्यापार', 'मौसम और ऋतुएँ', '1 से 10 तक की संख्याएँ']
};
MEAN.hi = `नमस्ते|अलविदा|धन्यवाद|कृपया|माफ़ कीजिए|हाँ|नहीं|शुभ रात्रि|दोस्त|आप कैसे हैं?
बिल|पानी|कॉफ़ी|रोटी|काँटा|चाकू|गिलास|वाइन|केक|प्लेट
हवाई जहाज़|पासपोर्ट|सूटकेस|टिकट|स्टेशन|रेलगाड़ी|टैक्सी|नक्शा|समुद्र तट|होटल
डॉक्टर|अस्पताल|दवा की दुकान|मदद करो!|पुलिस|दर्द हो रहा है|बुखार|एम्बुलेंस|दाँतों का डॉक्टर|बीमार
पैसा|कीमत|दुकान|सेब|दूध|थैला|बैंक कार्ड|बाज़ार|अंडा|पनीर
माँ|पिता|भाई|बहन|बच्चा|शिशु|दादी|दादा|पति|पत्नी
घर|दरवाज़ा|खिड़की|बिस्तर|कुर्सी|चाबी|रसोई|स्नानघर|लैंप|सोफ़ा
काम|बैठक|कंप्यूटर|फ़ोन|ईमेल|अनुबंध|बॉस|मुलाक़ात|वेतन|दफ़्तर
सूरज|बारिश|बर्फ़|हवा|गरम|ठंडा|बादल|तूफ़ान|सर्दी|गर्मी
एक|दो|तीन|चार|पाँच|छह|सात|आठ|नौ|दस`;

UI.zh = {
    home: '返回首页', on: '在线', off: '离线', vol: '背景音量', snd: '背景音', sndOn: '声音已开', sndOff: '声音已关',
    s1: '1 · 放松', s2: '2 · 学习', s3: '3 · 自我测试',
    your: '你的课程', sub: '{n} 个词 · 约 10 分钟', start: '开始课程', skip: '直接看卡片',
    rev1: '上次答错的词会先出现。', revN: '上次答错的 {n} 个词会先出现。',
    hLang: '1. 要学的语言', hTheme: '2. 主题', themeNote: '内置词库：离线也能用。', w10: '10 个词', toRev: '{n} 个待复习',
    hMine: '我的自定义主题', mineNote: '由 AI 创建并保存在本设备：离线可用。', mineCount: '{n} 个词 · 自定义', del: '删除此主题', delOk: '确认删除',
    aiT: '用 AI 创建自定义主题', aiD: '输入任何主题：高尔夫词汇、房地产、泰国菜…… AI 会用所选语言准备 10 个词。创建主题需要联网，复习不需要。', aiPh: '例如：高尔夫词汇', aiB: '创建主题',
    aiSet: 'AI 设置（API 密钥）', aiKey: '在已安装的应用中，AI 使用 Anthropic API 密钥（console.anthropic.com）。密钥只保存在本设备上。', save: '保存', keyOk: '密钥已保存在本设备。', keyNone: '未保存密钥。', keyDel: '密钥已删除。',
    offline: '你当前处于离线状态。请从内置词库中选择主题，或重新联网以生成自定义主题。',
    aiWork: '正在创建主题“{t}”……（可能需要一分钟）', aiOk: '主题已创建并保存在本设备：可以离线复习。', aiNoSave: '主题已创建，但本设备无法保存：关闭后会丢失。',
    eKey: '请在“AI 设置”中添加 API 密钥以创建主题。', eBad: 'API 密钥被拒绝。请在“AI 设置”中检查。', eDeny: '你拒绝了 Claude 对此页面的访问。请刷新页面后重试。', eRate: '请求过多。请一分钟后再试。', eFmt: 'AI 返回的课程不完整。请重试或换一种说法。', eGen: '创建失败（网络问题？）。请稍后再试。',
    bLen: '呼吸时长', vGuide: '语音引导呼吸', uiLang: '应用语言',
    bT: '放松', bD: '戴上耳机。圆圈变大时吸气，变小时呼气。', inh: '吸气', exh: '呼气', bSkip: '跳到学习',
    vIntro: '找个舒服的姿势。愿意的话闭上眼睛。圆圈变大时吸气，变小时慢慢呼气。', vEnd: '很好。保持这份平静。现在开始学词。', vGood: '做得很好。', vOk: '辛苦了。明天还会再见到这些词。',
    review: '待复习', listen: '听发音', pron: '读音', tip: '记忆窍门', prev: '上一个', next: '下一个', toQuiz: '进入测验',
    q: '第 {i} / {n} 题', good: '答对：{n}', qHow: '“{w}”怎么说？', qEar: '听一听：这个词是什么意思？', relisten: '再听一遍', bravo: '太棒了！', was: '正确答案是“{w}”', sure: '你对答案有把握吗？', yes: '有把握', no: '不太确定',
    r100: '全对！', r70: '非常棒的一课', r40: '良好的开始', r0: '明天继续', rScore: '记住了 {n} 个中的 {g} 个词。', rConf: '把握度：{p}% 的回答你很确定。', rCal: '{n} 次中有 {c} 次你的感觉是对的。', rMiss: '需要复习的词', rRev: '复习答错的词', rHome: '返回首页', rTom: '明天再做一次测验：连续几天自我测试最能巩固记忆。',
    foot: '引导式放松与联想记忆。请戴耳机收听，开车时切勿使用。',
    themes: ['问候与礼貌', '餐厅与饮食', '旅行与机场', '紧急情况与健康', '购物', '家庭', '家居', '工作与商务', '天气与季节', '数字 1 到 10']
};
MEAN.zh = `你好|再见|谢谢|请|对不起|是|不|晚安|朋友|你好吗？
账单|水|咖啡|面包|叉子|刀|杯子|葡萄酒|蛋糕|盘子
飞机|护照|行李箱|票|火车站|火车|出租车|地图|海滩|酒店
医生|医院|药店|救命！|警察|我疼|发烧|救护车|牙医|生病
钱|价格|商店|苹果|牛奶|袋子|银行卡|市场|鸡蛋|奶酪
妈妈|爸爸|兄弟|姐妹|孩子|宝宝|奶奶|爷爷|丈夫|妻子
房子|门|窗户|床|椅子|钥匙|厨房|浴室|灯|沙发
工作|会议|电脑|电话|电子邮件|合同|老板|约会|工资|办公室
太阳|雨|雪|风|热|冷|云|雷雨|冬天|夏天
一|二|三|四|五|六|七|八|九|十`;

UI.ja = {
    home: 'ホームに戻る', on: 'オンライン', off: 'オフライン', vol: '背景音の音量', snd: '背景音', sndOn: '音声オン', sndOff: '音声オフ',
    s1: '1 · 落ち着く', s2: '2 · 覚える', s3: '3 · 確かめる',
    your: 'あなたのセッション', sub: '{n} 語 · 約10分', start: 'セッションを始める', skip: 'すぐにカードへ',
    rev1: '前回まちがえた単語が最初に出ます。', revN: '前回まちがえた {n} 語が最初に出ます。',
    hLang: '1. 学ぶ言語', hTheme: '2. テーマ', themeNote: '内蔵ライブラリ：オフラインでも使えます。', w10: '10 語', toRev: '復習 {n} 語',
    hMine: 'マイテーマ', mineNote: 'AIで作成し、この端末に保存：オフラインで使えます。', mineCount: '{n} 語 · オリジナル', del: 'このテーマを削除', delOk: '削除を確認',
    aiT: 'AIでオリジナルのテーマを作る', aiD: 'ゴルフ用語、不動産、タイ料理など、好きなテーマを入力してください。AIが選んだ言語で10語を用意します。作成にはネット接続が必要ですが、復習には不要です。', aiPh: '例：ゴルフ用語', aiB: 'テーマを作る',
    aiSet: 'AI設定（APIキー）', aiKey: 'インストール版では、AIはAnthropicのAPIキー（console.anthropic.com）を使います。キーはこの端末にのみ保存されます。', save: '保存', keyOk: 'キーをこの端末に保存しました。', keyNone: 'キーは保存されていません。', keyDel: 'キーを削除しました。',
    offline: '現在オフラインです。内蔵ライブラリからテーマを選ぶか、再接続してオリジナルのテーマを作成してください。',
    aiWork: 'テーマ「{t}」を作成中…（1分ほどかかることがあります）', aiOk: 'テーマを作成し、この端末に保存しました。オフラインで復習できます。', aiNoSave: 'テーマを作成しましたが、この端末に保存できませんでした。閉じると消えます。',
    eKey: 'テーマを作るには「AI設定」でAPIキーを追加してください。', eBad: 'APIキーが拒否されました。「AI設定」で確認してください。', eDeny: 'このページでのClaudeへのアクセスを拒否しました。再読み込みしてやり直してください。', eRate: 'リクエストが多すぎます。1分後にもう一度お試しください。', eFmt: 'AIのレッスンが不完全でした。もう一度試すか、テーマを言い換えてください。', eGen: '作成に失敗しました（接続の問題？）。少ししてからお試しください。',
    bLen: '呼吸の時間', vGuide: '呼吸をガイドする音声', uiLang: 'アプリの言語',
    bT: '落ち着く', bD: 'ヘッドホンをつけてください。円が大きくなったら吸って、小さくなったら吐きます。', inh: '吸って', exh: '吐いて', bSkip: '学習へ進む',
    vIntro: '楽な姿勢になりましょう。よければ目を閉じてください。円が大きくなったら息を吸い、小さくなったらゆっくり吐きます。', vEnd: 'とても良いです。この落ち着きを保ちましょう。では単語に進みます。', vGood: 'よくできました。', vOk: 'お疲れさまでした。明日またこの単語を見ましょう。',
    review: '要復習', listen: '発音を聞く', pron: '読み方', tip: '覚え方のコツ', prev: '前へ', next: '次へ', toQuiz: 'クイズへ',
    q: '問題 {i} / {n}', good: '正解：{n}', qHow: '「{w}」は何と言う？', qEar: '聞いてください：この単語の意味は？', relisten: 'もう一度聞く', bravo: '正解！', was: '正解は「{w}」', sure: '答えに自信はありましたか？', yes: 'はい、自信あり', no: 'あまり',
    r100: '全問正解！', r70: 'とても良いセッション', r40: '良いスタート', r0: 'また明日', rScore: '{n} 語中 {g} 語を覚えていました。', rConf: '自信度：{p}% の回答に自信がありました。', rCal: '{n} 回中 {c} 回、あなたの感覚は正しかったです。', rMiss: '復習する単語', rRev: 'まちがえた単語を復習', rHome: 'ホームに戻る', rTom: '明日もう一度クイズを：数日続けて確かめるのが単語を定着させる一番の方法です。',
    foot: 'ガイド付きリラクゼーションと連想による記憶。ヘッドホンで聞き、運転中は使わないでください。',
    themes: ['あいさつと礼儀', 'レストランと料理', '旅行と空港', '緊急時と健康', '買い物', '家族', '家', '仕事とビジネス', '天気と季節', '1から10の数']
};
MEAN.ja = `こんにちは|さようなら|ありがとう|お願いします|すみません|はい|いいえ|おやすみなさい|友だち|元気ですか？
お会計|水|コーヒー|パン|フォーク|ナイフ|コップ|ワイン|ケーキ|お皿
飛行機|パスポート|スーツケース|切符|駅|電車|タクシー|地図|ビーチ|ホテル
医者|病院|薬局|助けて！|警察|痛い|熱|救急車|歯医者|病気
お金|値段|店|りんご|牛乳|袋|キャッシュカード|市場|卵|チーズ
母|父|兄弟|姉妹|子ども|赤ちゃん|祖母|祖父|夫|妻
家|ドア|窓|ベッド|いす|鍵|台所|浴室|ランプ|ソファ
仕事|会議|パソコン|電話|メール|契約|上司|予約|給料|オフィス
太陽|雨|雪|風|暑い|寒い|雲|雷雨|冬|夏
一|二|三|四|五|六|七|八|九|十`;

UI.ko = {
    home: '처음으로', on: '온라인', off: '오프라인', vol: '배경음 볼륨', snd: '배경음', sndOn: '소리 켜짐', sndOff: '소리 꺼짐',
    s1: '1 · 마음 가라앉히기', s2: '2 · 배우기', s3: '3 · 확인하기',
    your: '나의 세션', sub: '{n}개 단어 · 약 10분', start: '세션 시작', skip: '바로 카드로',
    rev1: '지난번에 틀린 단어가 먼저 나와요.', revN: '지난번에 틀린 단어 {n}개가 먼저 나와요.',
    hLang: '1. 배울 언어', hTheme: '2. 주제', themeNote: '내장 라이브러리: 오프라인에서도 작동해요.', w10: '단어 10개', toRev: '복습 {n}개',
    hMine: '나만의 주제', mineNote: 'AI로 만들고 이 기기에 저장됨: 오프라인에서 사용 가능.', mineCount: '단어 {n}개 · 맞춤', del: '이 주제 삭제', delOk: '삭제 확인',
    aiT: 'AI로 나만의 주제 만들기', aiD: '골프 용어, 부동산, 태국 요리 등 원하는 주제를 입력하세요. AI가 선택한 언어로 단어 10개를 준비해요. 만들 때는 인터넷이 필요하지만 복습할 때는 필요 없어요.', aiPh: '예: 골프 용어', aiB: '주제 만들기',
    aiSet: 'AI 설정 (API 키)', aiKey: '설치된 앱에서는 AI가 Anthropic API 키(console.anthropic.com)를 사용해요. 키는 이 기기에만 저장돼요.', save: '저장', keyOk: '키가 이 기기에 저장되었어요.', keyNone: '저장된 키가 없어요.', keyDel: '키가 삭제되었어요.',
    offline: '지금 오프라인 상태입니다. 내장 라이브러리에서 주제를 고르거나 다시 연결해 맞춤 주제를 만들어 보세요.',
    aiWork: '“{t}” 주제를 만드는 중… (1분 정도 걸릴 수 있어요)', aiOk: '주제를 만들어 이 기기에 저장했어요. 오프라인에서 복습할 수 있어요.', aiNoSave: '주제를 만들었지만 이 기기에 저장하지 못했어요. 닫으면 사라져요.',
    eKey: '주제를 만들려면 “AI 설정”에 API 키를 추가하세요.', eBad: 'API 키가 거부되었어요. “AI 설정”에서 확인하세요.', eDeny: '이 페이지의 Claude 접근을 거부했어요. 다시 시도하려면 새로고침하세요.', eRate: '요청이 너무 많아요. 1분 뒤 다시 시도하세요.', eFmt: 'AI가 불완전한 수업을 보냈어요. 다시 시도하거나 주제를 바꿔 써 보세요.', eGen: '만들지 못했어요(연결 문제?). 잠시 후 다시 시도하세요.',
    bLen: '호흡 시간', vGuide: '호흡을 안내하는 목소리', uiLang: '앱 언어',
    bT: '마음 가라앉히기', bD: '헤드폰을 쓰세요. 원이 커지면 들이쉬고, 작아지면 내쉬세요.', inh: '들이쉬기', exh: '내쉬기', bSkip: '학습으로 넘어가기',
    vIntro: '편안하게 앉으세요. 원한다면 눈을 감으세요. 원이 커지면 숨을 들이쉬고, 작아지면 천천히 내쉬세요.', vEnd: '아주 좋아요. 이 차분함을 유지하세요. 이제 단어로 넘어가요.', vGood: '정말 잘했어요.', vOk: '수고했어요. 내일 이 단어들을 다시 볼 거예요.',
    review: '복습', listen: '발음 듣기', pron: '발음', tip: '기억 요령', prev: '이전', next: '다음', toQuiz: '퀴즈로',
    q: '문제 {i} / {n}', good: '맞힌 답: {n}', qHow: '“{w}”는 어떻게 말할까요?', qEar: '들어 보세요: 이 단어의 뜻은?', relisten: '다시 듣기', bravo: '정답!', was: '정답은 “{w}”', sure: '답에 확신이 있었나요?', yes: '네, 확신해요', no: '별로요',
    r100: '모두 정답!', r70: '아주 좋은 세션', r40: '좋은 출발', r0: '내일 계속해요', rScore: '{n}개 중 {g}개 단어를 기억했어요.', rConf: '확신도: 답의 {p}%에 확신이 있었어요.', rCal: '{n}번 중 {c}번 느낌이 맞았어요.', rMiss: '복습할 단어', rRev: '틀린 단어 복습', rHome: '처음으로', rTom: '내일 퀴즈를 다시 풀어 보세요. 며칠 연속으로 확인하는 것이 단어를 가장 잘 기억하게 해요.',
    foot: '안내에 따른 휴식과 연상 기억법. 헤드폰으로 듣고, 운전 중에는 절대 사용하지 마세요.',
    themes: ['인사와 예절', '식당과 음식', '여행과 공항', '응급 상황과 건강', '쇼핑', '가족', '집', '일과 비즈니스', '날씨와 계절', '1부터 10까지의 숫자']
};
MEAN.ko = `안녕하세요|안녕히 가세요|감사합니다|부탁합니다|죄송합니다|네|아니요|안녕히 주무세요|친구|잘 지내요?
계산서|물|커피|빵|포크|칼|잔|와인|케이크|접시
비행기|여권|여행 가방|표|역|기차|택시|지도|해변|호텔
의사|병원|약국|도와주세요!|경찰|아파요|열|구급차|치과 의사|아픈
돈|가격|가게|사과|우유|가방|은행 카드|시장|달걀|치즈
어머니|아버지|형제|자매|아이|아기|할머니|할아버지|남편|아내
집|문|창문|침대|의자|열쇠|부엌|욕실|전등|소파
일|회의|컴퓨터|전화|이메일|계약|사장|약속|월급|사무실
해|비|눈|바람|더운|추운|구름|폭풍우|겨울|여름
하나|둘|셋|넷|다섯|여섯|일곱|여덟|아홉|열`;

UI.id = {
    home: 'Kembali ke awal', on: 'Daring', off: 'Luring', vol: 'Volume suara latar', snd: 'Suara latar', sndOn: 'Suara aktif', sndOff: 'Suara mati',
    s1: '1 · Tenangkan diri', s2: '2 · Belajar', s3: '3 · Uji diri',
    your: 'Sesimu', sub: '{n} kata · sekitar 10 menit', start: 'Mulai sesi', skip: 'Langsung ke kartu',
    rev1: 'Kata yang salah terakhir kali muncul lebih dulu.', revN: '{n} kata yang salah terakhir kali muncul lebih dulu.',
    hLang: '1. Bahasa yang dipelajari', hTheme: '2. Topik', themeNote: 'Pustaka bawaan: bisa dipakai tanpa internet.', w10: '10 kata', toRev: '{n} perlu diulang',
    hMine: 'Topik buatanku', mineNote: 'Dibuat dengan AI dan disimpan di perangkat ini: bisa dipakai luring.', mineCount: '{n} kata · khusus', del: 'Hapus topik ini', delOk: 'Konfirmasi hapus',
    aiT: 'Buat topik khusus dengan AI', aiD: 'Ketik topik apa saja: istilah golf, properti, masakan Thailand… AI menyiapkan 10 kata dalam bahasa yang dipilih. Perlu internet untuk membuat topik, tidak untuk mengulang.', aiPh: 'Mis.: istilah golf', aiB: 'Buat topik',
    aiSet: 'Pengaturan AI (kunci API)', aiKey: 'Di aplikasi terpasang, AI memakai kunci API Anthropic (console.anthropic.com). Kunci hanya disimpan di perangkat ini.', save: 'Simpan', keyOk: 'Kunci tersimpan di perangkat ini.', keyNone: 'Belum ada kunci tersimpan.', keyDel: 'Kunci dihapus.',
    offline: 'Kamu sedang luring. Pilih topik dari pustaka bawaan atau sambungkan lagi untuk membuat topik khusus.',
    aiWork: 'Membuat topik “{t}”… (bisa butuh satu menit)', aiOk: 'Topik dibuat dan disimpan di perangkat ini: bisa diulang secara luring.', aiNoSave: 'Topik dibuat, tetapi perangkat ini tidak bisa menyimpannya: akan hilang saat ditutup.',
    eKey: 'Tambahkan kunci API di “Pengaturan AI” untuk membuat topik.', eBad: 'Kunci API ditolak. Periksa di “Pengaturan AI”.', eDeny: 'Kamu menolak akses Claude untuk halaman ini. Muat ulang untuk mencoba lagi.', eRate: 'Terlalu banyak permintaan sekaligus. Coba lagi dalam satu menit.', eFmt: 'AI memberi pelajaran yang tidak lengkap. Coba lagi atau ubah kata-kata topiknya.', eGen: 'Gagal membuat topik (masalah koneksi?). Coba lagi sebentar lagi.',
    bLen: 'Lama latihan napas', vGuide: 'Suara pemandu napas', uiLang: 'Bahasa aplikasi',
    bT: 'Tenangkan diri', bD: 'Pakai headphone. Tarik napas saat lingkaran membesar, embuskan saat mengecil.', inh: 'Tarik napas', exh: 'Embuskan', bSkip: 'Lanjut ke belajar',
    vIntro: 'Duduklah dengan nyaman. Pejamkan mata jika mau. Tarik napas saat lingkaran membesar, lalu embuskan perlahan saat mengecil.', vEnd: 'Bagus sekali. Pertahankan ketenangan ini. Sekarang kita ke kata-kata.', vGood: 'Hebat sekali.', vOk: 'Kerja bagus. Kamu akan melihat kata-kata ini lagi besok.',
    review: 'Perlu diulang', listen: 'Dengarkan pelafalan', pron: 'dibaca', tip: 'Trik mengingat', prev: 'Sebelumnya', next: 'Berikutnya', toQuiz: 'Ke kuis',
    q: 'Soal {i} / {n}', good: 'Jawaban benar: {n}', qHow: 'Bagaimana mengatakan “{w}”?', qEar: 'Dengarkan: apa arti kata ini?', relisten: 'Dengarkan kata lagi', bravo: 'Hebat!', was: 'Jawabannya “{w}”', sure: 'Apakah kamu yakin dengan jawabanmu?', yes: 'Ya, yakin', no: 'Tidak terlalu',
    r100: 'Tanpa salah!', r70: 'Sesi yang sangat baik', r40: 'Awal yang baik', r0: 'Lanjut besok', rScore: '{g} dari {n} kata diingat.', rConf: 'Keyakinan: kamu yakin pada {p}% jawaban.', rCal: 'Perasaanmu tepat {c} dari {n} kali.', rMiss: 'Kata yang perlu diulang', rRev: 'Ulangi kata yang salah', rHome: 'Kembali ke awal', rTom: 'Ulangi kuis besok: menguji diri beberapa hari berturut-turut paling ampuh untuk mengingat kata.',
    foot: 'Relaksasi terpandu dan menghafal lewat asosiasi. Dengarkan dengan headphone, jangan saat menyetir.',
    themes: ['Salam dan sopan santun', 'Restoran dan makanan', 'Perjalanan dan bandara', 'Darurat dan kesehatan', 'Belanja', 'Keluarga', 'Rumah', 'Kerja dan bisnis', 'Cuaca dan musim', 'Angka 1 sampai 10']
};
MEAN.id = `halo|selamat tinggal|terima kasih|tolong|maaf|ya|tidak|selamat malam|teman|apa kabar?
tagihan|air|kopi|roti|garpu|pisau|gelas|anggur|kue|piring
pesawat|paspor|koper|tiket|stasiun|kereta|taksi|peta|pantai|hotel
dokter|rumah sakit|apotek|tolong!|polisi|sakit|demam|ambulans|dokter gigi|sakit
uang|harga|toko|apel|susu|tas|kartu bank|pasar|telur|keju
ibu|ayah|saudara laki-laki|saudara perempuan|anak|bayi|nenek|kakek|suami|istri
rumah|pintu|jendela|tempat tidur|kursi|kunci|dapur|kamar mandi|lampu|sofa
kerja|rapat|komputer|telepon|surel|kontrak|bos|janji temu|gaji|kantor
matahari|hujan|salju|angin|panas|dingin|awan|badai|musim dingin|musim panas
satu|dua|tiga|empat|lima|enam|tujuh|delapan|sembilan|sepuluh`;

UI.vi = {
    home: 'Về trang đầu', on: 'Trực tuyến', off: 'Ngoại tuyến', vol: 'Âm lượng nhạc nền', snd: 'Âm thanh nền', sndOn: 'Đang bật tiếng', sndOff: 'Đã tắt tiếng',
    s1: '1 · Thư giãn', s2: '2 · Học', s3: '3 · Tự kiểm tra',
    your: 'Buổi học của bạn', sub: '{n} từ · khoảng 10 phút', start: 'Bắt đầu buổi học', skip: 'Đi thẳng tới thẻ từ',
    rev1: 'Từ bạn làm sai lần trước sẽ xuất hiện trước.', revN: '{n} từ bạn làm sai lần trước sẽ xuất hiện trước.',
    hLang: '1. Ngôn ngữ muốn học', hTheme: '2. Chủ đề', themeNote: 'Thư viện có sẵn: dùng được khi không có mạng.', w10: '10 từ', toRev: '{n} từ cần ôn',
    hMine: 'Chủ đề của tôi', mineNote: 'Tạo bằng AI và lưu trên thiết bị này: dùng được khi ngoại tuyến.', mineCount: '{n} từ · tự tạo', del: 'Xóa chủ đề này', delOk: 'Xác nhận xóa',
    aiT: 'Tạo chủ đề riêng bằng AI', aiD: 'Nhập bất kỳ chủ đề nào: từ vựng golf, bất động sản, món Thái… AI sẽ chuẩn bị 10 từ bằng ngôn ngữ đã chọn. Cần mạng để tạo chủ đề, không cần để ôn tập.', aiPh: 'VD: từ vựng golf', aiB: 'Tạo chủ đề',
    aiSet: 'Cài đặt AI (khóa API)', aiKey: 'Trong ứng dụng đã cài, AI dùng khóa API của Anthropic (console.anthropic.com). Khóa chỉ được lưu trên thiết bị này.', save: 'Lưu', keyOk: 'Đã lưu khóa trên thiết bị này.', keyNone: 'Chưa lưu khóa nào.', keyDel: 'Đã xóa khóa.',
    offline: 'Bạn đang ngoại tuyến. Hãy chọn một chủ đề trong thư viện có sẵn hoặc kết nối lại để tạo chủ đề riêng.',
    aiWork: 'Đang tạo chủ đề “{t}”… (có thể mất một phút)', aiOk: 'Đã tạo và lưu chủ đề trên thiết bị này: bạn có thể ôn khi ngoại tuyến.', aiNoSave: 'Đã tạo chủ đề nhưng thiết bị không lưu được: sẽ mất khi đóng ứng dụng.',
    eKey: 'Hãy thêm khóa API trong “Cài đặt AI” để tạo chủ đề.', eBad: 'Khóa API bị từ chối. Hãy kiểm tra trong “Cài đặt AI”.', eDeny: 'Bạn đã từ chối quyền truy cập Claude cho trang này. Tải lại trang để thử lại.', eRate: 'Quá nhiều yêu cầu cùng lúc. Hãy thử lại sau một phút.', eFmt: 'AI trả về bài học chưa đầy đủ. Hãy thử lại hoặc diễn đạt chủ đề khác đi.', eGen: 'Tạo thất bại (lỗi kết nối?). Hãy thử lại sau ít phút.',
    bLen: 'Thời gian hít thở', vGuide: 'Giọng nói hướng dẫn hít thở', uiLang: 'Ngôn ngữ ứng dụng',
    bT: 'Thư giãn', bD: 'Đeo tai nghe. Hít vào khi vòng tròn lớn dần, thở ra khi nó nhỏ lại.', inh: 'Hít vào', exh: 'Thở ra', bSkip: 'Chuyển sang học',
    vIntro: 'Hãy ngồi thoải mái. Nhắm mắt nếu bạn muốn. Hít vào khi vòng tròn lớn dần, và thở ra thật chậm khi nó nhỏ lại.', vEnd: 'Rất tốt. Giữ sự bình tĩnh này. Giờ chúng ta học từ.', vGood: 'Làm rất tốt.', vOk: 'Bạn đã cố gắng. Ngày mai bạn sẽ gặp lại những từ này.',
    review: 'Cần ôn', listen: 'Nghe phát âm', pron: 'đọc là', tip: 'Mẹo ghi nhớ', prev: 'Trước', next: 'Tiếp', toQuiz: 'Sang bài kiểm tra',
    q: 'Câu {i} / {n}', good: 'Trả lời đúng: {n}', qHow: '“{w}” nói thế nào?', qEar: 'Nghe này: từ này nghĩa là gì?', relisten: 'Nghe lại từ', bravo: 'Giỏi lắm!', was: 'Đáp án là “{w}”', sure: 'Bạn có chắc câu trả lời không?', yes: 'Có, chắc chắn', no: 'Không hẳn',
    r100: 'Không sai câu nào!', r70: 'Buổi học rất tốt', r40: 'Khởi đầu tốt', r0: 'Mai học tiếp', rScore: 'Nhớ được {g} / {n} từ.', rConf: 'Độ tự tin: bạn chắc chắn ở {p}% câu trả lời.', rCal: 'Cảm giác của bạn đúng {c} trên {n} lần.', rMiss: 'Từ cần ôn', rRev: 'Ôn lại các từ sai', rHome: 'Về trang đầu', rTom: 'Làm lại bài kiểm tra vào ngày mai: tự kiểm tra vài ngày liên tiếp giúp nhớ từ lâu nhất.',
    foot: 'Thư giãn có hướng dẫn và ghi nhớ bằng liên tưởng. Nghe bằng tai nghe, không dùng khi lái xe.',
    themes: ['Chào hỏi và phép lịch sự', 'Nhà hàng và ẩm thực', 'Du lịch và sân bay', 'Khẩn cấp và sức khỏe', 'Mua sắm', 'Gia đình', 'Nhà cửa', 'Công việc và kinh doanh', 'Thời tiết và mùa', 'Số từ 1 đến 10']
};
MEAN.vi = `xin chào|tạm biệt|cảm ơn|làm ơn|xin lỗi|vâng|không|chúc ngủ ngon|bạn|bạn khỏe không?
hóa đơn|nước|cà phê|bánh mì|cái nĩa|con dao|cái ly|rượu vang|bánh ngọt|cái đĩa
máy bay|hộ chiếu|va li|vé|nhà ga|tàu hỏa|taxi|bản đồ|bãi biển|khách sạn
bác sĩ|bệnh viện|hiệu thuốc|cứu tôi với!|cảnh sát|tôi bị đau|sốt|xe cứu thương|nha sĩ|bị ốm
tiền|giá|cửa hàng|quả táo|sữa|cái túi|thẻ ngân hàng|chợ|quả trứng|phô mai
mẹ|bố|anh em trai|chị em gái|đứa trẻ|em bé|bà|ông|chồng|vợ
ngôi nhà|cửa|cửa sổ|giường|ghế|chìa khóa|nhà bếp|phòng tắm|đèn|ghế sofa
công việc|cuộc họp|máy tính|điện thoại|thư điện tử|hợp đồng|sếp|cuộc hẹn|lương|văn phòng
mặt trời|mưa|tuyết|gió|nóng|lạnh|mây|giông bão|mùa đông|mùa hè
một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười`;

UI.th = {
    home: 'กลับหน้าแรก', on: 'ออนไลน์', off: 'ออฟไลน์', vol: 'ระดับเสียงพื้นหลัง', snd: 'เสียงพื้นหลัง', sndOn: 'เปิดเสียงอยู่', sndOff: 'ปิดเสียงอยู่',
    s1: '1 · ผ่อนคลาย', s2: '2 · เรียนรู้', s3: '3 · ทดสอบตัวเอง',
    your: 'เซสชันของคุณ', sub: '{n} คำ · ประมาณ 10 นาที', start: 'เริ่มเซสชัน', skip: 'ไปที่บัตรคำเลย',
    rev1: 'คำที่ตอบผิดครั้งที่แล้วจะขึ้นก่อน', revN: '{n} คำที่ตอบผิดครั้งที่แล้วจะขึ้นก่อน',
    hLang: '1. ภาษาที่จะเรียน', hTheme: '2. หัวข้อ', themeNote: 'คลังคำในแอป: ใช้ได้แม้ไม่มีเน็ต', w10: '10 คำ', toRev: 'ต้องทบทวน {n} คำ',
    hMine: 'หัวข้อของฉัน', mineNote: 'สร้างด้วย AI และเก็บไว้ในเครื่องนี้: ใช้งานออฟไลน์ได้', mineCount: '{n} คำ · หัวข้อเฉพาะ', del: 'ลบหัวข้อนี้', delOk: 'ยืนยันการลบ',
    aiT: 'สร้างหัวข้อเฉพาะด้วย AI', aiD: 'พิมพ์หัวข้อใดก็ได้ เช่น คำศัพท์กอล์ฟ อสังหาริมทรัพย์ อาหารไทย… AI จะเตรียม 10 คำในภาษาที่เลือก ต้องใช้เน็ตตอนสร้าง แต่ไม่ต้องใช้ตอนทบทวน', aiPh: 'เช่น คำศัพท์กอล์ฟ', aiB: 'สร้างหัวข้อ',
    aiSet: 'การตั้งค่า AI (คีย์ API)', aiKey: 'ในแอปที่ติดตั้ง AI ใช้คีย์ API ของ Anthropic (console.anthropic.com) คีย์จะเก็บไว้ในเครื่องนี้เท่านั้น', save: 'บันทึก', keyOk: 'บันทึกคีย์ในเครื่องนี้แล้ว', keyNone: 'ยังไม่มีคีย์ที่บันทึกไว้', keyDel: 'ลบคีย์แล้ว',
    offline: 'ขณะนี้คุณออฟไลน์อยู่ เลือกหัวข้อจากคลังคำในแอป หรือเชื่อมต่ออีกครั้งเพื่อสร้างหัวข้อเฉพาะ',
    aiWork: 'กำลังสร้างหัวข้อ “{t}”… (อาจใช้เวลาประมาณหนึ่งนาที)', aiOk: 'สร้างและบันทึกหัวข้อในเครื่องนี้แล้ว: ทบทวนแบบออฟไลน์ได้', aiNoSave: 'สร้างหัวข้อแล้ว แต่เครื่องนี้บันทึกไม่ได้: จะหายไปเมื่อปิดแอป',
    eKey: 'เพิ่มคีย์ API ใน “การตั้งค่า AI” เพื่อสร้างหัวข้อ', eBad: 'คีย์ API ถูกปฏิเสธ โปรดตรวจสอบใน “การตั้งค่า AI”', eDeny: 'คุณปฏิเสธการเข้าถึง Claude สำหรับหน้านี้ โหลดหน้าใหม่เพื่อลองอีกครั้ง', eRate: 'มีคำขอมากเกินไปในเวลาเดียวกัน ลองใหม่ในอีกหนึ่งนาที', eFmt: 'AI ส่งบทเรียนมาไม่ครบ ลองใหม่หรือเปลี่ยนวิธีเขียนหัวข้อ', eGen: 'สร้างไม่สำเร็จ (มีปัญหาการเชื่อมต่อ?) ลองใหม่อีกสักครู่',
    bLen: 'ระยะเวลาการหายใจ', vGuide: 'เสียงนำการหายใจ', uiLang: 'ภาษาของแอป',
    bT: 'ผ่อนคลาย', bD: 'ใส่หูฟัง หายใจเข้าเมื่อวงกลมขยาย หายใจออกเมื่อวงกลมหด', inh: 'หายใจเข้า', exh: 'หายใจออก', bSkip: 'ข้ามไปเรียน',
    vIntro: 'นั่งให้สบาย หลับตาถ้าต้องการ หายใจเข้าเมื่อวงกลมขยาย และค่อยๆ หายใจออกเมื่อวงกลมหด', vEnd: 'ดีมาก รักษาความสงบนี้ไว้ ไปเรียนคำศัพท์กัน', vGood: 'เยี่ยมมาก', vOk: 'ทำได้ดี พรุ่งนี้คุณจะได้เห็นคำเหล่านี้อีก',
    review: 'ต้องทบทวน', listen: 'ฟังการออกเสียง', pron: 'อ่านว่า', tip: 'เคล็ดลับช่วยจำ', prev: 'ก่อนหน้า', next: 'ถัดไป', toQuiz: 'ไปที่แบบทดสอบ',
    q: 'ข้อ {i} / {n}', good: 'ตอบถูก: {n}', qHow: '“{w}” พูดว่าอย่างไร?', qEar: 'ฟังนะ: คำนี้แปลว่าอะไร?', relisten: 'ฟังคำอีกครั้ง', bravo: 'เก่งมาก!', was: 'คำตอบคือ “{w}”', sure: 'คุณมั่นใจในคำตอบไหม?', yes: 'มั่นใจ', no: 'ไม่ค่อย',
    r100: 'ไม่ผิดเลย!', r70: 'เซสชันยอดเยี่ยม', r40: 'เริ่มต้นได้ดี', r0: 'พรุ่งนี้ไปต่อ', rScore: 'จำได้ {g} จาก {n} คำ', rConf: 'ความมั่นใจ: มั่นใจใน {p}% ของคำตอบ', rCal: 'ความรู้สึกของคุณถูก {c} ครั้งจาก {n}', rMiss: 'คำที่ต้องทบทวน', rRev: 'ทบทวนคำที่ผิด', rHome: 'กลับหน้าแรก', rTom: 'ทำแบบทดสอบอีกครั้งพรุ่งนี้: การทดสอบตัวเองหลายวันติดกันช่วยให้จำคำได้ดีที่สุด',
    foot: 'การผ่อนคลายแบบมีผู้นำและการจำด้วยการเชื่อมโยง ฟังผ่านหูฟัง ห้ามใช้ขณะขับรถ',
    themes: ['การทักทายและมารยาท', 'ร้านอาหารและอาหาร', 'การเดินทางและสนามบิน', 'เหตุฉุกเฉินและสุขภาพ', 'การซื้อของ', 'ครอบครัว', 'บ้าน', 'งานและธุรกิจ', 'อากาศและฤดูกาล', 'ตัวเลข 1 ถึง 10']
};
MEAN.th = `สวัสดี|ลาก่อน|ขอบคุณ|กรุณา|ขอโทษ|ใช่|ไม่|ราตรีสวัสดิ์|เพื่อน|สบายดีไหม?
บิล|น้ำ|กาแฟ|ขนมปัง|ส้อม|มีด|แก้ว|ไวน์|เค้ก|จาน
เครื่องบิน|หนังสือเดินทาง|กระเป๋าเดินทาง|ตั๋ว|สถานี|รถไฟ|แท็กซี่|แผนที่|ชายหาด|โรงแรม
หมอ|โรงพยาบาล|ร้านขายยา|ช่วยด้วย!|ตำรวจ|เจ็บ|ไข้|รถพยาบาล|หมอฟัน|ป่วย
เงิน|ราคา|ร้านค้า|แอปเปิล|นม|ถุง|บัตรธนาคาร|ตลาด|ไข่|ชีส
แม่|พ่อ|พี่ชาย/น้องชาย|พี่สาว/น้องสาว|เด็ก|ทารก|ยาย|ตา|สามี|ภรรยา
บ้าน|ประตู|หน้าต่าง|เตียง|เก้าอี้|กุญแจ|ห้องครัว|ห้องน้ำ|โคมไฟ|โซฟา
งาน|การประชุม|คอมพิวเตอร์|โทรศัพท์|อีเมล|สัญญา|เจ้านาย|นัดหมาย|เงินเดือน|สำนักงาน
ดวงอาทิตย์|ฝน|หิมะ|ลม|ร้อน|หนาว|เมฆ|พายุฝนฟ้าคะนอง|ฤดูหนาว|ฤดูร้อน
หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า|สิบ`;

// Découpe des sens par thème
const MEANING = {};
for (const code in MEAN) {
    const lines = MEAN[code].trim().split('\n');
    MEANING[code] = {};
    ['salut', 'resto', 'voyage', 'sante', 'courses', 'famille', 'maison', 'travail', 'meteo', 'nombres']
        .forEach((id, i) => { MEANING[code][id] = lines[i].split('|'); });
}

// Messages d'aide quand la voix ne marche pas
(function () {
    const V = {
        fr: ['Ton téléphone n’a pas de voix pour : {lang}. Ajoute-la dans Réglages > Synthèse vocale (ou Voix), puis relance l’appli.', 'Le son de la voix ne sort pas. Monte le volume, coupe le mode silencieux, puis touche à nouveau Écouter.'],
        en: ['Your phone has no voice for: {lang}. Add it in Settings > Text-to-speech (or Voices), then reopen the app.', 'No voice sound. Turn the volume up, switch off silent mode, then tap Listen again.'],
        es: ['Tu teléfono no tiene voz para: {lang}. Añádela en Ajustes > Síntesis de voz (o Voces) y vuelve a abrir la app.', 'No se oye la voz. Sube el volumen, quita el modo silencio y vuelve a tocar Escuchar.'],
        de: ['Dein Handy hat keine Stimme für: {lang}. Füge sie unter Einstellungen > Sprachausgabe (oder Stimmen) hinzu und öffne die App neu.', 'Keine Sprachausgabe zu hören. Lauter stellen, Stummmodus ausschalten und erneut auf Anhören tippen.'],
        it: ['Il telefono non ha una voce per: {lang}. Aggiungila in Impostazioni > Sintesi vocale (o Voci) e riapri l’app.', 'La voce non si sente. Alza il volume, togli il silenzioso e tocca di nuovo Ascolta.'],
        pt: ['O telemóvel não tem voz para: {lang}. Adicione-a em Definições > Síntese de voz (ou Vozes) e reabra a app.', 'A voz não se ouve. Aumente o volume, desligue o modo silencioso e toque novamente em Ouvir.'],
        nl: ['Je telefoon heeft geen stem voor: {lang}. Voeg die toe via Instellingen > Tekst-naar-spraak (of Stemmen) en open de app opnieuw.', 'Geen stemgeluid. Zet het volume hoger, schakel stil uit en tik opnieuw op Luisteren.'],
        pl: ['Telefon nie ma głosu dla: {lang}. Dodaj go w Ustawienia > Zamiana tekstu na mowę (lub Głosy) i uruchom aplikację ponownie.', 'Nie słychać głosu. Zwiększ głośność, wyłącz tryb cichy i dotknij Posłuchaj ponownie.'],
        sv: ['Telefonen saknar röst för: {lang}. Lägg till den under Inställningar > Text till tal (eller Röster) och öppna appen igen.', 'Rösten hörs inte. Höj volymen, stäng av ljudlöst läge och tryck på Lyssna igen.'],
        ru: ['На телефоне нет голоса для языка: {lang}. Добавьте его в Настройки > Синтез речи (или Голоса) и перезапустите приложение.', 'Голос не слышен. Увеличьте громкость, выключите беззвучный режим и снова нажмите «Слушать».'],
        uk: ['На телефоні немає голосу для мови: {lang}. Додайте його в Налаштування > Синтез мовлення (або Голоси) і перезапустіть застосунок.', 'Голосу не чути. Збільште гучність, вимкніть беззвучний режим і знову натисніть «Слухати».'],
        tr: ['Telefonunda şu dil için ses yok: {lang}. Ayarlar > Metin okuma (veya Sesler) bölümünden ekle, sonra uygulamayı yeniden aç.', 'Ses gelmiyor. Sesi aç, sessiz modu kapat ve tekrar Dinle’ye dokun.'],
        ar: ['لا يوجد صوت في هاتفك للغة: {lang}. أضفه من الإعدادات > تحويل النص إلى كلام (أو الأصوات) ثم أعد فتح التطبيق.', 'لا يُسمع الصوت. ارفع مستوى الصوت وأوقف الوضع الصامت ثم اضغط استمع مرة أخرى.'],
        hi: ['आपके फ़ोन में इस भाषा की आवाज़ नहीं है: {lang}। सेटिंग्स > टेक्स्ट-टू-स्पीच (या आवाज़ें) में जोड़ें, फिर ऐप दोबारा खोलें।', 'आवाज़ नहीं आ रही। वॉल्यूम बढ़ाएँ, साइलेंट मोड बंद करें और फिर से सुनें दबाएँ।'],
        zh: ['你的手机没有此语言的语音：{lang}。请在 设置 > 文字转语音（或 语音）中添加，然后重新打开应用。', '听不到语音。请调高音量、关闭静音模式，然后再次点击“收听”。'],
        ja: ['この言語の音声が端末にありません：{lang}。設定 > 読み上げ（または 音声）で追加してから、アプリを開き直してください。', '音声が聞こえません。音量を上げ、マナーモードを解除して、もう一度「聞く」をタップしてください。'],
        ko: ['휴대폰에 이 언어의 음성이 없습니다: {lang}. 설정 > 텍스트 음성 변환(또는 음성)에서 추가한 뒤 앱을 다시 여세요.', '음성이 들리지 않습니다. 볼륨을 높이고 무음 모드를 끈 다음 다시 듣기를 누르세요.'],
        id: ['Ponselmu tidak punya suara untuk: {lang}. Tambahkan di Setelan > Teks ke ucapan (atau Suara), lalu buka ulang aplikasi.', 'Suara tidak terdengar. Naikkan volume, matikan mode senyap, lalu ketuk Dengarkan lagi.'],
        vi: ['Điện thoại chưa có giọng đọc cho: {lang}. Hãy thêm trong Cài đặt > Chuyển văn bản thành giọng nói (hoặc Giọng nói), rồi mở lại ứng dụng.', 'Không nghe thấy giọng đọc. Hãy tăng âm lượng, tắt chế độ im lặng rồi chạm Nghe lại.'],
        th: ['โทรศัพท์ของคุณไม่มีเสียงสำหรับภาษา: {lang} เพิ่มได้ที่ การตั้งค่า > การอ่านออกเสียง (หรือ เสียง) แล้วเปิดแอปใหม่', 'ไม่ได้ยินเสียง เพิ่มระดับเสียง ปิดโหมดเงียบ แล้วแตะ ฟัง อีกครั้ง']
    };
    for (const k in V) if (UI[k]) { UI[k].noVoice = V[k][0]; UI[k].voiceFail = V[k][1]; }
})();

// Niveaux (mots, phrases, dialogue) et nouveaux exercices
(function () {
    const K = ['lvlH', 'lvl1', 'lvl1d', 'lvl2', 'lvl2d', 'lvl3', 'lvl3d', 'subP', 'subD', 'p8', 'dlg', 'qOrder', 'tap', 'check', 'clear', 'qReply', 'qEarS', 'scene', 'lvlAi', 'rMissP', 'rRevP'];
    const V = {
        fr: ['Niveau', 'Mots', 'Les 10 mots de base, avec images', 'Phrases', '8 phrases utiles pour demander des choses', 'Dialogue', 'Une vraie scène : tu joues ton rôle', '{n} phrases · environ 10 minutes', 'Dialogue de {n} répliques · environ 10 minutes', '8 phrases', 'Dialogue en 6 répliques', 'Remets la phrase dans l’ordre : « {w} »', 'Touche les mots dans le bon ordre.', 'Vérifier', 'Effacer', '{r} te dit ça. Que réponds-tu ?', 'Écoute : que veut dire cette phrase ?', 'Écouter toute la scène', 'Les sujets créés avec l’IA se travaillent au niveau Mots.', 'Phrases à revoir', 'Revoir les phrases ratées'],
        en: ['Level', 'Words', 'The 10 basic words, with pictures', 'Phrases', '8 useful phrases for asking for things', 'Dialogue', 'A real scene: you play your part', '{n} phrases · about 10 minutes', 'Dialogue of {n} lines · about 10 minutes', '8 phrases', '6-line dialogue', 'Put the sentence in order: “{w}”', 'Tap the words in the right order.', 'Check', 'Clear', '{r} says this to you. What do you answer?', 'Listen: what does this sentence mean?', 'Play the whole scene', 'Topics created with AI are practised at the Words level.', 'Phrases to review', 'Review the missed phrases'],
        es: ['Nivel', 'Palabras', 'Las 10 palabras básicas, con imágenes', 'Frases', '8 frases útiles para pedir cosas', 'Diálogo', 'Una escena real: tú haces tu papel', '{n} frases · unos 10 minutos', 'Diálogo de {n} réplicas · unos 10 minutos', '8 frases', 'Diálogo de 6 réplicas', 'Ordena la frase: «{w}»', 'Toca las palabras en el orden correcto.', 'Comprobar', 'Borrar', '{r} te dice esto. ¿Qué respondes?', 'Escucha: ¿qué significa esta frase?', 'Escuchar toda la escena', 'Los temas creados con IA se practican en el nivel Palabras.', 'Frases por repasar', 'Repasar las frases falladas'],
        de: ['Stufe', 'Wörter', 'Die 10 Grundwörter, mit Bildern', 'Sätze', '8 nützliche Sätze, um nach Dingen zu fragen', 'Dialog', 'Eine echte Szene: Du spielst deine Rolle', '{n} Sätze · etwa 10 Minuten', 'Dialog mit {n} Repliken · etwa 10 Minuten', '8 Sätze', 'Dialog in 6 Repliken', 'Bring den Satz in die richtige Reihenfolge: „{w}“', 'Tippe die Wörter in der richtigen Reihenfolge an.', 'Prüfen', 'Löschen', '{r} sagt das zu dir. Was antwortest du?', 'Hör zu: Was bedeutet dieser Satz?', 'Ganze Szene anhören', 'Mit KI erstellte Themen übst du auf der Stufe Wörter.', 'Sätze zum Wiederholen', 'Falsche Sätze wiederholen'],
        it: ['Livello', 'Parole', 'Le 10 parole di base, con immagini', 'Frasi', '8 frasi utili per chiedere qualcosa', 'Dialogo', 'Una scena vera: reciti la tua parte', '{n} frasi · circa 10 minuti', 'Dialogo di {n} battute · circa 10 minuti', '8 frasi', 'Dialogo in 6 battute', 'Rimetti in ordine la frase: «{w}»', 'Tocca le parole nell’ordine giusto.', 'Verifica', 'Cancella', '{r} ti dice questo. Cosa rispondi?', 'Ascolta: cosa vuol dire questa frase?', 'Ascolta tutta la scena', 'Gli argomenti creati con l’IA si studiano al livello Parole.', 'Frasi da ripassare', 'Ripassa le frasi sbagliate'],
        pt: ['Nível', 'Palavras', 'As 10 palavras básicas, com imagens', 'Frases', '8 frases úteis para pedir coisas', 'Diálogo', 'Uma cena real: fazes o teu papel', '{n} frases · cerca de 10 minutos', 'Diálogo de {n} falas · cerca de 10 minutos', '8 frases', 'Diálogo de 6 falas', 'Põe a frase por ordem: «{w}»', 'Toca nas palavras pela ordem certa.', 'Verificar', 'Apagar', '{r} diz-te isto. O que respondes?', 'Ouve: o que quer dizer esta frase?', 'Ouvir a cena toda', 'Os temas criados com IA praticam-se no nível Palavras.', 'Frases a rever', 'Rever as frases erradas'],
        nl: ['Niveau', 'Woorden', 'De 10 basiswoorden, met plaatjes', 'Zinnen', '8 handige zinnen om dingen te vragen', 'Dialoog', 'Een echte scène: jij speelt je rol', '{n} zinnen · ongeveer 10 minuten', 'Dialoog van {n} beurten · ongeveer 10 minuten', '8 zinnen', 'Dialoog in 6 beurten', 'Zet de zin in de juiste volgorde: ‘{w}’', 'Tik de woorden aan in de juiste volgorde.', 'Controleren', 'Wissen', '{r} zegt dit tegen je. Wat antwoord je?', 'Luister: wat betekent deze zin?', 'Hele scène afspelen', 'Onderwerpen gemaakt met AI oefen je op het niveau Woorden.', 'Zinnen om te herhalen', 'Foute zinnen herhalen'],
        pl: ['Poziom', 'Słowa', '10 podstawowych słów z obrazkami', 'Zdania', '8 przydatnych zdań, by o coś poprosić', 'Dialog', 'Prawdziwa scena: grasz swoją rolę', '{n} zdań · około 10 minut', 'Dialog z {n} kwestii · około 10 minut', '8 zdań', 'Dialog w 6 kwestiach', 'Ułóż zdanie w dobrej kolejności: „{w}”', 'Dotykaj słów we właściwej kolejności.', 'Sprawdź', 'Wyczyść', '{r} mówi ci to. Co odpowiadasz?', 'Posłuchaj: co znaczy to zdanie?', 'Odtwórz całą scenę', 'Tematy stworzone przez AI ćwiczysz na poziomie Słowa.', 'Zdania do powtórki', 'Powtórz błędne zdania'],
        sv: ['Nivå', 'Ord', 'De 10 grundorden, med bilder', 'Fraser', '8 användbara fraser för att be om saker', 'Dialog', 'En riktig scen: du spelar din roll', '{n} fraser · cirka 10 minuter', 'Dialog med {n} repliker · cirka 10 minuter', '8 fraser', 'Dialog i 6 repliker', 'Sätt meningen i rätt ordning: ”{w}”', 'Tryck på orden i rätt ordning.', 'Kontrollera', 'Rensa', '{r} säger detta till dig. Vad svarar du?', 'Lyssna: vad betyder meningen?', 'Spela hela scenen', 'Ämnen skapade med AI övas på nivån Ord.', 'Fraser att repetera', 'Repetera missade fraser'],
        ru: ['Уровень', 'Слова', '10 базовых слов с картинками', 'Фразы', '8 полезных фраз, чтобы что-то попросить', 'Диалог', 'Настоящая сценка: ты играешь свою роль', '{n} фраз · около 10 минут', 'Диалог из {n} реплик · около 10 минут', '8 фраз', 'Диалог из 6 реплик', 'Составь фразу в правильном порядке: «{w}»', 'Нажимай на слова в правильном порядке.', 'Проверить', 'Стереть', '{r} говорит тебе это. Что ты ответишь?', 'Послушай: что значит эта фраза?', 'Прослушать всю сценку', 'Темы, созданные ИИ, изучаются на уровне «Слова».', 'Фразы для повторения', 'Повторить ошибки'],
        uk: ['Рівень', 'Слова', '10 базових слів із картинками', 'Фрази', '8 корисних фраз, щоб щось попросити', 'Діалог', 'Справжня сценка: ти граєш свою роль', '{n} фраз · близько 10 хвилин', 'Діалог із {n} реплік · близько 10 хвилин', '8 фраз', 'Діалог із 6 реплік', 'Склади фразу в правильному порядку: «{w}»', 'Натискай на слова в правильному порядку.', 'Перевірити', 'Стерти', '{r} каже тобі це. Що ти відповіси?', 'Послухай: що означає ця фраза?', 'Прослухати всю сценку', 'Теми, створені ШІ, вивчаються на рівні «Слова».', 'Фрази для повторення', 'Повторити помилки'],
        tr: ['Seviye', 'Kelimeler', 'Resimli 10 temel kelime', 'Cümleler', 'Bir şey istemek için 8 faydalı cümle', 'Diyalog', 'Gerçek bir sahne: kendi rolünü oynarsın', '{n} cümle · yaklaşık 10 dakika', '{n} replikli diyalog · yaklaşık 10 dakika', '8 cümle', '6 replikli diyalog', 'Cümleyi doğru sıraya koy: “{w}”', 'Kelimelere doğru sırayla dokun.', 'Kontrol et', 'Sil', '{r} sana bunu söylüyor. Ne cevap verirsin?', 'Dinle: bu cümle ne demek?', 'Tüm sahneyi dinle', 'Yapay zekâyla oluşturulan konular Kelimeler seviyesinde çalışılır.', 'Tekrar edilecek cümleler', 'Yanlış cümleleri tekrar et'],
        ar: ['المستوى', 'كلمات', 'الكلمات الأساسية العشر مع صور', 'جمل', '8 جمل مفيدة لطلب الأشياء', 'حوار', 'مشهد حقيقي: تؤدي دورك', '{n} جمل · نحو 10 دقائق', 'حوار من {n} ردود · نحو 10 دقائق', '8 جمل', 'حوار من 6 ردود', 'رتّب الجملة: «{w}»', 'اضغط على الكلمات بالترتيب الصحيح.', 'تحقق', 'مسح', '{r} يقول لك هذا. بماذا تجيب؟', 'استمع: ماذا تعني هذه الجملة؟', 'استمع إلى المشهد كاملًا', 'المواضيع التي أنشأها الذكاء الاصطناعي تُدرس في مستوى الكلمات.', 'جمل للمراجعة', 'راجع الجمل الخاطئة'],
        hi: ['स्तर', 'शब्द', 'चित्रों के साथ 10 बुनियादी शब्द', 'वाक्य', 'चीज़ें माँगने के लिए 8 काम के वाक्य', 'संवाद', 'एक असली दृश्य: तुम अपनी भूमिका निभाओ', '{n} वाक्य · लगभग 10 मिनट', '{n} संवादों की बातचीत · लगभग 10 मिनट', '8 वाक्य', '6 संवादों की बातचीत', 'वाक्य को सही क्रम में लगाओ: “{w}”', 'शब्दों को सही क्रम में छुओ।', 'जाँचें', 'मिटाएँ', '{r} तुमसे यह कहता है। तुम क्या जवाब दोगे?', 'सुनो: इस वाक्य का क्या अर्थ है?', 'पूरा दृश्य सुनें', 'AI से बने विषय शब्द स्तर पर सीखे जाते हैं।', 'दोहराने वाले वाक्य', 'गलत वाक्य दोहराएँ'],
        zh: ['级别', '单词', '10 个基础单词，配图', '句子', '8 个用来提要求的实用句子', '对话', '真实场景：你扮演自己的角色', '{n} 个句子 · 约 10 分钟', '{n} 句对话 · 约 10 分钟', '8 个句子', '6 句对话', '把句子排好顺序：“{w}”', '按正确顺序点击词语。', '检查', '清除', '{r}对你这样说。你怎么回答？', '听一听：这句话是什么意思？', '播放整个场景', '用 AI 创建的主题在“单词”级别学习。', '要复习的句子', '复习答错的句子'],
        ja: ['レベル', '単語', '絵つきの基本単語10個', 'フレーズ', 'お願いするときに使える8つのフレーズ', '会話', '本物の場面：あなたが役を演じます', '{n}フレーズ · 約10分', '{n}行の会話 · 約10分', '8フレーズ', '6行の会話', '文を正しい順番に並べよう：「{w}」', '単語を正しい順番でタップしてください。', '確認', '消す', '{r}があなたにこう言います。何と答えますか？', '聞いてみよう：この文の意味は？', '場面をすべて聞く', 'AIで作ったテーマは「単語」レベルで学習します。', '復習するフレーズ', '間違えたフレーズを復習'],
        ko: ['단계', '단어', '그림과 함께하는 기본 단어 10개', '문장', '무언가를 부탁할 때 쓰는 유용한 문장 8개', '대화', '실제 장면: 내 역할을 연기해요', '문장 {n}개 · 약 10분', '{n}줄 대화 · 약 10분', '문장 8개', '6줄 대화', '문장을 올바른 순서로 맞추세요: “{w}”', '단어를 올바른 순서로 누르세요.', '확인', '지우기', '{r}이(가) 이렇게 말해요. 뭐라고 대답할까요?', '들어 보세요: 이 문장은 무슨 뜻일까요?', '장면 전체 듣기', 'AI로 만든 주제는 단어 단계에서 학습해요.', '복습할 문장', '틀린 문장 복습하기'],
        id: ['Tingkat', 'Kata', '10 kata dasar, dengan gambar', 'Kalimat', '8 kalimat berguna untuk meminta sesuatu', 'Dialog', 'Adegan nyata: kamu memainkan peranmu', '{n} kalimat · sekitar 10 menit', 'Dialog {n} baris · sekitar 10 menit', '8 kalimat', 'Dialog 6 baris', 'Susun kalimatnya: “{w}”', 'Ketuk kata-kata dengan urutan yang benar.', 'Periksa', 'Hapus', '{r} berkata begini kepadamu. Apa jawabanmu?', 'Dengarkan: apa arti kalimat ini?', 'Putar seluruh adegan', 'Topik buatan AI dilatih di tingkat Kata.', 'Kalimat untuk diulang', 'Ulangi kalimat yang salah'],
        vi: ['Cấp độ', 'Từ', '10 từ cơ bản, có hình ảnh', 'Câu', '8 câu hữu ích để hỏi xin thứ gì đó', 'Hội thoại', 'Một tình huống thật: bạn đóng vai của mình', '{n} câu · khoảng 10 phút', 'Hội thoại {n} lượt · khoảng 10 phút', '8 câu', 'Hội thoại 6 lượt', 'Sắp xếp câu cho đúng: “{w}”', 'Chạm vào các từ theo đúng thứ tự.', 'Kiểm tra', 'Xóa', '{r} nói với bạn như vậy. Bạn trả lời thế nào?', 'Nghe: câu này có nghĩa là gì?', 'Nghe cả tình huống', 'Chủ đề tạo bằng AI được học ở cấp độ Từ.', 'Câu cần ôn lại', 'Ôn lại các câu sai'],
        th: ['ระดับ', 'คำศัพท์', 'คำพื้นฐาน 10 คำ พร้อมภาพ', 'ประโยค', '8 ประโยคที่มีประโยชน์สำหรับการขอสิ่งต่างๆ', 'บทสนทนา', 'สถานการณ์จริง: คุณเล่นบทของคุณ', '{n} ประโยค · ประมาณ 10 นาที', 'บทสนทนา {n} ประโยค · ประมาณ 10 นาที', '8 ประโยค', 'บทสนทนา 6 ประโยค', 'เรียงประโยคให้ถูก: “{w}”', 'แตะคำตามลำดับที่ถูกต้อง', 'ตรวจ', 'ลบ', '{r} พูดกับคุณแบบนี้ คุณจะตอบว่าอะไร?', 'ฟัง: ประโยคนี้หมายความว่าอะไร?', 'ฟังทั้งสถานการณ์', 'หัวข้อที่สร้างด้วย AI ฝึกในระดับคำศัพท์', 'ประโยคที่ต้องทบทวน', 'ทบทวนประโยคที่ผิด']
    };
    for (const l in V) if (UI[l]) K.forEach((k, i) => { UI[l][k] = V[l][i]; });
})();

// Données des SAÉ
const saeData = {
    sae101: {
        title: "SAÉ 1.01 - Sensibilisation à l'hygiène info. et à la cybersécurité",
        context: "Dans cette SAE 1.01, le but était de se former à la cybersécurité à travers le MOOC de l’ANSSI pour préparer un TP de mise en situation professionnelle et apprendre à transmettre les bonnes pratiques numériques à des non-spécialistes, le tout en travaillant en groupes, avec une restitution orale finale.",
        work: "Pour le travail en groupe, nous étions quatre et chacun a choisi un module du MOOC de l’ANSSI qu’il a étudié puis présenté à l’oral devant la classe ; nous avons collaboré pour structurer une présentation claire et répartir équitablement le temps de parole. À côté de cette préparation orale, nous avons aussi participé à des TP, comme un 'Capture The Flag', et un QCM de validation en fin de SAE.",
        probleme: "Nous avons eu des difficultés pour comprendre certaines notions techniques du MOOC, trouver des exemples concrets pour illustrer nos parties, et coordonner le travail à distance, surtout pour harmoniser le contenu et s’assurer que la présentation soit cohérente. L’implication et la capacité à expliquer clairement les modules variaient aussi d’une personne à l’autre, ce qui a demandé des ajustements lors des répétitions.",
        reflection: "Cette SAE m’a permis de mieux comprendre l’importance de la sécurité numérique et d’améliorer mes compétences à l’oral, en particulier parce que c’était le tout premier travail en groupe de l’année. Nous n’étions pas forcément à l’aise entre nous au début, car nous ne nous connaissions pas encore, ce qui a parfois compliqué la communication et la répartition des tâches. Cette expérience m’a appris que dans un nouveau groupe, il faut du temps pour instaurer la confiance et trouver un rythme de travail efficace, mais cela reste très formateur pour la suite de l’année.",
        competences: ["UE1"],
        downloads: [
            { name: "Attestation", link: "Docs/SAE11_Attestation_MOOC.pdf", newTab: true },
        ]
    },
    sae102: {
        title: "SAÉ 1.02 - S'initier aux réseaux informatiques",
        context: "Dans cette SAE 1.02, l’objectif était de concevoir, sécuriser et mettre en place un réseau informatique pour une PME en pleine croissance, tout en prenant en compte les recommandations de l’ANSSI. Ce projet s’inscrit dans l’apprentissage pratique des bases du réseau, de la gestion des services sous Linux et de la mise en œuvre des bonnes pratiques de sécurité.",
        work: "En groupe, nous avons commencé par analyser les besoins de l’entreprise fictive puis élaboré un plan d’adressage IPv4, réparti les utilisateurs en VLAN selon l’organigramme, et défini les services à installer sur un serveur Debian : partage de fichiers, DNS cache, TFTP, et hébergement web. Nous avons configuré les commutateurs (VLAN, RSTP, sécurité des ports), mis en place du routage inter-VLAN et sécurisé les accès (désactivation de Telnet/HTTP, configuration SSH avec clés, etc.). Des tests de débits, de sécurité et de bon fonctionnement des services ont également été effectués, avec captures d’écran et commentaires à l’appui.",
        probleme:"Le principal défi a été la configuration des VLAN et du routage inter-VLAN, qui demande rigueur et compréhension du matériel réseau. Nous avons rencontré des difficultés pour générer automatiquement les comptes utilisateurs via Debian sans scripts complexes et pour configurer certains services comme SMB et le DNS cache. Le respect des bonnes pratiques ANSSI, notamment sur la sécurisation SSH, a aussi demandé des recherches et des ajustements. Enfin, la gestion du temps pour tout tester et documenter a été un vrai enjeu.",
        reflection: "Cette SAE m’a immergé dans une situation concrète de déploiement réseau et m’a fait progresser en configuration réseau, Linux et sécurité. J’ai aussi consolidé mon esprit d’équipe et mes capacités à prioriser et documenter les tâches. J’ai pris conscience de la complexité de la sécurité réseau en environnement professionnel et du besoin permanent de s’adapter et se documenter, surtout concernant la cybersécurité. C’est un projet qui m’a motivé et confirmé mon intérêt pour l’administration réseau.",
        competences: ["UE1"],
        downloads: [
            { name: "Sujet", link: "Docs/SAE12_Sujet.pdf", newTab: true },
            { name: "Compte rendu", link: "Docs/SAE12_Compte_rendu.pdf", newTab: true },
            { name: "Rapport de tests", link: "Docs/SAE12_Rapport_de_tests.pdf", newTab: true },
            { name: "Tableau de tâches", link: "Docs/SAE12_Tableau_des_taches.pdf", newTab: true }
            
        ]
    },
    sae103: {
        title: "SAÉ 1.03 - Découverte d’un dispositif de transmission",
        context: "Dans cette SAE 1.03, le but était de se familiariser avec les dispositifs physiques de transmission utilisés en réseaux, en particulier les câbles en cuivre et la fibre optique, à travers des activités pratiques et une étude documentaire. Cette SAE vise à comprendre les principes de mesure de longueur, de détection de défaut et d'atténuation sur ces supports, préparant ainsi à l’utilisation professionnelle d’outils de certification de câblage.",
        work: "En groupe, nous avons réalisé des travaux pratiques : d’une part, la manipulation de câbles coaxiaux avec un analyseur DTF (Distance to Fault) et un générateur de signaux/oscilloscope pour mesurer la longueur et identifier d’éventuels défauts ; d’autre part, des mesures photométriques sur une liaison fibre optique pour quantifier l’atténuation. En parallèle, une étude documentaire a complété nos connaissances pour nous permettre de rédiger une fiche de synthèse utile pour le QCM final. À l’issue des TP, nous avons rédigé un rapport présentant les résultats des mesures réalisés sur le cuivre et la fibre.",
        probleme:"La compréhension et le paramétrage de certains instruments de mesure comme l’analyseur DTF et l’oscilloscope n’étaient pas simples, surtout pour interpréter correctement les courbes et identifier précisément la distance d’un défaut. Sur la partie fibre, il a fallu bien manipuler le matériel pour limiter les erreurs lors des mesures d’atténuation et identifier les causes possibles des écarts observés. Enfin, il a parfois été difficile de concilier théorie (les formules) et application pratique durant les manipulations.",
        reflection: "J’ai trouvé cette SAE très enrichissant de mettre en pratique des notions vues en cours dès la première année. Manipuler des appareils professionnels et réaliser des tests m’a donné confiance pour aborder des situations concrètes en entreprise. Ce projet m’a aussi sensibilisé à la minutie nécessaire lors des mesures et à l’importance de la précision des calculs. Ces TP ont renforcé ma curiosité pour les aspects techniques du métier et m’ont motivé à approfondir mes connaissances sur les technologies de transmission.",
        competences: ["UE2"],
        downloads: [
            { name: "Sujet", link: "Docs/SAE13_Sujet.pdf", newTab: true },
            { name: "Photométrie", link: "Docs/SAE13_Photometrie.pdf", newTab: true },
            { name: "DTF", link: "Docs/SAE13_DTF.pdf", newTab: true }
        ]
    },
    sae104: {
        title: "SAÉ 1.04 - Se présenter sur Internet",
        context: "Dans le cadre de la SAÉ 1.04, l'objectif était de réaliser un site web multipages en HTML/CSS sur un thème libre. J'ai choisi de mettre en avant la cuisine saoudienne, un sujet qui me tient à cœur.",
        work: "J'ai conçu un site web composé de plusieurs pages : 1. Page d'accueil : Présentation visuelle et accrocheuse introduisant le thème du site. 2. Page dédiée : Contenu détaillé sur les plats traditionnels saoudiens, illustré avec des images pour mettre en valeur leur diversité. 3. Page 'À propos' : Présentation de moi-même, expliquant ma passion pour la cuisine saoudienne et les raisons de mon choix de sujet. J'ai veillé à respecter une charte graphique cohérente, à utiliser Flexbox et CSS Grid pour la mise en page, et à rendre le site entièrement responsive, afin qu'il soit accessible sur ordinateur, tablette et mobile. J'ai également intégré des animations CSS pour rendre la navigation plus dynamique. Le code source a été déposé sur GitHub, avec des commits explicites et un README.md détaillé.",
        probleme:"Au cours du projet, j’ai été confronté à quelques difficultés pour assurer une adaptabilité parfaite du site sur tous les supports. L’intégration d’animations CSS a également demandé des recherches pour trouver le bon compromis entre esthétique et performance. Enfin, garantir le respect strict des standards W3C et de l’accessibilité WCAG 2.0 AA a nécessité de nombreux tests et ajustements.",
        reflection: "Ce projet a été une occasion de consolider mes compétences en développement web, surtout en adaptabilité et en animation CSS. Choisir un sujet personnel a rendu le travail particulièrement motivant. J’ai aussi compris l'importance de bien documenter mon projet et de gérer mon code avec GitHub, ce qui m’a permis de mieux structurer mon travail et de préparer un rendu professionnel.",
        competences: ["UE3"],
        downloads: [
            { name: "Redirection vers le site", link: "https://blvcki.github.io/Hittin-v2", newTab: true }
        ]
    },
    sae105: {
        title: "SAÉ 1.05 - Traitement des données",
        context: "La SAE 1.05 avait pour objectif de nous initier à la gestion et au traitement de données en Python à travers un projet utilisant l’API Pokémon RESTful. L’idée était de réaliser, en binôme, deux outils : l’un pour générer des fiches descriptives individuelles de Pokémon (au format Markdown et HTML), l’autre pour générer des statistiques sur des ensembles de Pokémon. Cette SAE combinait développement Python, collecte d’informations via API, traitement des données et présentation soignée des résultats.",
        work: "Avec mon binôme, nous avons commencé par nous familiariser avec l’API et les formats Markdown/HTML. Nous avons développé une fonction de conversion Markdown vers HTML réutilisable. Ensuite, nous avons créé un script Python utilisant différentes fonctions : récupération de données sur les Pokémon, traduction automatique en français lorsqu’elle était disponible, génération de fiches individuelles (texte et image), puis calcul de statistiques globales (taille, poids, points de vie, etc.). Enfin, l’ergonomie et la présentation des résultats ont été soignées pour rendre les fiches conviviales. Une documentation des fonctions, particulièrement celle dédiée aux statistiques, a été fournie comme demandé.",
        probleme:"L’un des obstacles principaux a été la gestion des appels à l’API, notamment pour adapter le code à l’affichage en français et optimiser les requêtes afin d’éviter les lenteurs (surtout lors du traitement de plusieurs Pokémon). Nous avons également eu des difficultés à bien structurer le code pour qu’il soit réutilisable et facilement paramétrable. Enfin, le format du rendu (Markdown/HTML) a demandé un certain investissement pour obtenir un résultat à la fois lisible et esthétique.",
        reflection: "J’ai particulièrement apprécié de construire un outil complet, de la récupération des données brutes jusqu’à la présentation visuelle : ce côté “projet de bout en bout” m’a motivé et m’a permis de renforcer mes compétences en programmation Python, mais surtout de comprendre l’organisation d’un développement structuré, en pensant à la réutilisabilité du code et à la gestion des erreurs. Travailler en binôme nous a aussi poussés à documenter et expliquer nos choix techniques pour rendre notre script accessible à chacun, ce qui est vraiment utile en contexte professionnel.",
        competences: ["UE3"],
        downloads: [
            { name: "Sujet", link: "Docs/SAE15_Sujet.pdf", newTab: true },
            { name: "Code Python", link: "Docs/SAE15_Projet.zip", newTab: true }
        ]
    },
    sae201: {
        title: "SAÉ 2.01 - Construire un réseau info pour une petite structure",
        context: "La SAE 2.01 avait pour but de nous former aux fondamentaux des environnements systèmes et réseaux, notamment à travers la virtualisation, l’utilisation de plateformes comme VirtualBox et Proxmox, ainsi qu’à la configuration et la sécurisation des réseaux, en s’appuyant sur le support pédagogique Cisco CCNA et sur la sécurité des environnements Windows ADDS/Azure. Le travail portait sur la compréhension des notions théoriques et la mise en pratique via des TP et des évaluations en ligne (QCM/examens Checkpoint/blanc/final).",
        work: "Nous avons tout d’abord étudié la virtualisation, différencié les hyperviseurs de type 1 et 2, et utilisé VirtualBox puis Proxmox pour manipuler des machines virtuelles, configurer leurs caractéristiques (ressources, pilotes virtio, modes réseau), réaliser des sauvegardes et des instantanés. Sur la partie réseaux, le suivi du parcours Cisco CCNA Switching, Routing, and Wireless Essentials nous a permis d’appréhender la configuration de switches, routeurs, et réseaux sans fil à travers des vidéos, questionnaires en ligne et travaux pratiques. Enfin, la sensibilisation à la sécurité des environnements hybrides ADDS/Azure a complété la SAE, avec visionnage de cours vidéos fournis par Microsoft et synthèse sur les enjeux de sécurité des identités.",
        probleme:"Un des principaux défis cette année a été l’usage de l’environnement Windows. Étant donné que la majorité de la formation était centrée sur Linux jusque-là, il a fallu s’adapter à un fonctionnement et une logique système complètement différents : gestion des droits NTFS et des GPO, création d’utilisateurs via GUI/PowerShell, ou encore configuration avancée des réseaux sous Windows Server. La navigation dans l’interface graphique et la compréhension des subtilités propres à Windows ont demandé un effort d’apprentissage supplémentaire, surtout face à des notions nouvelles comme les stratégies de groupe ou l’Active Directory.",
        reflection: "Pouvoir explorer des systèmes qui n’étaient pas familiers jusque-là m’a vraiment permis de mieux appréhender le métier d’administrateur réseau et système : il faut pouvoir jongler d’un OS à l’autre. J’ai aimé découvrir l’univers Microsoft et ses outils, même si le démarrage était parfois ardu. Cela m’a aussi montré que chaque environnement a ses forces et ses spécificités, et que la polyvalence technique est clé dans ce domaine.",
        competences: ["UE1"],
        downloads: [
        ]
    },
    sae202: {
        title: "SAÉ 2.02 - Mesurer et caractériser un signal ou un système",
        context: "La SAE 2.02 portait sur la découverte et la mesure du spectre radiofréquence, en s’intéressant plus spécifiquement à la téléphonie mobile. Le travail s’est fait en groupe et reposait sur un volet théorique (recherche et analyse du spectre français) ainsi que sur la manipulation d’outils numériques pour la visualisation et l’analyse des signaux (utilisation de scripts Matlab fournis).",
        work: "En binôme, nous avons d’abord récupéré le poster officiel de l’ANFR qui cartographie l’organisation du spectre des fréquences en France. Cette ressource détaillée nous a permis d’identifier les bandes attribuées aux principaux services télécom, notamment la téléphonie mobile, la radio, la télévision et d’autres services réglementés. Ensuite, à l’aide du fichier Matlab fourni, nous avons généré et analysé des graphiques issus de mesures ou de simulations, afin de comprendre le découpage réel du spectre ainsi que les limites de chaque bande de fréquences. Nous avons synthétisé ces informations dans un compte rendu visuel, en incluant les bandes les plus connues, leurs usages et des illustrations des différentes parties du spectre.",
        probleme:"L’un des aspects les plus complexes a été la prise en main des outils Matlab, particulièrement pour ceux du groupe qui n’étaient pas familiers avec ce langage et ses fonctions graphiques. Le traitement et l’interprétation des données issues du spectre ont également soulevé des questions sur la lecture des résultats (axe des fréquences, identification correcte des bandes). Une coordination de groupe efficace a été nécessaire pour bien répartir les tâches entre la recherche documentaire et l’analyse technique.",
        reflection: "Avant ce projet, je n’avais jamais pris le temps de réfléchir à tout ce qui se cache derrière un simple appel téléphonique ou une connexion 4G. Comprendre comment sont organisés et attribués les morceaux du spectre m’a vraiment ouvert les yeux sur la complexité technique et la gestion de ces « autoroutes invisibles ». J’ai trouvé ça vraiment intéressant de manipuler Matlab pour visualiser concrètement ce que représentent ces bandes de fréquences. Ce travail m’a aussi permis de voir l’importance de bien se répartir les tâches et de s’écouter dans un travail de groupe, surtout quand chacun a ses propres points forts et difficultés.",
        competences: ["UE2"],
        downloads: [
            { name: "Certification de Matlab", link: "Docs/SAE22_Matlab_Certificate.pdf", newTab: true },
            { name: "Sujet du travail en groupe", link: "Docs/SAE22_Sujet_Groupe.pdf", newTab: true },
            { name: "Projet en groupe", link: "Docs/SAE22_Groupe.pdf", newTab: true },
            { name: "Projet en binôme", link: "Docs/SAE22_Binome.pdf", newTab: true }
        ]
    },
    sae203: {
        title: "SAÉ 2.03 - Mettre en place une solution info pour l'entreprise",
        context: "La SAE 2.03 avait pour but de développer, en autonomie, une application web permettant à l’utilisateur de consulter des prévisions météo, de façon personnalisée et attractive. Ce projet technique, basé sur JavaScript, HTML et CSS, s’inscrivait dans une logique de professionnalisation et d'exigences modernes (responsiveness, accessibilité, interface intuitive).",
        work: "J’ai réalisé un site de météo dynamique qui propose : 1. Un formulaire interactif permettant de choisir la commune et le nombre de jours de prévisions à afficher. 2. Le choix d’informations supplémentaires via des cases à cocher (longitude, latitude, cumul de pluie, vent…). 3. Une fonctionnalité de dark mode offrant plus de confort à l’utilisation. 4. Le respect des standards du web (validation HTML/CSS, accessibilité) et une mise à disposition du projet sur GitHub avec une démonstration via GitHub Pages.",
        probleme:"Un des principaux défis a été l’adaptation de l’interface pour qu’elle soit à la fois responsive et accessible à tout type d’utilisateur (par exemple, compatibilité avec un lecteur d’écran). L’intégration de l’API météo et le rendu en temps réel des données sur la carte m’ont demandé plusieurs essais et adaptations. Enfin, l’organisation et le versionnage sont devenus cruciaux pour rester efficace en travaillant seul sur le projet.",
        reflection: "Ce projet m’a vraiment permis de progresser sur plusieurs aspects du développement web, surtout dans la manière de rendre une application à la fois utile et agréable à utiliser. J’ai particulièrement apprécié le fait de penser comme un utilisateur : choisir quelles infos afficher, rendre l’interface claire, et réfléchir à des petits plus (comme le dark mode) qui font la différence. J’ai pris conscience de l’importance de l’accessibilité, un point auquel on ne pense pas souvent mais qui est essentiel. Travailler seul, c’était un vrai exercice d’autonomie : il a fallu organiser son code, surmonter les bugs, et aller chercher des solutions par soi-même. Au final, c’est très satisfaisant de voir un projet fonctionnel et propre, prêt à être utilisé et partagé.",
        competences: ["UE3"],
        downloads: [
            { name: "Redirection vers le site", link: "https://blvcki.github.io/IWv2", newTab: true }
        ]
    },
    sae204: {
        title: "SAÉ 2.04 - Projet Intégratif de S2",
        context: "Projet de fin d’année qui combine les mathématiques, réseaux, systèmes et télécommunications pour mettre en pratique l’ensemble des compétences acquises.",
        work: "J’ai participé à un projet complet réunissant plusieurs matières : 1. Mathématiques : Étude de polynômes pour localiser, compter et approximer les racines réelles, en appliquant des techniques comme la dérivation, la division euclidienne ou l’analyse de suites. 2. Réseaux/Systèmes : Réalisation en équipe d’une maquette réseau et virtuelle, configuration de serveurs sous Proxmox, organisation et suivi du projet via un chef d’équipe, et documentation de l’avancement sur la plateforme dédiée. 3. Télécommunications : Mesures radiofréquences avec Matlab et ADALM-PLUTO, identification et caractérisation d’un signal perturbateur sur la bande ISM, et recherches sur la législation applicable. 4. Anglais : Évaluation individuelle sur la grammaire, le vocabulaire spécifique et leurs définitions, afin de consolider les bases linguistiques nécessaires dans le domaine des réseaux et télécoms.",
        probleme:"Le caractère transversal de la SAE a nécessité une coordination continue entre des matières aux méthodes très différentes. La gestion du temps, la communication au sein du groupe et l’équilibre des tâches se sont révélés essentiels, surtout face à des délais serrés et à quelques soucis matériels (retards sur la disponibilité des serveurs ou l’accès aux salles spécialisées). La diversité des épreuves, incluant par exemple l’évaluation d’anglais très axée sur le vocabulaire technique, a également demandé une certaine capacité d’adaptation et de priorisation.",
        reflection: "Cette SAE a été particulièrement formatrice, car elle m’a mis dans des conditions proches des projets réels : il a fallu s’appuyer sur des compétences très variées, passer d’une logique mathématique à de la pratique réseau ou à l’analyse grammaticale, et apprendre à organiser le travail collectif. J’ai compris que la technique ne va jamais sans organisation ni communication, et que ma capacité à évoluer sur plusieurs terrains à la fois sera un vrai atout professionnel. Les évaluations en anglais m’ont aussi fait prendre conscience de l’importance d’être à l’aise dans une langue couramment utilisée dans notre secteur. Enfin, la satisfaction d’aboutir à une solution concrète en équipe, en mobilisant tout ce qui a été appris depuis le début de l’année, m’a beaucoup motivé et rendu fier du travail accompli.",
        competences: ["UE1", "UE2", "UE3"],
        downloads: [
            { name: "Réseau - Gantt", link: "Docs/SAE24_Gantt.pdf", newTab: true },
            { name: "Réseau - Schéma logique", link: "Docs/SAE24_Schema_logique.pdf", newTab: true },
            { name: "Réseau - Schéma physique", link: "Docs/SAE24_Schema_physique.pdf", newTab: true },
            { name: "Réseau - Tableau Kanban", link: "Docs/SAE24_Tableau_Kanban.pdf", newTab: true }
        ]
    },
    sae301: {
        title: "SAÉ 3.01 - Mettre en œuvre un système de transmission",
        context: "L'objectif de cette SAÉ était de concevoir l'architecture physique d'un réseau d'accès fibre optique pour desservir un territoire donné. Le projet simulait un environnement opérateur nécessitant la production de documents d'ingénierie standardisés et la validation technique des choix d'équipements pour assurer la continuité du signal optique.",
        work: "En équipe, nous avons conçu l'infrastructure passive complète en produisant le Dossier d’Ingénierie Opérationnelle (DIO) pour le déploiement physique et en validant l'intégration des équipements de multiplexage OADM via le dossier technique (PTI) afin d'assurer la continuité du signal optique et le respect des budgets de puissance.",
        probleme:"La difficulté majeure a été la compréhension théorique et pratique du fonctionnement des OADM pour les intégrer correctement dans le schéma du réseau. La rédaction du DIO a également exigé une grande rigueur pour respecter les normes de nommage et de structure imposées dans le domaine des télécoms.",
        reflection: "Ce projet m'a fait prendre conscience de l'importance critique de la couche physique (niveau 1) dans les réseaux. J'ai appris que sans une infrastructure optique rigoureusement documentée et calculée, les services de niveaux supérieurs ne peuvent pas être garantis.",
        competences: ["UE2"],
        downloads: [
            { name: "DIO", link: "Docs/SAE301_DIO.pdf", newTab: true },
            { name: "PTI Fibre OADM", link: "Docs/SAE301_PTI_Fibre_OADM.pdf", newTab: true }
        ]
    },
    sae302: {
        title: "SAÉ 3.02 - Déployer un réseau multi-sites",
        context: "Cette SAÉ visait à mettre en œuvre une infrastructure réseau complexe interconnectant plusieurs sites. Il fallait déployer un réseau LAN/WAN fonctionnel, sécurisé et redondant, en utilisant des protocoles de routage dynamique et en validant le tout par une procédure de recette formelle.",
        work: "J'ai occupé le rôle d'intégrateur au sein du lot LAN/WAN. J'étais spécifiquement en charge de la conception de l'architecture IP et de la segmentation du réseau. J'ai configuré les VLANs pour séparer les flux et mis en place le routage OSPF pour l'interconnexion. J'ai également participé à la validation des services via le Plan d'Essais et d'Évaluation (PEE).",
        probleme:"Le principal défi a été d'assurer la cohérence du plan d'adressage IP entre les différents sites pour permettre un routage OSPF sans conflit. La coordination avec les autres membres de l'équipe pour lier ma configuration VLAN aux services hébergés a également demandé des ajustements précis lors de la phase d'intégration.",
        reflection: "Cette expérience a solidifié mes compétences techniques en routage et commutation (Routing & Switching). En tant qu'intégrateur, j'ai compris l'importance d'une architecture IP bien pensée dès le départ pour faciliter l'évolution du réseau et le dépannage futur.",
        competences: ["UE1", "UE2", "UE3"],
        downloads: [
            { name: "PTI LAN", link: "Docs/SAE302_PTI_Lan.pdf", newTab: true },
            { name: "PTI OSPF", link: "Docs/SAE302_PTI_OSPF.pdf", newTab: true },
            { name: "PEE", link: "Docs/SAE302_PEE.pdf", newTab: true }
        ]
    },
    sae303: {
        title: "SAE3.Cyber.03 - Concevoir un réseau informatique sécurisé multi-sites",
        context: "Cette SAÉ, réalisée pour le compte de la société fictive Pellet-SA, avait un double objectif. Dans un premier temps, nous devions concevoir et déployer une infrastructure réseau complète (LAN/WAN) répondant à des besoins de disponibilité (redondance). Dans un second temps, nous avons adopté une posture d'auditeur (Pentester) pour réaliser un audit croisé sur l'infrastructure d'un autre groupe, afin d'identifier les failles de sécurité et proposer des mesures correctives.",
        work: "Nous avons déployé une architecture réseau résiliente intégrant des protocoles de redondance (FHRP, LACP) et de gestion de boucles (MSTP) ainsi que des services critiques (Active Directory, DNS, TFTP), avant de réaliser un audit de sécurité offensif (Red Team) sur une infrastructure tierce pour identifier des vulnérabilités critiques (Cisco Smart Install, faiblesses AD) et proposer des mesures de remédiation concrètes dans un rapport détaillé.",
        probleme:"Lors de l'audit, nous avons découvert que certains protocoles de gestion (comme Cisco Smart Install ou TFTP) étaient actifs par défaut sur les équipements, exposant le réseau à des prises de contrôle total. La difficulté a été de démontrer l'impact réel de ces vulnérabilités (Preuve de Concept) sans endommager l'infrastructure auditée, et de proposer des corrections réalistes pour l'entreprise.",
        reflection: "Cette SAÉ a été marquante car elle m'a permis de passer de l'autre côté de la barrière. Comprendre comment un attaquant exploite une mauvaise configuration m'a fait réaliser l'importance du concept de Security by Design. J'ai acquis une vision beaucoup plus critique sur mes propres configurations réseaux.",
        competences: ["UE1", "UE2", "UE4", "UE5"],
        downloads: [
            { name: "Presentation", link: "Docs/SAE303_Presentation.pdf", newTab: true },
            { name: "Schéma logique", link: "Docs/SAE303_Schema_logique.pdf", newTab: true },
            { name: "Schéma physique", link: "Docs/SAE303_Schema_physique.pdf", newTab: true },
            { name: "Suivi des tâches", link: "Docs/SAE303_Suivi_des_taches.pdf", newTab: true },
            { name: "Rapport d'audit", link: "Docs/SAE303_Rapport_audit.pdf", newTab: true }
        ]
    },
};

// Données des compétences
const competencesData = {
    UE1: {
        title: "UE1 - Administrer les réseaux et l'Internet",
        description: "Cette compétence vise à maîtriser l'installation, la configuration, l'administration et la maintenance des équipements réseau et des services Internet dans différents environnements.",
        details: "Configuration de routeurs et commutateurs, gestion des protocoles réseau, administration des services Internet, supervision et maintenance des infrastructures réseau.",
        saes: ["1.01", "1.02", "1.06", "2.01", "2.02", "3.02", "3.03"]
    },
    UE2: {
        title: "UE2 - Connecter les entreprises et les usagers",
        description: "Mise en œuvre de solutions de connectivité adaptées aux besoins des entreprises et des particuliers, intégrant les contraintes techniques, économiques et environnementales.",
        details: "Étude et mise en place de solutions de connectivité, analyse des besoins, configuration d'équipements télécoms, optimisation des performances réseau.",
        saes: ["1.01", "1.03", "1.04", "1.05", "2.01", "2.02", "2.03", "2.04", "3.01", "3.02", "3.03"]
    },
    UE3: {
        title: "UE3 - Créer des outils et applications pour les R&T",
        description: "Développement d'applications et d'outils spécialisés pour les réseaux et télécommunications, automatisation des tâches d'administration et de monitoring.",
        details: "Programmation d'outils réseau, développement d'interfaces d'administration, création de scripts d'automatisation, développement d'applications de monitoring.",
        saes: ["1.02", "1.03", "2.01", "2.03", "3.02"]
    },
    UE4: {
        title: "UE4 - Securiser les réseaux et les systèmes",
        description: "Mise en œuvre de solutions de sécurité réseau et système, protection des données, gestion des accès et des risques.",
        details: "Configuration de pare-feux, mise en place de solutions de sécurité, gestion des identités et des accès, audit de sécurité.",
        saes: ["3.03"]
    },
    UE5: {
        title: "UE5 - Surveiller les réseaux et les systèmes",
        description: "Surveillance des réseaux et des systèmes informatiques, identification des anomalies et des menaces, gestion des incidents de sécurité.",
        details: "Configuration d'outils de surveillance, analyse des logs système, détection d'anomalies réseau, gestion des incidents de sécurité.",
        saes: ["3.03"]
    },
};

// Variable pour sauvegarder la position de scroll
let scrollPositionBeforeModal = 0;

// Navigation fluide
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            scrollToSection(target);
        });
    });

    // Animation au scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialisation des barres de progression
    initProgressBars();
    
    // Événements pour les cartes de projets
    initProjectCards();
    
    // Événements pour les tags de compétences
    initCompetenceTags();
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .competence-card, .about-card');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width;
            }
        });
    });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

function initProjectCards() {
    const projectButtons = document.querySelectorAll('.card-button');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const saeId = this.getAttribute('data-sae');
            openProjectModal(saeId);
        });
    });
}

function initCompetenceTags() {
    const competenceTags = document.querySelectorAll('.comp-tag, .sae-link');
    
    competenceTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                if (target.startsWith('sae')) {
                    openProjectModal(target);
                } else {
                    scrollToSection('competences');
                    setTimeout(() => {
                        highlightCompetence(target);
                    }, 1000);
                }
            }
        });
    });
}

function openProjectModal(saeId) {
    const saeInfo = saeData[saeId];
    if (!saeInfo) return;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContext = document.getElementById('modalContext');
    const modalWork = document.getElementById('modalWork');
    const modalProbleme = document.getElementById('modalProbleme');
    const modalReflection = document.getElementById('modalReflection');
    const modalCompetences = document.getElementById('modalCompetences');
    const modalDownloads = document.getElementById('modalDownloads');
    
    modalTitle.textContent = saeInfo.title;
    modalContext.textContent = saeInfo.context;
    modalWork.textContent = saeInfo.work;
    modalProbleme.textContent = saeInfo.probleme;
    modalReflection.textContent = saeInfo.reflection;
    
    // Compétences
    modalCompetences.innerHTML = '';
    saeInfo.competences.forEach(comp => {
        const compTag = document.createElement('span');
        compTag.className = 'modal-comp-tag';
        compTag.textContent = comp;
        compTag.addEventListener('click', () => {
            closeModal();
            setTimeout(() => {
                scrollToSection('competences');
                highlightCompetence(comp.toLowerCase());
            }, 300);
        });
        modalCompetences.appendChild(compTag);
    });
    
    // Téléchargements
    modalDownloads.innerHTML = '';
    saeInfo.downloads.forEach(download => {
        const downloadLink = document.createElement('a');
        downloadLink.href = download.link;
        downloadLink.className = 'download-link';
        downloadLink.innerHTML = `<i class="fas fa-download"></i> ${download.name}`;
        modalDownloads.appendChild(downloadLink);

        if (download.newTab) {  // Si newTab est true
            downloadLink.target = "_blank";
            downloadLink.rel = "noopener noreferrer";
        }
    });
    
    // Sauvegarder la position actuelle
    scrollPositionBeforeModal = window.pageYOffset || document.documentElement.scrollTop;
    
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    
    // Retourner à la position sauvegardée
    window.scrollTo({ top: scrollPositionBeforeModal, behavior: 'smooth' });
}

function highlightCompetence(compId) {
    const competenceCards = document.querySelectorAll('.competence-card');
    competenceCards.forEach(card => {
        card.style.border = '2px solid transparent';
    });
    
    const targetCard = document.querySelector(`[data-competence="${compId}"]`);
    if (targetCard) {
        targetCard.style.border = '2px solid var(--gold)';
        targetCard.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.3)';
        setTimeout(() => {
            targetCard.style.border = '2px solid transparent';
            targetCard.style.boxShadow = 'none';
        }, 3000);
    }
}

function downloadPortfolio() {
    // Simulation du téléchargement
    const link = document.createElement('a');
    link.href = '#'; // Lien vers le PDF
    link.download = 'Portfolio_YOUSSEF_SALEM_Sultan_BUT_RT.pdf';
    link.click();
    
    // Notification
    alert('Le téléchargement du portfolio va commencer...');
}

// Fermeture du modal en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Gestion du scroll pour la navigation
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('.floating-nav');
    
    if (st > lastScrollTop) {
        nav.style.transform = 'translateY(-20px)';
        nav.style.opacity = '0.7';
    } else {
        nav.style.transform = 'translateY(0)';
        nav.style.opacity = '1';
    }
    
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// Effet de particules pour le hero
function createParticles() {
    const hero = document.getElementById('accueil');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '1';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = 'var(--gold)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.3';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// Animation de flottement pour les particules
const floatKeyframes = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = floatKeyframes;
document.head.appendChild(styleSheet);

// Initialisation des particules
document.addEventListener('DOMContentLoaded', createParticles);

// Effet de typing pour le titre
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth reveal pour les éléments
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);

// Gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Préchargement des ressources
function preloadResources() {
    const resources = [
        // Ajoutez ici les ressources à précharger
    ];
    
    resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        document.head.appendChild(link);
    });
}

document.addEventListener('DOMContentLoaded', preloadResources);

// Gestion des interactions tactiles
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe vers la gauche
            console.log('Swipe gauche');
        } else {
            // Swipe vers la droite
            console.log('Swipe droite');
        }
    }
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Temps de chargement:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
}

monitorPerformance();
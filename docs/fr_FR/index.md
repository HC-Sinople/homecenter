
<p align="center">
  <img src="/plugin-homecenter3/assets/images/homecenter3_icon.png" height="140">
</p>

# Présentation 
**HomeCenter3** est un plugin **Jeedom** permettant de coupler les équipements d'une box **FIBARO** HomeCenter3 ou Lite avec votre box domotique Jeedom. Une fois paramétrée vous pourrez intéragir avec les équipements de votre box **FIBARO** dans **Jeedom**. De plus, ce Plugin a été spécialement concu pour faciliter l'intégration de vos nouveaux équipements avec le plugin [HomeBridge](https://nebzhb.github.io/jeedom_docs/plugins/homebridge/fr_FR/). 

Le plugin **HomeCenter3** est composé de deux écrans principaux 

![Screen8](/plugin-homecenter3/assets/images/Screen8.png)
L'écran principale vous permettant de lier vos pièces et vos équipements de votre box **FIBARO** à votre box **JEEDOM**


![Screen7](/plugin-homecenter3/assets/images/Screen7.png)
Un écran avec une vue générale vous permettant d'ajouter et de controler l'état de vos équipement **FIBARO**. 

> Cet écran liste l'ensemble des équipements visible dans votre box **FIBARO**

## Liste des appareils supportés 
Tous les équipements dans le système **FIBARO** suivent un modèle et sont normalisés, le plugin **HomeCenter3** utilise cette normalisation pour définir si un équipement est compatible ou non. Plus précisément le plugin utilise la donnée _baseType_ des équipements **FIBARO**. 

Voici la liste des _baseType_ actuellement gérée par le plugin :
- com.fibaro.binarySwitch : Interrupteur, module, prise, ect...,
- com.fibaro.actor : Interrupteur, module, prise, ect...,
- com.fibaro.FGWP : Prise Plug,
- com.fibaro.baseShutter : Volet roulant,
- com.fibaro.hvacSystem : tête thermostatique, chauffage,
- com.fibaro.multilevelSensor : Capteur de température,
- com.fibaro.doorWindowSensor : Capteur d'ouverture,
- com.fibaro.securitySensor : Capteur de mouvement,
- com.fibaro.FGMS001 : Capteur de mouvement,
- com.fibaro.floodSensor : Capteur d'innodation,
- com.fibaro.securityMonitoring : Serrure connectée.

> Cette information est aussi visible et disponible dans la fenêtre d'ajout de nouveaux équipements FIBARO

<!-- 
### Type binarySwitch et actor
### Type FGWP
### Type baseShutter
### Type hvacSystem
### Type multilevelSensor
### Type doorWindowSensor
### Type securitySensor et FGMS001
### Type floodSensor
### Type securityMonitoring
-->

## Déterminer le baseType dans FIBARO

> Cette action est nécessaire seulement si vous n'avez pas encore acheté le plugin HomeCenter3 et que vous souhaitez controler la compatibilité d'un équipement en particulier.

Récupérer le numéro de l'équipement à partir de votre tableau de bord **FIBARO**

![Screen4](/plugin-homecenter3/assets/images/Screen4.png)

Pour connaitre le _typeBase_ d'un équipement **FIBARO**, cliquez dans la barre latérale sur le bouton {...} Swagger(API) puis sélectionnez l'API 'Devices'. 

![Screen3](/plugin-homecenter3/assets/images/Screen3.png)

Utilisez la méthode GET /devices/{deviceID} puis cliquez sur Try it out. Utilisez le numéro de l'équipement comme argument dans l'API et exécutez la requête API (Bouton Execute)

![Screen5](/plugin-homecenter3/assets/images/Screen5.png)

Vous trouverez dans la réponse l'attribut _baseType_

![Screen6](/plugin-homecenter3/assets/images/Screen6.png) 

# Configuration du plugin 
Avant de pouvoir utiliser le plugin quelques inforamtions sont nécessaire pour que votre box **JEEDOM** puisse se connecter à votre box **FIBARO**. Une fois le plugin activé il faut alimenter le block de configuation suivant :

![Screen1](/plugin-homecenter3/assets/images/Screen1.png) 

Vous retrouverez toutes ces informations sur votre page de connexion de votre box **FIBARO**

![Screen2](/plugin-homecenter3/assets/images/Screen2.png) 
> Dans la saisie de l'URL notez qu'il ne faut pas mettre le 'HTTP://'

Une fois la configuration saisie et sauvegardée, en appuyant sur le bouton "Raffraichir" l'indicateur "Communication HomeCenter" doit passer à "OK". Si ce n'est pas le cas, une des informations saisies est erronée.

> Le paramètre "Scène HomeCenter de MAJ" vous permet de connaitre la scène crée dans votre box **FIBARO** permettant de gérer le retour d'état de chaqu'un de vos équipement.

# Configuration des équipements
Une fois le plugin **HomeCeneter3** activé et configuré il est conseillé de 
1. Synchroniser les pièces entre les deux box 
2. Ajouter des équipements
3. Mettre à jour la scène d'actualisation

## Gestion des pièces
La synchronisation des pièces est facultative mais facilite l'intégration des équipements **FIBARO**. Si les pièces sont synchronisés chaque équipement créé sera automatiquement positionné dans la pièce **JEEDOM** désignée. 

![Screen9](/plugin-homecenter3/assets/images/Screen9.png) 

Lors de la première utilisation du plugin **HomeCenter** chaque pièce visible de votre système **JEEDOM** apparaissent en rouge. Pour effectuer une synchronisation entre pièce il est nécessaire d'ajouter la pièce **FIBARO** correspondante dans votre pièce **JEEDOM**.

![Screen10](/plugin-homecenter3/assets/images/Screen10.png) 

> La liste déroulante de pièce est une extraction des pièces visible de votre box **FIBARO** 

Une fois sauvegarder celle ci apparaitra en vert dans l'écran principal. 

## Ajout d'équipement(s)
Pour ajouter un ou plusieurs équipements aller sur le bouton d'ajout

![Screen11](/plugin-homecenter3/assets/images/Screen11.png) 

![Screen12](/plugin-homecenter3/assets/images/Screen12.png)

A l'ouverture de cet écran, tous les équipements visibles de votre box **FIBARO** vont s'afficher ainsi que tous les équipements **JEEDOM** faisant partis du plugin **HomeCenter3**. Un code couleur permet de les différenciers la source des données d'un équipement :
- En bleu : Les données en provenance de **FIBARO**
- En vert : Les données en provenance de **JEEDOM**

Dans cette synthèse on retrouve les informations suivantes :
- L'ID : Numéro interne de l'équipement 
- Le nom de l'équipement 
- La pièce dans laquelle est situé l'équipement 
- Le type d'équipement (information défini en fonction du _baseType_)
- L'état de l'équipement : C'est un statut permettant d'identifier à un instant T l'état de l'équipement 
  - Disponible : L'équipement existe dans votre box **FIBARO** et peut être jumulé avec un équipement **JEEDOM**
  - Jumelé : L'équipement est jumulé et fonctionnel 
  - Non compatible : L'équipement n'est pas compatible avec le plugin et donc ne peut être jumelé
  - Sans réponse : L'équipement **JEEDOM** n'arrive pas à communiquer avec son homologue **FIBARO**

Pour ajouter un équipement il faut le sélectionner via la case à cocher de la colonne "Action" et que celui ci soit au statut disponible. On peut en sélectionner plusieurs à la fois afin d'ajouter plusieurs équipements en même temps. Enregistrer.

![Screen13](/plugin-homecenter3/assets/images/Screen13.png)

De retour sur l'écran principal actualisé celle ci pour voir apparaitre vos nouveaux équipement. 

## Scène d'actualisation FIBARO
Afin d'avoir un retour d'état dans **JEEDOM** lorsque l'équipement est modifié depuis la box **FIBARO** il est nécessaire de créer une _scène_ dans le système **FIBARO**. Cette _scène_ a pour but de lancer une action de raffraichissement de l'équipement dans **JEEDOM** lorsqu'un changement d'état est détecté. 

C'est pourquoi, après chaque ajout d'un nouvel équipement, il est nécessaire d'actualiser cette _scène_ pour prendre en compte le ou les nouveaux équipements fraichements ajoutés. 

![Screen14](/plugin-homecenter3/assets/images/Screen14.png)

> La _scène_ est automatiquement créée si celle-ci n'existe pas dans la box **FIBARO**

Retrouver votre _scène_ dans la box **FIBARO** dans l'onglet _Scénario_ en sélectionnant les scénarios cachés

![Screen15](/plugin-homecenter3/assets/images/Screen15.png)

> Le numéro de la _scène_ est disponible dans l'écran de configuration du plugin 

# Homebridge
Le développement du plugin **HomeCenter3** a été pensé pour se synchroniser facilement avec le plugin [HomeBridge](https://nebzhb.github.io/jeedom_docs/plugins/homebridge/fr_FR/). 

Prérequis : Avoir installé et paramétré [HomeBridge](https://nebzhb.github.io/jeedom_docs/plugins/homebridge/fr_FR/) 

Après l'ajout d'un ou plusieurs équipement il suffit de relancer le _Demon_ du plugin [HomeBridge](https://nebzhb.github.io/jeedom_docs/plugins/homebridge/fr_FR/) pour qu'il prenne en compte vos nouveaux équipements. 

![Screen16](/plugin-homecenter3/assets/images/Screen16.png)

> Attention, ce plugin facilite simplement l'intégration des équipements en préconfigurant ceux-ci. Nous ne pouvons pas garantir que tous les équipements soient compatible avec HomeBridge ou qu'ils le resteront si celui ci change


# ChangeLog

Retrouver les changelog [ici](/plugin-homecenter3/fr_FR/changelog)

# Support


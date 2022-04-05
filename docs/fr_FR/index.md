
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

## Gestion des pièces

## Ajout d'équipement(s)

# Homebridge

# ChangeLog

# Support


# Configuration météo
Cette section explique comment configurer les paramètres météo dans l'application ConnectIQ pour afficher les bonnes données dans le module vent.

## Compatibilité des appareils
Le module vent peut fonctionner dans trois états : mis à jour via Internet, utilisant les données météo internes de Garmin, ou sans données. En raison des différences de support d’API selon les anciens et nouveaux appareils (limitation de Garmin), certains modes peuvent ne pas fonctionner selon le modèle. Sur les anciens appareils, même après avoir configuré l’API OpenWeather comme ci-dessous, les données météo peuvent ne pas s’afficher correctement. Voir le tableau ci-dessous :

| Icône | Signification | Fréquence de mise à jour | Précision de localisation | Appareils compatibles |
|-------|-------------------------------------------|----------------------------|----------------------------------------|---------------------------------------------|
| 🟢 | Mise à jour réussie via OpenWeather | Chaque minute | Infos météo aux coordonnées actuelles | 540 / 840 / 1040 / 1050 / explore2 |
| ⭕ | Échec OpenWeather, utilise météo interne Garmin | Incertain, selon Garmin | Données météo de l’aéroport/station météo le plus proche | 530 / 830 / 1030 et modèles plus récents |
| 🔴 | Impossible d'obtenir des données | - | - | 520 Plus / 820 / explore et modèles ultérieurs |

**🟢 Prérequis :**
- Clé API OpenWeather valide
- Données de localisation disponibles (GPS activé)
- Connexion réseau active (WiFi ou données mobiles via smartphone connecté)

Exemples d'icônes d'état :
<br>
![wind example](images/wd_example.jpg)

## Inscription et obtention de l’API OpenWeather
1. Rendez-vous sur le site officiel : [OpenWeather Map](https://openweathermap.org/)  
2. Créez un compte personnel (pas un compte Business) et connectez-vous  
<br>
![OpenWeather Register](images/opw_rig_1.jpg)  
<br>
3. Allez sur la page « My API Keys », puis cliquez sur « Generate » pour créer une clé API  
4. Copiez cette clé et collez-la dans le champ OpenWeather API Key dans la page de configuration de MyGahoo (dans l’app ConnectIQ)  
<br>
![OpenWeather Register](images/opw_rig_2.jpg)  
<br>
5. Cliquez sur « Save » pour enregistrer les paramètres
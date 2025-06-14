# Weerconfiguratie
Deze sectie legt uit hoe je de weerinstellingen configureert in de ConnectIQ-app om correcte gegevens te tonen in de windmodule.

## Compatibiliteit van apparaten
De windmodule kent 3 toestanden: bijgewerkt via internet, gebruik van ingebouwde Garmin-weerdata of geen data. Door beperkingen in Garmin’s API-ondersteuning (vooral bij oudere toestellen), zijn niet alle modi op elk apparaat beschikbaar. Zelfs met een OpenWeather API-sleutel zullen oudere modellen mogelijk nog steeds geen juiste gegevens tonen. Zie de tabel hieronder:

| Icoon | Betekenis | Updatefrequentie | Locatieprecisie | Ondersteunde apparaten |
|--------|--------------------------------------------|------------------------|--------------------------------------------|--------------------------------------------|
| 🟢 | Succesvol bijgewerkt via OpenWeather | Elke minuut | Weerdata op huidige GPS-locatie | 540 / 840 / 1040 / 1050 / explore2 |
| ⭕ | OpenWeather-update mislukt, gebruikt Garmin-weer | Onbekend, door Garmin bepaald | Weerinfo van dichtstbijzijnde weerstation | 530 / 830 / 1030 en nieuwere modellen |
| 🔴 | Geen gegevens beschikbaar | - | - | 520 Plus / 820 / explore en latere modellen |

Voorbeelden van statusiconen:
<br>
![wind example](images/wd_example.jpg)

## Registratie en verkrijgen van OpenWeather API
1. Ga naar de officiële site: [OpenWeather Map](https://openweathermap.org/)  
2. Registreer een persoonlijk account (geen zakelijk account) en log in  
<br>
![OpenWeather Register](images/opw_rig_1.jpg)  
<br>
3. Ga naar "My API Keys" en klik op "Generate" om een API-sleutel te maken  
4. Kopieer de sleutel en plak deze in het invoerveld OpenWeather API Key op de MyGahoo-instellingenpagina (in de ConnectIQ-app)  
<br>
![OpenWeather Register](images/opw_rig_2.jpg)  
<br>
5. Klik op “Save” om op te slaan
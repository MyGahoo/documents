# Wetterkonfiguration
In diesem Abschnitt wird erklärt, wie du die Wettereinstellungen in der ConnectIQ-App konfigurierst, damit die Windanzeige korrekte Daten zeigt.

## Gerätekompatibilität
Die Windanzeige kann Daten in drei Zuständen anzeigen: über das Internet aktualisiert, Garmin-interne Wetterdaten oder keine Daten. Aufgrund von API-Einschränkungen bei neuen und alten Geräten (seitens Garmin) werden je nach Modell unterschiedliche Modi unterstützt. Bei älteren Geräten funktioniert die Anzeige nicht korrekt, selbst wenn du wie unten beschrieben einen OpenWeather API-Schlüssel einrichtest. Details zur Unterstützung findest du in der Tabelle:

| Icon | Bedeutung | Aktualisierungsfrequenz | Standortgenauigkeit | Unterstützte Geräte |
|------|--------------------------------------------|---------------------|----------------------------------------|-------------------------------------------|
| 🟢 | Erfolgreich über OpenWeather aktualisiert | Jede Minute | Wetterdaten anhand der aktuellen Koordinaten | 540 / 840 / 1040 / 1050 / explore2 |
| ⭕ | OpenWeather-Update fehlgeschlagen, verwendet Garmin-Wetter | Unklar, durch Garmin bestimmt | Wetterdaten vom nächstgelegenen Flughafen/Wetterstation | 530 / 830 / 1030 und neuere Modelle |
| 🔴 | Keine Daten verfügbar | - | - | 520 Plus / 820 / explore und neuere Modelle |

Beispiele für Statussymbole:
<br>
![wind example](images/wd_example.jpg)

## OpenWeather API-Registrierung und -Abruf
1. Besuche die offizielle Website von OpenWeather: [OpenWeather Map](https://openweathermap.org/)
2. Registriere ein persönliches Konto (nicht „For Business“) und melde dich an  
<br>
![OpenWeather Register](images/opw_rig_1.jpg)  
<br>
3. Gehe zur Seite „My API Keys“ und klicke auf „Generate“, um einen API-Key zu erstellen  
4. Kopiere den Schlüssel und füge ihn in das Eingabefeld „OpenWeather API Key“ auf der MyGahoo-Einstellungsseite (ConnectIQ-App) ein  
<br>
![OpenWeather Register](images/opw_rig_2.jpg)  
<br>
5. Klicke auf „Save“, um die Einstellungen zu speichern

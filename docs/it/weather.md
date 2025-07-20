# Configurazione Meteo
Questa sezione spiega come configurare le impostazioni meteo nell'app ConnectIQ per visualizzare i dati corretti nel modulo del vento.

## Compatibilità del Dispositivo
La sorgente dei dati del modulo del vento ha 3 stati: aggiornamento tramite Internet, utilizzo delle informazioni meteo integrate di Garmin e assenza di dati. A causa del diverso supporto delle API tra dispositivi vecchi e nuovi (limitazione imposta da Garmin), dispositivi diversi possono supportare alcune o tutte le modalità. Per i dispositivi più vecchi, anche dopo aver aggiornato l'API OpenWeather come descritto sotto, i dati meteo potrebbero non essere visualizzati correttamente. Consulta la tabella seguente per i dettagli sul supporto.

| Icona | Significato | Frequenza di Aggiornamento | Precisione della Posizione | Dispositivi Supportati |
|-------|---------------------------------------------|-----------------------------|-------------------------------------------|-------------------------------------------|
| 🟢 | Aggiornato con successo tramite OpenWeather | Ogni minuto | Informazioni meteo alla latitudine e longitudine attuali | 540 / 840 / 1040 / 1050 / explore2 |
| ⭕ | Aggiornamento OpenWeather fallito, utilizzo dei dati meteo integrati Garmin | Incerta, determinata da Garmin | Informazioni meteo dall'aeroporto o stazione meteo più vicini | 530 / 830 / 1030 e modelli successivi |
| 🔴 | Impossibile ottenere dati | - | - | 520 Plus / 820 / explore e modelli successivi |

**🟢 Prerequisiti:**
- Chiave API OpenWeather valida
- Dati di posizione disponibili (GPS attivato)
- Connessione di rete attiva (WiFi o dati mobili tramite smartphone connesso)

Esempi di icone di stato dell'aggiornamento:
<br>
![esempio vento](images/wd_example.jpg)

## Registrazione e Ottenimento API OpenWeather
1. Visita il sito ufficiale OpenWeather [OpenWeather Map](https://openweathermap.org/)
2. Registra un account personale (non For Business) e completa il login
<br>
![Registrazione OpenWeather](images/opw_rig_1.jpg)
<br>
3. Vai alla pagina My API Keys, clicca sul pulsante Generate per generare una chiave API
4. Copia la chiave API e incollala nella casella di inserimento OpenWeather API Key nella pagina delle impostazioni di MyGahoo (nell'app ConnectIQ)
<br>
![Registrazione OpenWeather](images/opw_rig_2.jpg)
<br>
5. Clicca sul pulsante Salva per salvare le impostazioni

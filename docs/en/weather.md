# Weather Configuration
This section explains how to configure weather settings in the ConnectIQ app to display correct data in the wind module.

## Device Compatibility
The wind module's data source has 3 states: Internet updated, using Garmin's built-in weather information, and no data. Due to different support for different APIs in new and old devices (this is a limitation from Garmin), different devices can support some or all of the modes. For older devices, the OpenWeather API is available (since V2.2.0) but will be updated in a lower frequency. See the table below for support details.

| Icon | Meaning | Update Frequency | Location Precision | Supported Devices |
|------------|-------------------------------------------|------------------|--------------------------------------|-----------------------------------------|
| 🟢 | Successfully updated through OpenWeather | - Every minute (x40 / x50 / explorer2) <br> - Every 5 minute (x20 / x30 / explorer1) | Weather information at current latitude and longitude | ALL |
| ⭕ | OpenWeather update failed, using Garmin built-in weather data | Uncertain, determined by Garmin | Weather information from nearest airport or weather station | 530 / 830 / 1030 and newer models |
| 🔴 | Unable to obtain any data | - | - | ALL |

!!! info "Pre-requisite for 🟢"
    There are several conditions to be met before you can see green dot:

    - API key itself can work properly (you've verified your email in Open Weather etc.)
    - API key is saved in CIQ setting
    - Latitude and longitude are obtained (so indoor environment is likely to fail)
    - Mobile phone is connected and able to connect to Internet (as long as phone is nearby and has signal, this should be fine)



Examples of update status icons:
<br>
![wind example](images/wd_example.jpg)

## OpenWeather API Registration and Acquisition
1. Visit the OpenWeather official website [OpenWeather Map](https://openweathermap.org/)
2. Register a personal account (not For Business) and complete login
<br>
![OpenWeather Register](images/opw_rig_1.jpg)
<br>
3. Go to the My API Keys page, click the Generate button to generate an API Key
4. Copy the API Key and paste it into the OpenWeather API Key input box in the MyGahoo setting page (in ConnectIQ app)
<br>
![OpenWeather Register](images/opw_rig_2.jpg)
<br>
5. Click the Save button to save the settings
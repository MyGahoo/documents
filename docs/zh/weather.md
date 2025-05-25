# 天气配置
本章节介绍如何在ConnectIQ app中进行天气配置，以便在风力模块中显示正确的数据。

## 设备适配性
风力模块的数据来源有3种状态，分别是联网更新、使用佳明内置的天气信息、无数据。由于新老设备对不同API的支持程度不同(这是来自佳明层面的限制)，因此不同设备能支持的模式也会有所不同。对于旧版本设备，即使按照后文教程更新OpenWeather API后也无法正确显示天气数据。具体支持情况见下表。

<!-- | 图标        | Meaning                                      | Update frequency | Location precision                   | Support device                          |
|------------|----------------------------------------------|------------------|--------------------------------------|-----------------------------------------|
| 🟢          | OpenWeather request successful               | Every 60s        | By precise Latitude and longitude    | 540 / 840 / 1040 / 1050 / explore2      |
| ⭕            | OpenWeather fail, using Garmin Weather data | Uncertain, decided by Garmin | By nearest airport or weather station | 530 / 830 / 1030 * and above   |
| 🔴          | No data                                      | -                | -                                    | 520P / 820 / explore * and above        | -->


| 图标        | 含义                                      | 更新频率              | 位置准确性                           | 支持设备                                 |
|------------|-------------------------------------------|------------------|--------------------------------------|-----------------------------------------|
| 🟢          | 通过 OpenWeather 联网更新成功               | 每分钟               | 当前的经纬度下的天气信息                | 540 / 840 / 1040 / 1050 / explore2      |
| ⭕          | 通过 OpenWeather 更新失败，使用Garmin内置天气数据 | 不确定，由佳明决定 | 距离当前位置最近的机场或气象站的天气信息   | 530 / 830 / 1030 及更新型号              |
| 🔴          | 无法获取任何数据                            | -                   | -                                   | 520 Plus / 820 / explore  及更新型号        |

天气更新状态图标的示例如下：
<br>
![wind example](images/wd_example.jpg)

## OpenWeather API 注册与获取
1. 访问 OpenWeather 官方网站 [OpenWeather Map](https://openweathermap.org/)
2. 注册个人版账号（非For Business）并完成登陆
<br>
![OpenWeather Register](images/opw_rig_1.jpg)
<br>
3. 进入My API Keys页面，点击Generate按钮生成API Key
4. 复制API Key并粘贴到ConnectIQ app中的OpenWeather API Key输入框中
<br>
![OpenWeather Register](images/opw_rig_2.jpg)
<br>
5. 点击Save按钮保存设置


# 天气配置
本章节介绍如何在ConnectIQ app中进行天气配置，以便在风力模块中显示正确的数据。

## 设备兼容性
风力模块的数据来源有3种状态：联网更新、使用Garmin内置天气信息、无数据。由于新老设备对不同API的支持程度不同（这是来自Garmin层面的限制），不同设备可以支持部分或全部模式。对于较旧的设备，OpenWeather API可用（自V2.2.0起），但更新频率较低。具体支持详情见下表。

| 图标 | 含义 | 更新频率 | 位置精度 | 支持设备 |
|------------|-------------------------------------------|------------------|--------------------------------------|-----------------------------------------|
| 🟢 | 通过OpenWeather成功更新 | - 每分钟（x40 / x50 / explorer2）<br> - 每5分钟（x20 / x30 / explorer1） | 当前经纬度的天气信息 | 全部 |
| ⭕ | OpenWeather更新失败，使用Garmin内置天气数据 | 不确定，由Garmin决定 | 最近机场或气象站的天气信息 | 530 / 830 / 1030及更新型号 |
| 🔴 | 无法获取任何数据 | - | - | 全部 |

!!! info "🟢的前提条件"
    在您看到绿点之前，需要满足几个条件：

    - API密钥本身可以正常工作（您已在Open Weather等中验证了您的电子邮件）
    - API密钥已保存在CIQ设置中
    - 已获取经纬度（因此室内环境可能会失败）
    - 手机已连接并能够连接到互联网（只要手机在附近并有信号就行）

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


# Layout and Page Switch
Although MyGahoo Pro is a single field, it can contain up to 3 virtual pages, and different layout settings can be set for pages. For devices of different sizes, MyGahoo Pro can theoretically display up to 21, 27, or 33 data modules.

## Layout
Each device supports three display layout modes: loose, normal, compact. These can be configured in ConnectIQ. However, depending on the screen size of the device, the maximum number of displayable rows varies. See the table below for specific examples.

| Device Model     | 520P / 820               | 530 / 540 / 830 / 840         | 10xx / explorer1&2           |
|:-----------------:|:------------------------:|:-----------------------------:|:----------------------------:|
| Max Supported Layout | **1+3**                  | **1+4**                        | **1+5**                       |
| Example           | ![520](images/520p_max.jpg) | ![540](images/540_max.jpg)   | ![1040](images/1040_max.jpg) |


## Page Switch Modes
There are 2 ways to do virtual page switch in MyGahoo Pro: touch screen switch and button switch. In 3 seconds after completing page switch, the current page number will be displayed in the upper left corner of the page.

![page number](images/page_num.jpg)

### 1. Touch Mode
This method is limited to devices with touch screen only. Tapping the left area of the lower half of the screen will navigate to the left, tapping the right area of the lower half of the screen will navigate to the right. Tapping the upper half of the screen will call out the system menu as original behavior.

|  ![page01](images/page_l.jpg) | ![page02](images/page_r.jpg) | ![page03](images/page_up.jpg) | 
|:-------------------------:|:-------------------------:|:-------------------------:|
|  Switch-left touch area | Switch-right touch area | System menu area | 

### 2. Button Mode
Due to Garmin system-level limitations, data fields theoretically cannot detect any user input except touch. However, there is a workaround that allows virtual page swtich by page buttons.

In short, the MyGahoo page needs to be switched from "hidden" to "display" twice consecutively, with the interval between the two "display" events being within 2 seconds. That is to say, when the screen is currently displaying the MyGahoo data field, you need to press ↑ ↓ ↑ ↓ consecutively, which will perform a page switch forward. In this mode, only forward switch is supported until rolling back to the first page. The specific process is shown in the figure below.

![page button](images/page_button.jpg)
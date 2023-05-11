/**
 * Style for Page
 */
import { gettext } from "i18n";
const deviceInfo = hmSetting.getDeviceInfo();
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT, screenShape } = deviceInfo;
const ExtraHeight = (DEVICE_HEIGHT - DEVICE_WIDTH) / 2;

// DesignScreen: 192x480

export const FULL_CONTAINER_STYLE = {
	x: 0,
	y: 0,
	w: 192,
	h: 480,
	radius: 192 / 2,
	line_width: 2,
	color: 0xffffff,
};

export const TITLE_STYLE = {
	x: 20,
	y: 78,
	w: 288,
	h: 47,
	color: 0xffffff,
	text_size: 36,
	align_h: hmUI.align.LEFT,
	align_v: hmUI.align.CENTER_V,
	text_style: hmUI.text_style.NONE,
	text: gettext("HomePage_index_TITLE"),
};
export const APP_MANAGER_BUTTON_STYLE = {
	x: 0,
	y: 139,
	w: 192,
	h: 79,
	radius: 21,
	normal_color: 0xe0eaff,
	press_color: 0x868c99,
	text: gettext("HomePage_index_APP_MANAGER_BUTTON_TEXT"),
	text_size: 26,
	color: 0x000000,
	click_func: (button_widget) => {},
};
export const FILE_LIST_BUTTON_STYLE = {
	x: 0,
	y: 226,
	w: 192,
	h: 79,
	radius: 21,
	normal_color: 0x202124,
	press_color: 0x131416,
	text: gettext("HomePage_index_FILE_LIST_BUTTON_BUTTON_TEXT"),
	text_size: 26,
	color: 0xffffff,
	click_func: (button_widget) => {},
};
export const FILE_LIST_BUTTON_COVER_STYLE = {
	x: 0,
	y: 226,
	w: 192,
	h: 79,
	radius: 20,
	line_width: 4,
	color: 0xe0eaff,
};

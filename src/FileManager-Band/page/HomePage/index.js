import { gettext } from "i18n";
import { Fx } from "../../libs/fx";
import { gotoPage, pageInit } from "../../libs/newGotoPage";
const deviceInfo = hmSetting.getDeviceInfo();
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT, screenShape } = deviceInfo;

import {
	FULL_CONTAINER_STYLE,
	TITLE_STYLE,
	APP_MANAGER_BUTTON_STYLE,
	FILE_LIST_BUTTON_STYLE,
	FILE_LIST_BUTTON_COVER_STYLE,
} from "./index.style";

Page({
	build() {
		pageInit({
			onStop() {
				const strokeRect = hmUI.createWidget(
					hmUI.widget.STROKE_RECT,
					FULL_CONTAINER_STYLE
				);
				const title = hmUI.createWidget(hmUI.widget.TEXT, TITLE_STYLE);
				const app_manager_button = hmUI.createWidget(
					hmUI.widget.BUTTON,
					APP_MANAGER_BUTTON_STYLE
				);
				const file_list_button = hmUI.createWidget(
					hmUI.widget.BUTTON,
					FILE_LIST_BUTTON_STYLE
				);
				hmUI.createWidget(
					hmUI.widget.STROKE_RECT,
					FILE_LIST_BUTTON_COVER_STYLE
				).setEnable(false);
			},
		});
	},
});

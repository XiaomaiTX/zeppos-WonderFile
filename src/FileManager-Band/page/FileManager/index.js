import { gettext } from "i18n";
import { Fx } from "../../libs/fx";
import { gotoPage, pageInit } from "../../libs/newGotoPage";
const deviceInfo = hmSetting.getDeviceInfo();
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT, screenShape } = deviceInfo;

import {
	FULL_CONTAINER_STYLE,
	TITLE_STYLE,
	REFRESH_BUTTON_STYLE,
	EXTENSION_BUTTON_STYLE,
	EXTENSION_BUTTON_COVER_STYLE,
	LIST_CONTAINER_STYLE,
	LIST_ITEM_ICON_STYLE,
	LIST_ITEM_TEXT_STYLE,
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
					REFRESH_BUTTON_STYLE
				);
				const file_list_button = hmUI.createWidget(
					hmUI.widget.BUTTON,
					EXTENSION_BUTTON_STYLE
				);
				hmUI.createWidget(
					hmUI.widget.STROKE_RECT,
					EXTENSION_BUTTON_COVER_STYLE
				).setEnable(false);

				img_list = ["folder.png"];
				text_list = ["Storage"];
				for (var i = 0; i < 1; i++) {
					globalThis["item_container_" + i] = hmUI
						.createWidget(hmUI.widget.BUTTON, LIST_CONTAINER_STYLE)
						.setProperty(hmUI.prop.MORE, {
							x: LIST_CONTAINER_STYLE.x,
							y: LIST_CONTAINER_STYLE.y + 138 * i,
							w: LIST_CONTAINER_STYLE.w,
							h: LIST_CONTAINER_STYLE.h,
						});
					globalThis["icon_" + i] = hmUI
						.createWidget(hmUI.widget.IMG, LIST_ITEM_ICON_STYLE)
						.setProperty(hmUI.prop.MORE, {
							x: LIST_CONTAINER_STYLE.x + LIST_ITEM_ICON_STYLE.x,
							y:
								LIST_CONTAINER_STYLE.y +
								LIST_ITEM_ICON_STYLE.y +
								138 * i,
							src: img_list[i],
						});
					globalThis["text_" + i] = hmUI
						.createWidget(hmUI.widget.TEXT, LIST_ITEM_TEXT_STYLE)
						.setProperty(hmUI.prop.MORE, {
							x: LIST_CONTAINER_STYLE.x + LIST_ITEM_TEXT_STYLE.x,
							y:
								LIST_CONTAINER_STYLE.y +
								LIST_ITEM_TEXT_STYLE.y +
								138 * i,
							w: LIST_CONTAINER_STYLE.w,
							h: LIST_CONTAINER_STYLE.h,
							text: text_list[i],
						});
				}
			},
		});
	},
});

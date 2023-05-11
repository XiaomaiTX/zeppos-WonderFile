import { gettext } from "i18n";
import { Fx } from "../libs/fx";
import { gotoPage, pageInit } from "../libs/newGotoPage";
const deviceInfo = hmSetting.getDeviceInfo();
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT, screenShape } = deviceInfo;

Page({
	build() {
		pageInit({
			onStop() {
				gotoPage({ url: "page/FileManager/index", param: "" });
			},
		});
	},
});

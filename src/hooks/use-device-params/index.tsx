import { RESIZE_DEBOUNCE_TIME } from "@/consts.ts";
import type { DeviceParams } from "@hooks/use-device-params/types.ts";
import { debounce } from "@lib/utils.ts";
import { useLayoutEffect, useState } from "react";

const useDeviceParams = (): DeviceParams => {
	const [deviceParams, setDeviceParams] = useState<DeviceParams>({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	});

	useLayoutEffect(() => {
		const updateDeviceParams = () => {
			setDeviceParams({
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight,
			});
		};

		const debouncedUpdateDeviceParams = debounce(
			updateDeviceParams,
			RESIZE_DEBOUNCE_TIME,
		);

		window.addEventListener("resize", debouncedUpdateDeviceParams);

		return () => {
			window.removeEventListener("resize", debouncedUpdateDeviceParams);
		};
	}, []);

	return deviceParams;
};

export { useDeviceParams };

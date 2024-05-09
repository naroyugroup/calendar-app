import type { ImagePickerProps } from "@components/image-picker/types.ts";
import { Button } from "@components/ui/button";
import { FormLabel } from "@components/ui/form";
import { cn } from "@lib/utils.ts";
import type React from "react";
import { useTranslation } from "react-i18next";
import { BsImages } from "react-icons/bs";
import { MdDeleteForever, MdError } from "react-icons/md";

const ImagePicker: React.FC<ImagePickerProps> = ({
	disabled,
	selectedImage,
	maxFileSize,
	currentImage,
	deleteSelectedImage,
}) => {
	const checkSelectedImage = () => {
		return selectedImage && selectedImage.size <= maxFileSize;
	};

	const { t } = useTranslation("globals");

	return (
		<>
			<FormLabel>{t("imagePicker.label")}</FormLabel>
			<div
				className={cn(
					"flex flex-row items-center gap-x-4 rounded-md border border-input bg-accent px-3 py-2 overflow-x-auto",
					disabled && "opacity-50",
				)}
			>
				<div className={"flex flex-row max-h-15 items-center"}>
					{checkSelectedImage() && selectedImage && (
						<img
							src={URL.createObjectURL(selectedImage)}
							alt={t("imagePicker.altSelectedImage")}
							className={"rounded-md max-w-32 min-h-10 object-contain"}
						/>
					)}
					{!checkSelectedImage() && selectedImage && <MdError size={40} />}
					{!selectedImage && !currentImage && <BsImages size={40} />}
					{!selectedImage && currentImage && (
						<div className={"relative"}>
							<img
								src={currentImage.image}
								alt={t("imagePicker.altCurrentImage")}
								className={"rounded-md max-w-32 min-h-10 object-contain"}
							/>
							<Button
								className={
									"absolute size-full bg-black inset-0 flex items-center justify-center bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-opacity rounded-md focus-visible:bg-opacity-50 focus-visible:opacity-100"
								}
								variant={"none"}
								type={"button"}
								onClick={currentImage.deleteImage}
							>
								<MdDeleteForever size={40} className={"text-white"} />
							</Button>
						</div>
					)}
				</div>
				<>
					<FormLabel
						tabIndex={0}
						disableError
						className={cn("default-link p-3", disabled && "select-none")}
						style={{
							cursor: disabled ? "not-allowed" : undefined,
							textDecoration: disabled ? "none" : undefined,
						}}
					>
						{t("imagePicker.uploadButton")}
					</FormLabel>
					{selectedImage && (
						<Button
							variant={"link"}
							type={"button"}
							className={"text-destructive"}
							onClick={deleteSelectedImage}
						>
							{t("imagePicker.deleteButton")}
						</Button>
					)}
				</>
			</div>
		</>
	);
};

export { ImagePicker };

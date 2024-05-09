export interface ImagePickerProps {
	disabled: boolean | undefined;
	selectedImage: File | null;
	deleteSelectedImage: () => void;
	maxFileSize: number;
	currentImage?: {
		image: string;
		deleteImage: () => void;
	};
}

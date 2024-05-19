interface Image {
    url: string;
}
interface ImageSliderProps {
    images: Image[];
    showArrows?: boolean;
    showDots?: boolean;
    enableDrag?: boolean;
    enableLoop?: boolean;
    width?: number | null;
    height?: number | null;
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    dotColor?: string;
    dotHoverColor?: string;
    dotBorderColor?: string;
    arrowColor?: string;
    arrowSize?: number;
    borderRadius?: number;
    autoSlider?: number;
    duration?: number;
}
declare const ImageSlider: ({ images, showArrows, showDots, enableDrag, enableLoop, width, height, objectFit, dotColor, dotHoverColor, dotBorderColor, arrowColor, arrowSize, borderRadius, autoSlider, duration, }: ImageSliderProps) => import("react/jsx-runtime").JSX.Element;
export default ImageSlider;

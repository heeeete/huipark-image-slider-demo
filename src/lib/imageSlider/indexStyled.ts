import styled from "styled-components";

interface ContainerProps {
	$width?: number | null;
	$height?: number | null;
}

export const Container = styled.div.attrs<ContainerProps>(
	({ $width, $height }) => ({
		style: {
			width: $width ? `${$width + 20}px` : "100%",
			height: $height ? `${$height}px` : "auto",
		},
	})
)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SliderContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

interface SliderImgContainerProps {
	$width?: number | null;
	$height?: number | null;
	$borderRadius?: number;
}

export const SliderImgContainer = styled.div.attrs<SliderImgContainerProps>(
	({ $width, $height, $borderRadius }) => ({
		style: {
			width: $width ? `${$width}px` : "100%",
			height: $height ? `${$height}px` : "100%",
			borderRadius: `${$borderRadius}px`,
		},
	})
)`
	display: flex;
	overflow: hidden;
`;

interface ImgInnerContainerProps {
	$offset: number;
	$transitionEnabled: boolean;
	$duration: number;
}

export const ImgInnerContainer = styled.div.attrs<ImgInnerContainerProps>(
	({ $offset, $transitionEnabled, $duration }) => ({
		style: {
			transform: `translateX(${$offset}px)`,
			transition: $transitionEnabled ? `${$duration}ms` : "none",
		},
	})
)<ImgInnerContainerProps>`
	display: flex;
`;

interface IndicatorProps {
	$dotColor: string;
	$dotHoverColor: string;
	$dotBorderColor: string;
	$hoverFlag: boolean;
	$dotSize: number;
}

export const Indicator = styled.div<IndicatorProps>`
	width: ${(props) => props.$dotSize}px;
	height: ${(props) => props.$dotSize}px;
	border: 1px solid ${(props) => props.$dotBorderColor};
	background-color: ${(props) => props.$dotColor};
	border-radius: 50%;
	margin-inline: 2px;
	transition: 0.3s;
	transform: translateY(calc(${(props) => props.$dotSize}px / -1));

	cursor: pointer;

	&:hover {
		${(props) =>
			props.$hoverFlag && `background-color:  ${props.$dotHoverColor}`};
	}
`;

export const IndicatorContainer = styled.div`
	transform: translateY(-5px);
	display: flex;
`;

interface ButtonProps {
	$arrowColor: string;
	$arrowSize: number;
}

export const Button = styled.button<ButtonProps>`
	display: flex;
	position: absolute;
	color: ${(props) => props.$arrowColor};
	font-size: ${(props) => props.$arrowSize}px;
	cursor: pointer;
	z-index: 1;
	background: none;
	border: none;

	&:hover {
		transition: 0.3s;
		transform: scale(120%);
	}
	&:active {
		transition: 0s;
		transform: scale(100%);
	}

	&.left {
	}

	&.right {
		right: 0;
	}
`;

export const ImageWrapper = styled.div<SliderImgContainerProps>`
	display: flex;
	justify-content: center;
	width: ${(props) => (props.$width ? `${props.$width}px` : "")};
	height: ${(props) => (props.$height ? `${props.$height}px` : "")};
`;

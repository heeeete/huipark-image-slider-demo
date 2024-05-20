import * as styled from "./appStyled";
import ImageSlider from "./lib/index";
import React, { useRef, useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import Select from "react-select";

const images = [
	{ url: "https://heeeete.github.io/simple-image-carousel/1.jpg" },
	{ url: "https://heeeete.github.io/simple-image-carousel/2.jpeg" },
	{ url: "https://heeeete.github.io/simple-image-carousel/3.jpg" },
	{ url: "https://heeeete.github.io/simple-image-carousel/5.png" },
];

interface ObjectFitProps {
	value: "fill" | "cover" | "contain" | "none" | "scale-down";
	label: "fill" | "cover" | "contain" | "none" | "scale-down";
}

const objectFitOpt: ObjectFitProps[] = [
	{ value: "fill", label: "fill" },
	{ value: "contain", label: "contain" },
	{ value: "none", label: "none" },
	{ value: "cover", label: "cover" },
	{ value: "scale-down", label: "scale-down" },
];

function App() {
	const [showArrow, setShowArrow] = useState<boolean>(true);
	const [showDots, setShowDots] = useState<boolean>(true);
	const [objectFit, setObjectFit] = useState<ObjectFitProps>({
		value: "fill",
		label: "fill",
	});
	const [enableDrag, setEnableDrag] = useState<boolean>(true);
	const [enableLoop, setEnableLoop] = useState<boolean>(true);
	const [dotColor, setDotColor] = useState<string>("RGB(0, 114, 255)");
	const [dotBorderColor, setDotBorderColor] =
		useState<string>("rgb(152, 152, 152)");
	const [dotHoverColor, setDotHoverColor] =
		useState<string>("rgb(135, 135, 135)");
	const [arrowColor, setArrowColor] = useState<string>("white");
	const [isDotColor, setIsDotColor] = useState<boolean>(false);
	const [isDotBorderColor, setIsDotBorderColor] = useState<boolean>(false);
	const [isDotHoverColor, setIsDotHoverColor] = useState<boolean>(false);
	const [isArrowColor, setIsArrowColor] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(500);
	const [height, setHeight] = useState<number>(300);
	const [borderRadius, setBorderRadius] = useState<number>(0);
	const [autoSlider, setAutoSlider] = useState<number>(0);
	const [duration, setDuration] = useState<number>(300);
	const [arrowSize, setArrowSize] = useState<number>(50);
	const [dotSize, setDotSize] = useState<number>(13);
	const colorPickersRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleColor = (
		currentState: boolean,
		toggleFunc: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setIsDotBorderColor(false);
		setIsDotColor(false);
		setIsDotHoverColor(false);
		setIsArrowColor(false);
		toggleFunc(!currentState);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			colorPickersRef.current &&
			!colorPickersRef.current.contains(event.target as Node)
		) {
			setIsDotBorderColor(false);
			setIsDotColor(false);
			setIsDotHoverColor(false);
			setIsArrowColor(false);
		}
	};

	return (
		<styled.Container>
			<styled.Header>simple-image-carousel</styled.Header>
			<ImageSlider
				images={images}
				width={width}
				height={height}
				objectFit={objectFit.value}
				showArrows={showArrow}
				showDots={showDots}
				enableDrag={enableDrag}
				enableLoop={enableLoop}
				dotColor={dotColor}
				dotBorderColor={dotBorderColor}
				dotHoverColor={dotHoverColor}
				arrowColor={arrowColor}
				autoSlider={autoSlider}
				duration={duration}
				borderRadius={borderRadius}
				arrowSize={arrowSize}
				dotSize={dotSize}
			/>
			<div style={{ width: "150px", textAlign: "center", marginTop: "10px" }}>
				<Select
					placeholder="objectFit"
					value={objectFit}
					onChange={(value) => setObjectFit(value as ObjectFitProps)}
					options={objectFitOpt}
				/>
			</div>
			<styled.columnDiv>
				showArrow
				<input
					type="checkbox"
					checked={showArrow}
					onChange={() => setShowArrow((curr) => !curr)}
				/>
			</styled.columnDiv>
			<styled.columnDiv>
				showDots
				<input
					type="checkbox"
					checked={showDots}
					onChange={() => setShowDots((curr) => !curr)}
				/>
			</styled.columnDiv>
			<styled.columnDiv>
				enableDrag
				<input
					type="checkbox"
					checked={enableDrag}
					onChange={() => setEnableDrag((curr) => !curr)}
				/>
			</styled.columnDiv>
			<styled.columnDiv>
				enableLoop
				<input
					type="checkbox"
					checked={enableLoop || autoSlider ? true : false}
					onChange={() => setEnableLoop((curr) => !curr)}
					disabled={autoSlider ? true : false}
				/>
			</styled.columnDiv>
			<div
				ref={colorPickersRef}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<styled.ColorContainer>
					<div style={{ margin: "0 10px" }}>dotColor</div>
					<styled.DotColor
						$color={dotColor}
						onClick={() => toggleColor(isDotColor, setIsDotColor)}
					/>
					{isDotColor && (
						<styled.HexColorContainer>
							<HexColorPicker color={dotColor} onChange={setDotColor} />
						</styled.HexColorContainer>
					)}
				</styled.ColorContainer>
				<styled.ColorContainer>
					<div style={{ margin: "0 10px" }}>dotBorderColor</div>
					<styled.DotColor
						$color={dotBorderColor}
						onClick={() => toggleColor(isDotBorderColor, setIsDotBorderColor)}
					/>
					{isDotBorderColor && (
						<styled.HexColorContainer>
							<HexColorPicker
								color={dotBorderColor}
								onChange={setDotBorderColor}
							/>
						</styled.HexColorContainer>
					)}
				</styled.ColorContainer>
				<styled.ColorContainer>
					<div style={{ margin: "0 10px" }}>dotHoverColor</div>
					<styled.DotColor
						$color={dotHoverColor}
						onClick={() => toggleColor(isDotHoverColor, setIsDotHoverColor)}
					/>
					{isDotHoverColor && (
						<styled.HexColorContainer>
							<HexColorPicker
								color={dotHoverColor}
								onChange={setDotHoverColor}
							/>
						</styled.HexColorContainer>
					)}
				</styled.ColorContainer>
				<styled.ColorContainer>
					<div style={{ margin: "0 10px" }}>arrowColor</div>
					<styled.DotColor
						$color={arrowColor}
						onClick={() => toggleColor(isArrowColor, setIsArrowColor)}
					/>
					{isArrowColor && (
						<styled.HexColorContainer>
							<HexColorPicker color={arrowColor} onChange={setArrowColor} />
						</styled.HexColorContainer>
					)}
				</styled.ColorContainer>
			</div>
			<styled.RangeContainer>
				width : {width}px
				<styled.RangeInput
					type="range"
					min={300}
					max={700}
					value={width}
					onChange={(e) => setWidth(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				height : {height}px
				<styled.RangeInput
					type="range"
					min={100}
					max={500}
					value={height}
					onChange={(e) => setHeight(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				arrowSize : {arrowSize}px
				<styled.RangeInput
					type="range"
					min={1}
					max={200}
					value={arrowSize}
					onChange={(e) => setArrowSize(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				dotSize : {dotSize}px
				<styled.RangeInput
					type="range"
					min={1}
					max={100}
					value={dotSize}
					onChange={(e) => setDotSize(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				border radius : {borderRadius}px
				<styled.RangeInput
					type="range"
					min={0}
					max={100}
					value={borderRadius}
					onChange={(e) => setBorderRadius(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				auto slider : {autoSlider}ms
				<styled.RangeInput
					type="range"
					min={0}
					max={5000}
					value={autoSlider}
					onChange={(e) => setAutoSlider(Number(e.target.value))}
				/>
			</styled.RangeContainer>
			<styled.RangeContainer>
				animation duration : {duration}ms
				<styled.RangeInput
					type="range"
					min={100}
					max={5000}
					value={duration}
					onChange={(e) => setDuration(Number(e.target.value))}
				/>
			</styled.RangeContainer>
		</styled.Container>
	);
}

export default App;

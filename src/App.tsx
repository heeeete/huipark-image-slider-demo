import * as styled from "./styledApp.tsx";
import ImageSlider from "./lib/index.tsx";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { HexColorPicker } from "react-colorful";
import Select, { StylesConfig } from "react-select";

const images = [
	{ url: "/1.jpg" },
	{ url: "/2.jpeg" },
	{ url: "/3.jpg" },
	{ url: "/5.png" },
];

interface ObjectFitProps {
	value: string;
	label: string;
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
	const [objectFit, setObjectFit] = useState<any>("fill");
	const [enableDrag, setEnableDrag] = useState<boolean>(true);
	const [enableLoop, setEnableLoop] = useState<boolean>(true);
	const [dotColor, setDotColor] = useState<string>("rgb(1,111,255)");
	const [dotBorderColor, setDotBorderColor] = useState<string>("rgb(78,78,78)");
	const [dotHoverColor, setDotHoverColor] = useState<string>("rgb(78,78,78)");
	const [arrowColor, setArrowColor] = useState<string>("white");
	const [isDotColor, setIsDotColor] = useState<boolean>(false);
	const [isDotBorderColor, setIsDotBorderColor] = useState<boolean>(false);
	const [isDotHoverColor, setIsDotHoverColor] = useState<boolean>(false);
	const [isArrowColor, setIsArrowColor] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(500);
	const [height, setHeight] = useState<number>(300);
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

	const widthChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWidth(Number(e.target.value));
	};
	const heightChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHeight(Number(e.target.value));
	};

	return (
		<styled.Container>
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
			/>

			<div style={{ width: "150px", textAlign: "center", marginTop: "10px" }}>
				<Select
					placeholder="objectFit"
					value={objectFit}
					onChange={setObjectFit}
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
					checked={enableLoop}
					onChange={() => setEnableLoop((curr) => !curr)}
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
			<styled.RangeInput
				type="range"
				min={300}
				max={700}
				value={width}
				onChange={widthChange}
			/>
			<styled.RangeInput
				type="range"
				min={100}
				max={500}
				value={height}
				onChange={heightChange}
			/>
		</styled.Container>
	);
}

export default App;

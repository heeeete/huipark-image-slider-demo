import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import * as Styled from "./indexStyled";

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
	dotSize?: number;
	borderRadius?: number;
	autoSlider?: number;
	duration?: number;
	arrowColor?: string;
	arrowSize?: number;
}

const ImageSlider = ({
	images,
	showArrows = true,
	showDots = true,
	enableDrag = true,
	enableLoop = true,
	width = null,
	height = null,
	objectFit = "fill",
	dotColor = "RGB(0, 114, 255)",
	dotHoverColor = "rgb(135, 135, 135)",
	dotBorderColor = "rgb(152, 152, 152)",
	arrowColor = "white",
	arrowSize = 50,
	dotSize = 13,
	borderRadius = 0,
	autoSlider = 0,
	duration = 300,
}: ImageSliderProps) => {
	if (duration < 100) throw new Error("Duration should be at least 100ms");
	if (autoSlider > 0) enableLoop = true;

	const imgStyle: React.CSSProperties = {
		width: width ? `${width}px` : "100%",
		height: height ? `${height}px` : "100%",
		objectFit: objectFit,
		borderRadius: borderRadius,
	};
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const loopedImages = enableLoop
		? [images[images.length - 1], ...images, images[0]]
		: images;
	const [imgWidth, setImgWidth] = useState<number>(0);
	const [offset, setOffset] = useState<number>(enableLoop ? 1 : 0);
	const [idx, setIdx] = useState<number>(enableLoop ? 1 : 0);
	const transitionEnabled = useRef<boolean>(false);
	const totalChildren: number = loopedImages.length;
	const isMoving = useRef<boolean>(false);
	let initDragPos: number = 0;
	let travelRatio: number = 0;
	let travel: number = 0;
	let originOffset: number = 0;

	useLayoutEffect(() => {
		function initImagePosition() {
			if (enableLoop) {
				const a: number | undefined = sliderContainerRef.current?.offsetWidth;
				setOffset(-1 * (a ? a : 0));
			}
		}
		initImagePosition();
	}, []);

	useEffect(() => {
		if (imgWidth) {
			setIdx(enableLoop ? 1 : 0);
			setOffset(enableLoop ? -imgWidth : 0);
		}
	}, [enableLoop]);

	useEffect(() => {
		if (!transitionEnabled.current) {
			requestAnimationFrame(() => {
				transitionEnabled.current = true;
			});
		}
	}, [transitionEnabled.current]);

	useEffect(() => {
		if (autoSlider > 0) {
			const intervalId = setInterval(() => {
				navigate(1);
			}, autoSlider);
			return () => {
				clearInterval(intervalId);
			};
		}
	}, [autoSlider, idx]);

	useEffect(() => {
		let id: number;

		const handleResize = (entries: any) => {
			clearTimeout(id);
			id = window.setTimeout(() => {
				for (let e of entries) {
					const { width } = e.contentRect;
					setImgWidth(width);
					setIdx(enableLoop ? 1 : 0);
					setOffset(enableLoop ? -width : 0);
				}
			}, 300);
		};

		const debounceResizeObserver = new ResizeObserver(handleResize);

		if (sliderContainerRef.current)
			debounceResizeObserver.observe(sliderContainerRef.current);

		return () => {
			if (sliderContainerRef.current)
				debounceResizeObserver.unobserve(sliderContainerRef.current);
		};
	}, []);

	useEffect(() => {
		if (!enableDrag) return;

		const $imgInnerContainer = document.querySelector(
			".img-inner-container"
		) as HTMLElement;

		const startMouse = (e: MouseEvent) => {
			transitionEnabled.current = false;
			travel = e.clientX - initDragPos;
			travelRatio = travel / imgWidth;
			setOffset(originOffset + travel);
		};

		const stopMouse = () => {
			transitionEnabled.current = true;
			if (Math.abs(travelRatio) > 0.2) {
				const newIdx =
					travelRatio > 0
						? Math.max(idx - 1, 0)
						: Math.min(idx + 1, totalChildren - 1);
				setIdx(newIdx);
				setOffset(newIdx * -imgWidth);
			} else {
				setOffset(idx * -imgWidth);
			}
			document.removeEventListener("mousemove", startMouse);
			document.removeEventListener("mouseup", stopMouse);
		};

		const downMouse = (e: MouseEvent) => {
			e.preventDefault();
			if (!isMoving.current) {
				isMoving.current = true;
				transitionEnabled.current = false;
				travelRatio = 0;
				initDragPos = e.clientX;
				originOffset = offset;

				document.addEventListener("mousemove", startMouse);
				document.addEventListener("mouseup", stopMouse);

				setTimeout(() => {
					isMoving.current = false;
				}, duration + 100);
			}
		};

		$imgInnerContainer?.addEventListener("mousedown", downMouse);

		return () => {
			$imgInnerContainer?.removeEventListener("mousedown", downMouse);
			document.removeEventListener("mousemove", startMouse);
			document.removeEventListener("mouseup", stopMouse);
		};
	}, [enableDrag, imgWidth, idx]);

	const handleTransitionEnd = () => {
		if (enableLoop) {
			if (idx === 0) {
				transitionEnabled.current = false;
				setIdx(images.length);
				setOffset(-images.length * imgWidth);
			} else if (idx === totalChildren - 1) {
				transitionEnabled.current = false;
				setIdx(1);
				setOffset(1 * -imgWidth);
			}
		}
	};

	const onClickIndicator = (idx: number) => {
		setOffset(-idx * imgWidth);
		setIdx(idx);
	};

	const navigate = (direction: number) => {
		if (!isMoving.current) {
			let newIdx = idx + direction;
			if (enableLoop) {
				if (newIdx >= totalChildren) newIdx = 1;
				else if (newIdx <= -1) newIdx = totalChildren - 2;
			} else newIdx = Math.max(0, Math.min(totalChildren - 1, newIdx));

			isMoving.current = true;
			setIdx(newIdx);
			setOffset(-newIdx * imgWidth);
			setTimeout(() => {
				isMoving.current = false;
			}, duration + 100);
		}
	};

	const RenderIndicators = (): JSX.Element => {
		const indicators = Array.from(
			{ length: enableLoop ? totalChildren - 2 : totalChildren },
			(_, _idx) => {
				_idx = enableLoop ? _idx + 1 : _idx;
				let hoverFlag = true;
				let backgroundColor: string;

				if (enableLoop) {
					if (idx === totalChildren - 1 && _idx === 1) {
						backgroundColor = dotColor;
						hoverFlag = false;
					} else if (idx === 0 && _idx === totalChildren - 2) {
						backgroundColor = dotColor;
						hoverFlag = false;
					} else if (_idx === idx) {
						backgroundColor = dotColor;
						hoverFlag = false;
					} else {
						backgroundColor = "";
					}
				} else {
					if (idx === _idx) backgroundColor = dotColor;
					else backgroundColor = "";
				}

				return (
					<Styled.Indicator
						$dotColor={backgroundColor}
						$dotHoverColor={dotHoverColor}
						$dotBorderColor={dotBorderColor}
						$hoverFlag={hoverFlag}
						$dotSize={dotSize}
						onClick={() => onClickIndicator(_idx)}
						key={_idx}
					/>
				);
			}
		);

		return <>{indicators}</>;
	};

	const RenderLeftArrow = (): any => {
		if (!showArrows) return;
		else if (!enableLoop && idx === 0) return;
		else {
			return (
				<Styled.Button
					onClick={() => navigate(-1)}
					className="left"
					$arrowColor={arrowColor}
					$arrowSize={arrowSize}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
					>
						<g fill="currentColor">
							<path d="m12.384 15.68l-5-6l-.768.64l5 6z" />
							<path d="m11.616 16.32l-5-6c-.427-.512.341-1.152.768-.64l5 6c.427.512-.341 1.152-.768.64" />
							<path d="m11.616 3.68l-5 6l.768.64l5-6z" />
							<path d="m12.384 4.32l-5 6c-.427.512-1.195-.128-.768-.64l5-6c.427-.512 1.195.128.768.64" />
						</g>
					</svg>
				</Styled.Button>
			);
		}
	};

	const RenderRightArrow = (): any => {
		if (!showArrows) return;
		else if (!enableLoop && idx === totalChildren - 1) return;
		else {
			return (
				<Styled.Button
					onClick={() => navigate(1)}
					className="right"
					$arrowColor={arrowColor}
					$arrowSize={arrowSize}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
					>
						<g fill="currentColor">
							<path d="M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" />
							<path d="M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" />
						</g>
					</svg>
				</Styled.Button>
			);
		}
	};

	return (
		<Styled.Container $width={width} $height={height}>
			<Styled.SliderContainer>
				<RenderLeftArrow />
				<Styled.SliderImgContainer
					ref={sliderContainerRef}
					$width={width}
					$height={height}
					$borderRadius={borderRadius}
				>
					<Styled.ImgInnerContainer
						$offset={offset}
						$transitionEnabled={transitionEnabled.current}
						$duration={duration}
						className="img-inner-container"
						onTransitionEnd={handleTransitionEnd}
					>
						{loopedImages.map((e, idx) => {
							return (
								<img
									src={e.url}
									alt={`img-${idx}`}
									key={idx}
									loading="lazy"
									style={imgStyle}
								/>
							);
						})}
					</Styled.ImgInnerContainer>
				</Styled.SliderImgContainer>
				<RenderRightArrow />
			</Styled.SliderContainer>
			{showDots ? (
				<Styled.IndicatorContainer>
					<RenderIndicators />
				</Styled.IndicatorContainer>
			) : (
				""
			)}
		</Styled.Container>
	);
};

export default ImageSlider;

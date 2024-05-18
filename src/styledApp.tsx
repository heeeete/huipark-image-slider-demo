import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const columnDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;
`;

export const ColorContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;

	margin: 10px 0;
`;

interface DotColorProps {
	$color: string;
}

export const DotColor = styled.div.attrs<DotColorProps>(({ $color }) => ({
	style: {
		backgroundColor: $color,
	},
}))`
	border: 3px solid black;
	left: -40px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	cursor: pointer;
`;

export const HexColorContainer = styled.div`
	position: absolute;
	right: 0;
	transform: translate(100%, 0);
	z-index: 10;
`;

export const RangeInput = styled.input`
	width: 600px;
`;

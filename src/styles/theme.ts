import { fonts } from "@/assets/fonts";
import { fontSize } from "@/styles/font";
import { palette } from "@/styles/palette";
import { device } from "./device";
import { media } from "./media";

export const lightThemeScheme = {
	background: "#F0F4FA", // 거의 흰색에 가까운 배경색
	primary: "#005CFD", // 주요 색상으로 사용될 밝은 파랑
	secondary: "#5D6D7E", // 두 번째로 주요한 색상, 회색 계열의 파랑
	tertiary: "#AED6F1", // 세 번째로 주요한 색상, 아주 밝은 하늘색 계열
	textColor: "#333333",
	info: "#1A73E8", // 정보를 나타낼 때 사용되는 색상, 진한 파랑
	warning: "#FFA726", // 경고를 나타낼 때 사용되는 색상, 밝은 주황색
	danger: "#E57373", // 위험 또는 오류를 나타낼 때 사용되는 색상, 밝은 빨간색
	success: "#66BB6A", // 성공을 나타낼 때 사용되는 색상, 밝은 초록색
	neutral: "#B0BEC5", // 중립적인 색상, 밝은 회색 계열
	shadow: "0px 0px 20px 0px rgba(0, 92, 253, 0.4)",
};

export const darkThemeScheme = {
	background: "#1E2A38", // 어두운 파랑 계열의 배경색
	primary: "#FFFFFF", // 주요 색상으로 사용될 중간 어두운 파랑
	secondary: "#34495E", // 두 번째로 주요한 색상, 조금 더 진한 파랑
	tertiary: "#4A90E2", // 세 번째로 주요한 색상, 밝은 하늘색 계열
	textColor: "#FFFFFF",
	info: "#5DADE2", // 정보를 나타낼 때 사용되는 색상, 밝은 파랑
	warning: "#F39C12", // 경고를 나타낼 때 사용되는 색상, 주황색
	danger: "#E74C3C", // 위험 또는 오류를 나타낼 때 사용되는 색상, 빨간색
	success: "#27AE60", // 성공을 나타낼 때 사용되는 색상, 초록색
	neutral: "#7F8C8D", // 중립적인 색상, 회색 계열
	shadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)",
};

export const lightThemeVariables = {
	...lightThemeScheme,
	...palette,
};

export const lightThemePalette = {
	...lightThemeScheme,
	...palette,
};

export const darkThemeVariables = {
	...darkThemeScheme,
	...palette,
};

export const darkThemePalette = {
	...darkThemeScheme,
	...palette,
};

export type CustomTheme = {
	fontSize: typeof fontSize;
	fontFamily: typeof fonts;
	color: typeof lightThemePalette;
	device: typeof device;
	media: typeof media;
};

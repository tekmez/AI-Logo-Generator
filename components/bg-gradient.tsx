import * as React from "react";
import { Dimensions } from "react-native";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Filter,
  FeGaussianBlur,
  FeFlood,
  FeBlend,
} from "react-native-svg";

function BgGradient(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={Dimensions.get("window").width}
      height={Dimensions.get("window").height}
      fill="none"
      {...props}
    >
      <G filter="url(#a)" opacity={0.8}>
        <Path
          stroke="url(#b)"
          strokeLinejoin="round"
          strokeWidth={50}
          d="M322.769 148 121.552 271.729c-55.067 33.861-49.313 115.67 9.952 141.489l142.551 62.104c55.762 24.293 65.09 99.466 16.956 136.651L81.277 774"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={194.5}
          x2={194.5}
          y1={774}
          y2={148}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.185} stopColor="#C26CFF" />
          <Stop offset={1} stopColor="#1C55FF" />
        </LinearGradient>
        <Filter
          id="a"
          width={708.668}
          height={1087.08}
          x={-151.55}
          y={-83.296}
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity={0} result="BackgroundImageFix" />
          <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeGaussianBlur
            result="effect1_foregroundBlur_6_2898"
            stdDeviation={105}
          />
        </Filter>
      </Defs>
    </Svg>
  );
}

export default BgGradient;

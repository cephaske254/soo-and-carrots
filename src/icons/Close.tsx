import { Path, Svg, SvgProps } from "react-native-svg";

export const CloseIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M5.33334 15.8333L4.16667 14.6667L8.83334 10L4.16667 5.33333L5.33334 4.16667L10 8.83333L14.6667 4.16667L15.8333 5.33333L11.1667 10L15.8333 14.6667L14.6667 15.8333L10 11.1667L5.33334 15.8333Z"
        fill={props.fill ?? props.color ?? props.stroke ?? "#475467"}
      />
    </Svg>
  );
};

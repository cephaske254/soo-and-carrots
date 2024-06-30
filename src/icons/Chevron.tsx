import { SvgProps, Svg, Path } from "react-native-svg";

export const ChevronDownIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z"
        fill={props.color ?? props.stroke ?? "#475467"}
      />
    </Svg>
  );
};

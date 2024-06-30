import { Svg, Path, SvgProps } from "react-native-svg";

export const ArrowLeftIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15.8333 10H4.16663M4.16663 10L9.99996 15.8333M4.16663 10L9.99996 4.16667"
        stroke={props.stroke ?? props.color ?? "#101828"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowRightIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M4.16663 9.99999H15.8333M15.8333 9.99999L9.99996 4.16666M15.8333 9.99999L9.99996 15.8333"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke ?? props.color ?? "white"}
      />
    </Svg>
  );
};

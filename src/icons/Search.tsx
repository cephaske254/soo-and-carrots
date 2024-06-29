import { SvgProps, Svg, Path } from "react-native-svg";

export const SearchIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={props.color ?? props.stroke ?? "#101828"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

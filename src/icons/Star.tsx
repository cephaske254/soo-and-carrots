import { Svg, SvgProps, G, Path, Defs, Rect } from "react-native-svg";

const DEFAULT_SIZE = 24;

export const StarIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={props.width ?? DEFAULT_SIZE}
      height={props.height ?? DEFAULT_SIZE}
      viewBox="0 0 24 24"
      {...props}
      fill="none"
    >
      <G clip-path="url(#clip0_1138_242)">
        <Path
          d="M23.4375 11.4375H13.358L20.4853 4.3102C20.5375 4.25797 20.579 4.19596 20.6073 4.12771C20.6355 4.05946 20.6501 3.98632 20.6501 3.91245C20.6501 3.83857 20.6355 3.76543 20.6073 3.69718C20.579 3.62893 20.5375 3.56692 20.4853 3.51469C20.4331 3.46245 20.3711 3.42102 20.3028 3.39275C20.2346 3.36448 20.1614 3.34993 20.0876 3.34993C20.0137 3.34993 19.9405 3.36448 19.8723 3.39275C19.804 3.42102 19.742 3.46245 19.6898 3.51469L12.5625 10.642V0.5625C12.5625 0.413316 12.5032 0.270242 12.3977 0.164752C12.2923 0.0592632 12.1492 0 12 0C11.8508 0 11.7077 0.0592632 11.6023 0.164752C11.4968 0.270242 11.4375 0.413316 11.4375 0.5625V10.642L4.3102 3.51469C4.20471 3.4092 4.06163 3.34993 3.91245 3.34993C3.76326 3.34993 3.62018 3.4092 3.51469 3.51469C3.4092 3.62018 3.34993 3.76326 3.34993 3.91245C3.34993 4.06163 3.4092 4.20471 3.51469 4.3102L10.642 11.4375H0.5625C0.413316 11.4375 0.270242 11.4968 0.164752 11.6023C0.0592632 11.7077 0 11.8508 0 12C0 12.1492 0.0592632 12.2923 0.164752 12.3977C0.270242 12.5032 0.413316 12.5625 0.5625 12.5625H10.642L3.51469 19.6898C3.46245 19.742 3.42102 19.804 3.39275 19.8723C3.36448 19.9405 3.34993 20.0137 3.34993 20.0876C3.34993 20.1614 3.36448 20.2346 3.39275 20.3028C3.42102 20.3711 3.46245 20.4331 3.51469 20.4853C3.56692 20.5375 3.62893 20.579 3.69718 20.6073C3.76543 20.6355 3.83857 20.6501 3.91245 20.6501C3.98632 20.6501 4.05946 20.6355 4.12771 20.6073C4.19596 20.579 4.25797 20.5375 4.3102 20.4853L11.4375 13.358V23.4375C11.4375 23.5867 11.4968 23.7298 11.6023 23.8352C11.7077 23.9407 11.8508 24 12 24C12.1492 24 12.2923 23.9407 12.3977 23.8352C12.5032 23.7298 12.5625 23.5867 12.5625 23.4375V13.358L19.6898 20.4853C19.742 20.5375 19.804 20.579 19.8723 20.6073C19.9405 20.6355 20.0137 20.6501 20.0876 20.6501C20.1614 20.6501 20.2346 20.6355 20.3028 20.6073C20.3711 20.579 20.4331 20.5375 20.4853 20.4853C20.5375 20.4331 20.579 20.3711 20.6073 20.3028C20.6355 20.2346 20.6501 20.1614 20.6501 20.0876C20.6501 20.0137 20.6355 19.9405 20.6073 19.8723C20.579 19.804 20.5375 19.742 20.4853 19.6898L13.358 12.5625H23.4375C23.5867 12.5625 23.7298 12.5032 23.8352 12.3977C23.9407 12.2923 24 12.1492 24 12C24 11.8508 23.9407 11.7077 23.8352 11.6023C23.7298 11.4968 23.5867 11.4375 23.4375 11.4375Z"
          fill={props.fill ?? "white"}
        />
      </G>
      <Defs>
        <clipPath id="clip0_1138_242">
          <Rect
            width={props.width ?? DEFAULT_SIZE}
            height={props.height ?? DEFAULT_SIZE}
            fill={props.fill ?? "white"}
          />
        </clipPath>
      </Defs>
    </Svg>
  );
};
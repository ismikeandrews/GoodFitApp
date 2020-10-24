import * as React from "react"
import Svg, { Defs, G, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function TinderSvg(props) {
  return (
    <Svg width={257} height={85} viewBox="0 0 257 85" {...props}>
      <Defs></Defs>
      <G data-name="Grupo 163">
        <G
          data-name="Elipse 3"
          transform="translate(57 7)"
          fill="#fff"
          stroke="#f2f2f2"
          strokeWidth={7}
        >
          <Circle cx={33} cy={33} r={33} stroke="none" />
          <Circle cx={33} cy={33} r={36.5} fill="none" />
        </G>
        <G filter="url(#prefix__a)">
          <Circle
            data-name="Elipse 8"
            cx={33}
            cy={33}
            r={33}
            transform="translate(57 7)"
            fill="#fff"
          />
        </G>
        <G
          data-name="Elipse 5"
          transform="translate(132 7)"
          fill="#fff"
          stroke="#f2f2f2"
          strokeWidth={7}
        >
          <Circle cx={33} cy={33} r={33} stroke="none" />
          <Circle cx={33} cy={33} r={36.5} fill="none" />
        </G>
        <G
          data-name="Elipse 6"
          transform="translate(9 7)"
          fill="#fdcf67"
          stroke="#f2f2f2"
          strokeWidth={7}
        >
          <Circle cx={20} cy={20} r={20} stroke="none" />
          <Circle cx={20} cy={20} r={23.5} fill="none" />
        </G>
        <G filter="url(#prefix__b)">
          <Circle
            data-name="Elipse 10"
            cx={20}
            cy={20}
            r={20}
            transform="translate(9 7)"
            fill="#fff"
          />
        </G>
        <G
          data-name="Elipse 7"
          transform="translate(208 7)"
          fill="#fff"
          stroke="#f2f2f2"
          strokeWidth={7}
        >
          <Circle cx={20} cy={20} r={20} stroke="none" />
          <Circle cx={20} cy={20} r={23.5} fill="none" />
        </G>
        <G data-name="Grupo 158">
          <Path
            data-name="Caminho 77"
            d="M104.5 48.6l-8.856-8.85 8.856-8.85-5.9-5.9-8.85 8.852L80.9 25 75 30.9l8.848 8.85L75 48.6l5.9 5.9 8.852-8.852L98.6 54.5z"
            fill="#f06a47"
          />
        </G>
        <G filter="url(#prefix__c)">
          <Circle
            data-name="Elipse 9"
            cx={33}
            cy={33}
            r={33}
            transform="translate(132 7)"
            fill="#fff"
          />
        </G>
        <Path
          data-name="Caminho 76"
          d="M164.66 53.866a1.837 1.837 0 01-1.211-.455 366.347 366.347 0 00-3.561-3.063h-.006a66.235 66.235 0 01-7.776-7.3A11.658 11.658 0 01149 35.413a9.79 9.79 0 012.485-6.686A8.422 8.422 0 01157.75 26a7.878 7.878 0 014.921 1.7 10.069 10.069 0 011.99 2.077 10.068 10.068 0 011.989-2.077 7.878 7.878 0 014.921-1.7 8.423 8.423 0 016.265 2.727 9.789 9.789 0 012.484 6.686 11.656 11.656 0 01-3.106 7.631 66.226 66.226 0 01-7.776 7.3c-1.078.919-2.3 1.96-3.568 3.069a1.838 1.838 0 01-1.21.453z"
          fill="#63de9a"
        />
        <G filter="url(#prefix__d)">
          <Circle
            data-name="Elipse 11"
            cx={20}
            cy={20}
            r={20}
            transform="translate(208 7)"
            fill="#fff"
          />
        </G>
        <G data-name="Grupo 159">
          <Path
            data-name="Caminho 79"
            d="M20 28.166a.478.478 0 01.478-.477h2.434a.478.478 0 01.478.477 5.86 5.86 0 105.859-5.859 5.653 5.653 0 00-1.021.09v1.658a.478.478 0 01-.817.337L24.135 21.1a.475.475 0 010-.673l3.278-3.285a.484.484 0 01.522-.107.484.484 0 01.293.441v1.5a9.154 9.154 0 011.021-.058 9.253 9.253 0 11-9.25 9.252z"
            fill="#fdcf67"
          />
        </G>
        <Path
          d="M224.529 27.25c0 .063-.014.123-.018.186l6.629 3.313a3.231 3.231 0 012.1-.78 3.266 3.266 0 11-3.265 3.265c0-.065.014-.123.018-.186l-6.633-3.314a3.266 3.266 0 110-4.97l6.629-3.313c0-.063-.018-.123-.018-.188a3.265 3.265 0 113.265 3.267 3.228 3.228 0 01-2.1-.782l-6.625 3.314c.004.063.018.123.018.188z"
          fill="#6dd9f1"
          data-name={34088}
        />
      </G>
    </Svg>
  )
}

export default TinderSvg

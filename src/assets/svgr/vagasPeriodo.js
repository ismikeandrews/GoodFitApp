import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function VagasPeriodoSvg(props) {
  return (
    <Svg width={9.104} height={9.104} viewBox="0 0 9.104 9.104" {...props}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M4.552 0A4.552 4.552 0 109.1 4.552 4.557 4.557 0 004.552 0zm0 8.136a3.583 3.583 0 113.584-3.584 3.588 3.588 0 01-3.584 3.584z"
      />
      <Path
        className="prefix__a"
        d="M6.924 4.412H4.879V1.947a.375.375 0 10-.75 0v2.835a.375.375 0 00.375.375h2.421a.375.375 0 100-.75z"
      />
    </Svg>
  )
}

export default VagasPeriodoSvg

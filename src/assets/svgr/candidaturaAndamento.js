import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CandidaturaAndamentoSvg(props) {
  return (
    <Svg width={props.w} height={props.h} viewBox="0 0 23.638 24.123" {...props}>
      <G data-name="Grupo 168">
        <G data-name="Grupo 167" fill="#fdcf67">
          <Path
            data-name="Caminho 92"
            d="M6.32 6.575a7.989 7.989 0 019.813-1.161c-1.044 1.032-2.245 2.238-2.245 2.238-.842 1.01.1 1.592.584 1.577h7.795a.542.542 0 00.54-.541V.956a.856.856 0 00-1.544-.6s-1.327 1.293-2.243 2.2A11.956 11.956 0 00.008 12.734h4A7.949 7.949 0 016.32 6.575z"
          />
          <Path
            data-name="Caminho 93"
            d="M19.628 11.39a7.966 7.966 0 01-12.12 7.32c1.042-1.032 2.245-2.239 2.245-2.239.842-1.01-.1-1.592-.584-1.575H1.371a.542.542 0 00-.54.54v7.731a.857.857 0 001.545.6s1.326-1.293 2.243-2.2a11.956 11.956 0 0019.01-10.179h-4z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default CandidaturaAndamentoSvg

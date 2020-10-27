import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuSvg(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 512 512" {...props}>
      <Path
        d="M492 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 76H20C8.954 76 0 84.954 0 96s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 396H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
        fill="#fff"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </Svg>
  )
}

export default MenuSvg

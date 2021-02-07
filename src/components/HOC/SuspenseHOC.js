import * as React from "react";
import Preloader from "../common/Preloader/Preloader";


const SuspenseHOC = (component) => {
  return (
    <React.Suspense fallback={<div><Preloader/></div>}>
      {component}
    </React.Suspense>
  )
}


export default SuspenseHOC



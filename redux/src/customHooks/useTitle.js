import { useEffect } from "react"

const useTitle = (props) => {
  useEffect(()=> {
    document.title = props;
  })
}

export default useTitle

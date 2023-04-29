import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {

const [state, setState] = useState()

const getApi = () => {
axios.get(url)
.then(res => setState(res.data))
.catch(err => console.log(err))
}

return [state, getApi]

}

export default useFetch
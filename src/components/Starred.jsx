import useGetFBData from "../hooks/useGetFBData"
import Accordion from './Accordion'

const Starred = () => {
    const hookQuery = {
        field:"starred",
        operation:"array-contains",
        value:"G3Y0JcblfKZVTMseUYLGHtst1Ug2"
    }
    const starredList = useGetFBData("channels",hookQuery)

    return (
        <Accordion
            title="Starred"
            list={starredList}
        />
    )
}

export default Starred
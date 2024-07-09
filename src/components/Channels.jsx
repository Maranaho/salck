import useGetFBData from "../hooks/useGetFBData"
import Accordion from './Accordion'

const Channels = () => {
    const channelList = useGetFBData("channels")

    return (
        <Accordion
            title="Channels"
            list={channelList}
        />
    )
}

export default Channels
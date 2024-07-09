import Starred from './Starred'
import Channels from './Channels'
import DirectMessages from './DirectMessages'
const LeftPanel = () => {
    return (
        <nav className="LeftPanel">
            <Starred/>
            <Channels/>
            <DirectMessages/>
        </nav>
    )
}

export default LeftPanel
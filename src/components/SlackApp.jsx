import Topbar from './Topbar'
import LeftPanel from './LeftPanel'

const SlackApp = () => (
    <main className="SlackApp">
        <Topbar/>
        <section>
            <LeftPanel/>
        </section>
    </main>
)
export default SlackApp
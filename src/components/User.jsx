import { useContext } from "react"
import { SlackContext } from "../context.js"

const User = () => {
    const { state:{ user } } = useContext(SlackContext)
    if(!user) return null
    return <span>{user.displayName.split(" ")[0]}</span>
}

export default User
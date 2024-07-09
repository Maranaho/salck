const AccordionItm = ({label})=>{
    return (
        <button>{label}</button>
    )
}

const Accordion = ({
    title = "Title", list
}) => {
    return (
        <article
            role="dropdown"
            className="Accordion"
        >
            <h4>{title}</h4>
            <div className="collapsible">
                {list?Object.keys(list).map(listItmKey=>(
                    <AccordionItm
                        key={listItmKey}
                        label={list[listItmKey].topic}
                    />
                )):"Loading..."}
            </div>
        </article>
    )
}

export default Accordion
import Menu from "../Menu";
import portfolios from "../../data/portfolios";
import Heading from "../PageHeader";


export default function Portfolio() {

    return (
        <div className="container">
            <Heading heading={"Portfolio"} />
                <Menu />
            
        </div>
    )
}
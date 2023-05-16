import { NavLink } from "react-router-dom";

let Header = () => {
    return (
        <div className="header">
            <NavLink className="headerComp" to={"/"}>Home</NavLink>
            <NavLink className="headerComp" to={"/users/5"}>Student Details</NavLink>
            <NavLink className="headerComp" to={"/users/profile"}>Profile</NavLink>
            <NavLink className="headerComp" to={"/error"}>Error</NavLink>

        </div>
    )
}
export default Header;
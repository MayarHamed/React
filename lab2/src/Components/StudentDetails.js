import { useParams } from "react-router-dom";

let UserDetails = (props) => {
    let { id } = useParams();
    return (
        <div className="home">
        <div className="card">
                <h1> URL ID = {id} </h1>
            </div></div>
    )
}
export default UserDetails;
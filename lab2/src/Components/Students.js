let Students = function ({ list }) {
    let RenderStudents = (All) => {
        if (All) {
            return All.map((student) => {  //loops on array like a foreach loop
                return (
                    <tr key={student.email}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                    </tr>
                )
            })
        }
        else {
            return (
                <div>
                    <p>No Students</p>
                </div>
            )
        }
    }
    return (
        <div className="card">
            <h1>Students</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr></thead>
                    <tbody>
                        {RenderStudents(list)}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Students;
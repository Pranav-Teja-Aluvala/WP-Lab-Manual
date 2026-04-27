import { useEffect, useState } from "react";

function ApiFetch() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);

    return (

        <div>

            <h2>SP3 API Fetch</h2>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );
}

export default ApiFetch;
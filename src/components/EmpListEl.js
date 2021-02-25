import React from 'react'
import Moment from 'react-moment'

function EmpListEl(props) {

    return (

        <tr key={props.id}>
            {/* <th scope="row"></th> */}
            <td>{`${props.firstName} ${props.lastName}`}</td>
            <td>{`${props.city}, ${props.state}`}</td>
            <td>{props.email}</td>
            <td>{props.cell}</td>
            <td>
                <Moment format="D MM YYYY">{props.dob.date}</Moment>
            </td>
            <td><img alt="thumbnail" src={props.picURL} /></td>
        </tr>
    )
}

export default EmpListEl
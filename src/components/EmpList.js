import React, { Component } from "react";
import API from "../utils/API";
import EmpListEl from './EmpListEl'
import "../styles/EmpList.css";
import Searchbar from "./Searchbar";

class EmpList extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        this.searchEmp()
    }

    searchEmp = () => {
        API.search().then(data => {
            // console.log(data.data.results)
            this.setState({ results: data.data.results })
        })
        // API.search()
        //     .then(res => this.setState({ results: res.data.results }))
        //     .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchEmp(this.state.search)
        this.setState({ search: "" })
    }

    render() {
        return (
            <div className="EmpList">
                <Searchbar
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cell #</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Picture</th>
                        </tr>
                    </thead>


                    <tbody>
                        {/* {this.state.results.map((employee, index) => <EmpListEl firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} dob={employee.dob} picURL={employee.picture.thumbnail} key={index} />)} */}
                        {this.state.results.map(employee => {
                            return
                            <tr key={employee.id}>
                                <th scope="row"></th>
                                <td>{`${employee.name.first}`}</td>
                                <td>{`${employee.name.last}`}</td>
                                <td>{`${employee.city}, ${employee.state}`}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.dob}</td>
                                <td><img alt="thumbnail" src={employee.picURL} /></td>
                            </tr>
                        })}
                    </tbody>


                </table>
            </div>
        );
    }
}

export default EmpList;



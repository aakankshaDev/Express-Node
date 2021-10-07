import React, {Component} from 'react';
import styles from './style.css';
// import Table from 'material-ui-table';
class CustomList extends Component{

    componentDidMount=()=>{
        console.log(this.props.data.student[0])
    }
    
    render(){
        const DisplayData=this.props.data.student.map(
            (info)=>{
                return(
                    <tr>
                        <td>{info._id}</td>
                        <td>{info.Reference}</td>
                        <td>{info.GivenName}</td>
                        <td>{info.FamilyName}</td>
                        <td>{info.DateOfBirth}</td>
                    </tr>
                )
            }
        )
        return <div>
            <table style={styles.table}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Reference</th>
                    <th>GivenName</th>
                    <th>FamilyName</th>
                    <th>DateOfBirth</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    }
}
export default CustomList;
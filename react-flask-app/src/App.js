import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}

function App() {

    let issues = [
            {
                'id': 1, 'status': 'Open', 'owner': 'Ravan', 'created': '19/04/2021', 'effort': 5, 'title': 'Error in the console when clicking Add'
            },
            {
                'id': 2, 'status': 'Assigned', 'owner': 'Eddie', 'created': '18/04/2021', 'effort': 3, 'title': 'Missing bottom border on panel',
                'completionDate': '20/04/2021'
            }
        ];

    console.log("Received issues", issues);
    const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
    console.log(issueRows);

  return (
    <div className="App">
        <table className={"bordered-table"}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>{issueRows}</tbody>
        </table>
    </div>
  );
}

export default App;

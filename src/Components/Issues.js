import React from 'react'
import ListIssues from './ListIssues'

function Issues(props) {
    console.log(props.users);
    return (
        <>
            <div className="container">

                {/* HEADER */}
                <div className="header">
                    <div className="headerOne">
                        <div className="headerOne_navOne">
                            <ul>
                                <li className="active-list">Issues</li>
                                <li>Pull Request</li>
                                <li>Labels</li>
                                <li>Milestones</li>
                            </ul>
                        </div>
                    </div>    
                    <div className="headerOne_navTwo">
                        <div className="headerOne_filter">
                            <label>Filter <i className="bi bi-caret-down-fill"></i></label>
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="is:open is:close"/>
                        </div>
                        <button className="btn btn-issue">New Issue</button>
                    </div>
                </div>


                <div className="container_issues-holder">
                    <div>
                        <table>
                            <thead>
                                    <tr>
                                        <th>
                                            <div className="header issue-header">
                                                <div className="header_open-closed">
                                                    <div className="header_open"><i className="bi bi-exclamation-circle"></i>151  open</div>
                                                    <div className="header_closed"><i className="bi bi-check-lg"></i>59 closed</div>
                                                </div>
                                                <div className="header_issue_nav">
                                                    <ul>
                                                        <li>Auther <i className="bi bi-caret-down-fill"></i></li>
                                                        <li>Labels <i className="bi bi-caret-down-fill"></i></li>
                                                        <li>Milestones <i className="bi bi-caret-down-fill"></i></li>
                                                        <li>Assignee <i className="bi bi-caret-down-fill"></i></li>
                                                        <li>Sort <i className="bi bi-caret-down-fill"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                            </thead>
                            <tbody>
                                {props.users.map((user,index)=>{
                                    return(
                                        <ListIssues key= {index} user = {user} />
                                )})}
                            </tbody>
                        </table>

                    </div>
                </div>

            
            </div>
        </>
    )
}

export default Issues

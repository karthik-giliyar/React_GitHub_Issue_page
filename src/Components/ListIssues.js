import React from 'react'


function ListIssues(props) {

    return (
        <>
        <tr className="table_row">
            <div className="img"><i className="bi bi-exclamation-circle"></i></div>
            <div className="issue">
                <div className="issue_title">{props.user.title}</div>
                <div className="issue_description">#{props.user.user.id} opened by 6 days ago by {props.user.user.login}</div>
            </div>
            <div className="message"><i className="bi bi-chat-left-fill"></i></div>
        </tr>
        </>
    )
}

export default ListIssues;

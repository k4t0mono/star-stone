import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div className='Info'>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
)

const withAdminWarning = (WrappedComponet) => {
    return (props) => (
        <div className='withAdminWarning'>
            {  props.isAdmin && <p>This is privite info!</p> }
            <WrappedComponet { ...props } />
        </div>
    )
}

const withAuthWarning = (WrappedComponet) => {
    return (props) => (
        <div className='withAuthWarning'>
            { props.isAuthenticated ? <WrappedComponet { ...props } /> : <p>Please Login</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(AdminInfo);

ReactDOM.render(<AuthInfo isAuthenticated={ true } isAdmin={ false } info='Some datails' />, document.getElementById('app'));
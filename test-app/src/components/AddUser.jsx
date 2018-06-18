import React from 'react';


const AddUser = (props) => {
    return (
        <form onSubmit={(event) => props.addUser(event)}>
            <div className="form-group">
                <input 
                  name="username"
                  className="form-control input-lg"
                  type="text"
                  placeholder="Enter a username"
                  required
                  value={props.username}
                  onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <input 
                  name="email"
                  className="form-control input-lg"
                  type="email"
                  placeholder="Enter a email"
                  required
                  value={props.email}
                  onChange={props.handleChange}
                />
            </div>
            <input 
              type="submit"
              className="btn btn-primary btn-block"
              value="submit"
            />
        </form>
    )
};
export default AddUser;
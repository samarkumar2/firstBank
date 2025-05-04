import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const SettingEdit = (props) => {
  const { empData } = props;

  const [editUser, setEditUser] = useState({
    ...empData,
    name: empData?.name || "",
    username: empData?.username || "",
    email: empData?.email || "",
    Password: empData?.password || "",
  });

  useEffect(() => {
    setEditUser({
      ...editUser,
      name: empData?.name || "",
      username: empData?.username || "",
      email: empData?.email || "",
      password: empData?.password || "",
    });
  }, [empData]);

  console.log(editUser);


  
  function updateLocalStorage(key, newData) {
    localStorage.setItem(key, JSON.stringify(newData));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveOnClick = () => {
    updateLocalStorage("userData", editUser);
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={editUser.name}
              onChange={handleInputChange}
              className="form-control"
              id="name"
              placeholder="Charlene Reed"
            />
          </div>
          <div className="col">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              name="username"
              value={editUser.username}
              onChange={handleInputChange}
              className="form-control"
              id="username"
              placeholder="Charlene Reed"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              value={editUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="********"
              value={editUser.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-danger" onClick={saveOnClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default SettingEdit;

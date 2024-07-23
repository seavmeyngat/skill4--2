function Sidebar() {
    return (
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/crop">Crop</NavLink>
            </li>
            <li>
              <NavLink to="/crotype">Crop Types</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Sidebar;
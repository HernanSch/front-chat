import React from 'react';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    fetch('http://localhost:8000/usuarios/logout', {
      method: 'POST',
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        this.props.onLogout();
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleLogoutClick}>Logout</button>
    );
  }
}

export default LogoutButton;





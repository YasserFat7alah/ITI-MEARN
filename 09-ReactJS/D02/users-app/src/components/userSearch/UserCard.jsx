function UserCard(props) {

    

  return (
      <div className="col-md-4 col-sm-6">
      <div className="card h-100 shadow-sm">
        <img
          src={props.user.image}
          className="card-img-top"
          alt={props.user.username}
        />
        <div className="card-body">
          <h5 className="card-title">{props.user.username}</h5>
          <span
            className={
              "badge " +
              (props.user.role == "admin"
                ? "bg-danger"
                : props.user.role == "moderator"
                ? "bg-warning"
                : "bg-success")
            }
          >
            {props.user.role}
          </span>
          <p className="card-text">
            <strong>Email:</strong> {props.user.email} <br />
            <strong>Phone:</strong> {props.user.phone} <br />
            <strong>Birthdate:</strong> {props.user.birthDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

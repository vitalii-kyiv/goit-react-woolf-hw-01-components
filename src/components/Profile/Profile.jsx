const RenderProfile = (props) =>
  props.data.map((user) => (
    <div className="profile">
  <div className="description">
        <img
          src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">src={user.username}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">{user.username}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
  ));

  export default RenderProfile
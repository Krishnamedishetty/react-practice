const ProfileHeader = (props) => {
  return (
    <div className="profile-card">
      <h2>{props.username}</h2>
      
      {/* Only render this span if isIntern is exactly true */}
      {props.isIntern && (
        <span style={{ backgroundColor: '#eee', padding: '4px 8px', borderRadius: '4px' }}>
          Web Developer Intern
        </span>
      )}
    </div>
  );
};

export default ProfileHeader;
import React from "react";
import PropTypes from "prop-types";

const UserStatus = props => {
  const hideWidth = 160;
  const { imgUrl, status, lineOne, lineTwo } = props.user;
  const [width, setWidth] = React.useState(0);
  const refContainer = React.useRef(0);

  React.useEffect(() => {
    function handleResize() {
      if (refContainer)
        setWidth(refContainer.current.getBoundingClientRect().width);
    }
    handleResize(); //ToDo: Probably a better way to trigger this on first render.
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const renderMedia = props => {
    const hideClass = width > hideWidth ? "big" : "small";
    const statusClass = status === "online" ? "online" : "offline";
    return (
      <div className={"user-status-media " + hideClass}>
        <img className="user-status-avatar" src={imgUrl} alt={props.lineOne} />
        <div className={"user-status-icon " + statusClass}></div>
      </div>
    );
  };

  return (
    <div className="user-status-wrap" ref={refContainer}>
      {renderMedia(props)}
      <div className="user-status-body">
        <h3>{lineOne}</h3>
        <p>{lineTwo}</p>
      </div>
    </div>
  );
};

UserStatus.propTypes = {
  user: PropTypes.shape({
    imgUrl: PropTypes.string,
    status: PropTypes.string,
    lineOne: PropTypes.string,
    lineTwo: PropTypes.string
  })
};

export default UserStatus;

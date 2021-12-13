import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div class="profile bg-light">
      <img class="round-img" src={avatar} alt="Profile Photo" />
      <div>
        <h2>{name}</h2>
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p>{location}</p>
        <a href="profile.html" class="btn btn-primary">
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>
        </a>
      </div>

      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} class="text-primary">
            <i class="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;

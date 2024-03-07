import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./profile-components/Profile/Profile";

const ProfileGame = ({ dist }) => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <main className="max appMain">
      <Profile id={id} dist={dist} />
    </main>
  );
};

export default ProfileGame;

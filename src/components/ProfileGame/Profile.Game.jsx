import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./profile-components/Profile/Profile";
import useTop from "../../Hooks/useTop";

const ProfileGame = ({ dist }) => {
  const top = useTop();
  useEffect(top, [top]);

  const params = useParams();
  const { id } = params;

  return (
    <main className="max appMain">
      <Profile id={id} dist={dist} />
    </main>
  );
};

export default ProfileGame;

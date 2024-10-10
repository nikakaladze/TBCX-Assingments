import React from "react";
import Profile from "../../Components/profile/Profile";
import ProfileImages, {
  images2,
} from "../../Components/profile/ProfileImages";
import Title from "../../Components/profile/Title";

const ProfileCardContainer = () => {
  return (
    <section>
      <Title />
      <div className="profile-card-container">
        <Profile
          name="David"
          lastname="Chesterfield"
          Email="ChesterfieldD@gmail.com"
          imgAdd={ProfileImages["8"].imageAdd}
          title="Product Owner"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          name="Max"
          Email="Maxway19@yahoo.com"
          title="Cloud Engineer"
          lastname="Holloway"
          imgAdd={ProfileImages["0"].imageAdd}
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />
        <Profile
          name="Jon"
          lastname="Doe"
          Email="JonDoee89@gmail.com"
          imgAdd={ProfileImages["1"].imageAdd}
          title="Python Developer"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          name="Wiliams"
          lastname="Rogers"
          Email="Wiliam1991@yahoo.com"
          imgAdd={images2["2"].imageAdd}
          title="UI/UX Designer"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          title="Backend Developer"
          name="Henry"
          lastname="Stones"
          Email="Henryhen20@yahoo.com"
          imgAdd={images2["9"].imageAdd}
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          name="Helen"
          lastname="Mackenly"
          Email="HelenMackk@gmail.com"
          imgAdd={ProfileImages["4"].imageAdd}
          title="It Support"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          name="Noah"
          lastname="Gudjonsen"
          Email="Gudjonsen.N@yahoo.com"
          imgAdd={ProfileImages["6"].imageAdd}
          title="System Administrator"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

        <Profile
          name="Andrew"
          lastname="MacAlister"
          Email="AndrewMac1@yahoo.com"
          imgAdd={ProfileImages["7"].imageAdd}
          title="Network Engineer"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />

       

        

        <Profile
          name="Sarah"
          lastname="Kevins"
          Email="SarahKevin@gmail.com"
          imgAdd={ProfileImages["10"].imageAdd}
          title="Network Engineer"
          color="white"
          backgroundColor="rgb(17, 113, 223)"
          border="none"
          width="100%"
          padding="12px 30px"
          borderRadius="10px"
          marginBlock="10px"
          fontSize="18px"
          cursor="pointer"
        />
      </div>
    </section>
  );
};

export default ProfileCardContainer;

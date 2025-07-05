import { memo } from "react";

interface ProfileImageProps {
  ppath: string;
}

const ProfileImage = memo(function ProfileImage({ ppath }: ProfileImageProps) {
  return (
    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
      <div className="profile bg-gradient-primary-to-secondary" style={{ transform: 'scale(0.75)' }}>
        <img 
          className="profile-img" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10%',
          }} 
          src={ppath}
          alt="Profile"
        />
      </div>
    </div>
  );
});

export default ProfileImage;
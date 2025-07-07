import { memo } from "react";

interface ProfileImageProps {
  ppath: string;
}

const ProfileImage = memo(function ProfileImage({ ppath }: ProfileImageProps) {
  return (
    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
      <div className="profile-frame">
        <div className="profile-image-container">
          <img 
            className="profile-image" 
            src={ppath}
            alt="Bedir Tuğra Karaabalı - Software Engineer"
          />
        </div>
        <div className="profile-decoration">
          <div className="decoration-dot decoration-dot-1"></div>
          <div className="decoration-dot decoration-dot-2"></div>
          <div className="decoration-dot decoration-dot-3"></div>
          <div className="decoration-dot decoration-dot-4"></div>
        </div>
      </div>
    </div>
  );
});

export default ProfileImage;
'use client';

import { memo } from "react";
import Image from "next/image";

interface ProfileImageProps {
  ppath: string;
}

const ProfileImage = memo(function ProfileImage({ ppath }: ProfileImageProps) {
  return (
    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
      <div className="profile-frame">
        <div className="profile-image-container">
          <Image 
            className="profile-image" 
            src={`/${ppath}`}
            alt="Bedir Tuğra Karaabalı - Software Engineer"
            width={240}
            height={240}
            priority
            style={{ objectFit: 'cover', borderRadius: '16px' }}
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
'use client';

import { memo } from "react";
import Image from "next/image";

interface ProfileImageProps {
  ppath: string;
}

const ProfileImage = memo(function ProfileImage({ ppath }: ProfileImageProps) {
  return (
    <div className="flex justify-center mt-8 lg:mt-0">
      <div className="relative">
        <div className="relative p-1 rounded-2xl bg-gradient-primary">
          <div className="relative rounded-2xl overflow-hidden bg-dark-surface">
            <Image 
              className="object-cover" 
              src={`/${ppath}`}
              alt="Bedir Tuğra Karaabalı - Software Engineer"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProfileImage;

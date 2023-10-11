import React from "react";

type UrlType = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type ProfileImageType = {
  small: string;
  medium: string;
  large: string;
};
export type PhotosType = {
  id?: string;
  created_at?: string;
  updated_at?: string;
  width?: number;
  height?: number;
  color?: string;
  description?: string;
  alt_description?: string;
  urls?: UrlType;
  profile_image?: ProfileImageType;
  instagram_username?: string;
};

function CardPhotos({ urls }: PhotosType) {
  return (
    <div className="overflow-hidden">
      <a href={urls?.full ? urls.full : urls?.small} className="w-full">
        <img
          src={(urls?.small as string) || "/vite.svg"}
          alt="photo"
          className="w-full"
        />
      </a>
    </div>
  );
}

export default CardPhotos;

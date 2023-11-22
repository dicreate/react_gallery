import {useRef , useEffect, useMemo} from "react";
import { Photo, CommonClassProps } from "../types";
import cl from "classnames"
import style from './index.module.scss'
interface PreviewGalleryProps extends CommonClassProps {
   activePhotoIndex: number;
   photos: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({ activePhotoIndex, photos, className }) => {
   const previewContainer = useRef<HTMLUListElement>(null);

   useEffect(() => {
      if(!previewContainer.current) {
         return;
      }
      previewContainer.current.style.transform = `translate3d(-${activePhotoIndex*164}px, 0, 0)`
   }, [activePhotoIndex])

   return (
      <div className={cl(style.previewGallery, className)}>
         {useMemo(() => (
             <ul
             className={style.previewGalleryTrack}
             ref={previewContainer}
          >
             {
                photos.map((photo) => (
                   <li
                      key={photo.id}
                      className={style.previewGalleryPreview}
                   >
                      <img
                         src={photo.preview}
                         alt={photo.description}
                         className={style.previewGalleryImage} />
                   </li>
                ))
             }
          </ul>
         ),[photos])
         }
         <div className={style.previewGalleryCover}>
            {activePhotoIndex + 1} / {photos.length}
         </div>
      </div>
   );
};

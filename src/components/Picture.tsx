import type { Ref } from 'react'
import type { Photo } from '../content/site'

type Props = {
  photo: Photo
  className?: string
  /** `sizes` attribute — how wide the image is shown on screen. */
  sizes?: string
  eager?: boolean
  imgRef?: Ref<HTMLImageElement>
}

/** Responsive photograph that fills its (positioned) parent without distortion. */
export function Picture({ photo, className = '', sizes = '100vw', eager, imgRef }: Props) {
  const srcSet = photo.srcSmall ? `${photo.srcSmall} 800w, ${photo.src} 1600w` : undefined
  return (
    <img
      ref={imgRef}
      src={photo.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ objectPosition: photo.position ?? 'center' }}
    />
  )
}

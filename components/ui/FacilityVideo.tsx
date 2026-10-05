import type { Video } from "@/lib/imagery"

export default function FacilityVideo({ video }: { video: Video }) {
  return (
    <figure>
      <video
        className="w-full aspect-video rounded-xl bg-[#151515] object-cover"
        controls
        playsInline
        preload="metadata"
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 text-[13px] text-[#737373]">{video.caption}</figcaption>
    </figure>
  )
}

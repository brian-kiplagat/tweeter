import Image from "next/image";

type ProfileProps = {
    src?: string | null,
    className?: string
}

export function ProfileImage({src, className = ""}: ProfileProps) {
    return <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
        {src == null ? null : <Image src={src} alt="Image" quality={100} fill/>}
    </div>
}
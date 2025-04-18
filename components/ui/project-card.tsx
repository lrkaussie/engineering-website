import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
}

export function ProjectCard({ title, description, image, slug }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/2]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 text-sm md:text-base">{description}</p>
        <Link
          href={`/projects/${slug}`}
          className="text-orange-500 hover:text-orange-600 inline-flex items-center text-sm md:text-base"
        >
          View Project
          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
        </Link>
      </div>
    </div>
  )
}


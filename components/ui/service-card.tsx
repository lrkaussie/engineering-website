import { getIconByName } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = getIconByName(icon)

  return (
    <div className="bg-slate-50 p-6 md:p-8 rounded-lg">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-md flex items-center justify-center mb-3 md:mb-4">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm md:text-base">{description}</p>
    </div>
  )
}


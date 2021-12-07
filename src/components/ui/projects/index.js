import Image from "next/image"
import Link from "next/link"

export default function Projects({ project }) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5 max-w-7xl mx-auto mt-4 bg-yellow-100">
      {project.map((project) => (
        <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4 mx-4 mb-4">
          <div className="flex h-full">
            <div className="flex h-full">
              <Image
                className="object-cover"
                src={project.coverImage}
                layout="fixed"
                width="200"
                height="230"
                alt={project.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {project.type}
              </div>
              <a
                href={project.link}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {project.title}
              </a>
              <p className="mt-2 text-gray-500">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

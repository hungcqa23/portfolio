import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] px-6 py-6 md:py-12">
        <div>
          <div className="mb-12">

            <Link 
              to="/" 
              className="group mb-4 inline-flex items-center font-semibold leading-tight text-slate-900 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd"></path>
              </svg>
              <span className="relative inline-block after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-slate-900 after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0 group-hover:after:right-auto">
                Go Back
              </span>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              All Projects
            </h1>
          </div>

          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-200 bg-white/75 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-900">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-900">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 lg:table-cell">Made at</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 lg:table-cell">Built with</th>
                <th className="hidden py-4 text-sm font-semibold text-slate-900 sm:table-cell">Link</th>
              </tr>
            </thead>
            <tbody className="align-baseline">
              {projects.map((project) => (
                <tr 
                  key={project.id} 
                  className="border-b border-slate-100 last:border-none hover:bg-slate-50/50 group/row transition-colors"
                >
                  <td className="py-4 pr-4 align-top text-sm tabular-nums text-slate-500">
                    {project.year}
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold text-slate-900">
                    <div className="block sm:hidden">
                       {project.link || project.github ? (
                          <a 
                            href={project.link || project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-black focus-visible:text-black group/link text-base"
                          >
                            <span>
                              {project.title}
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                       ) : (
                         project.title
                       )}
                    </div>
                    <div className="hidden sm:block">
                      {project.title}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm text-slate-500 lg:table-cell">
                    {project.madeAt}
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="flex items-center">
                          <Badge variant="secondary" className="rounded-full px-5 py-1 text-xs font-medium leading-5">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="flex flex-col gap-1">
                      {project.link && (
                        <li>
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-500 hover:text-black focus-visible:text-black group/link text-sm gap-1"
                            aria-label={`${project.title} (opens in a new tab)`}
                          >
                            <span>
                              {new URL(project.link).hostname.replace('www.', '')}
                            </span>
                            <ExternalLink className="h-3 w-3 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                          </a>
                        </li>
                      )}
                      {project.github && (
                        <li>
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-500 hover:text-black focus-visible:text-black group/link text-sm gap-1"
                            aria-label={`GitHub performance for ${project.title} (opens in a new tab)`}
                          >
                            <span>GitHub</span>
                            <Github className="h-3 w-3 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../components/ui/badge'
import { books } from '../data/portfolio'

export const Route = createFileRoute('/books')({
  component: BooksPage,
})

function BooksPage() {
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
              My Bookshelf
            </h1>
          </div>

          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-200 bg-white/75 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-900">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-900">Title</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 lg:table-cell">Author</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-900 lg:table-cell">Category</th>

              </tr>
            </thead>
            <tbody className="align-baseline">
              {books.map((book) => (
                <tr 
                  key={book.id} 
                  className="border-b border-slate-100 last:border-none hover:bg-slate-50/50 group/row transition-colors"
                >
                  <td className="py-4 pr-4 align-top text-sm tabular-nums text-slate-500">
                    {book.year}
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold text-slate-900">
                    <div className="block sm:hidden">
                      {book.title}
                    </div>
                    <div className="hidden sm:block">
                      {book.title}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm text-slate-500 lg:table-cell">
                    {book.author}
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <Badge variant="secondary" className="rounded-full px-5 py-1 text-xs font-medium leading-5">
                      {book.category}
                    </Badge>
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

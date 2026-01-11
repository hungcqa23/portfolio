import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    const location = useLocation()
    const isStandalonePage = location.pathname === '/projects' || location.pathname === '/books'

    return (
      <>
        {!isStandalonePage && <Header />}
        <Outlet />
        {!isStandalonePage && <Footer />}
        {import.meta.env.DEV && (
          <TanStackRouterDevtools position="bottom-right" />
        )}
      </>
    )
  },
})

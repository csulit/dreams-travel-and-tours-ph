import type { QueryClient } from '@tanstack/react-query'
import {
  HeadContent,
  Link,
  ScriptOnce,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { LazyMotion, domAnimation } from 'motion/react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: RootErrorComponent,
  notFoundComponent: RootNotFoundComponent,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Experience the beauty of the Philippines with expertly crafted travel packages. From pristine beaches to vibrant cities — we take you there.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Dreams Travel & Tours | Your Dream Adventure Starts Here',
      },
      {
        property: 'og:description',
        content:
          'Experience the beauty of the Philippines with expertly crafted travel packages. From pristine beaches to vibrant cities — we take you there.',
      },
      { property: 'og:image', content: '/og.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Dreams Travel & Tours | Your Dream Adventure Starts Here',
      },
      {
        name: 'twitter:description',
        content:
          'Experience the beauty of the Philippines with expertly crafted travel packages. From pristine beaches to vibrant cities — we take you there.',
      },
      { name: 'twitter:image', content: '/og.png' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootErrorComponent({ error }: { error: Error }) {
  const router = useRouter()

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl font-extrabold text-dt-primary-dark sm:text-8xl">
        500
      </p>
      <h1 className="mt-4 text-2xl font-bold text-dt-heading sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-dt-body">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="gradient-primary mt-8 rounded-md px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
      >
        Try Again
      </button>
    </main>
  )
}

function RootNotFoundComponent() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl font-extrabold text-dt-primary-dark sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-dt-heading sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-dt-body">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="gradient-primary mt-8 inline-block rounded-md px-8 py-3 text-sm font-bold text-white no-underline transition hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ScriptOnce>{THEME_INIT_SCRIPT}</ScriptOnce>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-(--dt-selection)">
        <LazyMotion features={domAnimation} strict>
          <Header />
          {children}
          <Footer />
        </LazyMotion>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            {
              name: 'React Query',
              render: <ReactQueryDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

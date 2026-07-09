import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported languages
const supportedLanguages = ['de', 'ar', 'en']
const defaultLanguage = 'de'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if path already has language prefix
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )
  
  if (!pathnameHasLanguage) {
    // Get language from cookie, header, or default
    const cookieLang = request.cookies.get('NEXT_LOCALE')?.value
    const acceptLang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0]
    const language = cookieLang || acceptLang || defaultLanguage
    
    // Redirect to language-prefixed path
    const newPath = `/${language}${pathname}`
    return NextResponse.redirect(new URL(newPath, request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip internal paths
    '/((?!api|_next/static|_next/image|favicon.ico|assets|robots.txt|sitemap.xml).*)',
  ],
}
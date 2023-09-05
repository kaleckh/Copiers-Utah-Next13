import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
    const path = NextRequest.nextUrl.pathname
    console.log(path.indexOf('copiersutah'), "this is the path")
    if (path.indexOf('copiersutah') !== -1) {
        NextResponse.redirect(new URL('/', NextRequest.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/pay/card',
}
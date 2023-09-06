// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(NextRequest) {
//     console.log(NextRequest, "this is next request")
//     const path = NextRequest.nextUrl.pathname
//     console.log(path.indexOf('copiersutah'), "this is the path")
//     console.log(path.indexOf('copiersutah') === -1, "this is if statement")
//     if (path.indexOf('copiersutah') === -1) {
//         return NextResponse.status(500)
//     }
//     return NextResponse
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/api/pay/card',
// }
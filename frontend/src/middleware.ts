import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get('connect.sid');
    const { pathname } = request.nextUrl;

    // Bỏ qua middleware cho các route không cần bảo vệ
    if (pathname === '/login' || pathname === '/register') {
        return NextResponse.next();
    }

    // Nếu không có token, redirect về login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Nếu có token, cho phép truy cập (client-side sẽ kiểm tra authentication status)
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/setup-2fa', '/verify-2fa', '/login', '/register']
}
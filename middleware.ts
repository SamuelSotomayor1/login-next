import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Si la ruta es `/`, redirige a `/login`
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/login', url));
  }
}

// Configura el middleware para que solo aplique en `/`
export const config = {
  matcher: ['/'], // Solo aplica en la raíz `/`
};
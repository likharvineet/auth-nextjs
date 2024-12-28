import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail";
    const token = request.cookies.get("token")?.value || "";

    // if the path is public and has token, we want to redirect it to '/'
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // if the path is not private and there is no token, we want the user to first login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

export const config = {
    matcher: [
        "/",
        "/profile",
        // TODO: /profile/:id
        "/login",
        "/signup",
        "/verifyemail",
    ],
};

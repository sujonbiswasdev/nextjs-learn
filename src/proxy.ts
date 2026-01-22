import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

enum Roles{
    Admin="Admin",
    User="User"
}

export async function proxy(request:NextRequest){
    console.log("hello proxy ",request.url)
    const pathname=request.nextUrl.pathname;
    let isAuthenticated=false
    let isAdmin=false

    const {data}=await authClient.getSession();
    if(data){
        isAuthenticated=true
        isAdmin=data.user.role==Roles.Admin
    }

    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login",request.url))
    }
    if(isAdmin && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/admin-dashboard",request.url))
    }
    if(!isAdmin && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("dashboard",request.url))
    }
    return NextResponse.next()

}

export const config={
    matcher:["/dashboard","/dashboard/:path*","/admin-dashboard/:path*","/admin-dashboard"]
}
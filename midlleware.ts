import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
    const cookie = request.cookies.get('token');

  const token = cookies().get('Authorization');
if(!cookie){
    return NextResponse.redirect(new URL('/login', reqaest.url));
  
}
const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const jwt = cookie.value;
try{
    const { payload } = await jose.JWT.jwtverify(jwt, secret,{});
    console.error(payload);
}catch(error){
    return NextResponse.redirect(new URL('/login', request.url));
}


  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = 'HS256';

    const jwt = await new jose.JWT.VerifyJWT(token)
      .verify(secret);

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/login');
  }
}
export const config = {
    matcher: ['/protected/:path'],
  };
}


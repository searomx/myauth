import prisma from "@/app/lib/prisma";
import validatePaswords from "@/app/utils/validatePassword";
export async POST(){
    const body = await Request.json();
    const { code, password } = body;

    if(!validatePaswords(password)){ 
        return Response.json({
            error: "Senha Inválida!"
        },
        { status: 400 }
    );
    const usuarioEncontrado = await prisma.user.findFirst({
        where: {
            code: code,
        },
        select: {
            id: true,
            password: true,
        },
    });
    if(!usuarioEncontrado){
        return Response.json({
            error: "Usuário ou Senha Inválida!"
        },
        { status: 400 }
    );
    }
    const isPasswordValid = await bcrypt.compare(password, usuarioEncontrado.password);
    if(!isPasswordValid){
        return Response.json({
            error: "Senha Inválida!"
        },
        { status: 400 }
    );
    }
    const secret =  new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const jwt = await new jose.JWT.SignJWT({ })
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(usuarioEncontrado.id.toString())
    .sign(secret);

    return Response.json({ token: jwt });
}
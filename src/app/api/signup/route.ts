import prisma from "@/app/lib/prisma";
import validatePasword from "@/app/utils/validatePassword";
import bcrypt from "bcryptjs";
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { code, name, email, password } = body;

    if(!validatePasword(password)){
        return Response.json({
            error: "Senha deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
        },
    { status:400 }
);
    }
    
const hashedPassword = bcrypt.hashSync(password,8);
    
    await prisma.user.create({
        data: {
        code,        
        name,
        email,
        password: hashedPassword,
        userActive: true,
        isAdmin: false,
        roldeId: 1,

        },
    });
    return Response.json({ message: "Usuário cadastrado com sucesso" });
}
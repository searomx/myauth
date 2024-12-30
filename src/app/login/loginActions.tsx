"use server";

import { redirect } from "next/navigation";

export default async function loginAction(
  currentState: any,
  data: FormData
): Promise<String> {
  const code = data.get("code");
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");

  const res = await fetch(`${process.env.URL_BASE}/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      name,
      email,
      password,
    }),
  });

  const json = await res.json();
  if(res.ok){
    redirect("/login");
  }else{
    return json.error;
  }
}

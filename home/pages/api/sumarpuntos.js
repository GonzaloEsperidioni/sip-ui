// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const res = await fetch(`http://localhost:8080/usuario/sumarpuntos`, {
    method: "POST",
    body: JSON.stringify({
      id: user.id,
      idjuego: 2,
      puntos: 50,
    }),
    headers: new Headers({ "content-type": "application/json" }),
    mode: "no-cors",
  });
  return res;
};

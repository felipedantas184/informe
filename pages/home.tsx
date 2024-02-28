import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [cpf, setCpf] = useState<string>()

  return (
    <div>
      <input type="text" placeholder="Digite seu CPF" required
        onChange={(e) => setCpf(e.target.value)}
        value={cpf} />
      <Link href={`/informe/${cpf}`} >Ver Informe de Rendimentos</Link>
    </div>
  );
}

import Link from 'next/link';

export default function Page() {
  return (
<div class="menu">
    
    <div class="submenu">
        <Link class="link" key="pedido" href="/pedido">Pedido</Link>
        <br />
        <Link class="link" key="relatorio" href="/relatorio">Relatório</Link>
    </div>
</div>

  );
}

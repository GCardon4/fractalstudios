export default function LandingFractal() {
  const whatsappLink = "https://wa.me/XXXXXXXXXXX?text=Hola%20Fractal%20Estudios,%20quiero%20agendar%20una%20llamada"; // Reemplaza con tu número en formato internacional
  const calendlyLink = "https://calendly.com/tu_usuario/diagnostico"; // Opcional

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-content-center font-bold">F</div>
            <span className="font-semibold">Fractal Estudios</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#evidencia" className="hover:opacity-70">Resultados</a>
            <a href="#proceso" className="hover:opacity-70">Proceso</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#cta" className="rounded-xl px-4 py-2 bg-slate-900 text-white hover:opacity-90">Agendar llamada</a>
          </div>
        </div>
      </header>

      {/* HERO / ABOVE THE FOLD */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Videos explicativos animados que <span className="underline decoration-2">aceleran ventas B2B en salud</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Ayudamos a empresas B2B de salud a <strong>simplificar</strong> y <strong>acortar</strong> ciclos de venta largos y complejos
              con videos que hablan en el <strong>lenguaje de tus clientes</strong> y explican tu propuesta <strong>paso a paso</strong>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink} className="rounded-xl bg-slate-900 text-white px-5 py-3 text-center">Agendar llamada por WhatsApp</a>
              <a href={calendlyLink} className="rounded-xl border px-5 py-3 text-center">Agendar diagnóstico (Calendly)</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">Sin precios públicos: el objetivo es <strong>agendar una llamada</strong>.</div>
          </div>
          <div className="md:pl-12">
            <div className="aspect-video w-full rounded-2xl border grid place-content-center text-slate-500">
              Placeholder video / reel (incrusta tu demo aquí)
            </div>
            <div className="mt-4 text-xs text-slate-500">Sugerencia: inserta un reel corto (30–45s) con 2–3 clips y un titular de resultados.</div>
          </div>
        </div>
        {/* Social proof breve */}
        <div className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-80">
            <div className="text-center text-xs">Logo Cliente 1</div>
            <div className="text-center text-xs">Logo Cliente 2</div>
            <div className="text-center text-xs">Logo Cliente 3</div>
            <div className="text-center text-xs">Logo Cliente 4</div>
            <div className="text-center text-xs">Logo Cliente 5</div>
            <div className="text-center text-xs">Premio / Certificación</div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section id="problemas" className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Si trabajas en ventas B2B de salud, probablemente te pasa esto…</h2>
          <p className="mt-3 text-slate-600">
            Después de trabajar con equipos comerciales en salud con ciclos largos, identificamos <strong>3 causas</strong> que frenan la conversión:
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-white">
            <h3 className="font-semibold">1) Explicaciones repetitivas y técnicas</h3>
            <p className="mt-2 text-slate-600">Ventas pierde tiempo aclarando conceptos una y otra vez; el prospecto se abruma con jerga.</p>
            <p className="mt-2 text-slate-600">Cada día sin un mensaje estandarizado = oportunidades perdidas.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white">
            <h3 className="font-semibold">2) Baja claridad del valor</h3>
            <p className="mt-2 text-slate-600">Los decisores no entienden rápido el <em>por qué</em> y el <em>para qué</em> del producto → más reuniones, menos avance.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white">
            <h3 className="font-semibold">3) Mensajes inconsistentes</h3>
            <p className="mt-2 text-slate-600">Marketing, web y ventas dicen cosas distintas. El relato se diluye y el ciclo se alarga.</p>
          </div>
        </div>
      </section>

      {/* EVIDENCIA */}
      <section id="evidencia" className="bg-slate-50 border-t border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold">Evidencia de que funciona</h2>
              <p className="mt-3 text-slate-600">Casos y métricas asociadas a resultados de negocio, no solo entregables.</p>
            </div>
            <div className="md:col-span-2 grid gap-6">
              {/* Caso de estudio */}
              <article className="p-6 rounded-2xl border bg-white">
                <div className="text-sm text-slate-500">Caso de estudio</div>
                <h3 className="mt-1 font-semibold">Empresa X (dispositivo médico)</h3>
                <ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
                  <li>Situación: demos extensas, decisores confundidos.</li>
                  <li>Solución: video explicativo de 120s con lenguaje del cliente.</li>
                  <li>Resultado: −18 días de ciclo y +14% tasa de cierre en 90 días.</li>
                </ul>
              </article>
              {/* Testimonial */}
              <article className="p-6 rounded-2xl border bg-white">
                <blockquote className="text-slate-700">“Fractal convirtió nuestro pitch técnico en una historia clara. Llegamos más rápido a los decisores.”</blockquote>
                <div className="mt-3 text-sm text-slate-500">Directora Comercial, Laboratorio Y • <a className="underline" href="#">LinkedIn</a></div>
              </article>
              {/* Métricas acumuladas */}
              <article className="p-6 rounded-2xl border bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">+120</div>
                    <div className="text-xs text-slate-500">videos producidos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">-21 días</div>
                    <div className="text-xs text-slate-500">ciclo promedio (90d)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">+17%</div>
                    <div className="text-xs text-slate-500">tasa de cierre</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">#1</div>
                    <div className="text-xs text-slate-500">premio/partner (añade tu badge)</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO (3 PASOS) */}
      <section id="proceso" className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Así es trabajar con nosotros</h2>
          <p className="mt-3 text-slate-600">Tres pasos simples, con tiempos definidos y expectativas claras.</p>
        </div>
        <ol className="mt-8 grid md:grid-cols-3 gap-6 counter-reset">
          <li className="p-6 rounded-2xl border bg-white">
            <div className="text-sm text-slate-500">Semana 0</div>
            <h3 className="mt-1 font-semibold">1) Llamada de diagnóstico</h3>
            <p className="mt-2 text-slate-600">Definimos objetivos, audiencia y mensajes críticos que guiarán el guion.</p>
            <a href={calendlyLink} className="mt-3 inline-block text-sm underline">Agenda tu diagnóstico</a>
          </li>
          <li className="p-6 rounded-2xl border bg-white">
            <div className="text-sm text-slate-500">Semanas 1–2</div>
            <h3 className="mt-1 font-semibold">2) Guion + animación</h3>
            <p className="mt-2 text-slate-600">Convertimos lo técnico en una historia clara. Primera propuesta en 2 semanas.</p>
          </li>
          <li className="p-6 rounded-2xl border bg-white">
            <div className="text-sm text-slate-500">Semanas 3–4</div>
            <h3 className="mt-1 font-semibold">3) Lanzamiento</h3>
            <p className="mt-2 text-slate-600">Entregamos tu pieza “base” para estandarizar el mensaje en web, marketing y ventas.</p>
          </li>
        </ol>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">Agenda tu llamada de diagnóstico</h2>
            <p className="mt-3 text-slate-300">
              En 20–30 minutos identificamos oportunidades para <strong>acortar tu ciclo</strong> y aumentar la <strong>tasa de cierre</strong> con un video explicativo animado.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <a href={whatsappLink} className="rounded-xl bg-white text-slate-900 px-5 py-3 text-center">Hablar por WhatsApp</a>
              <a href={calendlyLink} className="rounded-xl border border-white/30 px-5 py-3 text-center">Agendar en Calendly</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (opcional) */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <details className="p-6 rounded-2xl border bg-white">
            <summary className="font-semibold cursor-pointer">¿Cuánto dura el proceso?</summary>
            <p className="mt-2 text-slate-600">Primera propuesta en 2 semanas; lanzamiento en 4, según feedback.</p>
          </details>
          <details className="p-6 rounded-2xl border bg-white">
            <summary className="font-semibold cursor-pointer">¿Qué incluye?</summary>
            <p className="mt-2 text-slate-600">Guion, storyboard, animación, música/locución y versión para web y ventas.</p>
          </details>
          <details className="p-6 rounded-2xl border bg-white">
            <summary className="font-semibold cursor-pointer">¿Trabajan solo con salud?</summary>
            <p className="mt-2 text-slate-600">Nos especializamos en B2B de salud por su complejidad y alto impacto en decisiones.</p>
          </details>
          <details className="p-6 rounded-2xl border bg-white">
            <summary className="font-semibold cursor-pointer">¿Cómo medimos impacto?</summary>
            <p className="mt-2 text-slate-600">Seguimos <em>días de ciclo</em> y <em>tasa de cierre</em> antes/después; conectamos con tu CRM cuando es posible.</p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 grid md:grid-cols-2 gap-4">
          <div>© {new Date().getFullYear()} Fractal Estudios. Todos los derechos reservados.</div>
          <div className="md:text-right">Contacto: hola@fractalestudios.com • Bogotá / Madrid</div>
        </div>
      </footer>
    </main>
  );
}
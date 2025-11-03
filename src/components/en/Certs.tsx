export default function Certs() {
  return (
    <section id="certs" className="py-12 md:py-16">
      <div className="w-full bg-gradient-to-b from-white to-white/95">
        <div className="container px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Certifications & Tools</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* LEGAL — PUBLIC SUMMARY (masked) + telco compliance */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">Legal (Public Summary)</h3>
                <ul className="mt-2 space-y-2 pl-5 text-slate-700 text-sm list-disc">
                  <li><span className="font-medium text-slate-900">OSS / NIB:</span> Registered in OSS (UMK) — NIB <span className="font-mono">1610•••15807</span> (active).</li>
                  <li><span className="font-medium text-slate-900">Standard Certificate:</span> KBLI 62024 — No. <span className="font-mono">1610•••70001</span>, 10 Oct 2025; UMK scale.</li>
                  <li><span className="font-medium text-slate-900">Deed / AHU:</span> No. <span className="font-mono">AHU-054366.AH.01.30.2025</span>, effective 3 Oct 2025.</li>
                  <li><span className="font-medium text-slate-900">NPWP:</span> Registered NPWP (KPP Pratama Jakarta Duren Sawit).</li>
                  <li><span className="font-medium text-slate-900">Telco Compliance:</span> Physical FO/MW/RF works executed by licensed partners as per regulations; we focus on design, supervision, and commissioning.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Full documents available upon request. We provide a private download link with expiry.
                </p>
                <div className="mt-3">
                  <a
                    href="mailto:info@jarmtechsight.art?subject=Request%20Legal%20Pack&body=Hello%20JarmTechSight%2C%0A%0APlease%20share%20the%20Legal%20Pack%20(OSS%2FNIB%2C%20Standard%20Certificate%2C%20AHU%2C%20NPWP)%20for%20due%20diligence.%0A%0AName%3A%0ACompany%3A%0AEmail%3A%0A%0AThank%20you."
                    className="inline-flex items-center rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Request Legal Pack
                  </a>
                </div>
              </div>
            </div>

            {/* PROFESSIONAL */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">Professional</h3>
                <ul className="mt-2 list-disc pl-5 text-slate-700">
                  <li>AWS Solutions Architect — Associate (in progress)</li>
                  <li>PMP (in progress)</li>
                  <li>DeepLearning.AI / TensorFlow coursework</li>
                </ul>
              </div>
            </div>

            {/* TOOLS / STACK */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">Tools & Stack</h3>
                <ul className="mt-2 list-disc pl-5 text-slate-700">
                  <li>ThingsBoard, LoRaWAN</li>
                  <li>Python, Streamlit, FastAPI</li>
                  <li>React/Next.js, QGIS, AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>
    </section>
  );
}

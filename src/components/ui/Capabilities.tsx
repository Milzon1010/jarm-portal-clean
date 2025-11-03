// src/components/ui/Capabilities.tsx
import React from "react";

type LangBlock = { title: string; blurb: string; bullets: string[] };
type CapItem = {
  key: string;
  id: LangBlock;
  en: LangBlock;
};

const CAPABILITIES: CapItem[] = [
  {
    key: "sensors",
    id: {
      title: "IoT Edge & Sensor Integration",
      blurb:
        "Integrasi sensor LoRa/LoRaWAN, Modbus/RS-485, ESP32; desain board; power/enclosure; kalibrasi & uji lapangan.",
      bullets: [
        "LoRa/LoRaWAN node (ABP/OTAA), uplink/downlink",
        "Modbus RTU/TCP (energi, flow, level, cuaca)",
        "ESP32/Arduino & strategi low-power",
        "Skema power (solar/DC/battery) & IP65 enclosure",
      ],
    },
    en: {
      title: "IoT Edge & Sensor Integration",
      blurb:
        "LoRa/LoRaWAN, Modbus/RS-485, ESP32; simple board design; power/enclosure; calibration & field validation.",
      bullets: [
        "LoRa/LoRaWAN nodes (ABP/OTAA), uplink/downlink",
        "Modbus RTU/TCP (energy, flow, level, weather)",
        "ESP32/Arduino & low-power strategies",
        "Power schemes (solar/DC/battery) & IP65 enclosure",
      ],
    },
  },
  {
    key: "gateway",
    id: {
      title: "Gateway & Jaringan",
      blurb:
        "Gateway LoRaWAN, MQTT/HTTP bridge, ThingsBoard & integrasi; topologi & parameter jaringan reliabel.",
      bullets: [
        "Packet forwarder, ChirpStack, integrasi NS",
        "MQTT/HTTP bridge, payload converter & routing",
        "Skema telemetry & device provisioning",
        "QoS, retry, buffering; monitoring latency/loss",
      ],
    },
    en: {
      title: "Gateway & Networking",
      blurb:
        "LoRaWAN gateways, MQTT/HTTP bridges, ThingsBoard & system integration; reliable topologies and parameters.",
      bullets: [
        "Packet forwarder, ChirpStack, NS integration",
        "MQTT/HTTP bridge, payload converters & routing",
        "Telemetry schema & device provisioning",
        "QoS, retry, buffering; latency/loss monitoring",
      ],
    },
  },
  {
    key: "cloud",
    id: {
      title: "Cloud & Data Pipeline",
      blurb:
        "VM/container, storage, backup & IAM; pipeline ETL; versioning & observabilitas.",
      bullets: [
        "Docker/VM, reverse proxy, TLS, secrets",
        "Object/Block storage, backup & lifecycle",
        "ETL/ELT → warehouse (Postgres/BigQuery/ClickHouse)",
        "Metrics/logs/alerting; baseline SLO/SLA",
      ],
    },
    en: {
      title: "Cloud & Data Pipeline",
      blurb:
        "VM/containers, storage, backup & IAM; ETL pipelines; versioning & observability.",
      bullets: [
        "Docker/VM, reverse proxy, TLS, secrets",
        "Object/Block storage, backup & lifecycle",
        "ETL/ELT → warehouse (Postgres/BigQuery/ClickHouse)",
        "Metrics/logs/alerting; SLO/SLA baselines",
      ],
    },
  },
  {
    key: "analytics",
    id: {
      title: "Analytics & AI",
      blurb:
        "Deteksi anomali, forecasting, PCA/DBSCAN; dashboard KPI dengan insight otomatis.",
      bullets: [
        "Anomali (statistik & ML ringan)",
        "Time-series forecasting baseline",
        "PCA/DBSCAN untuk segmentasi/outlier",
        "Dashboard KPI + narasi/insight otomatis",
      ],
    },
    en: {
      title: "Analytics & AI",
      blurb:
        "Anomaly detection, forecasting, PCA/DBSCAN; executive KPI dashboards with auto-insights.",
      bullets: [
        "Statistical + lightweight ML anomaly detection",
        "Time-series forecasting baselines",
        "PCA/DBSCAN for segmentation/outlier",
        "KPI dashboards with narrated insights",
      ],
    },
  },
  {
    key: "delivery",
    id: {
      title: "Delivery, PMO & Compliance",
      blurb:
        "BoQ, RACI, acceptance; dokumentasi; HSE; audit trail; readiness ISO.",
      bullets: [
        "BoQ, RACI, acceptance & punch-list rapi",
        "Dokumentasi, SOP, pelatihan user",
        "HSE & audit trail dasar",
        "Kesiapan ISO 9001/27001 (proses & kontrol)",
      ],
    },
    en: {
      title: "Delivery, PMO & Compliance",
      blurb:
        "BoQ, RACI, acceptance; documentation; HSE; audit trails; ISO readiness.",
      bullets: [
        "BoQ, RACI, acceptance & structured punch-lists",
        "Documentation, SOPs, user training",
        "HSE & basic audit trails",
        "ISO 9001/27001 readiness (process & controls)",
      ],
    },
  },
];

export default function Capabilities({ isEN = false }: { isEN?: boolean }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        {isEN ? "Core Capabilities" : "Keahlian Inti"}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {CAPABILITIES.map((c) => {
          const t = isEN ? c.en : c.id;
          return (
            <div
              key={c.key}
              className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/5"
            >
              <h3 className="font-semibold text-lg">{t.title}</h3>
              <p className="mt-2 text-slate-300">{t.blurb}</p>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-slate-300">
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

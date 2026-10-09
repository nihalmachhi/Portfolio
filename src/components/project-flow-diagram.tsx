type FlowBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  detail?: string;
  tone?: "allow" | "block" | "muted";
};

function FlowBox({ x, y, width, height, title, detail, tone }: FlowBoxProps) {
  return (
    <g>
      <rect className={`project-flow-box${tone ? ` is-${tone}` : ""}`} x={x} y={y} width={width} height={height} rx="8" />
      <text className="project-flow-title" x={x + width / 2} y={y + height / 2 + (detail ? -3 : 4)}>{title}</text>
      {detail && <text className="project-flow-detail" x={x + width / 2} y={y + height / 2 + 13}>{detail}</text>}
    </g>
  );
}

function FlowLine({ d, tone }: { d: string; tone?: "allow" | "block" }) {
  return <path className={`project-flow-line${tone ? ` is-${tone}` : ""}`} d={d} />;
}

function DpiFlow() {
  return (
    <>
      <FlowBox x={10} y={55} width={80} height={40} title="PCAP" />
      <FlowBox x={130} y={55} width={110} height={40} title="Parser" detail="SNI · Host · DNS" />
      <FlowBox x={280} y={55} width={90} height={40} title="Flows" detail="50+ tracked" />
      <FlowBox x={410} y={55} width={80} height={40} title="Rules" detail="app · IP · domain" />
      <FlowBox x={540} y={18} width={90} height={36} title="ALLOW" tone="allow" />
      <FlowBox x={540} y={96} width={90} height={36} title="DROP" tone="block" />
      <FlowLine d="M90 75H130M240 75H280M370 75H410M490 68L540 38" tone="allow" />
      <FlowLine d="M490 82L540 114" tone="block" />
    </>
  );
}

function MeshFlow() {
  return (
    <>
      <g className="project-flow-mesh">
        <line x1="50" y1="50" x2="120" y2="105" />
        <line className="is-active" x1="120" y1="105" x2="200" y2="45" />
        <line className="is-active" x1="200" y1="45" x2="270" y2="105" />
        <line x1="270" y1="105" x2="340" y2="60" />
        <line x1="50" y1="50" x2="200" y2="45" />
        <line x1="120" y1="105" x2="270" y2="105" />
        <line className="is-active" x1="200" y1="45" x2="340" y2="60" />
      </g>
      <g className="project-flow-nodes">
        <circle cx="50" cy="50" r="11" /><circle cx="120" cy="105" r="11" />
        <circle cx="200" cy="45" r="11" /><circle cx="270" cy="105" r="11" />
        <circle cx="340" cy="60" r="11" />
      </g>
      <text className="project-flow-detail" x="195" y="138">5-device mesh · encrypted relay + gossip</text>
      <FlowLine d="M352 60H430" tone="allow" />
      <FlowBox x={430} y={38} width={90} height={44} title="Bridge" detail="idempotent" />
      <FlowLine d="M520 60H550" />
      <FlowBox x={550} y={38} width={80} height={44} title="SQLite" detail="8 endpoints" />
    </>
  );
}

function AgentGateFlow() {
  return (
    <>
      <FlowBox x={10} y={55} width={90} height={40} title="Agent" detail="Groq tools" />
      <FlowBox x={160} y={55} width={120} height={40} title="Policy gate" detail="3 policies" />
      <FlowBox x={380} y={18} width={110} height={36} title="Razorpay API" tone="allow" />
      <FlowBox x={380} y={96} width={110} height={36} title="Blocked" tone="block" />
      <FlowBox x={540} y={96} width={90} height={36} title="Audit log" detail="SQLite" />
      <FlowLine d="M100 75H160M280 68L380 38" tone="allow" />
      <FlowLine d="M280 82L380 114M490 114H540" tone="block" />
      <path className="project-flow-loop" d="M435 132Q435 150 55 150V98" />
      <text className="project-flow-detail" x="245" y="146">recover with 2 agent tools</text>
    </>
  );
}

function OpenHuntFlow() {
  return (
    <>
      <FlowBox x={10} y={8} width={100} height={34} title="Greenhouse" />
      <FlowBox x={10} y={58} width={100} height={34} title="Lever" />
      <FlowBox x={10} y={108} width={100} height={34} title="Ashby" />
      <FlowLine d="M110 25L190 68M110 75H190M110 125L190 82" />
      <FlowBox x={190} y={50} width={110} height={50} title="Filter" detail="title · loc · fresh" />
      <FlowLine d="M300 75H350" />
      <FlowBox x={350} y={55} width={90} height={40} title="LLM score" detail="optional" tone="muted" />
      <FlowLine d="M440 75H490" tone="allow" />
      <FlowBox x={490} y={55} width={140} height={40} title="HTML digest" detail="human review" />
      <text className="project-flow-detail" x="560" y="30">GitHub Actions</text>
      <text className="project-flow-detail" x="560" y="44">every weekday</text>
    </>
  );
}

export type ProjectDiagramKind = "dpi" | "meshpay" | "agentgate" | "openhunt";

export default function ProjectFlowDiagram({
  kind,
  label,
}: Readonly<{ kind: ProjectDiagramKind; label: string }>) {
  return (
    <div className="project-flow-scroll" role="group" aria-label={`${label} architecture diagram`}>
      <svg viewBox="0 0 640 156" role="img" aria-label={`${label} data flow`}>
        {kind === "dpi" && <DpiFlow />}
        {kind === "meshpay" && <MeshFlow />}
        {kind === "agentgate" && <AgentGateFlow />}
        {kind === "openhunt" && <OpenHuntFlow />}
      </svg>
    </div>
  );
}

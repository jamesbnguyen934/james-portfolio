export type CaseStudySection = {
  heading: string
  body: string
}

export type Project = {
  id: string
  slug: string
  title: string
  url: string
  category: string
  description: string
  techStack: string[]
  screenshots: string[]
  caseStudy: CaseStudySection[]
}

export const projects: Project[] = [
  {
    id: 'SYS_01',
    slug: 'butterflies-ai',
    title: 'Butterflies AI',
    url: 'https://www.butterflies.ai',
    category: 'AI Social Platform',
    description:
      'AI-powered social network where users create, chat, and interact with AI characters. We helped design the core loops around creation, discovery, and conversation so the product feels like a familiar social feed while still making the AI aspects feel magical. Under the hood the platform coordinates generation, safety, and memory so characters stay consistent across thousands of simultaneous conversations.',
    techStack: ['Next.js', 'FastAPI', 'AI/ML', 'Python', 'TypeScript'],
    screenshots: ['/projects/butterflies-1.png'],
    caseStudy: [
      {
        heading: 'Product scope',
        body:
          'Partnered with the founding team to turn an early prototype into a fully featured AI social world where people create, share, and talk with AI characters. We designed timelines, discovery surfaces, and conversation entry points so the experience feels like a familiar social app while still highlighting the novelty of AI-generated entities.',
      },
      {
        heading: 'Generation and character engine',
        body:
          'We built a character pipeline that stitches together prompt templates, memory stores, and safety rules into a single service. Creators can customise backstories, goals, and personalities while the platform automatically handles session state, tool calling, and streaming responses so conversations stay fast and coherent.',
      },
      {
        heading: 'Scalable real-time experience',
        body:
          'Feed rendering, notifications, and conversation summaries are backed by a mix of edge-cached Next.js routes and real-time APIs. We tuned the data model for high fan-out reads, optimised image delivery, and added background jobs for expensive operations like recap generation so the UI remains responsive even under heavy load.',
      },
      {
        heading: 'Trust, safety and operations',
        body:
          'Moderation hooks run at multiple layers: user input, model output, and character configuration. We exposed internal review tools for the ops team, added rate limits and abuse detection, and instrumented the system with metrics and structured logs so policy issues can be investigated without slowing down feature delivery.',
      },
    ],
  },
  {
    id: 'SYS_02',
    slug: 'yolo-health',
    title: 'Yolo Health',
    url: 'https://yolohealth.app/',
    category: 'Healthcare & Wellness',
    description:
      'Science-backed weight care platform with community support. The product combines clinical protocols with lightweight, habit-focused nudges so members can make progress between formal check-ins. We architected journeys for assessments, goal setting, and long-term follow-up, then wired them into data models that support experimentation without compromising on safety or compliance.',
    techStack: ['React', 'Tailwind', 'ShadcnUI', 'Node.js', 'Supabase', 'AWS'],
    screenshots: ['/projects/yolohealth-1.png'],
    caseStudy: [
      {
        heading: 'Member journey',
        body:
          'The product walks members from lightweight onboarding to long-term weight care programmes. We designed flows for assessments, goal setting, and check-ins that adapt to different coaching models while keeping the UI focused, friendly, and low friction on mobile.',
      },
      {
        heading: 'Personalisation and recommendations',
        body:
          'Behind the scenes the app aggregates biometric data, journal entries, and engagement signals into a profile that drives recommendations. We implemented a rule engine plus model-driven suggestions so care teams can mix clinical protocols with data-driven nudges without redeploying code.',
      },
      {
        heading: 'Community and accountability',
        body:
          'Group programmes rely on chat, live events, and shared challenges. We added moderation tools, topic spaces, and structured prompts so communities stay high-signal and psychologically safe while still feeling organic and member-led.',
      },
      {
        heading: 'Compliance and infrastructure',
        body:
          'The stack is built for healthcare constraints: strict access controls, encrypted data stores, logging for audit, and isolated environments for experimentation. Infrastructure is automated with infrastructure-as-code so the team can roll out new regions and integrations quickly without compromising on security.',
      },
    ],
  },
  {
    id: 'SYS_03',
    slug: 'fellow',
    title: 'Fellow',
    url: 'https://fellow.app/',
    category: 'AI Productivity',
    description:
      'Secure AI meeting assistant that records, transcribes, and summarizes meetings. Beyond simple call recording, Fellow attaches structured timelines, decisions, and action items back into the tools teams already live in. We designed the data model and pipelines so summaries stay trustworthy at scale, while privacy controls, SSO, and audit trails satisfy enterprise security teams.',
    techStack: ['Next.js', 'MUI', 'Flask', 'AI/ML', 'Supabase', 'GCP'],
    screenshots: ['/projects/fellow-1.jpg', '/projects/fellow-2.jpg', '/projects/fellow-3.jpg'],
    caseStudy: [
      {
        heading: 'Meeting lifecycle',
        body:
          'Fellow ingests calls from calendars and conferencing tools, records audio, and attaches the resulting timeline back to the workspace where teams already collaborate. We mapped the full meeting lifecycle—from scheduling to follow-up—so automation happens in the background while people stay focused on the discussion.',
      },
      {
        heading: 'Transcription and summarisation',
        body:
          'The pipeline breaks meetings into segments, runs high-accuracy transcription, and then applies layered summarisation: quick bullets for inbox scanning plus deeper narrative summaries when teams need more context. We tuned prompts to surface decisions and action items, not just generic text dumps.',
      },
      {
        heading: 'Workflow integrations',
        body:
          'Action items sync into task systems and CRMs, and recordings link back into existing knowledge bases. We implemented secure webhooks and granular configuration so different departments can opt into the level of automation that fits their processes.',
      },
      {
        heading: 'Enterprise controls',
        body:
          'Single sign-on, role-based permissions, and admin audit views let larger organisations adopt AI assistance without losing control. Data retention, redaction options, and strong isolation between tenants are built into the underlying architecture, not bolted on later.',
      },
    ],
  },
  {
    id: 'SYS_04',
    slug: 'taostats',
    title: 'TaoStats',
    url: 'https://taostats.io/',
    category: 'Blockchain Analytics',
    description:
      'Blockchain analytics platform providing real-time statistics and insights for the Bittensor ecosystem. We turned noisy on-chain data into clean, queryable views that operators can rely on for day-to-day decision making. The interface focuses on clarity and comparability so users can reason about validator health, rewards, and network trends without needing to dig through raw block explorers.',
    techStack: ['Next.js', 'Framer', 'Flask', 'Blockchain', 'Web3'],
    screenshots: ['/projects/taostats-1.png', '/projects/taostats-2.png', '/projects/taostats-3.png'],
    caseStudy: [
      {
        heading: 'Network visibility',
        body:
          'TaoStats turns raw blockchain data into an operator-friendly control panel for the Bittensor ecosystem. We designed dashboards that surface validator health, staking behaviour, and reward flows so operators can reason about the network at a glance.',
      },
      {
        heading: 'Data ingestion and indexing',
        body:
          'We implemented a streaming indexer that ingests chain events, normalises them, and writes query-optimised views. This allows most charts and tables to load from a hot cache while still supporting on-demand drill-downs into specific addresses or time ranges.',
      },
      {
        heading: 'Analytics experience',
        body:
          'Visualisations use a consistent colour system and interaction patterns so users can move from high-level metrics to granular traces without getting lost. We added comparison views, export options, and saved filters for power users who monitor the network daily.',
      },
      {
        heading: 'Reliability and observability',
        body:
          'Background jobs, indexers, and API nodes are monitored with structured logs, metrics, and alerting. Failures degrade gracefully to cached data, and automated backfills handle catch-up after outages without manual intervention.',
      },
    ],
  },
  {
    id: 'SYS_05',
    slug: 'wavel-ai',
    title: 'Wavel AI',
    url: 'https://wavel.ai/',
    category: 'AI Audio/Video',
    description:
      'AI-powered platform for audio and video processing used by professional content teams. We helped shape workflows for localisation, voice cloning, and bulk transformation so editors can manage hundreds of assets at once instead of working file-by-file. The system hides a complex multi-stage media pipeline behind a single, predictable job model that plays nicely with existing production stacks.',
    techStack: ['Next.js', 'Supabase', 'LLM', 'Processing'],
    screenshots: ['/projects/wavel-1.jpg', '/projects/wavel-2.jpg', '/projects/wavel-3.jpg'],
    caseStudy: [
      {
        heading: 'Creator-first workflow',
        body:
          'The product is optimised for teams that need to localise or transform large volumes of audio and video. We modelled typical production pipelines and designed the interface so editors can queue, preview, and approve batches of content instead of working one file at a time.',
      },
      {
        heading: 'Media processing pipeline',
        body:
          'Under the hood, jobs pass through stages for speech recognition, translation, voice cloning, and mastering. We exposed job state through a simple status model so both the UI and third-party integrations always know where each asset sits in the pipeline.',
      },
      {
        heading: 'Quality and review tools',
        body:
          'Side-by-side waveform and caption views help editors quickly spot issues. We built controls for region-based re-synthesis, custom pronunciation dictionaries, and version history so teams can iterate without fear of losing work.',
      },
      {
        heading: 'Scalability for large customers',
        body:
          'The system is tuned for enterprise workloads: bursty traffic, large assets, and multiple concurrent projects. Storage, compute, and queue capacity scale independently so costs remain predictable even as throughput grows.',
      },
    ],
  },
  {
    id: 'SYS_06',
    slug: 'beam-ai',
    title: 'Beam AI',
    url: 'https://beam.ai',
    category: 'AI Agent Platform',
    description:
      'Enterprise AI agent framework for automating complex internal workflows. Beam AI lets teams define specialised agents, give them tools, and then compose them into auditable flows that react to events in CRMs, ticketing tools, and internal APIs. Our work focused on the boundary between flexibility and control so security teams remain comfortable while product teams ship automation quickly.',
    techStack: ['Python', 'AWS', 'Redis', 'LLMs', 'SSO/MFA'],
    screenshots: ['/projects/beam-1.jpg'],
    caseStudy: [
      {
        heading: 'Agent framework',
        body:
          'Beam AI provides a framework for orchestrating specialised agents that each own a slice of a customer workflow. We helped design an agent specification that cleanly separates capabilities, tools, and guardrails so new agents can be added without rewriting the whole system.',
      },
      {
        heading: 'Workflow composition',
        body:
          'Non-technical teams can stitch agents together into flows that react to events in CRMs, ticketing tools, and internal APIs. We added a declarative configuration layer so these flows are versioned, reviewable, and safe to roll back.',
      },
      {
        heading: 'Security and identity',
        body:
          'Because agents act on behalf of real users, authentication and authorisation are first-class concerns. We integrated single sign-on, per-agent credentials, and fine-grained permission checks so security teams can reason about exactly what each agent is allowed to do.',
      },
      {
        heading: 'Observability and tuning',
        body:
          'Interactive traces show each tool call, prompt, and model response. This makes it possible to tune prompts, adjust routing logic, and debug production incidents using the same interface that product and support teams share.',
      },
    ],
  },
  {
    id: 'SYS_07',
    slug: 'vhs-funding',
    title: 'VHS Funding',
    url: 'https://vhsfunding.com/',
    category: 'Real Estate AI',
    description:
      'Real estate financing platform powered by voice AI agents. Inbound callers talk to an AI assistant that can qualify leads, capture structured data, and route high-value opportunities to humans in real time. We designed conversation flows, scoring logic, and operator tooling so the system feels natural to customers while giving sales teams a clear, measurable uplift.',
    techStack: ['React', 'Voice AI', 'STT', 'TTS', 'Real Estate APIs'],
    screenshots: ['/projects/vhsfunding-1.jpg', '/projects/vhsfunding-2.jpg'],
    caseStudy: [
      {
        heading: 'Voice-first acquisition',
        body:
          'The platform uses voice AI to qualify and route inbound leads for real-estate financing. We designed conversational flows that feel natural for callers while still collecting the structured data underwriting teams need.',
      },
      {
        heading: 'Call intelligence',
        body:
          'Calls are transcribed, enriched, and automatically tagged with key entities such as property type, loan size, and urgency. We built scoring logic that determines which calls should be escalated immediately and which can move through self-serve flows.',
      },
      {
        heading: 'Agent tooling',
        body:
          'Live dashboards show queues, conversion metrics, and trending objections so sales teams can adjust messaging in near real time. Agents can jump into calls, see context, and take over smoothly when high-value opportunities appear.',
      },
      {
        heading: 'Compliance and audit',
        body:
          'Recordings, disclosures, and consent artefacts are stored with clear links back to each customer record. Role-based access and immutable logs help operations teams satisfy internal review and regulatory requirements.',
      },
    ],
  },
  {
    id: 'SYS_08',
    slug: 'fulgent-ai',
    title: 'Fulgent AI',
    url: 'https://fulgentai.com/',
    category: 'AI Platform',
    description:
      'AI and machine learning platform built for teams that want a clean path from experiments to production. Fulgent AI unifies data connectors, model hosting, evaluation, and deployment into one opinionated workflow. We helped define the core abstractions so data scientists, MLOps, and product engineers can collaborate without stepping on each other’s toes.',
    techStack: ['React', 'Next.js', 'Supabase', 'AI/ML', 'FastAPI', 'Python'],
    screenshots: ['/projects/fulgent-2.jpg', '/projects/fulgent-3.jpg'],
    caseStudy: [
      {
        heading: 'Unified AI platform',
        body:
          'Fulgent AI brings data connectors, model hosting, evaluation, and deployment under one roof. We helped the team define a mental model where projects move from exploration to stable production environments without hand-built glue code.',
      },
      {
        heading: 'Experimentation workflow',
        body:
          'Data scientists can spin up experiments, compare runs, and promote winning configurations into shared workspaces. We added visual diffing of metrics and outputs so teams can justify model changes to stakeholders without digging through notebooks.',
      },
      {
        heading: 'APIs and integration',
        body:
          'Every deployed model gets a consistent API surface, SDK support, and usage analytics. This lets product teams plug models into applications without worrying about how they are trained or scaled internally.',
      },
      {
        heading: 'Governance',
        body:
          'Access policies, dataset lineage, and deployment history are tracked centrally. Approval workflows and environment separation make it clear which models are experimental and which ones power customer-facing products.',
      },
    ],
  },
  {
    id: 'SYS_09',
    slug: 'talkie-ai',
    title: 'Talkie AI',
    url: 'https://www.talkie-ai.com/',
    category: 'Generative AI',
    description:
      'AI character chat platform for natural, conversational experiences. Talkie AI focuses on letting creators build rich, long-lived characters with memory, constraints, and distinct voices rather than generic chatbots. We worked on the underlying representation of persona and memory so conversations stay coherent over time, even as characters are used by millions of end users.',
    techStack: ['React', 'Next.js', 'GenAI', 'FastAPI', 'LLM', 'TypeScript'],
    screenshots: ['/projects/talkie-1.jpg', '/projects/talkie-2.jpg', '/projects/talkie-3.jpg'],
    caseStudy: [
      {
        heading: 'Character-driven chat',
        body:
          'Talkie AI focuses on high-quality character interactions rather than generic chat completions. We worked on tools that let creators define persona, tone, boundaries, and long-term memory in a structured way so characters behave consistently over time.',
      },
      {
        heading: 'Realtime experience',
        body:
          'The chat interface is optimised for low-latency streaming responses, message retries, and graceful handling of model timeouts. We tuned payload sizes and connection management so conversations feel fluid even on mobile networks.',
      },
      {
        heading: 'Content safety and controls',
        body:
          'We integrated layered safety mechanisms including pre-filters, post-filters, and configurable policies per character or workspace. Creators get feedback when prompts push against policy boundaries so they can adjust before content goes live.',
      },
      {
        heading: 'Monetisation and growth tooling',
        body:
          'In-app purchase hooks, creator dashboards, and analytics around retention and revenue help the business iterate quickly. Experiments around pricing and feature gating can be run without custom engineering work for each new idea.',
      },
    ],
  },
]

export function getAllProjects() {
  return projects
}

export function getProjectBySlug(slug: string | undefined) {
  if (!slug) return undefined

  const normalized = slug.trim().toLowerCase()
  return projects.find((project) => project.slug.trim().toLowerCase() === normalized)
}

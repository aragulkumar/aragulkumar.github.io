# Personal Website Template — Tailwind CSS

> Exact replica of kushvinth.com's style built with **Tailwind CSS (CDN)**.
> Replace every `ALL_CAPS` placeholder with your own info.

---

## `index.html`

```html
<!DOCTYPE html>
<html lang="en" class="bg-[#0f0f0f]">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>YOUR NAME</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Geist Mono font (matches the terminal aesthetic) -->
  <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            mono: ['"Geist Mono"', '"Fira Code"', '"Courier New"', 'monospace'],
          },
          colors: {
            bg:      '#0f0f0f',
            surface: '#161616',
            border:  '#1f1f1f',
            dim:     '#555',
            muted:   '#888',
            base:    '#c8c8c8',
            bright:  '#e8e8e8',
          },
        },
      },
    }
  </script>

  <style>
    body { font-family: 'Geist Mono', 'Fira Code', 'Courier New', monospace; }
    a { transition: color 0.15s ease; }
  </style>
</head>

<body class="bg-bg text-base min-h-screen px-6 py-12 pb-24">
  <main class="max-w-[660px] mx-auto">

    <!-- ── Navigation ───────────────────────────────── -->
    <nav class="flex gap-5 mb-14 text-xs text-dim">
      <a href="/" class="hover:text-bright">
        <span class="text-muted">[h]</span> home
      </a>
      <a href="/blog" class="hover:text-bright">
        <span class="text-muted">[b]</span> blog
      </a>
      <a href="/projects" class="hover:text-bright">
        <span class="text-muted">[p]</span> projects
      </a>
    </nav>

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="mb-12">
      <h1 class="text-xl font-medium text-bright mb-1">YOUR NAME</h1>
      <p class="text-xs text-dim mb-0.5">YOUR CITY, YOUR COUNTRY</p>
      <p class="text-xs text-dim mb-4">YOUR UNIVERSITY / COLLEGE</p>
      <p class="text-sm text-base leading-relaxed max-w-[52ch]">
        <!-- 2–3 casual, personal sentences about yourself -->
        i'm a 20 y/o cs undergrad student. i love building things and solving
        problems. if i'm not coding, i'm probably [YOUR HOBBY] or obsessing
        over [SOMETHING YOU LOVE].
      </p>
    </section>

    <!-- ── Work Experience ──────────────────────────── -->
    <section class="mb-10">
      <h2 class="text-[0.7rem] tracking-widest text-dim uppercase border-b border-border pb-1.5 mb-5">
        work
      </h2>

      <!-- Card -->
      <a href="https://COMPANY1_URL.com" target="_blank" rel="noopener"
         class="block pb-4 mb-4 border-b border-border hover:opacity-60 no-underline group">
        <h3 class="text-sm font-medium text-bright mb-0.5 lowercase">company one</h3>
        <p class="text-[0.72rem] text-dim mb-1">your role (mon year – mon year)</p>
        <p class="text-[0.82rem] text-base">One sentence describing what you built or contributed.</p>
      </a>

      <!-- Card -->
      <a href="https://COMPANY2_URL.com" target="_blank" rel="noopener"
         class="block pb-4 mb-4 border-b border-border hover:opacity-60 no-underline group">
        <h3 class="text-sm font-medium text-bright mb-0.5 lowercase">company two</h3>
        <p class="text-[0.72rem] text-dim mb-1">your role (mon year – mon year)</p>
        <p class="text-[0.82rem] text-base">One sentence describing what you built or contributed.</p>
      </a>
    </section>

    <!-- ── OSS Work ──────────────────────────────────── -->
    <section class="mb-10">
      <h2 class="text-[0.7rem] tracking-widest text-dim uppercase border-b border-border pb-1.5 mb-5">
        oss work
      </h2>

      <!-- OSS Card -->
      <div class="pb-4 mb-4 border-b border-border">
        <a href="https://github.com/ORG1" target="_blank" rel="noopener"
           class="text-sm font-medium text-bright hover:opacity-60 no-underline lowercase">
          org / project one
        </a>
        <p class="text-[0.82rem] text-base mt-1 mb-2">
          Describe the improvement or fix you contributed in one sentence.
        </p>
        <div class="flex flex-wrap gap-2">
          <a href="https://github.com/ORG1/REPO/pull/XXX" target="_blank" rel="noopener"
             class="text-[0.72rem] text-dim border border-border px-2 py-0.5 rounded hover:text-bright hover:border-muted no-underline">
            PR #XXX
          </a>
          <a href="https://github.com/ORG1/REPO/pull/YYY" target="_blank" rel="noopener"
             class="text-[0.72rem] text-dim border border-border px-2 py-0.5 rounded hover:text-bright hover:border-muted no-underline">
            PR #YYY
          </a>
        </div>
      </div>

      <!-- OSS Card -->
      <div class="pb-4 mb-4 border-b border-border">
        <a href="https://github.com/ORG2" target="_blank" rel="noopener"
           class="text-sm font-medium text-bright hover:opacity-60 no-underline lowercase">
          org / project two
        </a>
        <p class="text-[0.82rem] text-base mt-1 mb-2">
          Describe the improvement or fix you contributed in one sentence.
        </p>
        <div class="flex flex-wrap gap-2">
          <a href="https://github.com/ORG2/REPO/pull/XXX" target="_blank" rel="noopener"
             class="text-[0.72rem] text-dim border border-border px-2 py-0.5 rounded hover:text-bright hover:border-muted no-underline">
            PR #XXX
          </a>
        </div>
      </div>
    </section>

    <!-- ── Blog ─────────────────────────────────────── -->
    <section class="mb-10">
      <h2 class="text-[0.7rem] tracking-widest text-dim uppercase border-b border-border pb-1.5 mb-5">
        blog
      </h2>

      <ul class="space-y-0">
        <li class="flex justify-between items-baseline py-2.5 border-b border-border">
          <a href="/blog/POST-SLUG-1" class="text-[0.85rem] text-base hover:text-bright no-underline">
            post title one
          </a>
          <span class="text-[0.72rem] text-dim whitespace-nowrap ml-4">mon dd, yyyy</span>
        </li>
        <li class="flex justify-between items-baseline py-2.5 border-b border-border">
          <a href="/blog/POST-SLUG-2" class="text-[0.85rem] text-base hover:text-bright no-underline">
            post title two
          </a>
          <span class="text-[0.72rem] text-dim whitespace-nowrap ml-4">mon dd, yyyy</span>
        </li>
        <li class="flex justify-between items-baseline py-2.5 border-b border-border">
          <a href="/blog/POST-SLUG-3" class="text-[0.85rem] text-base hover:text-bright no-underline">
            post title three
          </a>
          <span class="text-[0.72rem] text-dim whitespace-nowrap ml-4">mon dd, yyyy</span>
        </li>
      </ul>

      <a href="/blog" class="inline-block mt-3 text-[0.75rem] text-dim hover:text-bright no-underline">
        all posts →
      </a>
    </section>

    <!-- ── Projects ──────────────────────────────────── -->
    <section class="mb-10">
      <h2 class="text-[0.7rem] tracking-widest text-dim uppercase border-b border-border pb-1.5 mb-5">
        projects
      </h2>

      <a href="https://github.com/YOUR_GITHUB/PROJECT1" target="_blank" rel="noopener"
         class="block pb-4 mb-4 border-b border-border hover:opacity-60 no-underline">
        <h3 class="text-sm font-medium text-bright mb-0.5 lowercase">project one</h3>
        <p class="text-[0.72rem] text-dim mb-1">creator and maintainer</p>
        <p class="text-[0.82rem] text-base">One sentence describing what the project does.</p>
      </a>

      <a href="https://github.com/YOUR_GITHUB/PROJECT2" target="_blank" rel="noopener"
         class="block pb-4 mb-4 border-b border-border hover:opacity-60 no-underline">
        <h3 class="text-sm font-medium text-bright mb-0.5 lowercase">project two</h3>
        <p class="text-[0.72rem] text-dim mb-1">creator</p>
        <p class="text-[0.82rem] text-base">One sentence describing what the project does.</p>
      </a>

      <a href="/projects" class="inline-block mt-1 text-[0.75rem] text-dim hover:text-bright no-underline">
        all projects →
      </a>
    </section>

    <!-- ── Links / Social ────────────────────────────── -->
    <section>
      <h2 class="text-[0.7rem] tracking-widest text-dim uppercase border-b border-border pb-1.5 mb-5">
        links
      </h2>
      <div class="flex flex-wrap gap-x-5 gap-y-2">
        <a href="mailto:YOUR@EMAIL.COM"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">email</a>
        <a href="https://x.com/YOUR_HANDLE" target="_blank" rel="noopener"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">x.com</a>
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">github</a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">linkedin</a>
        <a href="https://discord.com/users/YOUR_DISCORD_ID" target="_blank" rel="noopener"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">discord</a>
        <a href="https://cal.com/YOUR_CAL_HANDLE/quick-chat" target="_blank" rel="noopener"
           class="text-[0.85rem] text-dim hover:text-bright no-underline">book a call</a>
      </div>
    </section>

  </main>
</body>
</html>
```

---

## Checklist — Replace These

| Placeholder | Replace with |
|---|---|
| `YOUR NAME` | Your full name |
| `YOUR CITY, YOUR COUNTRY` | e.g. `chennai, india` |
| `YOUR UNIVERSITY / COLLEGE` | e.g. `anna university` |
| Bio `<p>` | 2–3 casual personal sentences |
| `company one / two` + URLs | Your work experience |
| `org / project one / two` + PR links | Your OSS contributions |
| Blog `<li>` rows | Your blog post titles, slugs, dates |
| `project one / two` + GitHub URLs | Your personal projects |
| Social links at bottom | Your real email, handles, IDs |

---

## File Structure (multi-page)

```
/
├── index.html            ← this file (home)
├── blog/
│   ├── index.html        ← all posts list
│   └── post-slug.html    ← individual post (copy structure below)
└── projects/
    └── index.html        ← full projects list
```

---

## Blog Post Template — `blog/post-slug.html`

```html
<!DOCTYPE html>
<html lang="en" class="bg-[#0f0f0f]">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>POST TITLE — YOUR NAME</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { mono: ['"Geist Mono"', 'monospace'] },
          colors: {
            bg:'#0f0f0f', border:'#1f1f1f',
            dim:'#555', muted:'#888', base:'#c8c8c8', bright:'#e8e8e8',
          },
        },
      },
    }
  </script>
  <style>body { font-family: 'Geist Mono', monospace; }</style>
</head>
<body class="bg-bg text-base min-h-screen px-6 py-12 pb-24">
  <main class="max-w-[660px] mx-auto">

    <nav class="flex gap-5 mb-14 text-xs text-dim">
      <a href="/" class="hover:text-bright"><span class="text-muted">[h]</span> home</a>
      <a href="/blog" class="hover:text-bright"><span class="text-muted">[b]</span> blog</a>
      <a href="/projects" class="hover:text-bright"><span class="text-muted">[p]</span> projects</a>
    </nav>

    <article>
      <h1 class="text-lg font-medium text-bright mb-1">post title here</h1>
      <p class="text-xs text-dim mb-8">mon dd, yyyy</p>

      <div class="text-sm text-base leading-relaxed space-y-4">
        <p>Your blog content goes here. Write naturally in lowercase if you want to match Kushvinth's casual tone.</p>
        <p>Add more paragraphs as needed.</p>
      </div>
    </article>

  </main>
</body>
</html>
```

---

## Deployment

| Platform | How |
|---|---|
| **GitHub Pages** | Push to `main`, enable Pages in repo settings |
| **Netlify** | Drag & drop folder at netlify.com/drop |
| **Vercel** | `npx vercel` in the folder |
| **Cloudflare Pages** | Connect GitHub repo, zero config |

> **Note:** Since this uses Tailwind via CDN (Play CDN), no build step is needed — just open `index.html` in a browser or deploy the folder as-is.

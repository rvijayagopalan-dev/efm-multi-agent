# 👀 Agent Academy Links - Visual Guide

## What You'll See

### Agents Tab - Initial State

```
┌─────────────────────────────────────────────────────┐
│ 🤖 Agents Tab (on home page)                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│ 📋 SDLC Phase 1: Requirements & Planning      ▼   │
│ 8 agents in group                                  │
│                                                     │
│ ┌──────────────┐  ┌──────────────┐                 │
│ │ Product Req  │  │ Market & Comp│                 │
│ │ [SDLC]       │  │ [SDLC]       │                 │
│ │ L3           │  │ L3           │                 │
│ │ ▼ Show ...   │  │ ▼ Show ...   │                 │
│ └──────────────┘  └──────────────┘                 │
│                                                     │
│ (More agents in grid...)                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Agent Card - Collapsed State

```
┌────────────────────────────────────┐
│ Product Requirements & Vision Agent│
│ [SDLC]                      L3     │
│ ▼ Show details                     │
└────────────────────────────────────┘
(No link visible in collapsed state)
```

---

## Agent Card - Expanded State

```
┌──────────────────────────────────────────┐
│ Product Requirements & Vision Agent [SDLC]
│ L3                                  │
│ ▼ Hide details                      │
├──────────────────────────────────────────┤
│                                          │
│ [📚 Learn in Academy ↗]                  │
│   ↑                                      │
│   └─ Click this link to access academy  │
│                                          │
│ ROLE                                     │
│ Requirements Strategist                  │
│                                          │
│ RESPONSIBILITIES                         │
│ ▸ Gather and analyze requirements      │
│ ▸ Create and refine user stories       │
│ ▸ ... (more items)                     │
│                                          │
│ INPUTS                                   │
│ 📥 Business goals                       │
│ 📥 Stakeholder interviews               │
│ ... (more items)                        │
│                                          │
│ FRAMEWORKS & TOOLS                       │
│ ⚙️ Agile User Stories                   │
│ ⚙️ MoSCoW Prioritization                │
│ ... (more items)                        │
│                                          │
│ OUTPUTS                                  │
│ 📤 User stories                         │
│ 📤 Acceptance criteria                  │
│ ... (more items)                        │
│                                          │
└──────────────────────────────────────────┘
```

---

## Link Button Details

### Visual Appearance

```
Normal State:
┌──────────────────────────────────┐
│ [📚 Learn in Academy ↗]          │
│ bg-blue-600/20                   │
│ border-blue-500/30               │
│ text-blue-400                    │
└──────────────────────────────────┘

Hover State:
┌──────────────────────────────────┐
│ [📚 Learn in Academy ↗]          │
│ bg-blue-600/30 (darker)          │
│ text-blue-300 (brighter)         │
│ smooth transition 300ms          │
└──────────────────────────────────┘

Colors:
  Icon: 📚 (book)
  Text: "Learn in Academy"
  Arrow: ↗ (external link indicator)
  Background: Blue-tinted
  Border: Blue accent
```

### Button Styling

```
Properties:
  Size: Compact, inline
  Padding: px-3 py-1.5
  Border: Rounded lg
  Transition: 300ms smooth
  Text: font-medium, xs size
  
States:
  Normal: Blue/40 background
  Hover: Blue/30 background (darker)
  Active: Opens new tab
```

---

## User Interaction Flow

### Step 1: Browse Agents
```
┌─────────────────────────┐
│ 🤖 Agents Tab           │
│                         │
│ [Accordion Groups]      │
│ └─ SDLC Phase 1        │
│    └─ [Agent Cards]    │
│       ├─ Product Req   │
│       ├─ Market & Comp │
│       └─ ...           │
│                         │
└─────────────────────────┘
```

### Step 2: Expand Agent
```
Click Agent Card:
  Card expands downward
  Shows all details
  Link button appears
```

### Step 3: See Academy Link
```
In expanded card:
┌──────────────────────┐
│ [📚 Learn in Academy│↗]
│  ↑                  │
│  └─ New blue button │
│                      │
│ (other details...)   │
└──────────────────────┘
```

### Step 4: Click Link
```
User hovers over link:
  Background darkens (blue-600/30)
  Text brightens (blue-300)
  Shows it's clickable

User clicks:
  Opens new tab
  Academy page loads
  Dedicated learning content shows
```

### Step 5: Learning Academy
```
Academy Page:
┌──────────────────────────────┐
│ 📚 Learning Academy          │
│                              │
│ Agent-Specific Content:      │
│ • Overview & expertise       │
│ • Specialized knowledge      │
│ • Best practices            │
│ • Implementation guides     │
│ • Real-world examples       │
│ • Use cases                 │
│                              │
└──────────────────────────────┘
```

---

## Different Agent Types

### SDLC Agent Example
```
Agent: Software Developer
Link: /academy/code-development-implementation

Card shows:
├─ Role: Software Developer
├─ Autonomy: L4
├─ Responsibilities: (6 items)
├─ Inputs: (3-4 items)
├─ Frameworks: (3-5 tools)
├─ Outputs: (2-4 items)
└─ [📚 Learn in Academy ↗] ← Click for training
```

### Enterprise Agent Example
```
Agent: Chief Technology Officer
Link: /academy/cto

Card shows:
├─ Role: Chief Technology Officer
├─ Type: Executive
├─ Responsibilities: (6 items)
├─ Inputs: (3-4 items)
├─ Frameworks: (3-5 tools)
├─ Outputs: (2-4 items)
└─ [📚 Learn in Academy ↗] ← Click for training
```

### TOGAF Agent Example
```
Agent: Business Architect
Link: /academy/business-architect

Card shows:
├─ Role: Business Architect
├─ Autonomy: L4
├─ Responsibilities: (6 items)
├─ Inputs: (3-4 items)
├─ Frameworks: (3-5 tools)
├─ Outputs: (2-4 items)
└─ [📚 Learn in Academy ↗] ← Click for training
```

---

## Link Color Coding

### Academy Link Styling
```
Visual Theme: Blue (Learning/Education)
  Icon: 📚 (Book - learning symbol)
  Color: blue-400 (bright blue text)
  Background: blue-600/20 (light blue tint)
  Border: blue-500/30 (blue accent)
  Arrow: ↗ (external link indicator)

Why Blue?
  - Represents learning
  - Distinct from other buttons
  - Stands out in expanded card
  - Professional, educational feel
```

### Comparison with Other Elements
```
Inputs (Blue):       📥 Sky blue (sky-500)
Frameworks (Amber):  ⚙️ Amber (amber-500)
Outputs (Green):     📤 Emerald (emerald-500)
Academy Link (Blue): 📚 Blue (blue-600) ← NEW
```

---

## Mobile View

### Collapsed Card
```
┌──────────────────────────┐
│ Product Req... [SDLC]    │
│ L3                       │
│ ▼ Show details           │
└──────────────────────────┘
(Full width on mobile)
```

### Expanded Card
```
┌──────────────────────────┐
│ Product Req... [SDLC]    │
│ L3                       │
│ ▼ Hide details           │
├──────────────────────────┤
│ [📚 Learn in Academy ↗]  │
│                          │
│ ROLE                     │
│ Requirements Strategist  │
│                          │
│ ... (more details)       │
└──────────────────────────┘
(Full width, link wraps)
```

---

## Interaction States

### Button States

**Default/Normal:**
```
Background: bg-blue-600/20
Border: border-blue-500/30
Text: text-blue-400
Opacity: 100%
```

**Hover:**
```
Background: bg-blue-600/30 (darker/more opaque)
Border: border-blue-500/30 (same)
Text: text-blue-300 (brighter)
Opacity: 100%
Cursor: pointer
Transition: 300ms smooth
```

**Active (Clicked):**
```
Action: Opens new tab
URL: /academy/{agent-id}
Behavior: Opens in new window
Security: noopener noreferrer
```

**Focus (Keyboard):**
```
Ring: Standard focus style
Accessible: Tab-navigable
a11y: Proper link semantics
```

---

## Academy Page Preview

When user clicks the link:

```
Academy Page Loads:
┌────────────────────────────────────────┐
│ 📚 Learning Academy                    │
├────────────────────────────────────────┤
│                                        │
│ Product Requirements & Vision Agent    │
│                                        │
│ Expertise Overview:                    │
│ • Requirements engineering specialist  │
│ • User story mastery                  │
│ • Stakeholder management              │
│ • Acceptance criteria definition      │
│                                        │
│ Learning Content:                      │
│ • Best practices in requirements      │
│ • Story mapping techniques            │
│ • Acceptance criteria framework       │
│ • Stakeholder engagement strategies   │
│                                        │
│ Implementation Guides:                 │
│ • Real-world examples                 │
│ • Common pitfalls to avoid            │
│ • Integration patterns                │
│ • Advanced techniques                 │
│                                        │
│ (AI-generated, real-time content)     │
│                                        │
└────────────────────────────────────────┘
```

---

## Quick Reference

### Where to Find Academy Links
```
Home Page
  └─ Agents Tab (🤖)
     └─ Agent Groups (Accordion)
        └─ Agent Cards
           └─ Click to Expand
              └─ [📚 Learn in Academy ↗]
```

### Link Behavior
- ✅ Opens academy page
- ✅ In new tab (doesn't leave agent tab)
- ✅ Direct to agent-specific content
- ✅ Full learning materials
- ✅ Real-time AI-generated

### Visual Indicators
- 📚 Book icon = Learning/Academy
- ↗ Arrow = External/new window
- Blue color = Educational content
- Hover effect = Interactive

---

**Ready to Learn!** 📚

Every agent in the Agents Tab is now one click away from comprehensive learning academy content!

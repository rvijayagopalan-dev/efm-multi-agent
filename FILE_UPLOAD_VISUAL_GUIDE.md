# 📸 File Upload - Visual Guide

## 🎯 What You'll See

### Initial State (No File)

```
┌─────────────────────────────────────────────────┐
│ Input Area                                       │
├─────────────────────────────────────────────────┤
│                                                 │
│ Ask the orchestrator anything...                │
│ [Textarea - 2 rows, with placeholder]          │
│                                                 │
│ ┌─────────────────────────────────────────────┐│
│ │ [Example 1] [Example 2] [📎 Attach File]    ││
│ └─────────────────────────────────────────────┘│
│                                                 │
│ (No file selected)                              │
│                                                 │
│ ┌──────────────────┐  ┌──────────────────┐     │
│ │ Stop (disabled)  │  │ Clear (disabled)  │     │
│ └──────────────────┘  └──────────────────┘     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### After Clicking "Attach File"

```
File Dialog Opens:
┌──────────────────────────────────────────┐
│ Choose File to Upload                    │
├──────────────────────────────────────────┤
│ 📁 Recent Files                          │
│ 📄 document.pdf                          │
│ 🖼️  diagram.png                          │
│ 📋 data.csv                              │
│                                          │
│ Supported: Images, PDF, DOC, TXT, JSON  │
│                                          │
│ [Cancel]  [Choose File]                  │
└──────────────────────────────────────────┘
```

---

### After Selecting a Document File

```
┌─────────────────────────────────────────────────┐
│ Input Area (with File)                          │
├─────────────────────────────────────────────────┤
│                                                 │
│ Ask the orchestrator anything...                │
│ [Textarea with placeholder]                    │
│                                                 │
│ ┌─────────────────────────────────────────────┐│
│ │ [Example 1] [Example 2] [📎 Attach File]    ││
│ └─────────────────────────────────────────────┘│
│                                                 │
│ File Display:                                   │
│ ┌──────────────────────────────────────────┐  │
│ │ 📄 requirements.pdf       ✕ Remove       │  │
│ │ 2,450.5 KB                              │  │
│ └──────────────────────────────────────────┘  │
│                                                 │
│ (No preview for non-image files)               │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### After Selecting an Image File

```
┌─────────────────────────────────────────────────┐
│ Input Area (with Image)                         │
├─────────────────────────────────────────────────┤
│                                                 │
│ Ask the orchestrator anything...                │
│ [Textarea with placeholder]                    │
│                                                 │
│ ┌─────────────────────────────────────────────┐│
│ │ [Example 1] [Example 2] [📎 Attach File]    ││
│ └─────────────────────────────────────────────┘│
│                                                 │
│ File Display:                                   │
│ ┌──────────────────────────────────────────┐  │
│ │ 📄 architecture.png       ✕ Remove       │  │
│ │ 854.2 KB                              │  │
│ └──────────────────────────────────────────┘  │
│                                                 │
│ Image Preview (shows thumbnail):                │
│ ┌──────────────────────────────────────────┐  │
│ │  ┌──────────────────────────────────┐   │  │
│ │  │                                  │   │  │
│ │  │   [Image preview thumbnail]      │   │  │
│ │  │   (system architecture diagram)  │   │  │
│ │  │                                  │   │  │
│ │  └──────────────────────────────────┘   │  │
│ └──────────────────────────────────────────┘  │
│                                                 │
│ ┌──────────────────┐  ┌──────────────────┐    │
│ │ Run   (enabled)  │  │ Clear (enabled)   │    │
│ └──────────────────┘  └──────────────────┘    │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎬 Step-by-Step Interaction

### 1️⃣ Click Attach File Button

```
Visual: Button highlights on hover

Before:
  [📎 Attach File]  (normal state, slate-700 border)

Hover:
  [📎 Attach File]  (cyan border glow, text brightens)
  └─ border: border-cyan-500/40
     text: hover:text-cyan-400
```

### 2️⃣ Select File

```
File Dialog:
  ✅ Shows recently used files
  ✅ Can browse to any folder
  ✅ Filters by supported types
  ✅ Shows file size
```

### 3️⃣ File Appears in Input

```
File Info Box:
┌──────────────────────────────────┐
│ 📄 document.pdf       ✕ Remove   │
│ 1,200.5 KB                       │
└──────────────────────────────────┘

Styling:
  Background: bg-slate-800/50
  Border: border-slate-700/50
  Text: text-slate-300 (name), text-slate-500 (size)
  Remove Button: bg-red-600/20 (hover: /30)
```

### 4️⃣ For Images - Preview Appears

```
Preview Area:
┌─────────────────────────────┐
│ [Image preview thumbnail]   │
│ (system generated)          │
└─────────────────────────────┘

Styling:
  Border: border-slate-700
  Rounded: rounded-lg
  Max Height: max-h-32
  Object Fit: object-cover
```

### 5️⃣ Type Query

```
Textarea Content:
┌────────────────────────────────────────┐
│ Analyze this architecture diagram and  │
│ suggest cloud migration strategy       │
└────────────────────────────────────────┘

File remains displayed below textarea
```

### 6️⃣ Click Run Button

```
Before Click:
  [Run] button is highlighted
  (bg-orange-600 hover:bg-orange-500)

After Click:
  [Run] changes to [Stop]
  (bg-red-600 hover:bg-red-700)
  File upload disabled during execution
```

### 7️⃣ Orchestrator Processes

```
Execution Log shows:
  [User] Analyze this architecture diagram and suggest 
         cloud migration strategy
         --- Uploaded File: architecture.png ---
         [Binary image data...]
         
  [Orchestrator] Planning phase...
  [Agent] Invoking architecture specialist...
  [Agent Output] Architecture analysis...
  [Synthesis] Creating migration strategy...
```

---

## 🎨 Color & Styling Reference

### Attach File Button

```
Normal State:
  Background: transparent
  Border: border-slate-700
  Text: text-slate-500
  
Hover State:
  Border: border-cyan-500/40 (glows cyan)
  Text: text-cyan-400 (brightens)
  
States:
  transition-all (smooth animation)
  rounded-lg
  px-2.5 py-1
  text-[10px]
```

### File Display Box

```
Container:
  Background: bg-slate-800/50 (semi-transparent)
  Border: border-slate-700/50
  Padding: px-3 py-2
  Rounded: rounded-lg

File Icon: 📄 (text-xs)

Text Area:
  Filename: text-slate-300 (text-xs, truncated)
  Size: text-slate-500 (text-[10px])

Remove Button:
  Normal: bg-red-600/20
  Hover: bg-red-600/30
  Text: text-red-400
  Rounded: rounded
  Padding: px-2 py-1
```

### Image Preview

```
Container:
  Border: border-slate-700
  Rounded: rounded-lg
  Overflow: overflow-hidden
  Max Height: max-h-32
  Width: w-full

Image:
  Object Fit: object-cover
  Dimensions: w-full h-full
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)

```
File Display:
┌──────────────────────┐
│ 📄 file.pdf    ✕    │
│ 1,200.5 KB          │
└──────────────────────┘
(Full width, wraps as needed)

Buttons:
[📎 Attach]
(Stacked vertically)
```

### Tablet (768px - 1024px)

```
File Display:
┌──────────────────────────┐
│ 📄 file.pdf        ✕     │
│ 1,200.5 KB               │
└──────────────────────────┘
(Wider, same layout)
```

### Desktop (> 1024px)

```
File Display:
┌──────────────────────────────────┐
│ 📄 file.pdf            ✕ Remove  │
│ 1,200.5 KB                       │
└──────────────────────────────────┘
(Full width in input container)
```

---

## 🔄 State Transitions

### File Not Selected

```
┌─────────────────────┐
│ [📎 Attach File]    │
│                     │
│ (No file info)      │
│ (No preview)        │
│                     │
│ [Run] (disabled)    │ ← Can't run without query
└─────────────────────┘
```

### File Selected

```
┌─────────────────────────────┐
│ [📎 Attach File]             │
│                             │
│ ┌────────────────────────┐  │
│ │ 📄 document.pdf    ✕   │  │
│ │ 500 KB                 │  │
│ └────────────────────────┘  │
│                             │
│ [Image preview] (if image)  │
│                             │
│ [Run] (enabled/disabled)    │
└─────────────────────────────┘
```

### File Removed

```
┌─────────────────────┐
│ [📎 Attach File]    │
│                     │
│ (No file info)      │
│ (No preview)        │
│                     │
│ [Run] (disabled)    │
└─────────────────────┘
```

---

## ✨ Animation Effects

### Button Hover
```
Smooth Color Transition:
  From: border-slate-700, text-slate-500
  To:   border-cyan-500/40, text-cyan-400
  Duration: transition-all (instant, no delay)
```

### File Display Appearance
```
When file is selected:
  Fade in smoothly
  Takes ~200ms to appear
  No jumping/jerking
```

### Preview Image
```
When image selected:
  Preview loads asynchronously
  Smooth fade-in
  Maintains aspect ratio (object-cover)
```

---

## 🎯 User Experience Flow

```
1. User sees empty input
   ↓
   "📎 Attach File" button visible

2. User clicks button
   ↓
   File dialog opens

3. User selects file
   ↓
   File displays in input area
   (+ Preview if image)

4. User types query
   ↓
   Both query and file content ready

5. User clicks "Run"
   ↓
   Orchestrator gets combined input

6. Results appear in Output
   ↓
   File content may be referenced
```

---

## 🎓 Example Views

### View 1: Analyzing Architecture Diagram

```
Input:
┌────────────────────────────────────┐
│ Analyze this architecture and      │
│ suggest improvements               │
│                                    │
│ [📎 Attach] [Run]                 │
│                                    │
│ ┌──────────────────────────────┐  │
│ │ 📄 system_design.png    ✕    │  │
│ │ 2.1 MB                       │  │
│ └──────────────────────────────┘  │
│                                    │
│ ┌──────────────────────────────┐  │
│ │     [Architecture diagram     │  │
│ │      preview showing          │  │
│ │      microservices layout]    │  │
│ └──────────────────────────────┘  │
└────────────────────────────────────┘
```

### View 2: Analyzing CSV Data

```
Input:
┌────────────────────────────────────┐
│ Analyze quarterly data and         │
│ identify trends                    │
│                                    │
│ [📎 Attach] [Run]                 │
│                                    │
│ ┌──────────────────────────────┐  │
│ │ 📄 q4_2024_data.csv     ✕    │  │
│ │ 145 KB                       │  │
│ └──────────────────────────────┘  │
│                                    │
│ (No preview for CSV)               │
└────────────────────────────────────┘
```

### View 3: Reviewing Code

```
Input:
┌────────────────────────────────────┐
│ Review for security and            │
│ performance issues                 │
│                                    │
│ [📎 Attach] [Run]                 │
│                                    │
│ ┌──────────────────────────────┐  │
│ │ 📄 application.py       ✕    │  │
│ │ 85.3 KB                      │  │
│ └──────────────────────────────┘  │
│                                    │
│ (No preview for code)              │
└────────────────────────────────────┘
```

---

**Visual Guide Complete** ✅  
**Ready to Use**: Yes  
**Build Status**: Successful

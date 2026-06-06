// Client-side only — all heavy imports are dynamic to avoid SSR

type Token =
  | { type: 'h1' | 'h2' | 'h3' | 'h4'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullet'; items: string[] }
  | { type: 'ordered'; items: string[] }
  | { type: 'hr' }
  | { type: 'blank' }
  | { type: 'code'; lines: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

function tokenize(content: string): Token[] {
  const lines = content.split('\n');
  const tokens: Token[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('# ')) { tokens.push({ type: 'h1', text: stripInline(line.slice(2).trim()) }); }
    else if (line.startsWith('## ')) { tokens.push({ type: 'h2', text: stripInline(line.slice(3).trim()) }); }
    else if (line.startsWith('### ')) { tokens.push({ type: 'h3', text: stripInline(line.slice(4).trim()) }); }
    else if (line.startsWith('#### ')) { tokens.push({ type: 'h4', text: stripInline(line.slice(5).trim()) }); }
    else if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) { items.push(stripInline(lines[i].slice(2))); i++; }
      tokens.push({ type: 'bullet', items }); continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) { items.push(stripInline(lines[i].replace(/^\d+\.\s/, ''))); i++; }
      tokens.push({ type: 'ordered', items }); continue;
    } else if (/^-{3,}$/.test(line.trim()) || /^={3,}$/.test(line.trim())) { tokens.push({ type: 'hr' }); }
    else if (line.startsWith('```')) {
      const codeLines: string[] = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) { codeLines.push(lines[i]); i++; }
      tokens.push({ type: 'code', lines: codeLines });
    } else if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) { tableLines.push(lines[i]); i++; }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').filter(Boolean).map(h => stripInline(h.trim()));
        const rows = tableLines.slice(2).filter(r => !/^\|[\s:|-]+\|$/.test(r))
          .map(row => row.split('|').filter(Boolean).map(c => stripInline(c.trim())));
        tokens.push({ type: 'table', headers, rows });
      }
      continue;
    } else if (line.startsWith('> ')) { tokens.push({ type: 'blockquote', text: stripInline(line.slice(2)) }); }
    else if (line.trim() === '') { tokens.push({ type: 'blank' }); }
    else { tokens.push({ type: 'paragraph', text: line }); }
    i++;
  }
  return tokens;
}

function stripInline(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1').replace(/~~(.+?)~~/g, '$1').replace(/__(.+?)__/g, '$1');
}

export async function downloadAsPdf(content: string, title: string, filename: string): Promise<void> {
  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const PW = doc.internal.pageSize.getWidth(), PH = doc.internal.pageSize.getHeight();
  const ML = 56, MT = 68, MB = 56, CW = PW - ML * 2;
  let y = MT;
  const newPage = () => { doc.addPage(); y = MT; };
  const guard = (n: number) => { if (y + n > PH - MB) newPage(); };

  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(234, 88, 12);
  doc.text(title, ML, y);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(150, 150, 160);
  doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), PW - ML, y, { align: 'right' });
  y += 5; doc.setDrawColor(200, 210, 230); doc.setLineWidth(0.5); doc.line(ML, y, PW - ML, y); y += 18;

  for (const tok of tokenize(content)) {
    switch (tok.type) {
      case 'h1': { guard(42); y += 14; doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(194, 65, 12); const ls = doc.splitTextToSize(tok.text, CW); doc.text(ls, ML, y); y += ls.length * 22 + 5; doc.setDrawColor(190, 210, 240); doc.setLineWidth(0.5); doc.line(ML, y, PW - ML, y); y += 10; break; }
      case 'h2': { guard(30); y += 10; doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(234, 88, 12); const ls = doc.splitTextToSize(tok.text, CW); doc.text(ls, ML, y); y += ls.length * 18 + 4; break; }
      case 'h3': { guard(24); y += 8; doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(55, 65, 81); const ls = doc.splitTextToSize(tok.text, CW); doc.text(ls, ML, y); y += ls.length * 16 + 3; break; }
      case 'h4': { guard(20); y += 5; doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(75, 85, 99); const ls = doc.splitTextToSize(tok.text, CW); doc.text(ls, ML, y); y += ls.length * 15 + 2; break; }
      case 'paragraph': { doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(17, 24, 39); const ls = doc.splitTextToSize(tok.text, CW); guard(ls.length * 14 + 4); doc.text(ls, ML, y); y += ls.length * 14 + 3; break; }
      case 'bullet': { doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(17, 24, 39); for (const item of tok.items) { const ls = doc.splitTextToSize('•  ' + item, CW - 16); guard(ls.length * 14 + 2); doc.text(ls, ML + 10, y); y += ls.length * 14 + 2; } y += 3; break; }
      case 'ordered': { doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(17, 24, 39); tok.items.forEach((item, idx) => { const ls = doc.splitTextToSize(`${idx + 1}.  ${item}`, CW - 20); guard(ls.length * 14 + 2); doc.text(ls, ML + 12, y); y += ls.length * 14 + 2; }); y += 3; break; }
      case 'hr': { y += 8; guard(4); doc.setDrawColor(200, 210, 220); doc.setLineWidth(0.4); doc.line(ML, y, PW - ML, y); y += 12; break; }
      case 'blank': { y += 6; break; }
      case 'blockquote': { doc.setFont('helvetica', 'italic'); doc.setFontSize(10); doc.setTextColor(107, 114, 128); const ls = doc.splitTextToSize(tok.text, CW - 22); guard(ls.length * 14 + 6); doc.setDrawColor(234, 88, 12); doc.setLineWidth(2.5); doc.line(ML, y - 10, ML, y + ls.length * 14 - 2); doc.setLineWidth(0.5); doc.text(ls, ML + 18, y); y += ls.length * 14 + 6; break; }
      case 'code': { const text = tok.lines.join('\n'); doc.setFont('courier', 'normal'); doc.setFontSize(8.5); const ls = doc.splitTextToSize(text, CW - 20); const bH = ls.length * 12 + 18; guard(bH + 4); doc.setFillColor(15, 23, 42); doc.roundedRect(ML, y - 8, CW, bH, 3, 3, 'F'); doc.setTextColor(74, 222, 128); doc.text(ls, ML + 10, y + 4); y += bH + 6; break; }
      case 'table': {
        const cols = tok.headers.length; if (cols === 0) break;
        const colW = CW / cols, CELL = 20, PAD = 5;
        guard(CELL + 2); doc.setFillColor(124, 45, 18); doc.rect(ML, y, CW, CELL, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(255, 255, 255);
        tok.headers.forEach((h, i) => { const t = doc.splitTextToSize(h, colW - PAD * 2); doc.text(t[0] || h, ML + i * colW + PAD, y + 14); });
        doc.setDrawColor(255, 255, 255); doc.setLineWidth(0.3);
        for (let c = 1; c < cols; c++) doc.line(ML + c * colW, y, ML + c * colW, y + CELL);
        doc.rect(ML, y, CW, CELL, 'S'); y += CELL;
        tok.rows.forEach((row, ri) => {
          guard(CELL + 2); ri % 2 === 0 ? doc.setFillColor(255, 247, 237) : doc.setFillColor(255, 255, 255);
          doc.rect(ML, y, CW, CELL, 'F'); doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(17, 24, 39);
          row.slice(0, cols).forEach((cell, ci) => { const t = doc.splitTextToSize(cell, colW - PAD * 2); doc.text(t[0] || cell, ML + ci * colW + PAD, y + 14); });
          doc.setDrawColor(180, 195, 220); doc.setLineWidth(0.3);
          for (let c = 1; c < cols; c++) doc.line(ML + c * colW, y, ML + c * colW, y + CELL);
          doc.rect(ML, y, CW, CELL, 'S'); y += CELL;
        }); y += 8; break;
      }
    }
  }
  const total = (doc as unknown as { internal: { pages: unknown[] } }).internal.pages.length - 1;
  for (let p = 1; p <= total; p++) { doc.setPage(p); doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(160, 160, 175); doc.text(`Page ${p} of ${total}`, PW / 2, PH - 28, { align: 'center' }); }
  doc.save(filename);
}

export async function downloadAsWord(content: string, title: string, filename: string): Promise<void> {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType } = await import('docx');
  type DocChild = InstanceType<typeof Paragraph> | InstanceType<typeof Table>;
  function parseInline(text: string): InstanceType<typeof TextRun>[] {
    const runs: InstanceType<typeof TextRun>[] = []; const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g; let last = 0, m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) { if (m.index > last) runs.push(new TextRun({ text: text.slice(last, m.index) })); if (m[2]) runs.push(new TextRun({ text: m[2], bold: true })); else if (m[3]) runs.push(new TextRun({ text: m[3], italics: true })); else if (m[4]) runs.push(new TextRun({ text: m[4], font: 'Courier New', size: 18 })); last = m.index + m[0].length; }
    if (last < text.length) runs.push(new TextRun({ text: text.slice(last) })); return runs.length ? runs : [new TextRun({ text })];
  }
  const children: DocChild[] = [];
  children.push(new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 32, color: 'C2410C' })], spacing: { after: 160 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), size: 18, color: '6B7280' })], spacing: { after: 400 } }));
  for (const tok of tokenize(content)) {
    switch (tok.type) {
      case 'h1': children.push(new Paragraph({ text: tok.text, heading: HeadingLevel.HEADING_1, spacing: { before: 480, after: 160 } })); break;
      case 'h2': children.push(new Paragraph({ text: tok.text, heading: HeadingLevel.HEADING_2, spacing: { before: 360, after: 120 } })); break;
      case 'h3': children.push(new Paragraph({ text: tok.text, heading: HeadingLevel.HEADING_3, spacing: { before: 280, after: 80 } })); break;
      case 'h4': children.push(new Paragraph({ text: tok.text, heading: HeadingLevel.HEADING_4, spacing: { before: 200, after: 60 } })); break;
      case 'paragraph': children.push(new Paragraph({ children: parseInline(tok.text), spacing: { after: 100 } })); break;
      case 'bullet': tok.items.forEach(item => children.push(new Paragraph({ children: parseInline(item), bullet: { level: 0 }, spacing: { after: 60 } }))); break;
      case 'ordered': tok.items.forEach((item, idx) => children.push(new Paragraph({ children: [new TextRun({ text: `${idx + 1}.  `, bold: true }), ...parseInline(item)], indent: { left: 360 }, spacing: { after: 60 } }))); break;
      case 'hr': children.push(new Paragraph({ text: '', border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'CBD5E1', space: 1 } }, spacing: { before: 160, after: 160 } })); break;
      case 'blank': children.push(new Paragraph({ text: '', spacing: { after: 80 } })); break;
      case 'blockquote': children.push(new Paragraph({ children: parseInline(tok.text), indent: { left: 720 }, border: { left: { style: BorderStyle.SINGLE, size: 16, color: 'EA580C', space: 4 } }, spacing: { after: 100 } })); break;
      case 'code': tok.lines.forEach((line, idx) => children.push(new Paragraph({ children: [new TextRun({ text: line || ' ', font: 'Courier New', size: 18, color: '065F46' })], indent: { left: 720, right: 720 }, spacing: { before: idx === 0 ? 120 : 0, after: idx === tok.lines.length - 1 ? 120 : 0 } }))); break;
      case 'table': {
        const cols = tok.headers.length; if (cols === 0) break; const pct = Math.floor(100 / cols);
        const headerRow = new TableRow({ tableHeader: true, children: tok.headers.map(h => new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: 'FFFFFF', size: 18 })], alignment: AlignmentType.LEFT })], shading: { type: ShadingType.SOLID, fill: '7C2D12' }, width: { size: pct, type: WidthType.PERCENTAGE } })) });
        const dataRows = tok.rows.map((row, ri) => new TableRow({ children: row.slice(0, cols).map(cell => new TableCell({ children: [new Paragraph({ children: parseInline(cell) })], shading: ri % 2 === 0 ? { type: ShadingType.SOLID, fill: 'FFF7ED' } : { type: ShadingType.CLEAR, fill: 'FFFFFF' }, width: { size: pct, type: WidthType.PERCENTAGE } })) }));
        children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, ...dataRows], borders: { top: { style: BorderStyle.SINGLE, size: 4, color: 'FED7AA' }, bottom: { style: BorderStyle.SINGLE, size: 4, color: 'FED7AA' }, left: { style: BorderStyle.SINGLE, size: 4, color: 'FED7AA' }, right: { style: BorderStyle.SINGLE, size: 4, color: 'FED7AA' }, insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'FFEDD5' }, insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'FFEDD5' } } }));
        children.push(new Paragraph({ text: '', spacing: { after: 120 } })); break;
      }
    }
  }
  const wordDoc = new Document({ creator: 'EFM Agentic AI', title, sections: [{ properties: {}, children }] });
  const blob = await Packer.toBlob(wordDoc); const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}

import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx';

export interface ExportSession {
  title: string;
  recording?: string;
  presentation?: string;
  labs?: string;
}

export interface ExportDay {
  label: string;
  sessions: ExportSession[];
}

export interface ExportData {
  days: ExportDay[];
  unscheduled: string[];
}

const BRAND = '0078D4';

function link(text: string, url: string): ExternalHyperlink {
  return new ExternalHyperlink({
    children: [new TextRun({ text, style: 'Hyperlink' })],
    link: url,
  });
}

function sessionLinkParagraph(session: ExportSession): Paragraph {
  const children: (TextRun | ExternalHyperlink)[] = [];
  const push = (label: string, url?: string) => {
    if (!url) return;
    if (children.length > 0) children.push(new TextRun({ text: '   •   ', color: '999999' }));
    children.push(link(label, url));
  };
  push('▶ Recording', session.recording);
  push('◧ Presentation', session.presentation);
  if (children.length === 0) {
    children.push(new TextRun({ text: 'No linked materials', italics: true, color: '999999' }));
  }
  return new Paragraph({ spacing: { after: 120 }, indent: { left: 360 }, children });
}

function buildDoc(data: ExportData): Document {
  const body: Paragraph[] = [];

  body.push(
    new Paragraph({
      heading: HeadingLevel.TITLE,
      children: [new TextRun({ text: 'Camp AIR — Engineering Agenda', color: BRAND, bold: true })],
    })
  );
  body.push(
    new Paragraph({
      spacing: { after: 240 },
      children: [
        new TextRun({
          text: `Generated ${new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}`,
          italics: true,
          color: '666666',
        }),
      ],
    })
  );

  data.days.forEach((day, idx) => {
    body.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 80 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'DEECF9', space: 2 } },
        children: [new TextRun({ text: day.label, bold: true, color: BRAND })],
      })
    );

    // Recap marker (every day except the first)
    if (idx > 0) {
      body.push(
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: '🔁 Recap of Previous Day', bold: true, color: '8661C5' }),
            new TextRun({ text: ' — discuss yesterday before starting', italics: true, color: '7A6BA0' }),
          ],
        })
      );
    }

    if (day.sessions.length === 0) {
      body.push(
        new Paragraph({
          spacing: { after: 120 },
          children: [new TextRun({ text: 'No sessions scheduled', italics: true, color: '999999' })],
        })
      );
    } else {
      // Morning
      body.push(
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: 'Morning (AM)', bold: true })],
        })
      );
      for (const [i, s] of day.sessions.entries()) {
        body.push(
          new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 20 },
            children: [new TextRun({ text: s.title, bold: true })],
          })
        );
        body.push(sessionLinkParagraph(s));
        if (i === 0 && day.sessions.length > 1) {
          body.push(
            new Paragraph({
              spacing: { before: 20, after: 20 },
              children: [
                new TextRun({ text: '☕ 15-Minute Break', bold: true, color: '8661C5' }),
                new TextRun({ text: ' — short break between sessions', italics: true, color: '7A6BA0' }),
              ],
            })
          );
        }
      }

      // Lunch
      body.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 40, after: 40 },
          children: [new TextRun({ text: '—  🍽  Lunch  —', color: '888888' })],
        })
      );

      // Afternoon — Practice Labs
      body.push(
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: 'Afternoon (PM) — Practice Labs', bold: true })],
        })
      );
      for (const s of day.sessions) {
        const children: (TextRun | ExternalHyperlink)[] = [new TextRun({ text: `${s.title} — `, bold: true })];
        if (s.labs) {
          children.push(link('Practice Labs', s.labs));
        } else {
          children.push(new TextRun({ text: 'No lab packet', italics: true, color: '999999' }));
        }
        body.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 40 }, children }));
      }
    }

    // Practice Shareout marker (end of every day)
    body.push(
      new Paragraph({
        spacing: { before: 80, after: 80 },
        children: [
          new TextRun({ text: '📣 Practice Shareout', bold: true, color: '8661C5' }),
          new TextRun({ text: ' — share the outputs of your practice labs', italics: true, color: '7A6BA0' }),
        ],
      })
    );
  });

  if (data.unscheduled.length > 0) {
    body.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 280, after: 80 },
        children: [new TextRun({ text: 'Unscheduled Sessions', bold: true, color: '888888' })],
      })
    );
    for (const title of data.unscheduled) {
      body.push(
        new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: title })] })
      );
    }
  }

  return new Document({
    creator: 'Camp AIR Deliverables Portal',
    title: 'Camp AIR Engineering Agenda',
    sections: [{ children: body }],
  });
}

export async function exportAgendaDocx(data: ExportData): Promise<void> {
  const doc = buildDoc(data);
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Camp-AIR-Engineering-Agenda.docx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

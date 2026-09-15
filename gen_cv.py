#!/usr/bin/env python3
"""Generate a clean, professional CV PDF for Abdelali AIT-HAMMI."""

import os

def gen_cv():
    buf = bytearray()
    offsets = []

    def w(s):
        if isinstance(s, str):
            buf.extend(s.encode('latin-1'))
        else:
            buf.extend(s)

    def start_obj():
        offsets.append(len(buf))
        w(f"{len(offsets)} 0 obj\n")

    def end_obj():
        w("endobj\n\n")

    # Header
    w("%PDF-1.4\n%\xe2\xe3\xcf\xd3\n\n")

    # --- Page dimensions (A4) ---
    W, H = 595.28, 841.89
    MARGIN_L, MARGIN_R, MARGIN_T, MARGIN_B = 56, 56, 56, 50
    USABLE_W = W - MARGIN_L - MARGIN_R

    # --- Helvetica with WinAnsiEncoding (supports é à è ê ë î ï ô ù û ç ñ) ---
    start_obj()
    w("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\n")
    end_obj()

    # --- Helvetica-Bold ---
    start_obj()
    w("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\n")
    end_obj()

    FONT_R = "F1"
    FONT_B = "F2"

    # --- Build stream content ---
    stream_lines = []

    # Colours (RGB 0-1)
    # Main accent: sand-400 ≈ #ffab3d => (1,0.67,0.24)
    # Dark bg: ink-950 ≈ #07070b => (0.027,0.027,0.043)
    # Light text: ink-200 ≈ #c9c9d6 => (0.79,0.79,0.84)
    # Muted: ink-400 ≈ #8b8ba3 => (0.55,0.55,0.64)

    def rgb(hex_color):
        h = hex_color.lstrip('#')
        return tuple(int(h[i:i+2], 16)/255.0 for i in (0,2,4))

    sand = rgb('#ffab3d')
    ink2 = rgb('#c9c9d6')
    ink4 = rgb('#8b8ba3')
    ink8 = rgb('#17171f')
    white = (1,1,1)
    # Background
    bg = rgb('#07070b')

    y = H - MARGIN_T

    def set_font(font, size):
        stream_lines.append(f"/{font} {size} Tf")

    def set_color(color, selector='rg'):
        stream_lines.append(f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} {selector}")

    def moveto(x, yy):
        stream_lines.append(f"{x:.1f} {yy:.1f} Td")

    def show(text):
        stream_lines.append(f"({text}) Tj")

    def newline(dy):
        stream_lines.append(f"0 {dy:.1f} Td")

    def begin_text():
        stream_lines.append("BT")

    def end_text():
        stream_lines.append("ET")

    # --- Background ---
    stream_lines.append(f"0 0 0 rg")
    stream_lines.append(f"0 0 {W:.1f} {H:.1f} re f")

    # --- Header block ---
    begin_text()
    set_color(sand)
    set_font(FONT_B, 26)
    moveto(MARGIN_L, y)
    show("Abdelali AIT-HAMMI")

    newline(-36)
    set_color(ink4)
    set_font(FONT_R, 11)
    show("Developpeur Web Full Stack  |  Kasr Khamlia, Merzouga, Maroc")

    newline(-18)
    set_color(ink2)
    set_font(FONT_R, 9)
    show("aithammiabdelali@gmail.com   |   +212 626 78 04 06   |   github.com/AlixFanaDev")

    end_text()

    y -= 90

    # --- Divider line ---
    stream_lines.append(f"{sand[0]:.3f} {sand[1]:.3f} {sand[2]:.3f} RG")
    stream_lines.append(f"0.6 w")
    stream_lines.append(f"{MARGIN_L} {y} {USABLE_W} 0 re S")
    stream_lines.append("[] 0 d")

    y -= 18

    # --- Helper: section heading ---
    def section(title):
        nonlocal y
        y -= 10
        begin_text()
        set_color(sand)
        set_font(FONT_B, 12)
        moveto(MARGIN_L, y)
        show(title.upper())
        end_text()
        y -= 20
        # thin underline
        stream_lines.append(f"{sand[0]:.3f} {sand[1]:.3f} {sand[2]:.3f} RG")
        stream_lines.append(f"0.35 w")
        stream_lines.append(f"{MARGIN_L} {y} {USABLE_W} 0 re S")
        stream_lines.append("[] 0 d")
        y -= 8

    # --- Helper: body text line ---
    def body(text, bold=False, size=9.5, indent=0):
        nonlocal y
        begin_text()
        set_color(ink2)
        set_font(FONT_B if bold else FONT_R, size)
        moveto(MARGIN_L + indent, y)
        show(text)
        end_text()
        y -= 15

    # --- Helper: bullet ---
    def bullet(text, indent=12):
        nonlocal y
        begin_text()
        set_color(sand)
        set_font(FONT_R, 9.5)
        moveto(MARGIN_L + indent, y)
        show("\x95")
        set_color(ink2)
        set_font(FONT_R, 9.5)
        moveto(8, 0)
        show(text)
        end_text()
        y -= 15

    # --- Helper: subtitle line ---
    def subtitle(text):
        nonlocal y
        begin_text()
        set_color(ink4)
        set_font(FONT_R, 9)
        moveto(MARGIN_L, y)
        show(text)
        end_text()
        y -= 14

    # --- Helper: tag chips ---
    def tags(items):
        nonlocal y
        x = MARGIN_L
        begin_text()
        set_color(ink4)
        set_font(FONT_R, 8.5)
        for item in items:
            # draw as simple text separated by dots
            moveto(x, y)
            show(item)
            # advance x — approximate
            x += len(item) * 5.5 + 20
            if x > W - MARGIN_R - 50:
                end_text()
                y -= 14
                x = MARGIN_L
                begin_text()
                set_color(ink4)
                set_font(FONT_R, 8.5)
        end_text()
        y -= 18

    # ---- PROFILE / SUMMARY ----
    section("Profil")
    body("Technicien specialise en developpement digital, oriente Web Full "
         "Stack, avec une experience pratique en creation de sites et "
         "plateformes web, bases de donnees, debogage et gestion de ressources "
         "numeriques. Je concois des interfaces soignees et des back-ends "
         "fiables, du prototype Figma jusqu'a la mise en production.")

    # ---- EXPERIENCE ----
    section("Experience")
    body("Stagiaire Developpement Web", bold=True, size=10)
    subtitle("Aventuras con Essencia  |  Kasr Khamlia, Merzouga  |  Mars 2026")
    y -= 2
    bullet("Creation de sites web et de plateformes sur mesure.")
    bullet("Manipulation et gestion des bases de donnees.")
    bullet("Gestion et organisation des ressources numeriques.")
    bullet("Utilisation avancee des logiciels bureautiques.")
    bullet("Debogage et correction de codes sources.")
    tags(['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Figma'])

    # ---- EDUCATION ----
    section("Formation")
    body("Technicien Specialise en Developpement Digital - option Full Stack", bold=True, size=10)
    subtitle("ISTA Errachidia  |  Juin 2026  |  En cours")
    y -= 4
    body("Baccalaureat scientifique - Sciences de la Vie et de la Terre", bold=True, size=10)
    subtitle("Lycée Chahid My Taib Ben My Lkbir, Jorf  |  Juin 2021")

    # ---- SKILLS ----
    section("Competences")
    body("Frontend", bold=True, indent=0)
    tags(['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'])
    body("Backend", bold=True, indent=0)
    tags(['PHP', 'MySQL', 'Python', 'MongoDB', 'Laravel'])
    body("Outils & Design", bold=True, indent=0)
    tags(['WordPress', 'Figma', 'Lunacy', 'Linux', 'Google Workspace'])

    # ---- LANGUAGES ----
    section("Langues")
    y -= 2
    langs = [
        ("Arabe", "Courant (natif)", 5),
        ("Francais", "Courant", 5),
        ("Anglais", "Courant", 5),
        ("Espagnol", "Intermediaire", 3),
        ("Tamazight", "Intermediaire", 3),
    ]
    for name, level, score in langs:
        begin_text()
        set_color(ink2)
        set_font(FONT_R, 9.5)
        moveto(MARGIN_L, y)
        show(f"{name}")
        set_color(ink4)
        moveto(140, 0)
        show(level)
        # draw score dots
        set_color(sand)
        set_font(FONT_R, 9)
        moveto(310, 0)
        show("\x95" * score)
        set_color(ink8)
        moveto(score * 8, 0)
        show("\x95" * (5 - score))
        end_text()
        y -= 16

    # --- Build stream ---
    stream_content = " ".join(stream_lines).encode('latin-1')

    # --- 1 0 obj (Catalog) ---
    start_obj()
    w("<< /Type /Catalog /Pages 2 0 R >>\n")
    end_obj()

    # --- 2 0 obj (Pages) ---
    start_obj()
    w("<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n")
    end_obj()

    # --- 3 0 obj (Page) ---
    start_obj()
    w(f"<< /Type /Page /Parent 2 0 R "
      f"/MediaBox [0 0 {W:.2f} {H:.2f}] "
      f"/Contents 4 0 R "
      f"/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\n")
    end_obj()

    # --- 4 0 obj (Stream) ---
    start_obj()
    w(f"<< /Length {len(stream_content)} >>\n")
    w("stream\n")
    stream_start = len(buf)
    w(stream_content)
    w("\nendstream\n")
    end_obj()

    # --- xref ---
    xref_pos = len(buf)
    w("xref\n")
    total = len(offsets) + 1  # +1 for trailer root obj 0
    w(f"0 {total}\n")
    w("0000000000 65535 f \n")
    for off in offsets:
        w(f"{off:010d} 00000 n \n")

    # --- trailer ---
    w("trailer\n")
    w(f"<< /Size {total} /Root 1 0 R >>\n")
    w("startxref\n")
    w(f"{xref_pos}\n")
    w("%%EOF\n")

    return bytes(buf)


if __name__ == "__main__":
    pdf = gen_cv()
    out = os.path.join(os.path.dirname(__file__), "public", "cv-abdelali-ait-hammi.pdf")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "wb") as f:
        f.write(pdf)
    print(f"CV PDF written to {out} ({len(pdf)} bytes)")

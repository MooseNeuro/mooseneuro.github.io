#!/usr/bin/env python3
"""
Generate RST reference files for all MOOSE classes from moose.doc().
Run from the Sphinx docs/source directory:
    python generate_references.py
Output goes to ../../references/
"""

import io
import os
import re
import shutil
import sys

import moose

OUT_DIR = os.path.join(os.path.dirname(__file__), 'references')
os.makedirs(OUT_DIR, exist_ok=True)


def get_doc(name):
    """Capture moose.doc() output as a string."""
    old_stdout = sys.stdout
    sys.stdout = buf = io.StringIO()
    try:
        moose.doc(name, paged=False)
    except Exception:
        pass
    finally:
        sys.stdout = old_stdout
    return buf.getvalue().strip()


def escape_rst_text(text):
    """Escape RST special sequences in plain text from moose.doc().

    Fixes:
    - Trailing underscores on words (e.g. baseDt_, dt_) parsed as hyperlink refs
    - Underscore sequences before non-word chars (e.g. |_________|) parsed as substitutions
    """
    # Escape _ when preceded by a word char and followed by a non-word char or end of string
    return re.sub(r'(\w)_(?=\W|$)', r'\1\_', text)


def doc_to_rst(classname, raw):
    """Convert moose.doc() plain-text output to RST."""
    lines = raw.splitlines()
    rst = []

    # Title
    title = classname
    rst.append(title)
    rst.append('=' * len(title))
    rst.append('')

    # Skip the first "class ClassName" line
    start = 0
    if lines and lines[0].strip().startswith('class '):
        start = 1

    i = start
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip raw separator lines from moose.doc() output (e.g. "======", "------")
        if stripped and all(c in '=-~#^' for c in stripped):
            i += 1
            continue

        # Section headers (e.g. "Attributes:", "Value Attributes:", "Source messages:")
        if stripped.endswith(':') and stripped == stripped.strip() and len(stripped) < 60:
            rst.append('')
            rst.append(stripped)
            rst.append('-' * len(stripped))
            rst.append('')
            i += 1
            continue

        # Field entries: "fieldName (type: ..., class: ...)"
        if stripped and '(type:' in stripped and not stripped.startswith(' '):
            field_line = stripped
            rst.append('.. describe:: ' + field_line)
            i += 1
            # Collect description lines (indented)
            desc_lines = []
            while i < len(lines) and (lines[i].startswith('  ') or lines[i].strip() == ''):
                desc = lines[i].strip()
                if desc:
                    desc_lines.append(desc)
                i += 1
            if desc_lines:
                rst.append('')
                for d in desc_lines:
                    rst.append('   ' + escape_rst_text(d))
            rst.append('')
            continue

        # Regular text (class description, author, etc.)
        if stripped:
            escaped = escape_rst_text(stripped)
            rst.append(escaped)
            i += 1
            # If line ends with ::, indent following content as a literal block
            if escaped.endswith('::'):
                # Skip blank lines between :: and the block content
                while i < len(lines) and not lines[i].strip():
                    i += 1
                # Emit indented literal block until next blank line
                rst.append('')
                while i < len(lines) and lines[i].strip():
                    rst.append('   ' + lines[i].rstrip())
                    i += 1
        else:
            rst.append('')
            i += 1

    return '\n'.join(rst)


def get_all_classes():
    """Return sorted list of all moose class names."""
    classes = []
    for name in dir(moose):
        obj = getattr(moose, name)
        if isinstance(obj, type) and not name.startswith('_'):
            classes.append(name)
    return sorted(classes)


def generate():
    classes = get_all_classes()
    generated = []
    skipped = []

    print(f"Found {len(classes)} moose classes. Generating RST files...")

    for classname in classes:
        raw = get_doc(classname)
        if not raw:
            skipped.append(classname)
            continue

        rst_content = doc_to_rst(classname, raw)
        out_path = os.path.join(OUT_DIR, classname + '.rst')
        with open(out_path, 'w') as f:
            f.write(rst_content + '\n')
        generated.append(classname)
        print(f"  wrote {classname}.rst")

    # Generate index_ref.rst
    index_path = os.path.join(OUT_DIR, 'index_ref.rst')
    with open(index_path, 'w') as f:
        f.write('References\n')
        f.write('==========\n\n')
        f.write('How to use the documentation\n')
        f.write('----------------------------\n\n')
        f.write('MOOSE documentation is split into Python documentation and builtin\n')
        f.write('documentation. The functions and classes that are only part of the\n')
        f.write('Python interface can be viewed via Python\'s builtin ``help``\n')
        f.write('function::\n\n')
        f.write('   >>> help(moose.connect)\n\n')
        f.write('The documentation built into main C++ code of MOOSE can be accessed\n')
        f.write('via the module function ``doc``::\n\n')
        f.write('   >>> moose.doc(\'Neutral\')\n\n')
        f.write('To get documentation about a particular field::\n\n')
        f.write('   >>> moose.doc(\'Neutral.childMsg\')\n\n')
        f.write('.. toctree::\n')
        f.write('   :maxdepth: 1\n')
        f.write('   :glob:\n\n')
        f.write('   moose_functions\n')
        f.write('   moose_classes\n')

    # Copy moose_functions.rst and moose_classes.rst from moose-core
    moose_core = os.environ.get('MOOSE_CORE_PATH') or os.path.join(
        os.path.dirname(__file__), '..', 'moose-core')
    moose_core_refs = os.path.join(moose_core, 'docs', 'source', 'user', 'py', 'references')
    for fname in ('moose_functions.rst', 'moose_classes.rst'):
        src = os.path.join(moose_core_refs, fname)
        dst = os.path.join(OUT_DIR, fname)
        if os.path.isfile(src):
            shutil.copy2(src, dst)
            print(f"  copied {fname} from moose-core")
        else:
            print(f"  WARNING: {fname} not found in moose-core at {src}")

    print(f"\nDone: {len(generated)} files written, {len(skipped)} skipped.")
    if skipped:
        print(f"Skipped (no doc): {skipped}")
    print(f"Index written to: {index_path}")


if __name__ == '__main__':
    generate()

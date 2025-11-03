
import csv, os, sys

"""
Usage:
  python split_csv_by_column.py input.csv column_name [output_dir]

Splits input.csv into multiple CSV files based on unique values in the given column.
Example: column 'status' -> output files: status_active.csv, status_inactive.csv
"""

if len(sys.argv) < 3:
    print(__doc__)
    sys.exit(1)

input_path = sys.argv[1]
col = sys.argv[2]
out_dir = sys.argv[3] if len(sys.argv) > 3 else "out_splits"
os.makedirs(out_dir, exist_ok=True)

with open(input_path, newline='', encoding='utf-8') as f:
    r = csv.DictReader(f)
    fieldnames = r.fieldnames or []
    if col not in fieldnames:
        raise SystemExit(f"Column '{col}' not found. Available: {fieldnames}")

    writers = {}
    files = {}
    try:
        for row in r:
            key = (row.get(col) or "EMPTY").strip().replace(" ", "_")
            if key not in writers:
                out_path = os.path.join(out_dir, f"{col}_{key}.csv")
                fo = open(out_path, "w", newline="", encoding="utf-8")
                files[key] = fo
                w = csv.DictWriter(fo, fieldnames=fieldnames)
                w.writeheader()
                writers[key] = w
            writers[key].writerow(row)
    finally:
        for fo in files.values():
            fo.close()
print(f"Done. Files written to: {os.path.abspath(out_dir)}")

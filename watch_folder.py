import time
import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import shutil

# Define paths
WATCH_FOLDER = "/Users/thomasschuyler/Downloads"
OLD_FILES_FOLDER = "/Users/thomasschuyler/Downloads/old_plot"
MACRO_FILE = "plot2_script.p2m"
OPEN_SCRIPT_PATH = "/Users/thomasschuyler/code/lines/lines/open_plot2.py"

# Ensure the old_plot folder exists
os.makedirs(OLD_FILES_FOLDER, exist_ok=True)

class MacrosFileHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.src_path.endswith(MACRO_FILE):
            print(f"New macro file detected: {event.src_path}")

            # Wait for the file to finish writing
            time.sleep(1)

            # Fix file permissions before running the script
            if fix_permissions(event.src_path):
                run_script()
                move_file(event.src_path)

def fix_permissions(file_path):
    try:
        os.chmod(file_path, 0o777)  # Make it fully accessible
        os.chown(file_path, os.getuid(), os.getgid())  # Ensure correct ownership
        subprocess.run(["xattr", "-c", file_path])  # Remove extended attributes
        print(f"✅ Fixed permissions, ownership, and attributes for {file_path}")
        return True
    except Exception as e:
        print(f"❌ Error fixing permissions: {e}")
        return False

def run_script():
    if os.path.exists(OPEN_SCRIPT_PATH):
        print(f"Executing: {OPEN_SCRIPT_PATH}")
        subprocess.run(["python3", OPEN_SCRIPT_PATH])
    else:
        print(f"❌ Error: {OPEN_SCRIPT_PATH} not found!")

def move_file(file_path):
    try:
        destination = os.path.join(OLD_FILES_FOLDER, os.path.basename(file_path))
        shutil.move(file_path, destination)
        print(f"✅ Moved {file_path} to {destination}")
    except Exception as e:
        print(f"❌ Error moving file: {e}")

if __name__ == "__main__":
    print(f"Watching for new {MACRO_FILE} files in {WATCH_FOLDER}...")
    event_handler = MacrosFileHandler()
    observer = Observer()
    observer.schedule(event_handler, WATCH_FOLDER, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

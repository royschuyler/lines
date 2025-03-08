import time
import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

WATCH_FOLDER = "/Users/thomasschuyler/Downloads"
MACRO_FILE = "plot2_script.p2m"
OPEN_SCRIPT_PATH = "/Users/thomasschuyler/code/lines/lines/open_plot2.py"

class MacrosFileHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.src_path.endswith(MACRO_FILE):
            print(f"New macro file detected: {event.src_path}")
            # Wait a moment to ensure the file is fully written
            time.sleep(1)
            # Change permissions to 777 automatically
            os.chmod(event.src_path, 0o777)
            print(f"✅ Permissions changed to 777 for {event.src_path}")
            run_script()

def run_script():
    print(f"Executing: {OPEN_SCRIPT_PATH}")
    subprocess.run(["python3", OPEN_SCRIPT_PATH])

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

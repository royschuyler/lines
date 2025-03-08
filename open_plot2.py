import os
import time
import subprocess

# Define file paths
DOWNLOADS_FOLDER = "/Users/thomasschuyler/Downloads"
MACROS_FILE_P2M = os.path.join(DOWNLOADS_FOLDER, "plot2_script.p2m")

# Wait for file to be downloaded
print(f"Waiting for: {MACROS_FILE_P2M}")
while not os.path.exists(MACROS_FILE_P2M):
    time.sleep(2)

# Open PLOT2 and load the macro file
print("Opening macros file in PLOT2...")

apple_script = f'''
tell application "Plot2"
    activate
    open "{MACROS_FILE_P2M}"
    delay 2
end tell

tell application "System Events"
    tell process "Plot2"
        set frontmost to true
        delay 1
        try
            click button "Execute" of window "Inspector"  -- Try by name
        on error
            click button 1 of window "Inspector"  -- If name fails, try by index
        end try
    end tell
end tell
'''

# Run AppleScript to open PLOT2 and click Execute
subprocess.run(["osascript", "-e", apple_script])

print("Macros file executed successfully in PLOT2!")

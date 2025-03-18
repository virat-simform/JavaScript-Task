import pyautogui
import math
import time

# Set the center of the circle (current mouse position)
center_x, center_y = pyautogui.position()
radius = 100  # Adjust radius for a bigger or smaller circle
speed = 0.1   # Time delay between movements (lower = faster)

angle = 0  # Start angle

while True:
    # Calculate new x and y positions using trigonometry
    x = center_x + radius * math.cos(math.radians(angle))
    y = center_y + radius * math.sin(math.radians(angle))

    # Move the mouse to the new position
    pyautogui.moveTo(x, y, duration=0.01)

    # Increase angle for the next position
    angle += 5  # Adjust step size for smoothness (lower = smoother)

    # Keep angle within 0-360 degrees
    if angle >= 360:
        angle = 0

    time.sleep(speed)  # Control the speed of movement

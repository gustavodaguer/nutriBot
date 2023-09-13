import pyttsx3
import time

def act(str):
    engine = pyttsx3.init()
    engine.say(str)
    time.sleep(3)
    engine.runAndWait()
    time.sleep(3)

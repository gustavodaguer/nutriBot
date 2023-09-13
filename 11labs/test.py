from elevenlabs import clone, generate, play, set_api_key
from elevenlabs.api import History
import os

KEY = os.environ['API_KEY']

set_api_key(KEY)

from elevenlabs import generate, play

audio = generate(
  text="Voltei",
  voice="Daniel",
  model="eleven_multilingual_v2"
)

play(audio)
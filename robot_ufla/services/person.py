from config import env
import requests
class Person:
    def __init__(self, person_url=env.ENV['PERSON_URL'], person_id=env.ENV['PERSON_ID']) -> None:
        self.person_url = person_url
        self.person_id = person_id

    def get_person(self) -> list[str]:
        response = requests.get(f'{self.person_url}/{self.person_id}')
        return response.json()
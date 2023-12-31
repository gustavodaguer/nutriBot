from config import env
import requests


class Food:
    def __init__(self, food_url=env.ENV['FOOD_URL']) -> None:
        self.food_url = food_url

    def get_foods(self) -> list[str]:
        response = requests.get(self.food_url)
        foods = response.json()

        return [food for food in foods if food['quantity'] > 0]

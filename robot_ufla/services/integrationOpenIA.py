
from datetime import datetime
from config import env
import openai


class OpenAI:
    def __init__(
        self, api_key: str = env.ENV["API_KEY"], model: str = env.ENV["MODEL"]
    ) -> None:
        openai.api_key = api_key
        self.model = model

    def prepare_healthy_food(
        self, age: int, weight: int, objective: str, foods: list[str]
    ) -> None:
        
        question = f"Monte uma refeição saudável para uma criança de {age} anos, pesando {weight} com uma dieta para {objective} comer às {datetime.now().strftime('%H:%M')}h"
        question += f"as opções são: {', '.join(foods)} Por favor, mostrar apenas as opções com as devidas quantidades."
        question += "Obs: não é necessário utilizar todas as opções na refeição"
        print(question)

        response = openai.Completion.create(
            engine=self.model, prompt=question, max_tokens=1024
        )

        return response.choices[0].text

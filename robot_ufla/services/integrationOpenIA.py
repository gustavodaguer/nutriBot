
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
    ) -> str:
        food_options = ['\n\t- ' + f"{food['quantity']}" + " " + food['unity'] + " de " + food['name'] for food in foods]
        question = f"Monte uma refeição saudável para uma criança de {age} anos, pesando {weight} gramas e com uma dieta para {objective} comer às {datetime.now().strftime('%H:%M')}h.\n"
        question += f"As opções são: {''.join(food_options)}." 
        question += "\nPor favor, mostrar apenas as opções com as devidas quantidades."
        question += "\nObs: não é necessário utilizar todas as opções na refeição"
        question += "\nObs2: Somente deve ser recomendado as comidas que estão listadas acima"
        question += "\nObs3: A resposta deve ser uma lista não ordenada com o seguinte template: '- {quantidade_em_gramas} {comida}\\n'"
        print(question)

        response = openai.Completion.create(
            engine=self.model, prompt=question, max_tokens=1024
        )
        
        return response.choices[0].text

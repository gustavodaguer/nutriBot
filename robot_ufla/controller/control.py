from view import sense, act
from services import food, integrationOpenIA, person
import json
import random


def run_robot():
    stt = sense.speech_to_text()
    print("STT = ", stt)

    with open("./model/dataset.json", "r") as file:
        dataset = json.loads(file.read())
        for word in stt:
            if word in dataset["cumprimentos"]:
                act.act(random.choice(dataset["resCumprimentos"]))
                break
            elif word in dataset["action"]:
                foods = food.Food().get_foods()
                person_response = person.Person().get_person()
                response = integrationOpenIA.OpenAI().prepare_healthy_food(person_response['age'],person_response['weight'], person_response['objective'], foods)
                print(response)
                response_to_talk = [] 
                for x in response.split('\n'):
                    for db_food in foods:
                        if db_food['name'] in x:
                            response_to_talk.append(x.replace('-',''))
                print(response_to_talk)
                if (len(response_to_talk) > 0):
                    act.act(f"Você pode comer: {','.join(response_to_talk)}")
                else:
                    act.act('Estou com dificuldades de preparar a dieta, por favor verifique se todos os alimentos disponíveis estão cadastrados no meu banco de dados!')
                break
            elif word in dataset["despedidas"]:
                act.act(random.choice(dataset["resDespedidas"]))
                break

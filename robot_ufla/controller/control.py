from view import sense, act
from services import food, integrationOpenIA, person
import json
import random


def runRobot():
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
                act.act(response)
                break
            elif word in dataset["despedidas"]:
                act.act(random.choice(dataset["resDespedidas"]))
                break

import sys
import openai

sys.path.insert(0, 'robot_ufla\model\dataset.json')

from model import dataset

openai.api_key="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"

modelo = "text-davinci-003"
pergunta = "Monte uma refeição saudável para uma criança de {} anos com uma dieta para {} comer às 16:00h, as opções são: {}, {}, {}, {}, {}, {}. Por favor, mostrar apenas as opções com as devidas quantidades. Obs: não é necessário utilizar todas as opções na refeição".format(dataset.idade[0], dataset.dieta[0], dataset.food[0], dataset.food[1], dataset.food[2], dataset.food[3], dataset.food[4], dataset.food[5], dataset.food[6])

resposta = openai.Completion.create(
            engine = modelo,
            prompt = pergunta,
            max_tokens = 1024
        )

print(resposta.choices[0].text)
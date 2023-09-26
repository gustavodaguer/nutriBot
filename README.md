# NutriBot

O NutriBot é um inovador assistente virtual desenvolvido em Python, dedicado a promover hábitos alimentares saudáveis e nutritivos para crianças. Este simpático robô digital foi projetado com um único propósito em mente: auxiliar pais e cuidadores a criar refeições equilibradas e deliciosas para seus pequenos.

## Arquitetura

A arquitetura pensada para este robô foi a arquitetura de  sentir, pensar e agir. A figura abaixo ilustra essa arquitetura:

![Arquitetura](./architecture/NutriBot.drawio.png)

### Sentir

Na parte sensorial do robô escolhemos a percepção da voz humana que é transcrita e utilizado o texto para pensar.

### Pensar 

Na parte pensativa do robô, foi criado uma identificação de palavras chaves para tomada de decisão de qual ação será feita. Caso a ação for de sugestão da dieta o robô obtém os dados de comida e da pessoa e utiliza esses dados  para obter a sugestão com o algoritmo GPT por meio da integração com a [OpenAi](https://openai.com/).
A arquitetura dessa parte foi feita de forma distríbuida para que as implementações sejam independetes.

- [Documentação de comidas](./food_info_serv/README.md)
- [Documentação de pessoas](./person_info_serv/README.md)

### Agir

Na parte de ação do robô, escolhemos uma biblioteca responsável por traduzir texto em voz humana. Dessa forma o que for decidido de fala na parte de pensar, é dito pelo robô na parte de ação.

## Rodar as APIs

```sh
docker-compose up --build
```

## Rodar o robo

- Mudar para o diretorio do robo:

```sh
cd robot_ufla
```

- Criar o arquivo `.env` na pasta `robot_ufla`

```env
MODEL='text-davinci-003'
API_KEY=''
FOOD_URL='http://localhost:3000/foods'
PERSON_URL='http://localhost:3100/persons'
PERSON_ID=''
```

- Habilitar env no linux:

```sh
python -m  venv env
source env/bin/activate
pip install -r requirements.txt
```

- Habilitar env no windows:

```sh
python -m  venv env
.\env\Scripts\activate
pip install -r requirements.txt
```

- Rodar o robo:

```sh
python main.py
```

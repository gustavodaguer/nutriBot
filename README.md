# NutriBot

## Arquitetura

![Arquitetura](./architecture/NutriBot.drawio.png)

- [Documentação de comidas](./food_info_serv/README.md)
- [Documentação de pessoas](./person_info_serv/README.md)

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

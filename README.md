# NutriBot

## Arquitetura

![Arquitetura](./architecture/NutriBot.drawio.png)

## Rodar as APIs

```sh
docker-compose up --build
```

## Rodar o robo

- Mudar para o diretorio do robo: 

```sh
cd robot_ufla
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
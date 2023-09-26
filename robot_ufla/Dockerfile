FROM ubuntu:20.04

RUN apt-get update && apt-get install -y \
  # Adicione as dependências do seu aplicativo aqui
  python3-pip \
  libasound2 \
  portaudio19-dev \
  && rm -rf /var/lib/apt/lists/*

# Copie o código do seu aplicativo para o contêiner
COPY . /app

# Defina o diretório de trabalho como /app
WORKDIR /app

# Instale as dependências Python do seu aplicativo
RUN pip3 install -r requirements.txt

# Comandos para iniciar o seu aplicativo (ajuste conforme necessário)
CMD ["python3", "main.py"]
from dotenv import dotenv_values

CONFIG_KEYS = ["API_KEY","MODEL","FOOD_URL","PERSON_URL","PERSON_ID"]

def getEnvConfig() -> dict[str,str | None]:
    _config_ = {**dotenv_values()}
    response = {}
    for key in CONFIG_KEYS:
        response[key] = _config_.get(key)
    return response

ENV = getEnvConfig()

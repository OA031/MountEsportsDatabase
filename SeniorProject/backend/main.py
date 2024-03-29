from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

from database import (fetch_one_smash, fetch_all_smash, create_smash, update_smash, remove_smash, search_player)
from model import Smash

from database import (fetch_one_rocketg, fetch_all_rocketg, create_rocketg, update_rocketg, remove_rocketg)
from model import RocketGame

from database import (fetch_one_overwatchg, fetch_all_overwatchg, create_overwatchg, update_overwatchg,
                      remove_overwatchg)
from model import OverwatchGame

from database import (fetch_one_sgames, fetch_all_sgames, create_sgames, update_sgames, remove_sgames)
from model import SmashGame

from database import (fetch_one_valorantg, fetch_all_valorantg, create_valorantg, update_valorantg, remove_valorantg)
from model import ValorantGame

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#############################################################################
# Authentication
mongodb_uri = 'mongodb+srv://dimeji:drunk@esports.clbvfws.mongodb.net/test'
port = 8000
client = MongoClient(mongodb_uri, port)
db = client["User"]


##############################################################################################
# Smash

@app.get("/api/smash")
async def get_smash():
    response = await fetch_all_smash()
    if response:
        return response
    raise HTTPException(404)


@app.get("/api/smash{Gamerstag}", response_model=Smash)
async def get_smash_by_id(id):
    response = fetch_one_smash
    if response:
        return response
    raise HTTPException(404)


@app.post("/api/smash", response_model=Smash)
async def post_smash(smash: Smash):
    response = await create_smash(smash.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/api/smash{id}", response_model=Smash)
async def put_smash(Gamerstag: str, Main: str, Esport: str, Name: str):
    response = await update_smash(Gamerstag, Main, Esport, Name)
    if response:
        return response
    raise HTTPException(404)


@app.delete("/api/smash{id}")
async def delete_smash(id):
    response = await remove_smash()
    if response:
        return "Succsess"
    raise HTTPException(404)


##############################################################################################
# Rocket League Game

@app.get("/api/rocketg")
async def get_rocketg():
    response = await fetch_all_rocketg()
    return response


@app.get("/api/rocketg{OppSchool}", response_model=RocketGame)
async def get_rocketg_by_id(id):
    response = fetch_one_rocketg
    if response:
        return response
    raise HTTPException(404)


@app.post("/api/rocketg", response_model=RocketGame)
async def post_rocketg(rocketGame: RocketGame):
    response = await create_rocketg(rocketGame.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/api/rocketg{id}", response_model=RocketGame)
async def put_rocketg(OppSchool: str, Player1: str, player2: str, Player3: str, MountScore: int, OppScore: int,
                      Result: str):
    response = await update_rocketg(OppSchool, Player1, player2, Player3, MountScore, OppScore, Result)
    if response:
        return response
    raise HTTPException(404)


@app.delete("/api/rocketg{id}")
async def delete_rocketg(id):
    response = await remove_rocketg()
    if response:
        return "Succsess"
    raise HTTPException(404)


##############################################################################################
# Smash Game

@app.get("/api/sgames")
async def get_sgames():
    response = await fetch_all_sgames()
    return response


@app.get("/api/sgames{OppSchool}", response_model=SmashGame)
async def get_sgames_by_id(id):
    response = fetch_one_sgames
    if response:
        return response
    raise HTTPException(404)


@app.post("/api/sgames", response_model=SmashGame)
async def post_sgames(smashGame: SmashGame):
    response = await create_sgames(smashGame.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/api/sgames{id}", response_model=SmashGame)
async def put_sgames(OppSchool: str, Player: str, playerCharacter: str, opponentCharacter: str, PlayerStocks: int,
                     OpponentStocks: int, Stage: str, Result: str):
    response = await update_sgames(OppSchool, Player, playerCharacter, opponentCharacter, PlayerStocks, OpponentStocks,
                                   Stage, Result)
    if response:
        return response
    raise HTTPException(404)


@app.delete("/api/sgames{id}")
async def delete_sgames(id):
    response = await remove_sgames()
    if response:
        return "Succsess"
    raise HTTPException(404)


##############################################################################################
# Valorant Game

@app.get("/api/valorantg")
async def get_valorantg():
    response = await fetch_all_valorantg()
    return response


@app.get("/api/valorantg{OppSchool}", response_model=ValorantGame)
async def get_valorantg_by_id(id):
    response = fetch_one_valorantg
    if response:
        return response
    raise HTTPException(404)


@app.post("/api/valorantg", response_model=ValorantGame)
async def post_valorantg(valorantGame: ValorantGame):
    response = await create_valorantg(valorantGame.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/api/valorantg{id}", response_model=ValorantGame)
async def put_valorantg(OppSchool: str, player1: str, player2: str, player3: str, player4: str, player5: str,
                        player1Character: str, player2Character: str,
                        player3Character: str, player4Character: str, player5Character: str, opponent1Character: str,
                        opponent2Character: str, opponent3Character: str, opponent4Character: str,
                        opponent5Character: str, MountScore: int, OpponentScore: int, map: str, Result: str):
    response = await update_valorantg(OppSchool, player1, player2, player3, player4, player5, player1Character,
                                      player2Character, player3Character, player4Character, player5Character,
                                      opponent1Character, opponent2Character, opponent3Character, opponent4Character,
                                      opponent5Character, MountScore, OpponentScore, map, Result)
    if response:
        return response
    raise HTTPException(404)


@app.delete("/api/valorantg{id}")
async def delete_valorantg(id):
    response = await remove_valorantg()
    if response:
        return "Succsess"
    raise HTTPException(404)


##############################################################################################
# Smash Game

@app.get("/api/overwatchg")
async def get_overwatchg():
    response = await fetch_all_overwatchg()
    return response


@app.get("/api/overwatchg{OppSchool}", response_model=OverwatchGame)
async def get_overwatchg_by_id(id):
    response = fetch_one_overwatchg
    if response:
        return response
    raise HTTPException(404)


@app.post("/api/overwatchg", response_model=OverwatchGame)
async def post_overwatchg(overwatchGame: OverwatchGame):
    response = await create_overwatchg(overwatchGame.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/api/overwatchg{id}", response_model=OverwatchGame)
async def put_overwatchg(OppSchool: str, player1: str, player2: str, player3: str, player4: str, player5: str,
                         player1Character: str, player2Character: str,
                         player3Character: str, player4Character: str, player5Character: str, opponent1Character: str,
                         opponent2Character: str, opponent3Character: str, opponent4Character: str,
                         opponent5Character: str, MountScore: int, OpponentScore: int, map: str, Result: str):
    response = await update_overwatchg(OppSchool, player1, player2, player3, player4, player5, player1Character,
                                       player2Character, player3Character, player4Character, player5Character,
                                       opponent1Character, opponent2Character, opponent3Character, opponent4Character,
                                       opponent5Character, MountScore, OpponentScore, map, Result)
    if response:
        return response
    raise HTTPException(404)


@app.delete("/api/overwatchg{id}")
async def delete_overwatchg(id):
    response = await remove_overwatchg()
    if response:
        return "Succsess"
    raise HTTPException(404)


# Search

@app.get("/api/search/{name}")
async def search(name):
    response = await search_player(name)
    if response:
        return response
    raise HTTPException(404)

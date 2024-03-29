from pydantic import BaseModel
from typing import Optional


class Smash(BaseModel):
    Gamerstag: str
    Name: str
    Esport: str
    Main: str
    # Game:dict[str, str, str] = None


class SmashGame(BaseModel):
    OppSchool: str
    Player: str
    PlayerCharacter: str
    OpponentCharacter: str
    PlayerStocks: float
    OpponentStocks: float
    Stage: str
    Result: str


class ValorantGame(BaseModel):
    OppSchool: str
    Player1: str
    Player2: str
    Player3: str
    Player4: str
    Player5: str
    Player1Character: str
    Player2Character: str
    Player3Character: str
    Player4Character: str
    Player5Character: str
    Opponent1Character: str
    Opponent2Character: str
    Opponent3Character: str
    Opponent4Character: str
    Opponent5Character: str
    MountScore: float
    OpponentScore: float
    Map: str
    Result: str


class OverwatchGame(BaseModel):
    OppSchool: str
    Player1: str
    Player2: str
    Player3: str
    Player4: str
    Player5: str
    Player1Character: str
    Player2Character: str
    Player3Character: str
    Player4Character: str
    Player5Character: str
    Opponent1Character: str
    Opponent2Character: str
    Opponent3Character: str
    Opponent4Character: str
    Opponent5Character: str
    MountScore: float
    OpponentScore: float
    Map: str
    Result: str


class RocketGame(BaseModel):
    OppSchool: str
    Player1: str
    Player2: str
    Player3: str
    MountScore: float
    OppScore: float
    Result: str

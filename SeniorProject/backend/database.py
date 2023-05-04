from model import Smash
from model import RocketGame
from model import SmashGame
from model import ValorantGame
from model import OverwatchGame
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://dimeji:drunk@esports.clbvfws.mongodb.net/test')

database = client.Esports

collection2 = database.Smash_Players
collection_Smash_Games = database.Smash_Games
collection8 = database.Valorant_Games
collection7 = database.Overwatch_Games
collection6 = database.Rocket_Games


##############################################################################################
# Smash
async def fetch_one_smash(Gamerstag):
    document = await collection2.find_one({"Gamerstag": Gamerstag})
    return document


async def fetch_all_smash():
    smashes = []
    cursor = collection2.find({})
    async for document in cursor:
        smashes.append(Smash(**document))
    return smashes


async def create_smash(smash):
    document = smash
    result = await collection2.insert_one(document)
    return document


async def update_smash(Gamerstag, Main, Name, Esport):
    await collection2.update_one({"Gamerstag": Gamerstag}, {"$set": {"Main": Main}, "Esport": Esport, "Name": Name})
    document = await collection2.find_one({"Gamerstag": Gamerstag})
    return True


async def remove_smash(Gamerstag):
    await collection2.delete_one({"Gamerstag": Gamerstag})
    return True


##############################################################################################
# Rocket Game
async def fetch_one_rocketg(OppSchool):
    document = await collection6.find_one({"OppSchool": OppSchool})
    return document


async def fetch_all_rocketg():
    rockg = []
    cursor = collection6.find({})
    async for document in cursor:
        rockg.append(RocketGame(**document))
    return rockg


async def create_rocketg(rocketga):
    document = rocketga
    result = await collection6.insert_one(document)
    return document


async def update_rocketg(OppSchool, Player1, player2, Player3, MountScore, OppScore, Result):
    await collection6.update_one({"OppSchool": OppSchool},
                                 {"$set": {"Player1": Player1}, "Name": player2, "Player3": Player3,
                                  "MountScore": MountScore, "OppScore": OppScore, "Result": Result})
    document = await collection6.find_one({"OppSchool": OppSchool})
    return True


async def remove_rocketg(OppSchool):
    await collection6.delete_one({"OppSchool": OppSchool})
    return True


##############################################################################################
# Smash Game
async def fetch_one_sgames(OppSchool):
    document = await collection_Smash_Games.find_one({"OppSchool": OppSchool})
    return document


async def fetch_all_sgames():
    smash_games = []
    try:
        cursor = collection_Smash_Games.find({})
        async for document in cursor:
            smash_games.append(SmashGame(**document))
    except Exception as e:
        print(e)
    return smash_games


async def create_sgames(sgames):
    document = sgames
    result = await collection_Smash_Games.insert_one(document)
    return document


async def update_sgames(OppSchool, Player, playerCharacter, OpponentCharacter, MountStocks, OpponentStocks, Result):
    await collection_Smash_Games.update_one({"OppSchool": OppSchool},
                                            {"$set": {"Player": Player}, "OpponentCharacter": OpponentCharacter,
                                             "playerCharacter": playerCharacter, "MountStocks": MountStocks,
                                             "OpponentStocks": OpponentStocks, "Result": Result})
    document = await collection_Smash_Games.find_one({"OppSchool": OppSchool})
    return True


async def remove_sgames(OppSchool):
    await collection_Smash_Games.delete_one({"OppSchool": OppSchool})
    return True


##############################################################################################
# Valorant Game
async def fetch_one_valorantg(OppSchool):
    document = await collection8.find_one({"OppSchool": OppSchool})
    return document


async def fetch_all_valorantg():
    valg = []
    cursor = collection8.find({})
    async for document in cursor:
        valg.append(ValorantGame(**document))
    return valg


async def create_valorantg(valorantga):
    document = valorantga
    result = await collection8.insert_one(document)
    return document


async def update_valorantg(OppSchool, player1, player2, player3, player4, player5, player1Character, player2Character,
                           player3Character, player4Character, player5Character, opponent1Character, opponent2Character,
                           opponent3Character, opponent4Character, opponent5Character, MountScore, OppScore, Result):
    await collection8.update_one({"OppSchool": OppSchool},
                                 {"$set": {"player1": player1}, "player2": player2, "player3": player3,
                                  "player4": player4, "player5": player5, "Player1Character": player1Character,
                                  "player2Character": player2Character, "player3Character": player3Character,
                                  "player4Character": player4Character, "player5Character": player5Character,
                                  "opponent1Character": opponent1Character, "opponent2Character": opponent2Character,
                                  "opponent3Character": opponent3Character, "opponent4Character": opponent4Character,
                                  "opponent5Character": opponent5Character, "MountScore": MountScore,
                                  "OppScore": OppScore, "Result": Result})
    document = await collection8.find_one({"OppSchool": OppSchool})
    return True


async def remove_valorantg(OppSchool):
    await collection8.delete_one({"OppSchool": OppSchool})
    return True


##############################################################################################
# Overwatch Game
async def fetch_one_overwatchg(OppSchool):
    document = await collection7.find_one({"OppSchool": OppSchool})
    return document


async def fetch_all_overwatchg():
    overg = []
    cursor = collection7.find({})
    async for document in cursor:
        overg.append(OverwatchGame(**document))
    return overg


async def create_overwatchg(overwatchga):
    document = overwatchga
    result = await collection7.insert_one(document)
    return document


async def update_overwatchg(OppSchool, player1, player2, player3, player4, player5, player1Character, player2Character,
                            player3Character, player4Character, player5Character, opponent1Character,
                            opponent2Character, opponent3Character, opponent4Character, opponent5Character, MountScore,
                            OppScore, Result):
    await collection7.update_one({"OppSchool": OppSchool},
                                 {"$set": {"player1": player1}, "player2": player2, "player3": player3,
                                  "player4": player4, "player5": player5, "Player1Character": player1Character,
                                  "player2Character": player2Character, "player3Character": player3Character,
                                  "player4Character": player4Character, "player5Character": player5Character,
                                  "opponent1Character": opponent1Character, "opponent2Character": opponent2Character,
                                  "opponent3Character": opponent3Character, "opponent4Character": opponent4Character,
                                  "opponent5Character": opponent5Character, "MountScore": MountScore,
                                  "OppScore": OppScore, "Result": Result})
    document = await collection7.find_one({"OppSchool": OppSchool})
    return True


async def remove_overwatchg(OppSchool):
    await collection7.delete_one({"OppSchool": OppSchool})
    return True


# Search
async def search_player(search):
    rocket_game_data = []
    async for document in collection6.find({'Player1': {'$regex': search}}):
        rocket_game_data.append(RocketGame(**document))

    async for document in collection6.find({'Player2': {'$regex': search}}):
        rocket_game_data.append(RocketGame(**document))

    async for document in collection6.find({'Player3': {'$regex': search}}):
        rocket_game_data.append(RocketGame(**document))

    smash_game_data = []
    async for document in collection_Smash_Games.find({'Player': {'$regex': search}}):
        smash_game_data.append(SmashGame(**document))

    valorant_game_data = []
    async for document in collection8.find({'Player1': {'$regex': search}}):
        valorant_game_data.append(ValorantGame(**document))

    async for document in collection8.find({'Player2': {'$regex': search}}):
        valorant_game_data.append(ValorantGame(**document))

    async for document in collection8.find({'Player3': {'$regex': search}}):
        valorant_game_data.append(ValorantGame(**document))

    async for document in collection8.find({'Player4': {'$regex': search}}):
        valorant_game_data.append(ValorantGame(**document))

    async for document in collection8.find({'Player5': {'$regex': search}}):
        valorant_game_data.append(ValorantGame(**document))

    overwatch_game_data = []
    async for document in collection7.find({'Player1': {'$regex': search}}):
        overwatch_game_data.append(OverwatchGame(**document))

    async for document in collection7.find({'Player2': {'$regex': search}}):
        overwatch_game_data.append(OverwatchGame(**document))

    async for document in collection7.find({'Player3': {'$regex': search}}):
        overwatch_game_data.append(OverwatchGame(**document))

    async for document in collection7.find({'Player4': {'$regex': search}}):
        overwatch_game_data.append(OverwatchGame(**document))

    async for document in collection7.find({'Player5': {'$regex': search}}):
        overwatch_game_data.append(OverwatchGame(**document))

    data = {
        'rocket_game': rocket_game_data,
        'smash_game': smash_game_data,
        'valorant_game': valorant_game_data,
        'overwatch_game': overwatch_game_data
    }

    return data

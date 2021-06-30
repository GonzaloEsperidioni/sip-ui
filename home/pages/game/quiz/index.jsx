import React, { useState, useEffect } from "react";
import {
  Stack,
  Heading,
  Input,
  Container,
  Button,
  Text,
  Progress,
  Grid,
  Divider,
  Alert,
  Box,
  AlertIcon,
} from "@chakra-ui/react";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5555/";
const socket = socketIOClient(ENDPOINT);

export default function QuizGame() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [cantAnswer, setCantAnswer] = useState(false);
  const [players, setPlayers] = useState([]);
  const [progressValue, setProgressValue] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    if (!data.endTime && !data.totalTime) {
      return;
    }
    let diff = data.endTime - Date.now();
    let progress = (diff * 100) / data.totalTime;
    setTimeout(() => setProgressValue(100 - progress), 200);
  }, [data.totalTime, progressValue]);

  useEffect(() => {
    window.socket = socket;
    socket.on("players", function (data) {
      console.log("players updated, data:", data.players);
      setPlayers(data.players);
      // $('.playerMsg').html(data.msg);
      // that.renderPlayers(data.players);
    });

    socket.on("winnerTeam", function (data) {
      console.log("winner team: ", data);
      setTeams(data);
    });

    socket.on("endedGame", function (data) {
      console.log("endGame", data);
      setEndGame(true);
    });

    socket.on("playAgain", function (data) {
      console.log("playAgain", data);
      setEndGame(false);
    });

    socket.on("question", function (data) {
      console.log("received question, data: ", data);
      setData(data);
      setCantAnswer(false);
      // that.renderQuestionAnswers(data);
    });
  }, []);

  const sendAnswer = (answer) => {
    socket.emit("answer", { question: data.question, answer: answer });
    setCantAnswer(true);
  };

  const joinGame = () => {
    socket.emit("playerJoin", { playerName: name });
    setJoined(true);
  };

  const formatTeam = (teamName) => {
    return teamName === "BLUE" ? "AZUL" : "ROJO";
  };

  const playAgain = () => {
    socket.emit("playAgain");
  };

  if (!name || !joined) {
    return (
      <Container>
        <Heading textAlign="center">Quiz Battle game</Heading>
        <Divider my="16px"></Divider>
        <Grid
          pt="40px"
          templateColumns="1fr 1fr"
          alignItems="flex-start"
          gridGap="120px"
        >
          <Box>
            <Heading mb="18px">Como jugar?</Heading>
            <Text>
              Competí contra otros equipos para ganar puntos y recibir premios
            </Text>
            <Text>
              El juego consta de ser el primero en responder preguntas, tendras
              5 segundos para seleccionar la correcta, pero apurate! el que
              primero responde, se lleva los puntos.
            </Text>
          </Box>
          <Stack spacing="12px">
            <Heading mb="24px">Jugar!</Heading>
            <Text>Ingrese un nombre</Text>
            <Input
              marginTop="30px"
              value={name}
              placeholder="Ej: Tito de carroquemado"
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Button disabled={!name} onClick={joinGame} colorScheme="primary">
              Unirse al juego
            </Button>
          </Stack>
        </Grid>
      </Container>
    );
  }

  const questionsStack = () => {
    return (
      <Stack>
        <Heading size="xl">{data.question}</Heading>
        {data.points && (
          <Text>Esta pregunta vale un total de: {data.points} puntos.</Text>
        )}
        <Stack>
          {data && !data.choices && data.winnerName && (
            <Heading>
              El primer usuario en responder correctamente fue:{" "}
              {data.winnerName}
            </Heading>
          )}
          {data &&
            data.choices &&
            data.choices.map((c, k) => (
              <Button
                key={k}
                disabled={cantAnswer}
                onClick={() => sendAnswer(c)}
              >
                {c}
              </Button>
            ))}
        </Stack>
      </Stack>
    );
  };
  return (
    <Grid autoRows alignItems="start" maxWidth="100vw">
      <Progress hasStripe mt="-4" width="100%" value={progressValue} mb="4" />
      <Grid
        alignItems="start"
        px="32px"
        templateColumns="fit-content(100%) 1fr fit-content(100%)"
        columnGap="60px"
      >
        <Stack align="center">
          <Heading color="white" bg="blue">
            Equipo Azul
          </Heading>
          {players
            ?.filter((t) => t.team === "BLUE")
            .map((p) => (
              <Text>
                {p.name} - Score: {p.points}{" "}
              </Text>
            ))}
        </Stack>
        {!endGame && questionsStack()}
        {endGame && teams && (
          <Stack>
            <Heading>Gano el equipo: {formatTeam(teams.winnerTeam)}</Heading>
            <Button onClick={playAgain}>Jugar denuevo</Button>
          </Stack>
        )}
        <Stack>
          <Heading color="white" bg="red">
            Equipo Rojo
          </Heading>
          {players
            ?.filter((t) => t.team === "RED")
            .map((p) => (
              <Text>
                {p.name} - Score: {p.points}{" "}
              </Text>
            ))}
        </Stack>
      </Grid>
      {data.winner && (
        <Alert status="success">
          <AlertIcon />
          <Heading>Respuesta!! Ganaste {data.points} puntos.</Heading>
        </Alert>
      )}
    </Grid>
  );
}

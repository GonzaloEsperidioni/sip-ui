import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home | Sip Grupo 8</title>
        <meta name="description" content="MVP app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box height="200px" width="200px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
}

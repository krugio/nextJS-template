'use client'
import { listarCategorias } from "@/services/api";
import { Button } from "@mui/material";
import { useQuery } from "react-query";

export default function Home() {


  const {isLoading, data, error} = useQuery('Teste',  listarCategorias)

  console.log(data)


  return (
    <>
       <h1> HOME </h1>
       <Button variant="contained">TESTE</Button>
    </>
   
  );
}

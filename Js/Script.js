const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWMyNjNkMy0zODE0LTRhMWItYjRkZC02ZTZkN2NmNDBiZTQiLCJlbWFpbCI6Imxlb25hcmRvLmxpbmtscjAwMEBnbWFpbC5jb20iLCJpYXQiOjE3MjU0NTQzMjV9.pOdhYbY7ofdcRV18JFLtx3c0RSe_d5rZWLalwwH18mA";

//Consulta
function Coleta() {
  let Marca = document.querySelector(".Marca").value;
  let Modelo = document.querySelector(".Modelo").value;
  let Ano = document.querySelector(".Ano").value;
  console.log(Marca);
  console.log(Modelo);
  console.log(Ano);
  Pesquisa(Marca, Modelo, Ano)
}

async function Pesquisa(Marca, Modelo, Ano) {
  let Marcac = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/${Marca}`
  ).then((Response) => Response.json());
  let Modeloc = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/59/${Modelo}`
  ).then((Response) => Response.json());
  let Anoc = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/${Ano}`
  );

console.log(Marcac)
console.log(Modeloc)
console.log(Anoc)

  let Fipe = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/${Marcac.codigo}/59/${Modeloc.codigo}/5940/${Anoc.codigo}/2014-3`
  ).then((Response) => Response.json());

  console.log(Fipe);
  ExibirMarca(Marcac);
}

function ExibirMarca(Marcac)
{
    
}

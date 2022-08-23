import request from "graphql-request";
export default async function api_fetch() {
    try {
        const response = await request(
            "https://api-sa-east-1.hygraph.com/v2/cl74uej0y4i7l01uhdsr17qso/master",
            `
            query SecoesQuery {
                secoes {
                  codigo
                  descricao
                  imagem {
                    url
                  }
                  titulo
                }
              }
            `
        );

        if (response) {
            return response;
        } else {
            return;
        }
    } catch (err) {
        throw new Error("Something went wrong...");
    }
}

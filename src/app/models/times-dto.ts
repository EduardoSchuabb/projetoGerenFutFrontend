export interface TimesDTO {

    estado: string;
    linkImagem: string;
    nome: string;
    qtdJogadores: string;
    sigla: string;
}

export interface RespostaTimesDTO {

    timesDTO: TimesDTO[];
}
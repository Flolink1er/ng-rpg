export interface IRandomRequestDto {
  jsonrpc: string;
  method: string;
  id: number;
  params: IRandomRequestParams
};

export interface IRandomRequestParams{
  apiKey: string;
  n : number;
  min: number;
  max: number;
  replacement?: boolean;
}


export interface IRandomResponsetDto {
  jsonRpc: string;
  id: number;
  result: IRandomResultDto;
};

export interface IRandomResultDto{
  advisoryDelay: number;
  bitsLeft: number;
  bitsUsed: number;
  requestLeft: number;
  random : IRandomResultArrayDto;
}

export interface IRandomResultArrayDto {
  data: number[];
  completionTime: string;
}

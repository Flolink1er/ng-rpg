import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRandomRequestDto, IRandomResponsetDto } from '../models/random-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class Random {
  private readonly http = inject(HttpClient);
  private readonly RANDOM_URL = "https://api.random.org/json-rpc/4/invoke";
  private readonly API_KEY = "00cb04f3-8dcf-4e69-8d6e-3722e5b94b27";

  public generateIntegers(count: number = 10, min: number = 0, max: number = 10):Observable<IRandomResponsetDto>{
    const body: IRandomRequestDto = {
      jsonrpc: "2.0",
      method: "generateIntegers",
      id: new Date().getTime(),
      params: {
        apiKey: this.API_KEY,
        n : count,
        min: min,
        max: max,
      }
    };

    return this.http.post<IRandomResponsetDto>(this.RANDOM_URL, body);
  }

  public generateIntegerAndGetData(count: number = 10, min: number = 0, max: number = 10):Observable<number[]>{
    return this.generateIntegers(count, min, max)
    .pipe(
      map((value => value.result.random.data))
    );
  }
}

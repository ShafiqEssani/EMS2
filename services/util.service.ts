import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public lower(word): string {
    return word.toLowerCase();
  }


}

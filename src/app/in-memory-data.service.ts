import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: '伊藤正人' },
      { id: 12, name: '高橋麻里香' },
      { id: 13, name: '藤井修斗' },
      { id: 14, name: '大槻彩' },
      { id: 15, name: '岩川紗里' },
      { id: 16, name: '遠藤肇' },
      { id: 17, name: '森原一馬' },
      { id: 18, name: '駒井英智' },
      { id: 19, name: '津久井愛理' },
      { id: 20, name: '福島実' },
    ];

    return { members };
  }

  genId(members: Member[]): number {
    return members.length > 0
      ? Math.max(...members.map((member) => member.id)) + 1
      : 11;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  private nameList: string[] = [];

  create(createPersonInput: CreatePersonInput): Person {
    this.nameList.push(createPersonInput.myName);
    return {
      id: 1,
      content: createPersonInput.myName,
    };
  }

  findAll(): Person[] {
    return this.nameList.map((name, index) => ({ id: index, content: name }));
  }

  findOne(id: number): Person {
    return {
      id,
      content: 'akdsfjaksd',
    };
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}

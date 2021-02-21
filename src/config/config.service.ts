import { Injectable } from '@nestjs/common'
import { CreateConfigInput } from './dto/create-config.input'
import { UpdateConfigInput } from './dto/update-config.input'
import { Config } from './entities/config.entity'
import Configuration from '../env/Configuration'

@Injectable()
export class ConfigService {
  create(createConfigInput: CreateConfigInput): Config {
    return {
      exampleField: Configuration().toString(),
    }
  }

  findAll(): Config[] {
    return [
      {
        exampleField: Configuration().haha.name,
      },
    ]
  }

  findOne(id: number) {
    return `This action returns a #${id} config`
  }

  update(id: number, updateConfigInput: UpdateConfigInput) {
    return `This action updates a #${id} config`
  }

  remove(id: number) {
    return `This action removes a #${id} config`
  }
}

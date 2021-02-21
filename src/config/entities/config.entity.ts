import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Config {
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField: string
}

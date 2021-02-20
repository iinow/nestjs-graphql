import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field(() => String, { description: '아썅/..' })
  myName: string;
}

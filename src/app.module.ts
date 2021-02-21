import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SchoolResolver } from './school/school.resolver'
import { PersonModule } from './person/person.module'
import { TypeGraphQLModule } from 'typegraphql-nestjs'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule as RootConfigModule } from '@nestjs/config'
import { ConfigModule } from './config/config.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      // emitSchemaFile: true,
      // validate: false,
      // dateScalarMode: 'timestamp',
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ currentUser: req.user }),
      playground: true,
    }),
    RootConfigModule.forRoot(),
    SchoolResolver,
    PersonModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

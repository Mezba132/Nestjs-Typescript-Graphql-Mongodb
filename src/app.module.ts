import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CategoryModule,
    ConfigModule.forRoot({
      isGlobal : true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-graphql'),
  ],
  providers: [],
})
export class AppModule {}

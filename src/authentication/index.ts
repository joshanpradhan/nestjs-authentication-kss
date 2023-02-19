import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user';
import { AuthenticationController } from './controllers';
import { AuthenticationEntity } from './entities';
import { AuthenticationService } from './services';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([AuthenticationEntity])],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}

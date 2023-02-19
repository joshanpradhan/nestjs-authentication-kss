import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationDto } from 'src/authentication/dtos/registration.dto';
import { AuthenticationEntity } from 'src/authentication/entities';
import { QueryRunner, Repository } from 'typeorm';
import { UserEntity } from '../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(
    registrationDto: RegistrationDto,
    authentication: AuthenticationEntity,
    queryRunner: QueryRunner,
  ): Promise<UserEntity> {
    const user = this._userRepository.create({
      ...registrationDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Usuario} from './usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
  
 

@Injectable()
export class appService {
  constructor(
  @InjectRepository(Usuario)
  private readonly usuarioRepository: Repository<Usuario>  
  ){}

  getHello(): string {
    return 'Hola soy el microservicio mail, en puerto 3000';
  }
  async newUsuario(user: any): Promise<string>{
  try{
    const nuevoUSuario = this.usuarioRepository.create(user);
    await this.usuarioRepository.save(nuevoUSuario);
    return 'Usuario agregado ala base de datos';
  }catch(error){
    throw new Error('Error ${error.message}');
  }
  }

}

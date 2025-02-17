import { NestFactory } from '@nestjs/core';
import { appModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(appModule);

  app.useStaticAssets(join(__dirname, '..', '..', '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', '..', '..','views'));
  app.setViewEngine('hbs')


  await app.listen(3000);
}
bootstrap();

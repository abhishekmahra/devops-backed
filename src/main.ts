import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enable cors for my angular app.

  app.enableCors({
    origin: 'http://52.64.17.240',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

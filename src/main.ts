import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

    const config = new DocumentBuilder()
    .setTitle('Petshop API')
    .setDescription('API para gerenciar usuários e pets')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona suporte ao JWT no Swagger
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // Documentação em http://localhost:3000/api


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

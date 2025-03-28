"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, User, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8 pt-12"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src="https://avatars.githubusercontent.com/u/129208350?v=4" />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold"
          >
            Lucas Guimarães
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-muted-foreground"
          >
            Software Developer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a href="https://github.com/lucasguimaraes2005" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-guimar%C3%A3es-1b889a227/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:lucaagui123@gmail.com" className="hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
              <p className="text-muted-foreground">
              Meu nome é Lucas, e eu sou um desenvolvedor de software focado no back-end, porém, com familiaridade com o front-end. Hoje, trabalho com soluções em .NET/C# juntamente ao Angular e desenvolvo
              projetos pessoais em diferentes tecnologias, entre elas, SpringBoot (Java), NextJS e Dart. Tenho desenvoltura em gerenciamento de processos, DEVOPS e CI/CD, sempre trabalhando com Azure e 
              desenvolvendo meu conhecimento com projetos utilizando Docker, Kafka, entre outras ferramentas. Busco sempre oferecer meu melhor e buscar mais conhecimento, fornecendo código limpo,
              buscando melhores soluções de arquitetura e escalabilidade, bem como observabilidade. Tenho muito interesse na qualidade do código, sempre buscando cobertura de testes. 
              No meu tempo livre, gosto de jogar e assistir a filmes que já vi mais de dez vezes.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                <Badge>.NET/C#</Badge>
                <Badge>SpringBoot/Java</Badge>
                <Badge>NextJS/TypeScript</Badge>
                <Badge>Scrum</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Git</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Desenvolvedor Back End</strong>
                  <p className="text-sm text-muted-foreground">HeroCorp • 2024 - Presente</p>
                </li>
                <li>
                  <strong>Estágio</strong>
                  <p className="text-sm text-muted-foreground">HeroCorp • 2023 - 2024</p>
                </li>
                <li>
                  <strong>Estágio</strong>
                  <p className="text-sm text-muted-foreground">PicPay • 2021 - 2022</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">API Conta Bancária</h3>
                <p className="text-muted-foreground mb-4">
                Projeto pessoal que consiste em uma API em Springboot para gerenciamento de uma conta bancária, com transações funcionais 
                entre as contas criadas e gerenciamento dos valores depositados. Utiliza-se no projeto o Spring Security, com JWT incluído para proteção das rotas.                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">SpringBoot</Badge>
                </div>
                <a
                  href="https://github.com/lucasguimaraes2005/api-contabancaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">YoungDreamData</h3>
                <p className="text-muted-foreground mb-4">
                  Projeto pessoal realizado em NextJS com PrismaORM e PostgreSQL. Consiste em uma aplicação completa e robusta para gerenciamento 
                  de alunos de instituições de ensino. Seu diferencial é o sistema de chamada por biometria facial utilizando a faceAPI.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <a
                  href="https://github.com/lucasguimaraes2005/youngdreamdata-4.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
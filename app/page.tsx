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
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256" />
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
            Seu Nome
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-muted-foreground"
          >
            Desenvolvedor Full Stack
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:seu@email.com" className="hover:scale-110 transition-transform">
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
                Olá! Sou um desenvolvedor apaixonado por criar soluções web incríveis.
                Com experiência em React, Next.js, Node.js e várias outras tecnologias,
                estou sempre buscando aprender e evoluir na área de desenvolvimento.
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
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Node.js</Badge>
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
                  <strong>Desenvolvedor Full Stack</strong>
                  <p className="text-sm text-muted-foreground">Empresa XYZ • 2022 - Presente</p>
                </li>
                <li>
                  <strong>Desenvolvedor Front-end</strong>
                  <p className="text-sm text-muted-foreground">Empresa ABC • 2020 - 2022</p>
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
                <div className="aspect-video bg-muted rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
                <p className="text-muted-foreground mb-4">
                  Uma descrição breve do projeto e as tecnologias utilizadas.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
                <a
                  href="https://github.com"
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
                <div className="aspect-video bg-muted rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
                <p className="text-muted-foreground mb-4">
                  Uma descrição breve do projeto e as tecnologias utilizadas.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <a
                  href="https://github.com"
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
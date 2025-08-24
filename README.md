# Memory Card Game

O **Memory Card Game** é um jogo simples de memória, onde o objetivo é encontrar pares de cartas iguais. Ideal para praticar lógica de programação, manipulação de estados e interatividade com interfaces gráficas.

## 🎮 Demo

🔗 **[Jogar Online - Deploy em Produção](https://memory-card-game-brendonlee23.vercel.app)**

---

## Sumário

- [Demo](#-demo)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Jogar](#como-jogar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Funcionalidades

- Embaralhamento automático das cartas ao iniciar.
- Contagem de tentativas do jogador.
- Modo de reinício do jogo.
- Feedback visual para cartas corretas/incorretas.
- Suporte a diferentes temas de cartas.
- Responsividade para dispositivos móveis.

---

## Instalação

1. **Pré-requisitos**:
   - Node.js (recomendado, se for um projeto web moderno)
   - npm ou yarn

2. **Clone o repositório**:
   ```bash
   git clone https://github.com/BrendonLee23/memory-card-game.git
   cd memory-card-game
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Execute o projeto**:
   ```bash
   npm start
   # ou
   yarn start
   ```

---

## Como Jogar

1. Ao iniciar, todas as cartas ficam viradas para baixo.
2. Clique em uma carta para revelá-la.
3. Clique em uma segunda carta. Se forem iguais, permanecem viradas; se não, voltam a ficar ocultas após um curto intervalo.
4. O objetivo é encontrar todos os pares com o menor número de tentativas possível.
5. Reinicie o jogo a qualquer momento para tentar novamente.

---

## Estrutura do Projeto

```
memory-card-game/
├── public/              # Arquivos estáticos (ícones, imagens)
├── src/
│   ├── assets/          # Imagens das cartas
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Card.jsx
│   │   └── Board.jsx
│   ├── App.jsx          # Componente principal
│   ├── index.js         # Ponto de entrada
│   └── styles/          # Estilos CSS/SCSS
├── package.json
└── README.md
```

---

## Tecnologias Utilizadas

- React.js (ou substitua pela tecnologia usada)
- JavaScript ES6+
- CSS3/SASS
- [Opcional] TypeScript
- [Opcional] Framework de testes (Jest, React Testing Library)

---

## Contribuição

Fique à vontade para abrir issues ou pull requests!  
Sugestões, correções de bugs e melhorias são bem-vindas.

1. Fork este repositório.
2. Crie uma branch nova: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

Desenvolvido por [Brendon Lee](https://github.com/BrendonLee23).

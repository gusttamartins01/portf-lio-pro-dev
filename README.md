#  Portfolio Pro Dev

Este é um portfólio profissional de alto impacto, desenvolvido com uma arquitetura escalável e moderna. O projeto foca em performance, interatividade e uma experiência de usuário (UX) fluida.

-----

##  Tecnologias e Bibliotecas

### Core

  * **React** (Interface de usuário)
  * **Vite** (Build tool ultra-rápida)
  * **Tailwind CSS** (Estilização utilitária)
  * **React Router Dom** (Navegação SPA)

### Funcionalidades & Design

  * **EmailJS Browser** (Envio de e-mails diretamente pelo front-end)
  * **Lucide React** & **React Icons** (Conjunto de ícones minimalistas e consistentes)
  * **JavaScript (ES6+)**

-----

##  Estrutura do Projeto

A organização segue o padrão de **Atomic Design** simplificado, garantindo que o código seja fácil de manter e expandir:

```bash
PORTFOLIO-PRO-DEV/
├── public/                # Ativos estáticos (ícones, imagens, favicon)
├── src/
│   ├── components/        # Blocos de construção da interface
│   │   ├── layouts/       # Componentes de estrutura persistente
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── sections/      # Seções específicas da Home (Modularização)
│   │   │   ├── About.jsx
│   │   │   ├── Activity.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Skills.jsx
│   │   └── ui/             # Componentes base/atômicos (Design System)
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   ├── pages/             # Composição das rotas/telas principais
│   │   └── Home.jsx
│   ├── styles/            # Configurações de estilo global
│   │   └── index.css      # Tailwind e diretivas CSS
│   ├── App.jsx            # Configuração de Rotas e Providers
│   └── main.jsx           # Ponto de entrada (Renderização do DOM)
├── .env                   # Variáveis de ambiente (EmailJS Keys)
├── .gitignore             # Arquivos ignorados pelo Git
├── eslint.config.js       # Padronização e qualidade de código
├── index.html             # Template base HTML5
├── package.json           # Gerenciador de dependências e scripts
├── postcss.config.js      # Configuração de processamento de CSS
├── tailwind.config.js     # Customização de temas e cores
└── vite.config.js         # Configurações de bundling do Vite
```

-----

##  Funcionalidades Implementadas

  * **Formulário Funcional:** Integração total com **EmailJS**, permitindo o recebimento de mensagens diretamente no e-mail.
  * **Navegação Inteligente:** Gerenciamento de rotas com `react-router-dom`.
  * **Design Responsivo:** Adaptado para dispositivos móveis, tablets e desktops.
  * **Componentização:** Interface construída com componentes altamente reutilizáveis na pasta `ui`.
  * **UI/UX Moderna:** Uso de ícones vetoriais e tipografia otimizada.

-----

##  Como Rodar o Projeto

1.  **Clone o repositório**

    ```bash
    git clone https://github.com/gusttamartins01/portf-lio-pro-dev.git
    ```

2.  **Acesse a pasta e instale as dependências**

    ```bash
    cd portf-lio-pro-dev
    npm install
    ```

3.  **Configure as variáveis de ambiente**
    Crie um arquivo `.env` na raiz do projeto e adicione suas chaves do EmailJS:

    ```env
    VITE_EMAILJS_SERVICE_ID=seu_service_id
    VITE_EMAILJS_TEMPLATE_ID=seu_template_id
    VITE_EMAILJS_PUBLIC_KEY=sua_public_key
    ```

4.  **Inicie o servidor de desenvolvimento**

    ```bash
    npm run dev
    ```

-----

##  Melhorias Futuras

  - [ ] Implementação de **Dark Mode** dinâmico.
  - [ ] Adição de animações com **Framer Motion**.
  - [ ] Otimização de SEO e Meta Tags.
  - [ ] Internacionalização (i18n) para Inglês/Português.

-----

##  Autor

Desenvolvido com café e código por **Gustavo Martins**.

  * **Email:** [luizgustams@gmail.com](mailto:luizgustams@gmail.com)
  * **LinkedIn:** [gustavo\-martins](https://www.linkedin.com/in/gustavo-martins-197b70298/?skipRedirect=true)
  * **Instagram:** [@gustta\_gus](https://www.google.com/search?q=https://instagram.com/gustta_gus)

-----

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para detalhes.

-----

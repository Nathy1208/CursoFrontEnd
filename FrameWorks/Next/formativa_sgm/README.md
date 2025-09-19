# Sistema de Gestão de Manutenção (Formativa)

## Briefing



## Escopo

- Objetivos:

- Público-Alvo:

- Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

---

- **Diagrama de Classes**

classDiagram
    class Usuario {
        +int id
        +string nome
        +string email
        +string senha (bcrypt)
        +string role (Técnico, Gestor, Administrador)
    }

    class Equipamento {
        +int id
        +string nome
        +string modelo
        +string numeroSerie
        +string localizacao
        +string status
    }

    class OrdemServico {
        +int id
        +string titulo
        +string descricao
        +string tipo (Preventiva/Corretiva)
        +string status (Aberta/Em Andamento/Concluída)
    }

    Usuario "1" --o "N" OrdemServico : cria/atua
    Equipamento "1" --o "N" OrdemServico : associado

-------

- **Diagrama de Casos de Uso**

usecaseDiagram
    actor Tecnico as T
    actor Gestor as G
    actor Administrador as A

    rectangle Sistema {
        usecase UC1 as "Login no sistema"
        usecase UC2 as "Visualizar Dashboard"
        usecase UC3 as "Gerenciar Ordens de Serviço"
        usecase UC4 as "Gerenciar Equipamentos"
        usecase UC5 as "Gerenciar Usuários"
    }

    T --> UC1
    T --> UC2
    T --> UC3

    G --> UC1
    G --> UC2
    G --> UC3
    G --> UC4

    A --> UC1
    A --> UC5

--------

- Diagrama de Fluxo

flowchart TD
    A[Usuário acessa tela de Login] --> B[Inserir email e senha]
    B --> C{Credenciais válidas?}
    C -- Não --> D[Exibir mensagem de erro]
    C -- Sim --> E[Gerar JWT Token]
    E --> F[Redirecionar para Dashboard]
    F --> G[Exibir visão geral: Ordens de serviço abertas, em andamento e concluídas]


## Análise de Risco


## Prototipagem


## Codificação


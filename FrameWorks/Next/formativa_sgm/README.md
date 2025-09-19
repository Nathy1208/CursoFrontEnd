# Sistema de Gestão de Manutenção (Formativa)

## Briefing



## Escopo

- Objetivos:

- Público-Alvo:

- Recursos Tecnológicos:

- Diagramas 

----

## Diagramas 

---

- **Diagrama de Classes**

```mermaid
classDiagram
    class Usuario {
        +int id
        +string nome
        +string email
        +string senha (bcrypt)
        +string funcao
        +login()
        +logout()
    }

    class Equipamento {
        +int id
        +string nome
        +string modelo
        +string numeroSerie
        +string localizacao
        +string status
        +create()
        +read()
        +update()
        +delete()
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

```
-------

- **Diagrama de Casos de Uso**

```mermaid
flowchart TD
    T[Técnico] --> UC1[Login no sistema]
    T --> UC2[Visualizar Dashboard]
    T --> UC3[Gerenciar Ordens de Serviço]

    G[Gestor] --> UC1
    G --> UC2
    G --> UC3
    G --> UC4[Gerenciar Equipamentos]

    A[Administrador] --> UC1
    A --> UC5[Gerenciar Usuários]


```
--------

- **Diagrama de Fluxo**

```mermaid
flowchart TD
    A[Usuário acessa tela de Login] --> B[Inserir email e senha]
    B --> C{Credenciais válidas?}
    C -- Não --> D[Exibir mensagem de erro]
    C -- Sim --> E[Gerar JWT Token]
    E --> F[Redirecionar para Dashboard]
    F --> G[Exibir visão geral: Ordens de serviço abertas, em andamento e concluídas]

```


## Análise de Risco


## Prototipagem


## Codificação


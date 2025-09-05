## Curso FrontEnd - Prof.Diogo

- FrameWorks são uma solução completa, e também é um conjunto de bibliotecas.

- O Front-End é um IU EX

- Diferenças entre NPM e NPX
    - NPM: Packages Notes Manage -> ele instala os pacotes de algo.
    - NPX: Packages Notes Execute -> serve para executar um código.

- Um MAP é uma lista não ordenada, com chave e valor.

- Reduce :tranforma o vetor em um item


**---**

## Criando um Diagrama com Mermaid


### Diagrama de Fluxo de Arquitetura de Projeto
```mermaid 
graph TD
    subgraph Cliente["Navegador"]
        UI
    end
    
    subgraph Front["React"]
        FrontEnd
    end
    
    subgraph Back["API"]
        BackEnd
    end
    
    subgraph Banco["MongoDB"]
        BD
    end

    %% fluxo

    UI--> FrontEnd
    FrontEnd --> BackEnd
    BackEnd --> BD
    BD --> BackEnd
    BackEnd --> FrontEnd
    FrontEnd -->

    ```

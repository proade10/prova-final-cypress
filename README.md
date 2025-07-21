![CI](https://github.com/proade10/prova-final-cypress/actions/workflows/ci.yml/badge.svg)



# Prova Final: Testes Automatizados com Cypress

## Objetivo
Automatizar testes de login e funcionalidades do site https://www.saucedemo.com usando Cypress.

## Pré-requisitos
- Node.js instalado
- npm instalado

## Instalação
```bash
npm install
```

## Executar o Cypress (modo visual)
```bash
npx cypress open
```

## Executar testes (modo headless)
```bash
npx cypress run
```

## Estrutura dos Testes
- `login.cy.js`: Testes de sanidade da tela de login
- `compra.cy.js`: Teste de adicionar item ao carrinho após login


## Cenários Automatizados
- LOGIN_001 - Login com usuário e senha válidos  
- LOGIN_002 - Login com senha incorreta  
- LOGIN_003 - Login com usuário inexistente  
- COMPRA_001 - Adicionar item ao carrinho após login

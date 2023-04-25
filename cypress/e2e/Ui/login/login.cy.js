const Bugbank = require('../../../support/Elements/TelaLoginElements').ELEMENTS
describe('testes dentro da tela de login', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    });
    it('Tentativa de login com email e senha em branco', () => {
        cy.login('{insert}','{insert}');
        cy.get(Bugbank.validacaoEmail).should('have.text','É campo obrigatório')
        cy.get(Bugbank.validacaoSenha).should('have.text','É campo obrigatório')
    });
    it('Tentativa de login com email e senha em branco', () => {
        cy.login('{insert}','{insert}');
        cy.get(Bugbank.validacaoSenha).should('have.text','É campo obrigatório')
    });
    it('Tentativa de login com email em branco e senha preenchida', () => {
        cy.login('{insert}','15489855');
        cy.get(Bugbank.validacaoEmail).should('have.text','É campo obrigatório')
    });
    it('Tentativa de login com email em branco e senha preenchida', () => {
        cy.login('teste@123.com','{insert}');
        cy.get(Bugbank.validacaoSenha).should('have.text','É campo obrigatório')
    });
    it('Tentativa de login com email e senha preenchida sem estar cadastrados no banco de dados', () => {
        cy.login('teste@123.com','12345');
        cy.get(Bugbank.mensagemDeErro).should('have.text','Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
    });
});
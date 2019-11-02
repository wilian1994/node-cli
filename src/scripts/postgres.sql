
DROP TABLE IF EXISTS TB_HEROIS;
CREATE TABLE TB_HEROIS (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
)

--- CREATE
INSERT INTO TB_HEROIS (NOME, PODER)
VALUES
    ('Flash', 'Velocidade'),
    ('Aquaman', 'Falar com os animais'),
    ('Batman', 'Dinheiro')

 --- READ
 SELECT * FROM TB_HEROIS

 --- UPDATE
 UPDATE TB_HEROIS SET NOME = 'NARUTO', PODER = 'RAZENGAN' WHERE ID = 1
 
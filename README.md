# Crud file nodejs

## Configuração do projeto
```
yarn install
```

### Compile

**Cria um usuário no arquivo**
```
node app.js add --name="teste" --email="teste@gmail.com" --password="senhateste" --gender="masculino"
```

**Atualizar um usuário no arquivo**
```
node app.js update --name="Carlos Alberto" --email="carlos@gmail.com" --password="123456" --gender="masculino"
```


**Atualizar um usuário no arquivo**
```
node app.js update --id="012930294" --name="Laura" --email="laura@gmail.com" --password="1234" --gender="feminino"
```

**Deletar um usuário no arquivo**
```
node app.js remove --id="012930294"
```

**Pegar todos os usuários no arquivo**
```
node app.js get"
```

**Pegar apenas um usuário no arquivo**
```
node app.js get --id="012930294"
```



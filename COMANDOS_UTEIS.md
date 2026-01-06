# Comandos Úteis

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Linter
npm run lint
```

## 📦 Instalar Dependências

```bash
# Instalar todas as dependências
npm install

# Adicionar nova dependência
npm install nome-do-pacote

# Adicionar dependência de desenvolvimento
npm install -D nome-do-pacote
```

## 🎨 shadcn/ui

```bash
# Adicionar novos componentes shadcn
npx shadcn@latest add dialog
npx shadcn@latest add select
npx shadcn@latest add tabs
```

## 🔍 Debug

```bash
# Verificar erros de TypeScript
npx tsc --noEmit

# Verificar erros do ESLint
npx eslint . --ext .ts,.tsx

# Limpar cache do Next.js
rm -rf .next
```

## 📊 Build Analyzer

```bash
# Instalar analisador de bundle
npm install -D @next/bundle-analyzer

# Adicionar ao next.config.ts
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Rodar análise
ANALYZE=true npm run build
```

## 🚢 Deploy

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy produção
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Link ao site
netlify link

# Deploy
netlify deploy --prod
```

## 🧹 Limpeza

```bash
# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache completo
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## 🔧 Manutenção

```bash
# Verificar pacotes desatualizados
npm outdated

# Atualizar pacotes (cuidado!)
npm update

# Atualizar Next.js
npm install next@latest react@latest react-dom@latest
```

## 📱 Testes de Responsividade

```bash
# Expor servidor na rede local
npm run dev -- -H 0.0.0.0

# Agora acesse do celular:
# http://SEU_IP_LOCAL:3000
```

## 🎯 Atalhos VS Code

- `Ctrl/Cmd + P` - Buscar arquivo
- `Ctrl/Cmd + Shift + P` - Command palette
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + J` - Toggle terminal
- `Ctrl/Cmd + Shift + F` - Buscar em todos os arquivos

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 is already in use"
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build muito lento
```bash
# Desabilitar Turbopack temporariamente
npm run dev -- --no-turbo
```

## 📝 Git

```bash
# Status
git status

# Adicionar tudo
git add .

# Commit
git commit -m "feat: adicionar nova pizza ao cardápio"

# Push
git push origin main

# Ver histórico
git log --oneline --graph --decorate
```

## 🎨 Tailwind

```bash
# Gerar arquivo de configuração
npx tailwindcss init -p

# Intellisense no VS Code
# Extensão: Tailwind CSS IntelliSense
```

## 🔍 Lighthouse (Performance)

```bash
# Instalar CLI
npm install -g @lhci/cli

# Rodar teste
lhci autorun --collect.url=http://localhost:3000
```

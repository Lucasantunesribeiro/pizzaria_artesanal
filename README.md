# Pizzaria Artesanal - Site DEMO

Site completo e responsivo para pizzaria, com sistema de pedidos via WhatsApp, carrinho de compras client-side e SEO otimizado.

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS 4**
- **shadcn/ui** (componentes)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## ✅ Checklist de Personalização

### 1. Informações do Negócio (`lib/constants.ts`)

- [ ] `BUSINESS_NAME` - Nome da pizzaria
- [ ] `BUSINESS_WHATSAPP` - WhatsApp no formato `55DDNNNNNNNNN`
- [ ] `DEFAULT_CITY` - Cidade
- [ ] `BUSINESS_ADDRESS` - Endereço completo + coordenadas do Google Maps
- [ ] `BUSINESS_HOURS` - Horários de funcionamento
- [ ] `DELIVERY_FEE` - Taxa de entrega
- [ ] `SOCIAL_MEDIA` - Links do Instagram e Facebook

### 2. Cardápio (`lib/content.ts`)

- [ ] `MENU_ITEMS` - Atualizar pizzas (nome, descrição, preços)
- [ ] `COMBOS` - Personalizar combos e promoções
- [ ] `TESTIMONIALS` - Trocar depoimentos (ou coletar reais)
- [ ] `FAQS` - Adaptar perguntas frequentes
- [ ] `DELIVERY_NEIGHBORHOODS` - Lista de bairros atendidos
- [ ] `HERO_CONTENT` - Textos da seção hero
- [ ] `HOW_TO_ORDER` - Passos de como pedir

### 3. Imagens

**Substituir placeholders por fotos reais:**

- [ ] Hero section (`components/home/hero-section.tsx`)
- [ ] Cards de pizzas (`components/home/popular-pizzas-section.tsx`)
- [ ] Cardápio (`app/cardapio/page.tsx`)
- [ ] Mapa (`app/localizacao/page.tsx`)

**Formato recomendado:**
- Salvar em `/public/images/`
- Usar `next/image` com `width`, `height` e `placeholder="blur"`
- Otimizar imagens (WebP, max 800kb)

### 4. SEO

- [ ] `app/layout.tsx` - Metadata global
- [ ] `app/sitemap.ts` - Atualizar URL do site
- [ ] `app/robots.ts` - Atualizar URL do site
- [ ] `app/page.tsx` - JSON-LD (atualizar URL da imagem)

### 5. Cores e Identidade Visual

**Personalizar cores em `app/globals.css`:**

Linha 58: `--primary` (cor principal)
```css
/* Exemplo: tom vermelho para pizzaria */
--primary: oklch(0.58 0.20 25);
```

### 6. WhatsApp e Contatos

- [ ] Testar link do WhatsApp
- [ ] Validar mensagens automáticas (`lib/whatsapp.ts`)
- [ ] Verificar formulário de contato (`app/contato/page.tsx`)

### 7. Google Maps

Substituir placeholder em `app/localizacao/page.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=SEU_CODIGO_EMBED"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

[Gerar código embed](https://www.google.com/maps)

## 📁 Estrutura de Arquivos

```
├── app/
│   ├── page.tsx              # Home
│   ├── cardapio/page.tsx     # Cardápio + Carrinho
│   ├── localizacao/page.tsx  # Endereço + Mapa
│   ├── contato/page.tsx      # Formulário de contato
│   ├── layout.tsx            # Layout global
│   ├── sitemap.ts            # Sitemap XML
│   └── robots.ts             # Robots.txt
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   ├── home/                 # Seções da Home
│   ├── header.tsx            # Menu superior
│   ├── footer.tsx            # Rodapé
│   └── whatsapp-button.tsx   # Botão flutuante
├── lib/
│   ├── constants.ts          # ⚙️ Configurações principais
│   ├── content.ts            # 📝 Conteúdo (cardápio, FAQ, etc)
│   ├── whatsapp.ts           # WhatsApp helpers
│   ├── money.ts              # Formatação BRL
│   └── utils.ts              # Utilitários
└── hooks/
    └── use-cart.ts           # Hook do carrinho
```

## 🎨 Funcionalidades

✅ Carrinho de compras client-side (localStorage)
✅ Integração WhatsApp para pedidos
✅ SEO completo (metadata, OpenGraph, JSON-LD)
✅ Responsivo (mobile-first)
✅ Acessibilidade (ARIA, foco visível, contraste)
✅ Performance (next/image, lazy loading)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.next
```

**Configurar:**
- Build command: `npm run build`
- Publish directory: `.next`

## 📝 Customização Avançada

### Adicionar nova pizza

1. Abrir `lib/content.ts`
2. Adicionar em `MENU_ITEMS`:

```ts
{
  id: 'nome-pizza',
  name: 'Nome da Pizza',
  description: 'Descrição detalhada',
  prices: { P: 40.00, M: 58.00, G: 75.00 },
  category: 'tradicional',
  tags: ['vegetariana'] // opcional
}
```

### Mudar cor do tema

Editar `app/globals.css` (linha 58):

```css
/* Tom verde */
--primary: oklch(0.55 0.15 150);

/* Tom azul */
--primary: oklch(0.50 0.20 250);

/* Tom roxo */
--primary: oklch(0.55 0.18 290);
```

## 📞 Suporte

Precisa de ajuda ou quer um site personalizado?

**WhatsApp:** +55 21 99680-5944 (Lucas)

## 📄 Licença

Este é um projeto DEMO. Livre para uso comercial após personalização.

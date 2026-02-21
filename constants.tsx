
import React from 'react';
import { Module, FAQItem, Testimonial, Bonus } from './types';

export const MODULES: Module[] = [
  {
    title: "Introdução ao Direito",
    icon: "⚖️",
    description: "A bússola inicial. Entenda o que é o Direito e como se situar na faculdade.",
    details: ["Lógica das Normas", "Fontes do Direito", "Carreiras Jurídicas 1.0", "Conceito de Justiça"]
  },
  {
    title: "Antropologia e Sociologia",
    icon: "🌍",
    description: "A visão crítica. Entenda por que as leis existem e como a sociedade as molda.",
    details: ["Pluralismo Jurídico", "Direito e Poder", "Controle Social", "Cultura Brasileira"]
  },
  {
    title: "Filosofia do Direito",
    icon: "🧠",
    description: "O 'porquê' das coisas. Domine os fundamentos que legitimam o sistema.",
    details: ["Ética e Moral", "Dignidade Humana", "Positivismo vs Jusnaturalismo", "Hermenêutica"]
  },
  {
    title: "História do Direito",
    icon: "🏛",
    description: "De Roma ao Século XXI. A base histórica que explica nosso sistema atual.",
    details: ["Direito Romano", "Civil Law vs Common Law", "Constitucionalismo", "Evolução do Estado"]
  },
  {
    title: "Ciência Política e Estado",
    icon: "🛡",
    description: "A estrutura do poder. Entenda como o Estado funciona e como ele nos protege.",
    details: ["Tripartição de Poderes", "Sistemas Políticos", "Soberania Nacional", "Democracia"]
  },
  {
    title: "Criminologia",
    icon: "🔎",
    description: "A mente do crime. O estudo social da infração e da reação estatal.",
    details: ["Escolas Criminológicas", "Vitimização", "Prevenção", "Sistemas Prisionais"]
  },
  {
    title: "Noções de Direito Civil",
    icon: "📜",
    description: "O pilar do dia a dia. Entenda as relações privadas e patrimoniais.",
    details: ["Sujeitos de Direito", "Bens Jurídicos", "Negócio Jurídico", "Prescrição"]
  },
  {
    title: "Noções de Direito Penal",
    icon: "⛓",
    description: "O poder punitivo. Entenda quando e como o Estado pode aplicar penas.",
    details: ["Teoria do Crime", "Tipicidade", "Iliceidade", "Aplicação de Pena"]
  }
];

export const BONUS: Bonus[] = [
  {
    title: "COMO ESTUDAR DIREITO DO JEITO CERTO",
    value: "R$ 47,00",
    description: "DIREITO NÃO SE ESTUDA NO ENSINO MÉDIO. APRENDA O MÉTODO CERTO DESDE O COMEÇO.",
    image: "https://nataneodireito.com/wp-content/uploads/2026/02/como-estudar-direito.jpg"
  },
  {
    title: "TEORIAS DO DIREITO",
    value: "R$ 37,00",
    description: "APRENDA EM UM DIA O QUE LEVARIA SEMANAS NA FACULDADE.",
    image: "https://nataneodireito.com/wp-content/uploads/2026/02/teorias-do-direito.jpg"
  },
  {
    title: "VOCABULÁRIO JURÍDICO ESSENCIAL",
    value: "R$ 37,00",
    description: "NUNCA MAIS FIQUE PERDIDO QUANDO O PROFESSOR FALAR JURIDIQUÊS.",
    image: "https://nataneodireito.com/wp-content/uploads/2026/02/vocabulario-juridico.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "O curso serve para quem ainda não começou a faculdade?",
    answer: "Sim! Ele foi desenhado exatamente para quem quer chegar no primeiro dia com uma base que os outros levarão meses para construir."
  },
  {
    question: "Trabalho o dia todo, vou conseguir acompanhar?",
    answer: "As aulas são diretas, sem enrolação. Com 20 minutos por dia você domina o conteúdo da semana. Foco total em quem tem rotina pesada."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com seus dados de login para a nossa plataforma premium."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Roberto Mendes",
    role: "Advogado Sênior",
    content: "Quem dera eu tivesse tido essa clareza quando comecei. É o material mais honesto e direto para calouros que já vi.",
    avatar: "https://i.pravatar.cc/150?u=roberto"
  },
  {
    name: "Aline Souza",
    role: "Estudante 1º Período",
    content: "Eu estava perdida com os termos do professor. O curso salvou meu primeiro semestre, entendi tudo de primeira.",
    avatar: "https://i.pravatar.cc/150?u=aline"
  }
];

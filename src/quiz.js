export const quiz = {
    topic: 'Инструменты',
    level: 'Новичок',
    totalQuestions: 3,
    perQuestionScore: 3,
    questions: [
        {
            question: 'Какой из перечисленных инструментов НЕ относится к металлорежущим?',
            choices: ['Зенкер', 'Фрезы', 'Резцы', 'Отвертки'],
            type: 'SCQs',
            correctAnswer: 'Отвертки',
        },
        {
            question: 'Какой части нет в металлорежущем инструменте?',
            choices: ['рабочей', 'крепёжной', 'фронтальной', 'все есть'],
            type: 'SCQs',
            correctAnswer: 'фронтальной',
        },
        {
            question: 'Перечислите наиболее известных производителей металлорежущего инструмента?',
            choices: ['Botek', 'Vardex', 'Carmex', 'Shaviv', 'все вышеперечисленные'],
            type: 'MCQs',
            correctAnswer: 'все вышеперечисленные',
        },
    ],
}
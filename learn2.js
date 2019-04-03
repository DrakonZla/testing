let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    question1 = prompt("Введите обязательную статью расходов в этом месяце"),
    question2 = prompt("Во сколько обойдется?");


let appData = {
    budjet: +money,
    timeDateYear: +time,
    expenses: {
        [question1]: +question2
    },
    optionalExpenses: "",
    income: [],
    savings: false
};
alert("Ваш бюджет на 1 день составляет " + (+money / +30));

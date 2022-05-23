var Options = {
  options: {
    methods: ["card"],
    fields: true,
    title: "my_title",
    link: "https://fondy.eu",
    fullScreen: true,
    button: true,
    locales: ["en"],
    email: true,
    tooltip: true,
    apiDomain: "api.fondy.eu",
    fee: true,
    //  css: 'bootstrap4' // bootstrap3 bootstrap4 foundation6
  },
  regular: {
    insert: true,
    open: true,
    hide: false,
    period: ["week", "month", "day"],
  },
  recurring: {
    every: 2,
    period: "month",
    amount: 100,
    end_time: "2020-11-14",
    start_time: "2018-11-11",
  },
  params: {
    merchant_id: 1396424,
    order_id: new Date().getTime(),
    currency: "USD",
    amount: 500,
    order_desc: "my_desc",
    email: "test@gmail.com",
    lang: "en",
    custom: {
      custom_field_1: "",
      custom_field_2: "Default",
    },
  },
  messages: {
    ru: {
      custom_field_1: "ФИО",
      custom_field_2: "Номер договора",
      card_number: "Номер карты",
      custom_amount: "Сума к оплате",
      my_email: "Эл. адрес",
      my_title: "Назначение платежа",
      my_desc: "Тестовый платеж",
    },
    en: {
      card_number: "Card number",
      custom_amount: "Amount",
      custom_field_1: "Full Name",
      custom_field_2: "Contract number",
      email: "User email",
      my_title: "Purpose of payment",
      my_desc: "Test order",
    },
    uk: {
      methods: "Методи оплати",
      fast: "Швидкий доступ до методів оплати:",
      card: "Оплата картой",
      regular: "Регулярний платіж",
      regular_every: "Періодичність",
      regular_period: "Кожен",
      regular_amount: "Сума до сплати",
      regular_start_time: "Почати з",
      emoney: "Електронні гроші",
      emoney_t: "Оберіть платіжний сервіс зі списку:",
      ibank: "Інтернет-банки",
      ibank_t: "Виберіть ваш банк:",
      cash: "Готівкою",
      cash_t: "Чим бажаете сплатити",
      sender_name: "Ім'я",
      bic: "BIC",
      iban: "IBAN",
      month: "Місяць",
      week: "Тиждень",
      year: "Рік",
      my_email: "Електронна пошта",
      card_number: "Номер карти",
      expiry_date: "Дійсна до",
      pay: "Сплатити",
      info: "Призначення",
      custom_amount: "До сплати:",
      custom_amount_description: "Сума до оплати",
      email: "Електронна адресса",
      custom_field_1: "ПІБ",
      custom_field_2: "Номер договору",
      my_title: "Призначення платежа",
      my_desc:
        "Благодійна допомога (дитині або відділенню гематології, або відділенню планової хірургії з онкологічними ліжками дніпропетровської обласної дитячої клінічної лікарні)",
    },
  },
  validate: {
    ru: {
      credit_card: function (field) {
        return "Поле " + field + " должно быть действительным номером карты";
      },
    },
    uk: {
      credit_card: function (field) {
        return "Поле " + field + " має бути дійсним номером карти";
      },
      custom_field_1: function (field) {
        return "Поле " + field + " має бути заповненим";
      },
      phone: function (field) {
        return "Поле " + field + " має бути заповненим";
      },
    },
  },
};
fondy("#checkout-container", Options);

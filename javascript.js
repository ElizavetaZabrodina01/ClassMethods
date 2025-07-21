// 1. Создай класс Counter, который будет иметь приватное свойство count. 
// Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;
class Counter {
    #count = 0;

    plusCount() {
        this.#count += 1;
    }

    minusCount() {
        this.#count -= 1;
    }

    displayCount() {
        console.log(`Значение счётчика: ${this.#count}`);
    }
}

const counter = new Counter();

counter.plusCount();
counter.displayCount();

// 2. Создай класс EmailValidator со статическим методом isValid(email), 
// который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);

class EmailValidator {
    static isValid(email) {
        if (email.includes('@')) {
            return true
        }
        else {
            return false
        }
    }
}


console.log(EmailValidator.isValid('ajdiiiwdj'));



// 3. Создай класс Order с приватным методом #calculateTotal(), который будет рассчитывать общую стоимость заказа. 
// Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.

class Order {
    #total = 0;

    constructor(...rest) {
        this.rest = [...rest];
    }

    #calculateTotal() {
        this.rest.forEach(element => {
            this.#total = this.#total + element;
        });
        return this.#total;
    }

    displayTotal() {
        this.#calculateTotal();
        return this.#total;
    }
}

const order = new Order(1,2,3,4,5);

console.log(order.displayTotal());


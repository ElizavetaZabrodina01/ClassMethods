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
        return email.includes('@');
    }
}


console.log(EmailValidator.isValid('ajdiiiwdj'));



// 3. Создай класс Order с приватным методом #calculateTotal(), который будет рассчитывать общую стоимость заказа. 
// Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.

class Order {
    constructor(...rest) {
        this.rest = [...rest];
    }

    #calculateTotal(total = 0) {
        this.rest.forEach(element => {
            total = total + element;
        });
        return total;
    }

    displayTotal() {
        return this.#calculateTotal();
    }
}

const order = new Order(1,2,3,4,5);

console.log(order.displayTotal());
console.log(order.displayTotal());
console.log(order.displayTotal());

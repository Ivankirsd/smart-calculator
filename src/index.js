class SmartCalculator {
  constructor(initialValue) {
    this.expression = [];
    this.expression.push(initialValue);
  }

  add(number) {
    this.expression.push('+');
    this.expression.push(number);
    return this;
  }
  
  subtract(number) {
    this.expression.push('-');
    this.expression.push(number);

    return this;
  }

  multiply(number) {
    this.expression.push('*');
    this.expression.push(number);

    return this;
  }

  devide(number) {
    this.expression.push('/');
    this.expression.push(number);

    return this;
  }

  pow(number) {
    this.expression.push('^');
    this.expression.push(number);

    return this;
  }

  getResult() {
    let localExpression = [...this.expression];

    if ( localExpression.length > 2) {
      for (let i = localExpression.length - 1; i > -1 ; i--) {
        if (localExpression[i] == '^') {
          localExpression.splice(i - 1, 3, Math.pow(localExpression[i - 1], localExpression[i + 1]));
          i = localExpression.length - 1;
        }         
      }
    }

    if ( localExpression.length > 2) {
      for (let i = 0; i < localExpression.length; i++) {
        if (localExpression[i] == '*') {
          localExpression.splice(i - 1, 3, localExpression[i - 1] * localExpression[i + 1]);
          i = 0;
        }         
      }
    }

    if ( localExpression.length > 2) {
      for (let i = 0; i < localExpression.length; i++) {
        if (localExpression[i] == '/') {
          localExpression.splice(i - 1, 3, localExpression[i - 1] / localExpression[i + 1]);
          i = 0;
        }         
      }
    }

    if ( localExpression.length > 2) {
      for (let i = 0; i < localExpression.length; i++) {
        if (localExpression[i] == '-') {
          localExpression.splice(i - 1, 3, localExpression[i - 1] - localExpression[i + 1]);
          i = 0;
        }         
      }
    }

    if ( localExpression.length > 2) {
      for (let i = 0; i < localExpression.length; i++) {
        if (localExpression[i] == '+') {
          localExpression.splice(i - 1, 3, localExpression[i - 1] + localExpression[i + 1]);
          i = 0;
        }         
      }
    }
    
    return localExpression[0];
  }

  valueOf() {
    return +this.getResult();
  }
}

module.exports = SmartCalculator;

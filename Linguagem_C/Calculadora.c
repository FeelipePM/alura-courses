#include <stdio.h>

int main() {

  printf("***************\n");
  printf("* CALCULADORA *\n");
  printf("***************\n");

  int operador;

  printf("Digite um número para utilizar a calculadora.\n");
  printf("1 - Soma, 2 - Subtração, 3 - Divisão, 4 - Multiplicação\n");
  scanf("%d", &operador);

  int n1, n2;

  printf("Digite o primeiro valor: \n");
  scanf("%d", &n1);

  printf("Digite o segundo valor: \n");
  scanf("%d", &n2);

  if(operador == 1) {
    int soma = (n1 + n2);
    printf("A soma dos numeros é: %d\n", soma);

  }

  else if (operador == 2) {
    int subtração = (n1 - n2);
    printf("A Subtração dos numeros é: %d\n", subtração);

  }

  else if (operador ==3) {
    int divisão = (n1 / n2);
    printf("A Divisão dos numeors é: %d\n", divisão);

  }

  else {
    int multiplicação = (n1 * n2);
    printf("A Multiplicação dos numeros é: %d\n", multiplicação);

  }

}

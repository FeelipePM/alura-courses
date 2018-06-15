#include <stdio.h>

int main() {

  printf("***************\n");
  printf("*** TABUADA ***\n");
  printf("***************\n");

  int tabuada;

  printf("Digite o número da tabuada você deseja saber.\n");
  printf("2, 3, 4, 5, 6, 7, 8, 9\n");
  scanf("%d", &tabuada);

  for (int multiplicador = 1; multiplicador <= 10; multiplicador++) {

      if (tabuada == 2) {
        int tabuada = (2 * multiplicador);
        printf("2 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 3) {
        int tabuada = (3 * multiplicador);
        printf("3 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 4) {
        int tabuada = (4 * multiplicador);
        printf("4 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 5) {
        int tabuada = (5 * multiplicador);
        printf("5 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 6) {
        int tabuada = (6 * multiplicador);
        printf("6 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 7) {
        int tabuada = (7 * multiplicador);
        printf("7 x %d = %d\n",multiplicador, tabuada);
      }

      else if (tabuada == 8) {
        int tabuada = (8 * multiplicador);
        printf("8 x %d = %d\n",multiplicador, tabuada);
      }

      else {
        int tabuada = (9 * multiplicador);
        printf("9 x %d = %d\n",multiplicador, tabuada);
      }

  }

}

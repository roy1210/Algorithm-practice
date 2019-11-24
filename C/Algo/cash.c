#include <cs50.h>
#include <stdio.h>
#include <math.h>

float askPositiveFloat(void)
{
  float postiveFloat;
  bool negative = true;

  while (negative)
  {
    postiveFloat = get_float("Change owed: ");
    if (postiveFloat > 0)
    {
      negative = false;
    }
  }
  return postiveFloat;
}

// tracking of coins we counted
int coinNum(void)
{
  // stores total cents
  int totalCents = round(askPositiveFloat() * 100);
  // store coin count
  int numOfCoins = 0;
  // var to store our reminders
  int remainder = 0;
  int tempNum;

  int quarter = 25;
  int dime = 10;
  int nickle = 5;
  int penny = 1;

  // if totalCents is greater than or equal to the value of order
  if (totalCents >= quarter)
  {
    remainder = totalCents % quarter;
    tempNum = totalCents - remainder;

    numOfCoins = numOfCoins + (tempNum / quarter);

    totalCents = remainder;
  }
  if (totalCents >= quarter)
  {
    remainder = totalCents % quarter;
    tempNum = totalCents - remainder;

    numOfCoins = numOfCoins + (tempNum / quarter);

    totalCents = remainder;
  }
  if (totalCents >= dime)
  {
    remainder = totalCents % dime;
    tempNum = totalCents - remainder;

    numOfCoins = numOfCoins + (tempNum / dime);

    totalCents = remainder;
  }
  if (totalCents >= nickle)
  {
    remainder = totalCents % nickle;
    tempNum = totalCents - remainder;

    numOfCoins = numOfCoins + (tempNum / nickle);

    totalCents = remainder;
  }
  if (totalCents >= penny)
  {
    remainder = totalCents % penny;
    tempNum = totalCents - remainder;

    numOfCoins = numOfCoins + (tempNum / penny);

    totalCents = remainder;
  }
  return numOfCoins;
}
int main(void)
{
  printf("%i\n", coinNum());
}

// input: 120
// >> 480
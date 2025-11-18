from main import sumar, restar, multiplicar, dividir
import pytest

def test_sumar():
    assert sumar(3, 5) == 8

def test_restar():
    assert restar(10, 6) == 4

def test_multiplicar():
    assert multiplicar(4, 3) == 12

def test_dividir():
    assert dividir(10, 2) == 5

def test_dividir_por_cero():
    try:
        dividir(5, 0)
        assert False
    except ValueError:
        assert True

from django.shortcuts import render

# Create your views here.
def store(request):
    context = {}
    return render(request, 'store/store.html', context)

def basket(request):
    context = {}
    return render(request, 'store/basket.html', context)

def checkout(request):
    context = {}
    return render(request, 'store/checkout.html', context)
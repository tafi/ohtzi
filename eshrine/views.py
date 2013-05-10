# -*- coding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime
from models import Announcement, Prayer, Definition

DATE_FMT = "%B %d, %Y"

def home(request):
    template = "eshrine/home.html"
    announcements = Announcement.objects.order_by('-date')
    ann_texts = []
    for ann in announcements:
        ann_texts.append({'date': ann.date.strftime(DATE_FMT),
                          'annoucement': ann.announcement})
    prayer_texts = []
    prayers = Prayer.objects.order_by('-date')
    for prayer in prayers:
        prayer_texts.append({'date': prayer.date.strftime(DATE_FMT),
                             'author': prayer.author,
                             'prayer': prayer.prayer
                             })
    context = {"now": datetime.now().strftime(DATE_FMT),
               "annoucements": ann_texts,
               "prayers": prayer_texts}
    return render(request, template, context)

def submit_prayer(request):
    if request.method == "POST":
        prayer = Prayer()
        raise Exception(request.POST)
#         return HttpResponse("YA");

def understand(request):
    template = "eshrine/understand.html"
    definitions = Definition.objects.all()
    words = [{"word": d.word,
              "definition": d.definition,
              "author": d.author} for d in definitions]
    context = {"words": words}
    return render(request, template, context)
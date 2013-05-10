from django.db import models
from django.forms import ModelForm

class Announcement(models.Model):
    date = models.DateTimeField()
    announcement = models.CharField(max_length=500)
    
    def __unicode__(self):
        return "%s: %s" % (self.date, self.announcement)

class Prayer(models.Model):
    author = models.CharField(max_length=100)
    date = models.DateTimeField()
    prayer = models.TextField()
    
    def __unicode__(self):
        return "On %s by %s: %s" % (self.date, self.author, self.prayer)
    
class PrayerForm(ModelForm):
    class Meta:
        model = Prayer
        fields = ['author', 'date', 'prayer']    
    
class Definition(models.Model):
    author = models.CharField(max_length=100)
    word = models.CharField(max_length=100)
    definition = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    
    def __unicode__(self):
        return self.word

from django.db import models

class Announcement(models.Model):
    date = models.DateTimeField()
    announcement = models.CharField(max_length=500)
    
    def __unicode__(self):
        return "%s: %s" % (self.date, self.announcement)

class Comment(models.Model):
    author = models.CharField(max_length=100)
    date = models.DateTimeField()
    comment = models.CharField(max_length=500)
    
    def __unicode__(self):
        return "On %s by %s: %s" % (self.date, self.author, self.comment)
    
class Definition(models.Model):
    author = models.CharField(max_length=100)
    word = models.CharField(max_length=100)
    definition = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    
    def __unicode__(self):
        return self.word

from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog_images/')

    def __str__(self):
        return self.title

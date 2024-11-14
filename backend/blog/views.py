from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class BlogPostCreateView(generics.CreateAPIView):
       queryset = BlogPost.objects.all()
       serializer_class = BlogPostSerializer
       permission_classes = [IsAuthenticated]

       def perform_create(self, serializer):
           serializer.save(author=self.request.user)

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

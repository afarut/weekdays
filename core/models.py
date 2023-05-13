from django.db import models
from core.utils import slugify


class Tag(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

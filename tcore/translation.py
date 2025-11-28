from modeltranslation.translator import register, TranslationOptions
from .models import About, Project, Setting


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('title', 'content',)

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('title', 'content',)

@register(Setting)
class SettingTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'keywords',)



from django.urls import path
from .views import CategoryView, ExporterView, ExporterDetailView, ExporterTabView

urlpatterns = [
    path('/categories', CategoryView.as_view()),
    path('/categories/<int:category_id>', CategoryView.as_view()),
    path('', ExporterView.as_view()),
    path('/<int:exporter_id>', ExporterDetailView.as_view()),
    path('/<int:exporter_id>/tab', ExporterTabView.as_view()),
]

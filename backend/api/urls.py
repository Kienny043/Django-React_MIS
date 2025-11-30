from django.urls import path, include

urlpatterns = [
    path("maintenance/", include("maintenance.urls")),
    path("requests/", include("request_system.urls")),
    path("auth/", include("accounts.urls")),
    path("location/", include("buildings.urls")),
    path("calendar/", include("calendar_system.urls")),
]

from rest_framework import generics, permissions
from .models import CalendarEvent
from .serializers import CalendarEventSerializer


class CalendarEventListCreateView(generics.ListCreateAPIView):
    serializer_class = CalendarEventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CalendarEvent.objects.filter(
            models.Q(user=user) | models.Q(is_global=True)
        ).order_by("date", "start_time")

    def perform_create(self, serializer):
        if serializer.validated_data.get("is_global"):
            serializer.save(user=None)
        else:
            serializer.save(user=self.request.user)


class CalendarEventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CalendarEventSerializer
    queryset = CalendarEvent.objects.all()
    permission_classes = [permissions.IsAuthenticated]

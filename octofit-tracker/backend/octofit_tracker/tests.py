from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class BasicModelTests(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username='testuser')
        self.assertEqual(user.username, 'testuser')

    def test_team_creation(self):
        user = User.objects.create(username='testuser')
        team = Team.objects.create(name='Test Team')
        team.members.add(user)
        self.assertIn(user, team.members.all())

    def test_activity_creation(self):
        user = User.objects.create(username='testuser')
        activity = Activity.objects.create(user=user, type='run', duration=30, calories=200, date='2024-01-01')
        self.assertEqual(activity.type, 'run')

    def test_workout_creation(self):
        user = User.objects.create(username='testuser')
        workout = Workout.objects.create(name='Pushups', description='Do 20 pushups')
        workout.suggested_for.add(user)
        self.assertIn(user, workout.suggested_for.all())

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team')
        leaderboard = Leaderboard.objects.create(team=team, score=100)
        self.assertEqual(leaderboard.score, 100)

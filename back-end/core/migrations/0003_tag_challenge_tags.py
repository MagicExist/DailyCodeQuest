# Generated manually on 2026-03-03
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_shufflechallenge_alter_achievement_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40, unique=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.AddField(
            model_name='challenge',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='challenges', to='core.tag'),
        ),
    ]

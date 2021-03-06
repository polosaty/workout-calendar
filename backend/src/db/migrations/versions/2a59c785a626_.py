"""empty message

Revision ID: 2a59c785a626
Revises:
Create Date: 2022-02-05 22:34:22.749531

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.sql import table, column

# revision identifiers, used by Alembic.
revision = '2a59c785a626'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('schedule',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rrule', sa.TEXT(), nullable=False),
    sa.Column('is_active', sa.Boolean(), server_default='false', nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    training_day_type = op.create_table('training_day_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=200), nullable=True),
    sa.Column('details', postgresql.JSONB(astext_type=sa.Text()), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('day',
    sa.Column('date', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('training_day_type_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['training_day_type_id'], ['training_day_type.id'], ondelete='RESTRICT'),
    sa.PrimaryKeyConstraint('date')
    )
    op.create_index(op.f('ix_day_training_day_type_id'), 'day', ['training_day_type_id'], unique=False)
    # ### end Alembic commands ###

    op.bulk_insert(
        training_day_type,
        [
            {'id': 1, 'name': 'Пресс', 'details': {}},
            {'id': 2, 'name': 'Время', 'details': {"subtypes": [{"id": 1, "name": "стенка"},
                                                                {"id": 2, "name": "книжка"},
                                                                {"id": 3, "name": "лодочка"}]}},
        ]
    )

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_day_training_day_type_id'), table_name='day')
    op.drop_table('day')
    op.drop_table('training_day_type')
    op.drop_table('schedule')
    # ### end Alembic commands ###

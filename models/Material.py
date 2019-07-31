# -*- coding: utf-8 -*-
from openerp import models, fields


class Test2(models.Model):
    _name = 'test_app.material'

    name = fields.Char("Material")
    count = fields.Integer(default=10)
    material_have = fields.Boolean(default=True)


# -*- coding: utf-8 -*-
from openerp import models, fields


class Inheritance1(models.Model):
    _name = 'test_app.test'

    company_name = fields.Char("Company")

    material = fields.Many2one('test_app.material', 'Material')

    # res.partner

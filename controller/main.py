# -*- coding: utf-8 -*-

try: import simplejson as json
except ImportError: import json

from openerp import http
from openerp.http import request
from PIL import Image
class MainController(http.Controller):

    @http.route('/api/material/list/', type='http', auth='public', website=True, cors='*')
    def main(self, **k):
        cr, uid, context, session = request.cr, request.uid, request.context, request.session

        material_obj_sudo = request.env['test_app.material'].sudo()

        names = []
        all_material = material_obj_sudo.search([])
        for material in all_material:
            names.append({
                'name': material.name,
                'count': material.count,
                'exist': material.material_have,
            })

        return json.dumps(names)



    @http.route('/api/material/list_old/', type='http', auth='public', website=True, cors='*')
    def main_old(self, **k):
        cr, uid, context, session = request.cr, request.uid, request.context, request.session



        material_obj_sudo = request.env['test_app.material'].sudo()

        names = []
        all_material = material_obj_sudo.search([])
        for material in all_material:
            names.append(material.name)

        return json.dumps(names)
        #
        # ctx = LanguageHelper.get_user_lang_context(logistics_request_obj_sudo)
        #
        # res = logistics_request_obj_sudo.with_context(ctx).get_logistics_request_info

        # arres = ['test',True,41]
        # SQL = ('select * from res_users_log')
        # self.env.cr.execute(SQL)
        # #r = ""
        # for row in self.env.cr.fetchall():
        #    #return row
        # #self.env['???'].browse()
        # # return json.dumps(r)
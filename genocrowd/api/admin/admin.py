"""Admin routes"""
import sys
import traceback

from flask import (Blueprint, current_app, jsonify, request, session)

from genocrowd.api.auth.login import admin_required
from genocrowd.libgenocrowd.Data import Data
from genocrowd.libgenocrowd.LocalAuth import LocalAuth


admin_bp = Blueprint('admin', __name__, url_prefix='/')


@admin_bp.route('/api/admin/getusers', methods=['GET'])
@admin_required
def get_users():
    """Get all users

    Returns
    -------
    json
        users: list of all users info
        error: True if error, else False
        errorMessage: the error message of error, else an empty string
    """
    try:
        local_auth = LocalAuth(current_app, session)
        all_users = local_auth.get_all_users()
    except Exception as e:
        traceback.print_exc(file=sys.stdout)
        return jsonify({
            'users': [],
            'error': True,
            'errorMessage': str(e)
        }), 500

    return jsonify({
        'users': all_users,
        'error': False,
        'errorMessage': ''
    })


@admin_bp.route('/api/admin/setadmin', methods=['POST'])
@admin_required
def set_admin():
    """change admin status of a user

    Returns
    -------
    json
        error: True if error, else False
        errorMessage: the error message of error, else an empty string
    """
    data = request.get_json()

    try:
        local_auth = LocalAuth(current_app, session)
        local_auth.set_admin(data['newAdmin'], data['username'])
    except Exception as e:
        traceback.print_exc(file=sys.stdout)
        return jsonify({
            'error': True,
            'errorMessage': str(e)
        }), 500

    return jsonify({
        'error': False,
        'errorMessage': ''
    })


@admin_bp.route('/api/admin/setblocked', methods=['POST'])
@admin_required
def set_blocked():
    """Change blocked status of a user

    Returns
    -------
    json
        error: True if error, else False
        errorMessage: the error message of error, else an empty string
    """
    data = request.get_json()

    try:
        local_auth = LocalAuth(current_app, session)
        local_auth.set_blocked(data['newBlocked'], data['username'])
    except Exception as e:
        traceback.print_exc(file=sys.stdout)
        return jsonify({
            'error': True,
            'errorMessage': str(e)
        }), 500

    return jsonify({
        'error': False,
        'errorMessage': ''
    })


@admin_bp.route('/api/admin/setgroup', methods=['POST'])
@admin_required
def set_group():
    local_auth = LocalAuth(current_app, session)
    data = request.get_json()
    result = local_auth.set_group(data['newNumber'])
    return result


@admin_bp.route('/api/admin/getgroups', methods=['GET'])
@admin_required
def get_groups():
    """Get all groups

    Returns
    -------
    json
        users: list of all groups info
        error: True if error, else False
        errorMessage: the error message of error, else an empty string
    """
    try:
        data_instance = Data(current_app, session)
        all_groups = data_instance.get_all_groups()
    except Exception as e:
        traceback.print_exc(file=sys.stdout)
        return jsonify({
            'groups': [],
            'error': True,
            'errorMessage': str(e)
        }), 500

    return jsonify({
        'groups': all_groups,
        'error': False,
        'errorMessage': ''
    })

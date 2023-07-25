from weecfg.extension import ExtensionInstaller

# Copyright 2023 Ron Haupt
# Distributed under the terms of the GNU Public License (GPLv3)


def loader():
    return BasicInstaller()


class BasicInstaller(ExtensionInstaller):
    def __init__(self):
        super(BasicInstaller, self).__init__(
            version="0.1.0",
            name="weewx-rtn",
            description="Renton weewx skin",
            author="Ron Haupt",
            author_email="ronh256@proton.me",
            config={
                "StdReport": {
                    "RtnReport": {
                        "skin": "weewx-rtn",
                        "enable": "true",
                    }
                }
            },
            files=[
                (
                    "bin/user",
                    [
                        "bin/user/weewx-rtn.py",
                    ],
                ),
                (
                    "skins/weewx-rtn",
                    [
                        "skins/weewx-rtn/index.html.tmpl",
                        "skins/weewx-rtn/manifest.json.tmpl",
                        "skins/weewx-rtn/skin.conf",
                        "skins/weewx-rtn/service-worker.js",
                        "skins/weewx-rtn/dist/main.css",
                        "skins/weewx-rtn/dist/main.js",
                        "skins/weewx-rtn/js/reh.js.tmpl",
                        "skins/weewx-rtn/js/index.html",
                        "skins/weewx-rtn/js/responsive-menu.js"
                        "skins/weewx-rtn/favicon.ico",
                        "skins/weewx-rtn/json/index.html",
                        "skins/weewx-rtn/json/weewx_data.json.tmpl",
                    ],
                ),
            ],
        ),

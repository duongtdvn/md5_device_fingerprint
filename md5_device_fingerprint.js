(function(window, document, JSON){
  "use strict";
  var SEP = '|', ua, opera, ie;
  /* 
   * Collect Browser & Device Data
   */
  var Collector = {
    /*
     * MD5 Checksum calculation
     */
    stringToMD5 : function (s) {/*get a MD5Hash out of a string provided*/ var hexcase = 0, chrsz = 8, cmc5 = function (x, e) {x[e >> 5] |= 0x80 << ((e) % 32); x[(((e + 64) >>> 9) << 4) + 14] = e; var a = 1732584193; var b = -271733879; var c = -1732584194; var d = 271733878; for (var i = 0; i < x.length; i += 16) {var f = a; var g = b; var h = c; var j = d; a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936); d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586); c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819); b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330); a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897); d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426); c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341); b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983); a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416); d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417); c = md5_ff(c, d, a, b, x[i + 10], 17, -42063); b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162); a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682); d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101); c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290); b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329); a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510); d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632); c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713); b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302); a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691); d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083); c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335); b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848); a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438); d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690); c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961); b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501); a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467); d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784); c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473); b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734); a = md5_hh(a, b, c, d, x[i + 5], 4, -378558); d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463); c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562); b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556); a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060); d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353); c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632); b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640); a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174); d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222); c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979); b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189); a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487); d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835); c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520); b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651); a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844); d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415); c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905); b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055); a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571); d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606); c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523); b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799); a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359); d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744); c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380); b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649); a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070); d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379); c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259); b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551); a = safe_add(a, f); b = safe_add(b, g); c = safe_add(c, h); d = safe_add(d, j) } return Array(a, b, c, d) }, md5_cmn = function (q, a, b, x, s, t) {return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b) }, md5_ff = function (a, b, c, d, x, s, t) {return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t) }, md5_gg = function (a, b, c, d, x, s, t) {return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t) }, md5_hh = function (a, b, c, d, x, s, t) {return md5_cmn(b ^ c ^ d, a, b, x, s, t) }, md5_ii = function (a, b, c, d, x, s, t) {return md5_cmn(c ^ (b | (~d)), a, b, x, s, t) }, safe_add = function (x, y) {var a = (x & 0xFFFF) + (y & 0xFFFF); var b = (x >> 16) + (y >> 16) + (a >> 16); return (b << 16) | (a & 0xFFFF) }, bit_rol = function (a, b) {return (a << b) | (a >>> (32 - b)) }, s2b = function (a) {var b = Array(); var c = (1 << chrsz) - 1; for (var i = 0; i < a.length * chrsz; i += chrsz) b[i >> 5] |= (a.charCodeAt(i / chrsz) & c) << (i % 32); return b }, b2h = function (a) {var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; var c = ""; for (var i = 0; i < a.length * 4; i++) {c += b.charAt((a[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + b.charAt((a[i >> 2] >> ((i % 4) * 8)) & 0xF) } return c; }; return b2h(cmc5(s2b(s), s.length * chrsz))},
   
    activeXDetect : function(componentClassID) {
      var componentVersion = document.body.getComponentVersion('{' + componentClassID + '}', 'ComponentID');
      return (componentVersion !== null) ? componentVersion : false;
    },

    stripIllegalChars : function(value) {
      var t = "",
          i;

      value = value.toLowerCase();
      for (i = 0; i < value.length; i++) {
        if (value.charAt(i) !== '\n' && value.charAt(i) !== '/' && value.charAt(i) !== "\\") {
          t += value.charAt(i);
        } else if (value.charAt(i) === '\n') {
          t += "n";
        }
      }
      return t;
    },

    stripFullPath : function(tempFileName, lastDir) {
      var fileName = tempFileName,
          filenameStart = fileName.lastIndexOf(lastDir),
          filenameFinish = fileName.length;

      if (filenameStart < 0) {
        filenameStart = 0;
      }

      fileName = fileName.substring(filenameStart + lastDir.length, filenameFinish);

      return fileName;
    },

    userAgent : function () {
      return window.navigator.userAgent || "unknown user agent";
    },

    display : function () {
      var screen = window.screen || screen || {};
      return JSON.stringify(screen);
    },

    software : function() {
      var i, t = "",
          isFirst = true,
          temp = "",
          lastDir = "Plugins",
          plugin, mimeType, components, ver;

      if (window.navigator.plugins.length > 0) {
        if (opera) {
          temp = "";
          lastDir = "Plugins";

          for (i = 0; i < window.navigator.plugins.length; i++) {
            plugin = window.navigator.plugins[i];
            if (isFirst === true) {
              temp += this.stripFullPath(plugin.filename, lastDir);
              isFirst = false;
            } else {
              temp += SEP + this.stripFullPath(plugin.filename, lastDir);
            }
          }
          t = this.stripIllegalChars(temp);
        } else {
          for (i = 0; i < window.navigator.plugins.length; i++) {
            plugin = window.navigator.plugins[i];
            if (isFirst === true) {
              t += plugin.filename;
              isFirst = false;
            } else {
              t += SEP + plugin.filename;
            }
          }
        }
      } else if (window.navigator.mimeTypes.length > 0) {
        for (i = 0; i < window.navigator.mimeTypes.length; i++) {
          mimeType = window.navigator.mimeTypes[i];
          if (isFirst === true) {
            t += mimeType.type;
            isFirst = false;
          } else {
            t += SEP + mimeType.type;
          }
        }
      } else if (ie) {
        components = new Array("7790769C-0471-11D2-AF11-00C04FA35D02", "89820200-ECBD-11CF-8B85-00AA005B4340", "283807B5-2C60-11D0-A31D-00AA00B92C03", "4F216970-C90C-11D1-B5C7-0000F8051515", "44BBA848-CC51-11CF-AAFA-00AA00B6015C", "9381D8F2-0288-11D0-9501-00AA00B911A5", "4F216970-C90C-11D1-B5C7-0000F8051515", "5A8D6EE0-3E18-11D0-821E-444553540000", "89820200-ECBD-11CF-8B85-00AA005B4383", "08B0E5C0-4FCB-11CF-AAA5-00401C608555", "45EA75A0-A269-11D1-B5BF-0000F8051515", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9", "22D6F312-B0F6-11D0-94AB-0080C74C7E95", "44BBA842-CC51-11CF-AAFA-00AA00B6015B", "3AF36230-A269-11D1-B5BF-0000F8051515", "44BBA840-CC51-11CF-AAFA-00AA00B6015C", "CC2A9BA0-3BDD-11D0-821E-444553540000", "08B0E5C0-4FCB-11CF-AAA5-00401C608500", "D27CDB6E-AE6D-11CF-96B8-444553540000", "2A202491-F00D-11CF-87CC-0020AFEECF20");
        document.body.addBehavior("#default#clientCaps");
        for (i = 0; i < components.length; i++) {
          ver = this.activeXDetect(components[i]);
          if (ver) {
            if (isFirst === true) {
              t += ver;
              isFirst = false;
            } else {
              t += SEP + ver;
            }
          } else {
            t += SEP + "null";
          }
        }
      }

      return t;
    },

    myDeviceHash : function () {
      return this.stringToMD5(this.userAgent() + this.display() + this.software());
    }

    // to be extended with canvas fingerprinting etc ...
    // font lists etc ...
  };
  
  // storing information in global object
  // for demo purpose
  window.fingerprint = {
    md5hash : Collector.myDeviceHash(),
    collection : {
      userAgent : Collector.userAgent(),
      display   : Collector.display()
    }
  };

}(window, document, JSON ));
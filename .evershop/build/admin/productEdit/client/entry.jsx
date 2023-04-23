
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateAdmin';
      
Area.defaultProps.components = {
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcYXV0aFxwYWdlc1xhZG1pblxhbGxcQWRtaW5Vc2VyLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcYXV0aFxwYWdlc1xhZG1pblxhbGxcQWRtaW5Vc2VyLmpzeA==',
      sortOrder: 50,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\auth\\pages\\admin\\all\\AdminUser.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMb2dvLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMb2dvLmpzeA==',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Logo.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxTZWFyY2hCb3guanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxTZWFyY2hCb3guanN4',
      sortOrder: 20,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\SearchBox.jsx')
    }
  },
  adminMenu: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcQ2F0YWxvZ01lbnVHcm91cC5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcQ2F0YWxvZ01lbnVHcm91cC5qc3g=',
      sortOrder: 20,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\all\\CatalogMenuGroup.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2hlY2tvdXRccGFnZXNcYWRtaW5cYWxsXENoZWNrb3V0TWVudUdyb3VwLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2hlY2tvdXRccGFnZXNcYWRtaW5cYWxsXENoZWNrb3V0TWVudUdyb3VwLmpzeA==',
      sortOrder: 30,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\checkout\\pages\\admin\\all\\CheckoutMenuGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxDbXNNZW51R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxDbXNNZW51R3JvdXAuanN4',
      sortOrder: 60,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\CmsMenuGroup.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxRdWlja0xpbmtzLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxRdWlja0xpbmtzLmpzeA==',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\QuickLinks.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY3VzdG9tZXJccGFnZXNcYWRtaW5cYWxsXEN1c3RvbWVyTWVudUdyb3VwLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY3VzdG9tZXJccGFnZXNcYWRtaW5cYWxsXEN1c3RvbWVyTWVudUdyb3VwLmpzeA==',
      sortOrder: 40,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\admin\\all\\CustomerMenuGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxDb3Vwb25NZW51R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxDb3Vwb25NZW51R3JvdXAuanN4',
      sortOrder: 50,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\all\\CouponMenuGroup.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU2V0dGluZ01lbnVHcm91cC5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU2V0dGluZ01lbnVHcm91cC5qc3g=',
      sortOrder: 500,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\SettingMenuGroup.jsx')
    }
  },
  quickLinks: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=',
      sortOrder: 20,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\all\\NewProductQuickLink.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxOZXdDb3Vwb25RdWlja0xpbmsuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxOZXdDb3Vwb25RdWlja0xpbmsuanN4',
      sortOrder: 30,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\all\\NewCouponQuickLink.jsx')
    }
  },
  rightSide: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxDb2xsZWN0aW9uLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxDb2xsZWN0aW9uLmpzeA==',
      sortOrder: 15,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit\\Collection.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEF0dHJpYnV0ZXMuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEF0dHJpYnV0ZXMuanN4',
      sortOrder: 30,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Attributes.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEludmVudG9yeS5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEludmVudG9yeS5qc3g=',
      sortOrder: 15,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Inventory.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFN0YXR1cy5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFN0YXR1cy5qc3g=',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Status.jsx')
    }
  },
  content: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxQcm9kdWN0RWRpdEZvcm0uanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxQcm9kdWN0RWRpdEZvcm0uanN4',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit\\ProductEditForm.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFBhZ2VIZWFkaW5nLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFBhZ2VIZWFkaW5nLmpzeA==',
      sortOrder: 5,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\PageHeading.jsx')
    }
  },
  leftSide: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxWYXJpYW50R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdFxWYXJpYW50R3JvdXAuanN4',
      sortOrder: 70,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit\\VariantGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEdlbmVyYWwuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEdlbmVyYWwuanN4',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\General.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XE1lZGlhLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XE1lZGlhLmpzeA==',
      sortOrder: 15,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Media.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFNlby5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XFNlby5qc3g=',
      sortOrder: 60,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Seo.jsx')
    }
  },
  productForm: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEZvcm1Db250ZW50LmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxwcm9kdWN0RWRpdCtwcm9kdWN0TmV3XEZvcm1Db250ZW50LmpzeA==',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\FormContent.jsx')
    }
  },
  settingPageMenu: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2hlY2tvdXRccGFnZXNcYWRtaW5cYWxsXFNoaXBwaW5nU2V0dGluZ01lbnUuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2hlY2tvdXRccGFnZXNcYWRtaW5cYWxsXFNoaXBwaW5nU2V0dGluZ01lbnUuanN4',
      sortOrder: 15,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\checkout\\pages\\admin\\all\\ShippingSettingMenu.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcUGF5bWVudFNldHRpbmdNZW51LmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcUGF5bWVudFNldHRpbmdNZW51LmpzeA==',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\PaymentSettingMenu.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU3RvcmVTZXR0aW5nTWVudS5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU3RvcmVTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 5,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\StoreSettingMenu.jsx')
    }
  },
  body: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMYXlvdXQuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMYXlvdXQuanN4',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Layout.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOb3RpZmljYXRpb24uanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOb3RpZmljYXRpb24uanN4',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Notification.jsx')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxNZXRhLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxNZXRhLmpzeA==',
      sortOrder: 5,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Meta.jsx')
    }
  },
  adminNavigation: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOYXZpZ2F0aW9uLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOYXZpZ2F0aW9uLmpzeA==',
      sortOrder: 10,
      component: require('C:\\vscode\\project-template\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Navigation.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );
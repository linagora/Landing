import React from "react";
import en from "./locales/en/index";
import fr from "./locales/fr/index";
import ru from "./locales/ru/index";
import { withRouter } from "next/router";

export const default_lang = "en";

export const locales = {
  en: en,
  fr: fr,
  ru: ru
};

export const getPreferedLang = () => {
  let locale = localStorage.getItem("locale");
  if (Object.keys(locales).indexOf(locale) >= 0) {
    return locale;
  }
  locale = (navigator.language || "en").substr(0, 2);
  if (Object.keys(locales).indexOf(locale) >= 0) {
    return locale;
  }
  return default_lang;
};

export const changePath = path => {
  path = path.replace(/\/+$/, "");
  let has_lang = path.split("/")[1];
  if (Object.keys(locales).indexOf(has_lang) >= 0) {
    //Lang is present so 404 error
    return "/en/notfound";
  } else {
    //Get default or current lang and redirect
    let chosen_default_lang = getPreferedLang();
    path = path.replace(/^\/+/, "");
    path = "/" + chosen_default_lang + "/" + path;
    path = path.replace(/\/+$/, "");
    if (path != "/" + default_lang) {
      if (path == "/" + chosen_default_lang) {
        path += "/home";
      }
      return path;
    }
  }
  return null;
};

export const i18n = {
  changeLanguage: language => {
    localStorage.setItem("locale", language);
    let path = document.location.pathname;
    let has_lang = path.split("/")[1];
    path = path.replace(new RegExp("^\\/" + has_lang + "\\/"), "");
    path = changePath(path);
    if (path) {
      document.location = path;
    }
  }
};

export const appWithTranslation = component => {
  return component;
};

export const withTranslation = (ns, options = {}) => {
  return WrappedComponent => {
    function I18nextWithTranslation({ forwardedRef, ...rest }) {
      const passDownProps = {
        ...rest,
        getLang: props => {
          let lang =
            (props && props.router && props.router.query.locale) ||
            default_lang;
          return lang;
        },
        t: (props, t, options = {}) => {
          let lang =
            (props && props.router && props.router.query.locale) ||
            default_lang;
          if (typeof ns == "object") {
            ns = ns[0];
          }
          return typeof locales[lang][ns][t] === "string" ||
            options.returnObjects
            ? locales[lang][ns][t]
            : t;
        },
        i18n: {},
        tReady: true
      };
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return React.createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.WrappedComponent = WrappedComponent;

    const forwardRef = (props, ref) =>
      React.createElement(
        I18nextWithTranslation,
        Object.assign({}, props, { forwardedRef: ref })
      );

    const component = withRouter(
      options.withRef ? React.forwardRef(forwardRef) : I18nextWithTranslation
    );

    component.getInitialProps = async () => ({
      locale: "en"
    });

    return component;
  };
};

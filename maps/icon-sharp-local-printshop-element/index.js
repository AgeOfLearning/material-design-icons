import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPrintshopElement
 * @class IconSharpLocalPrintshopElement
 * @extends {AoflElement}
 */
class IconSharpLocalPrintshopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPrintshopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-printshop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPrintshopElement.is, IconSharpLocalPrintshopElement);

export default IconSharpLocalPrintshopElement;

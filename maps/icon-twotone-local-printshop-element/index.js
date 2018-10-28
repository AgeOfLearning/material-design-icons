import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPrintshopElement
 * @class IconTwotoneLocalPrintshopElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPrintshopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPrintshopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-printshop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPrintshopElement.is, IconTwotoneLocalPrintshopElement);

export default IconTwotoneLocalPrintshopElement;

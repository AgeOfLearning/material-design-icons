import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPrintshopElement
 * @class IconOutlineLocalPrintshopElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPrintshopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPrintshopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-printshop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPrintshopElement.is, IconOutlineLocalPrintshopElement);

export default IconOutlineLocalPrintshopElement;

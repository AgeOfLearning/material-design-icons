import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPrintshopElement
 * @class IconBaselineLocalPrintshopElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPrintshopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPrintshopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-printshop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPrintshopElement.is, IconBaselineLocalPrintshopElement);

export default IconBaselineLocalPrintshopElement;

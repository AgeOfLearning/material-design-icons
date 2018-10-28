import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPrintshopElement
 * @class IconRoundLocalPrintshopElement
 * @extends {AoflElement}
 */
class IconRoundLocalPrintshopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPrintshopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-printshop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPrintshopElement.is, IconRoundLocalPrintshopElement);

export default IconRoundLocalPrintshopElement;

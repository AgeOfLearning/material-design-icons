import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPrintElement
 * @class IconRoundPrintElement
 * @extends {AoflElement}
 */
class IconRoundPrintElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPrintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-print';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPrintElement.is, IconRoundPrintElement);

export default IconRoundPrintElement;

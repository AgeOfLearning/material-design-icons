import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePrintElement
 * @class IconTwotonePrintElement
 * @extends {AoflElement}
 */
class IconTwotonePrintElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePrintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-print';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePrintElement.is, IconTwotonePrintElement);

export default IconTwotonePrintElement;

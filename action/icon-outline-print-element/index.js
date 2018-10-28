import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePrintElement
 * @class IconOutlinePrintElement
 * @extends {AoflElement}
 */
class IconOutlinePrintElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePrintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-print';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePrintElement.is, IconOutlinePrintElement);

export default IconOutlinePrintElement;

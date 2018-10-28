import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePrintElement
 * @class IconBaselinePrintElement
 * @extends {AoflElement}
 */
class IconBaselinePrintElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePrintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-print';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePrintElement.is, IconBaselinePrintElement);

export default IconBaselinePrintElement;

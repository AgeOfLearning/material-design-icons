import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWbAutoElement
 * @class IconBaselineWbAutoElement
 * @extends {AoflElement}
 */
class IconBaselineWbAutoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWbAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wb-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWbAutoElement.is, IconBaselineWbAutoElement);

export default IconBaselineWbAutoElement;

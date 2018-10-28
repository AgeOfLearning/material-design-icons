import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHotTubElement
 * @class IconOutlineHotTubElement
 * @extends {AoflElement}
 */
class IconOutlineHotTubElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHotTubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hot-tub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHotTubElement.is, IconOutlineHotTubElement);

export default IconOutlineHotTubElement;

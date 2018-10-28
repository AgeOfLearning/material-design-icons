import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHotTubElement
 * @class IconTwotoneHotTubElement
 * @extends {AoflElement}
 */
class IconTwotoneHotTubElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHotTubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hot-tub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHotTubElement.is, IconTwotoneHotTubElement);

export default IconTwotoneHotTubElement;

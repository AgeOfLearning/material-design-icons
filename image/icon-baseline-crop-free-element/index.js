import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropFreeElement
 * @class IconBaselineCropFreeElement
 * @extends {AoflElement}
 */
class IconBaselineCropFreeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropFreeElement.is, IconBaselineCropFreeElement);

export default IconBaselineCropFreeElement;

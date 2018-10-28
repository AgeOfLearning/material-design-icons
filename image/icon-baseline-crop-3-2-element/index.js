import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCrop32Element
 * @class IconBaselineCrop32Element
 * @extends {AoflElement}
 */
class IconBaselineCrop32Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineCrop32Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-3-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCrop32Element.is, IconBaselineCrop32Element);

export default IconBaselineCrop32Element;

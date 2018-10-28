import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCrop32Element
 * @class IconOutlineCrop32Element
 * @extends {AoflElement}
 */
class IconOutlineCrop32Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineCrop32Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-3-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCrop32Element.is, IconOutlineCrop32Element);

export default IconOutlineCrop32Element;

import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCrop54Element
 * @class IconOutlineCrop54Element
 * @extends {AoflElement}
 */
class IconOutlineCrop54Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineCrop54Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-5-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCrop54Element.is, IconOutlineCrop54Element);

export default IconOutlineCrop54Element;

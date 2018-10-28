import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCrop75Element
 * @class IconOutlineCrop75Element
 * @extends {AoflElement}
 */
class IconOutlineCrop75Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineCrop75Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-7-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCrop75Element.is, IconOutlineCrop75Element);

export default IconOutlineCrop75Element;

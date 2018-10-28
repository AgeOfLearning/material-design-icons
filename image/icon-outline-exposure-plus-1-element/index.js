import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposurePlus1Element
 * @class IconOutlineExposurePlus1Element
 * @extends {AoflElement}
 */
class IconOutlineExposurePlus1Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposurePlus1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure-plus-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposurePlus1Element.is, IconOutlineExposurePlus1Element);

export default IconOutlineExposurePlus1Element;

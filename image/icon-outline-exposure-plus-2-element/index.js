import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExposurePlus2Element
 * @class IconOutlineExposurePlus2Element
 * @extends {AoflElement}
 */
class IconOutlineExposurePlus2Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineExposurePlus2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exposure-plus-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExposurePlus2Element.is, IconOutlineExposurePlus2Element);

export default IconOutlineExposurePlus2Element;

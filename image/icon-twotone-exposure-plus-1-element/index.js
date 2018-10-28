import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposurePlus1Element
 * @class IconTwotoneExposurePlus1Element
 * @extends {AoflElement}
 */
class IconTwotoneExposurePlus1Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposurePlus1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure-plus-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposurePlus1Element.is, IconTwotoneExposurePlus1Element);

export default IconTwotoneExposurePlus1Element;

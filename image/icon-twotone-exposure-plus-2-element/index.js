import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExposurePlus2Element
 * @class IconTwotoneExposurePlus2Element
 * @extends {AoflElement}
 */
class IconTwotoneExposurePlus2Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExposurePlus2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exposure-plus-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExposurePlus2Element.is, IconTwotoneExposurePlus2Element);

export default IconTwotoneExposurePlus2Element;

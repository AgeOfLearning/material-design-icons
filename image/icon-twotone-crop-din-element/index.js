import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropDinElement
 * @class IconTwotoneCropDinElement
 * @extends {AoflElement}
 */
class IconTwotoneCropDinElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropDinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-din';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropDinElement.is, IconTwotoneCropDinElement);

export default IconTwotoneCropDinElement;

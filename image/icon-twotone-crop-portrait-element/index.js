import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropPortraitElement
 * @class IconTwotoneCropPortraitElement
 * @extends {AoflElement}
 */
class IconTwotoneCropPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropPortraitElement.is, IconTwotoneCropPortraitElement);

export default IconTwotoneCropPortraitElement;

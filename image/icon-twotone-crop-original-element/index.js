import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropOriginalElement
 * @class IconTwotoneCropOriginalElement
 * @extends {AoflElement}
 */
class IconTwotoneCropOriginalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropOriginalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-original';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropOriginalElement.is, IconTwotoneCropOriginalElement);

export default IconTwotoneCropOriginalElement;

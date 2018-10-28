import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropRotateElement
 * @class IconTwotoneCropRotateElement
 * @extends {AoflElement}
 */
class IconTwotoneCropRotateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropRotateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-rotate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropRotateElement.is, IconTwotoneCropRotateElement);

export default IconTwotoneCropRotateElement;

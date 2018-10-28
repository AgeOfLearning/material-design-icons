import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropElement
 * @class IconTwotoneCropElement
 * @extends {AoflElement}
 */
class IconTwotoneCropElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropElement.is, IconTwotoneCropElement);

export default IconTwotoneCropElement;

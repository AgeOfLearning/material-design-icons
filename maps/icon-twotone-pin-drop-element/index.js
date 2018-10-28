import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePinDropElement
 * @class IconTwotonePinDropElement
 * @extends {AoflElement}
 */
class IconTwotonePinDropElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePinDropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pin-drop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePinDropElement.is, IconTwotonePinDropElement);

export default IconTwotonePinDropElement;

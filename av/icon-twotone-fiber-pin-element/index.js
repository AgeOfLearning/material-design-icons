import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFiberPinElement
 * @class IconTwotoneFiberPinElement
 * @extends {AoflElement}
 */
class IconTwotoneFiberPinElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFiberPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fiber-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFiberPinElement.is, IconTwotoneFiberPinElement);

export default IconTwotoneFiberPinElement;

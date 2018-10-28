import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFiberPinElement
 * @class IconOutlineFiberPinElement
 * @extends {AoflElement}
 */
class IconOutlineFiberPinElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFiberPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fiber-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFiberPinElement.is, IconOutlineFiberPinElement);

export default IconOutlineFiberPinElement;

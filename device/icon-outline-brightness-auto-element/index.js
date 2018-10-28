import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightnessAutoElement
 * @class IconOutlineBrightnessAutoElement
 * @extends {AoflElement}
 */
class IconOutlineBrightnessAutoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightnessAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightnessAutoElement.is, IconOutlineBrightnessAutoElement);

export default IconOutlineBrightnessAutoElement;

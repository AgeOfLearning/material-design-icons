import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightnessLowElement
 * @class IconOutlineBrightnessLowElement
 * @extends {AoflElement}
 */
class IconOutlineBrightnessLowElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightnessLowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-low';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightnessLowElement.is, IconOutlineBrightnessLowElement);

export default IconOutlineBrightnessLowElement;

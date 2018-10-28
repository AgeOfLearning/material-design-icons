import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightnessHighElement
 * @class IconOutlineBrightnessHighElement
 * @extends {AoflElement}
 */
class IconOutlineBrightnessHighElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightnessHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightnessHighElement.is, IconOutlineBrightnessHighElement);

export default IconOutlineBrightnessHighElement;

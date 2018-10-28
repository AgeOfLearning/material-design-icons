import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightnessAutoElement
 * @class IconSharpBrightnessAutoElement
 * @extends {AoflElement}
 */
class IconSharpBrightnessAutoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightnessAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightnessAutoElement.is, IconSharpBrightnessAutoElement);

export default IconSharpBrightnessAutoElement;

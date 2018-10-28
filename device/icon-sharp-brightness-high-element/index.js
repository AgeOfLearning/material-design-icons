import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightnessHighElement
 * @class IconSharpBrightnessHighElement
 * @extends {AoflElement}
 */
class IconSharpBrightnessHighElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightnessHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightnessHighElement.is, IconSharpBrightnessHighElement);

export default IconSharpBrightnessHighElement;

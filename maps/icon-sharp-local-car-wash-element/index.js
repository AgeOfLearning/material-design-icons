import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalCarWashElement
 * @class IconSharpLocalCarWashElement
 * @extends {AoflElement}
 */
class IconSharpLocalCarWashElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalCarWashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-car-wash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalCarWashElement.is, IconSharpLocalCarWashElement);

export default IconSharpLocalCarWashElement;

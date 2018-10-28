import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFastfoodElement
 * @class IconSharpFastfoodElement
 * @extends {AoflElement}
 */
class IconSharpFastfoodElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFastfoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fastfood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFastfoodElement.is, IconSharpFastfoodElement);

export default IconSharpFastfoodElement;

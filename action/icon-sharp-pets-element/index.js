import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPetsElement
 * @class IconSharpPetsElement
 * @extends {AoflElement}
 */
class IconSharpPetsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPetsElement.is, IconSharpPetsElement);

export default IconSharpPetsElement;

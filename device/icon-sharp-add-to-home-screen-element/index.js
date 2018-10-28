import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddToHomeScreenElement
 * @class IconSharpAddToHomeScreenElement
 * @extends {AoflElement}
 */
class IconSharpAddToHomeScreenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddToHomeScreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-to-home-screen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddToHomeScreenElement.is, IconSharpAddToHomeScreenElement);

export default IconSharpAddToHomeScreenElement;

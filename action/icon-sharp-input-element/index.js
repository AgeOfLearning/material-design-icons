import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInputElement
 * @class IconSharpInputElement
 * @extends {AoflElement}
 */
class IconSharpInputElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInputElement.is, IconSharpInputElement);

export default IconSharpInputElement;

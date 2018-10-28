import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGridOnElement
 * @class IconSharpGridOnElement
 * @extends {AoflElement}
 */
class IconSharpGridOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGridOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-grid-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGridOnElement.is, IconSharpGridOnElement);

export default IconSharpGridOnElement;

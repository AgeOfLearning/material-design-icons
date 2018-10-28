import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHomeElement
 * @class IconSharpHomeElement
 * @extends {AoflElement}
 */
class IconSharpHomeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHomeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-home';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHomeElement.is, IconSharpHomeElement);

export default IconSharpHomeElement;

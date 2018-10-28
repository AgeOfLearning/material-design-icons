import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHttpElement
 * @class IconSharpHttpElement
 * @extends {AoflElement}
 */
class IconSharpHttpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHttpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-http';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHttpElement.is, IconSharpHttpElement);

export default IconSharpHttpElement;

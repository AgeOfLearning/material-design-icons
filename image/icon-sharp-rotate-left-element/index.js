import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRotateLeftElement
 * @class IconSharpRotateLeftElement
 * @extends {AoflElement}
 */
class IconSharpRotateLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRotateLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rotate-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRotateLeftElement.is, IconSharpRotateLeftElement);

export default IconSharpRotateLeftElement;

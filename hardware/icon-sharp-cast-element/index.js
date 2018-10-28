import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCastElement
 * @class IconSharpCastElement
 * @extends {AoflElement}
 */
class IconSharpCastElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCastElement.is, IconSharpCastElement);

export default IconSharpCastElement;

import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCastConnectedElement
 * @class IconSharpCastConnectedElement
 * @extends {AoflElement}
 */
class IconSharpCastConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCastConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cast-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCastConnectedElement.is, IconSharpCastConnectedElement);

export default IconSharpCastConnectedElement;

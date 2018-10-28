import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpIsoElement
 * @class IconSharpIsoElement
 * @extends {AoflElement}
 */
class IconSharpIsoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpIsoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-iso';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpIsoElement.is, IconSharpIsoElement);

export default IconSharpIsoElement;

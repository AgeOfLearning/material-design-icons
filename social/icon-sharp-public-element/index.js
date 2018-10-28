import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPublicElement
 * @class IconSharpPublicElement
 * @extends {AoflElement}
 */
class IconSharpPublicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPublicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-public';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPublicElement.is, IconSharpPublicElement);

export default IconSharpPublicElement;

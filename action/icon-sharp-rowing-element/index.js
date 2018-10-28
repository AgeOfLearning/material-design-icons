import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRowingElement
 * @class IconSharpRowingElement
 * @extends {AoflElement}
 */
class IconSharpRowingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRowingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rowing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRowingElement.is, IconSharpRowingElement);

export default IconSharpRowingElement;

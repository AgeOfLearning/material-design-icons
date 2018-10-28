import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExplicitElement
 * @class IconSharpExplicitElement
 * @extends {AoflElement}
 */
class IconSharpExplicitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExplicitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-explicit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExplicitElement.is, IconSharpExplicitElement);

export default IconSharpExplicitElement;

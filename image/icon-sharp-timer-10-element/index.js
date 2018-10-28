import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimer10Element
 * @class IconSharpTimer10Element
 * @extends {AoflElement}
 */
class IconSharpTimer10Element extends AoflElement {
  /**
   * Creates an instance of IconSharpTimer10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timer-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimer10Element.is, IconSharpTimer10Element);

export default IconSharpTimer10Element;

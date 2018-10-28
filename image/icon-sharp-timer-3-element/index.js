import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimer3Element
 * @class IconSharpTimer3Element
 * @extends {AoflElement}
 */
class IconSharpTimer3Element extends AoflElement {
  /**
   * Creates an instance of IconSharpTimer3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timer-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimer3Element.is, IconSharpTimer3Element);

export default IconSharpTimer3Element;

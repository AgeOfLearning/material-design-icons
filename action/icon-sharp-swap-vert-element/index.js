import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwapVertElement
 * @class IconSharpSwapVertElement
 * @extends {AoflElement}
 */
class IconSharpSwapVertElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwapVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-swap-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwapVertElement.is, IconSharpSwapVertElement);

export default IconSharpSwapVertElement;

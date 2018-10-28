import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwapVertElement
 * @class IconOutlineSwapVertElement
 * @extends {AoflElement}
 */
class IconOutlineSwapVertElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwapVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-swap-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwapVertElement.is, IconOutlineSwapVertElement);

export default IconOutlineSwapVertElement;

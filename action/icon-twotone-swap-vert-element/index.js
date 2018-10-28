import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwapVertElement
 * @class IconTwotoneSwapVertElement
 * @extends {AoflElement}
 */
class IconTwotoneSwapVertElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwapVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-swap-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwapVertElement.is, IconTwotoneSwapVertElement);

export default IconTwotoneSwapVertElement;

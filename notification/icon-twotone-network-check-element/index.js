import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNetworkCheckElement
 * @class IconTwotoneNetworkCheckElement
 * @extends {AoflElement}
 */
class IconTwotoneNetworkCheckElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNetworkCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-network-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNetworkCheckElement.is, IconTwotoneNetworkCheckElement);

export default IconTwotoneNetworkCheckElement;

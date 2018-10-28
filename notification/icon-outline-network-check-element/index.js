import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNetworkCheckElement
 * @class IconOutlineNetworkCheckElement
 * @extends {AoflElement}
 */
class IconOutlineNetworkCheckElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNetworkCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-network-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNetworkCheckElement.is, IconOutlineNetworkCheckElement);

export default IconOutlineNetworkCheckElement;

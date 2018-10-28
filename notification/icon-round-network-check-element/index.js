import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNetworkCheckElement
 * @class IconRoundNetworkCheckElement
 * @extends {AoflElement}
 */
class IconRoundNetworkCheckElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNetworkCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-network-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNetworkCheckElement.is, IconRoundNetworkCheckElement);

export default IconRoundNetworkCheckElement;

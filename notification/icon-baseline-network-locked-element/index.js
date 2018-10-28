import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNetworkLockedElement
 * @class IconBaselineNetworkLockedElement
 * @extends {AoflElement}
 */
class IconBaselineNetworkLockedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNetworkLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-network-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNetworkLockedElement.is, IconBaselineNetworkLockedElement);

export default IconBaselineNetworkLockedElement;

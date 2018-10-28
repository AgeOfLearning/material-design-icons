import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNetworkCheckElement
 * @class IconBaselineNetworkCheckElement
 * @extends {AoflElement}
 */
class IconBaselineNetworkCheckElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNetworkCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-network-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNetworkCheckElement.is, IconBaselineNetworkCheckElement);

export default IconBaselineNetworkCheckElement;

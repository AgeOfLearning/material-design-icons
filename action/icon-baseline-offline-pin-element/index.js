import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOfflinePinElement
 * @class IconBaselineOfflinePinElement
 * @extends {AoflElement}
 */
class IconBaselineOfflinePinElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOfflinePinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-offline-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOfflinePinElement.is, IconBaselineOfflinePinElement);

export default IconBaselineOfflinePinElement;

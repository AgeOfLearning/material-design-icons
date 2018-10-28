import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOfflineBoltElement
 * @class IconBaselineOfflineBoltElement
 * @extends {AoflElement}
 */
class IconBaselineOfflineBoltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOfflineBoltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-offline-bolt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOfflineBoltElement.is, IconBaselineOfflineBoltElement);

export default IconBaselineOfflineBoltElement;

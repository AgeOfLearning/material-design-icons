import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStoreElement
 * @class IconBaselineStoreElement
 * @extends {AoflElement}
 */
class IconBaselineStoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStoreElement.is, IconBaselineStoreElement);

export default IconBaselineStoreElement;

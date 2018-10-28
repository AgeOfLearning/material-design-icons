import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalCafeElement
 * @class IconBaselineLocalCafeElement
 * @extends {AoflElement}
 */
class IconBaselineLocalCafeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalCafeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-cafe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalCafeElement.is, IconBaselineLocalCafeElement);

export default IconBaselineLocalCafeElement;

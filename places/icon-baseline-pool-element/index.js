import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePoolElement
 * @class IconBaselinePoolElement
 * @extends {AoflElement}
 */
class IconBaselinePoolElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePoolElement.is, IconBaselinePoolElement);

export default IconBaselinePoolElement;

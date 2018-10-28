import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMyLocationElement
 * @class IconBaselineMyLocationElement
 * @extends {AoflElement}
 */
class IconBaselineMyLocationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMyLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-my-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMyLocationElement.is, IconBaselineMyLocationElement);

export default IconBaselineMyLocationElement;

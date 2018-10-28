import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGpsFixedElement
 * @class IconBaselineGpsFixedElement
 * @extends {AoflElement}
 */
class IconBaselineGpsFixedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGpsFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gps-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGpsFixedElement.is, IconBaselineGpsFixedElement);

export default IconBaselineGpsFixedElement;

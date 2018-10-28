import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGpsOffElement
 * @class IconBaselineGpsOffElement
 * @extends {AoflElement}
 */
class IconBaselineGpsOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGpsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gps-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGpsOffElement.is, IconBaselineGpsOffElement);

export default IconBaselineGpsOffElement;

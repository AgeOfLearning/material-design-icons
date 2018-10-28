import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddLocationElement
 * @class IconBaselineAddLocationElement
 * @extends {AoflElement}
 */
class IconBaselineAddLocationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddLocationElement.is, IconBaselineAddLocationElement);

export default IconBaselineAddLocationElement;

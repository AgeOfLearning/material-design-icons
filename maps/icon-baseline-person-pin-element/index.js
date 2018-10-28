import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonPinElement
 * @class IconBaselinePersonPinElement
 * @extends {AoflElement}
 */
class IconBaselinePersonPinElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonPinElement.is, IconBaselinePersonPinElement);

export default IconBaselinePersonPinElement;

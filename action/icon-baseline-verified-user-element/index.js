import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVerifiedUserElement
 * @class IconBaselineVerifiedUserElement
 * @extends {AoflElement}
 */
class IconBaselineVerifiedUserElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVerifiedUserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-verified-user';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVerifiedUserElement.is, IconBaselineVerifiedUserElement);

export default IconBaselineVerifiedUserElement;

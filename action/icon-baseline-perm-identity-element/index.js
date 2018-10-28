import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermIdentityElement
 * @class IconBaselinePermIdentityElement
 * @extends {AoflElement}
 */
class IconBaselinePermIdentityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermIdentityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-identity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermIdentityElement.is, IconBaselinePermIdentityElement);

export default IconBaselinePermIdentityElement;

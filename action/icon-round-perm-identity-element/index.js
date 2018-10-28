import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermIdentityElement
 * @class IconRoundPermIdentityElement
 * @extends {AoflElement}
 */
class IconRoundPermIdentityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermIdentityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-identity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermIdentityElement.is, IconRoundPermIdentityElement);

export default IconRoundPermIdentityElement;

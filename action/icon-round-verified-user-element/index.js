import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVerifiedUserElement
 * @class IconRoundVerifiedUserElement
 * @extends {AoflElement}
 */
class IconRoundVerifiedUserElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVerifiedUserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-verified-user';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVerifiedUserElement.is, IconRoundVerifiedUserElement);

export default IconRoundVerifiedUserElement;

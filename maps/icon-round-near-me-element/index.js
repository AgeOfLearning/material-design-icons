import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNearMeElement
 * @class IconRoundNearMeElement
 * @extends {AoflElement}
 */
class IconRoundNearMeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNearMeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-near-me';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNearMeElement.is, IconRoundNearMeElement);

export default IconRoundNearMeElement;

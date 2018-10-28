import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNatureElement
 * @class IconRoundNatureElement
 * @extends {AoflElement}
 */
class IconRoundNatureElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNatureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-nature';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNatureElement.is, IconRoundNatureElement);

export default IconRoundNatureElement;

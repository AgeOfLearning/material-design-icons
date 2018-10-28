import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEjectElement
 * @class IconRoundEjectElement
 * @extends {AoflElement}
 */
class IconRoundEjectElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-eject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEjectElement.is, IconRoundEjectElement);

export default IconRoundEjectElement;

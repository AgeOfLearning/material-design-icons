import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHowToRegElement
 * @class IconRoundHowToRegElement
 * @extends {AoflElement}
 */
class IconRoundHowToRegElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHowToRegElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-how-to-reg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHowToRegElement.is, IconRoundHowToRegElement);

export default IconRoundHowToRegElement;

import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooksTwoElement
 * @class IconRoundLooksTwoElement
 * @extends {AoflElement}
 */
class IconRoundLooksTwoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLooksTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooksTwoElement.is, IconRoundLooksTwoElement);

export default IconRoundLooksTwoElement;
